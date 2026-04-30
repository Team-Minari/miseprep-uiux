import { useCallback, useState } from "react";
import { Check, Link, Mail, Users, X } from "lucide-react";
import type { ParticipantResponse } from "../../types/cart";
import { useAuthStore } from "../../store/auth/useAuthStore";
import { useCartDetail } from "../../hooks/cart/useCart";
import {
	useKickParticipant,
	useTransferOwnership,
} from "../../hooks/cart/useCartMutation";

interface SharedCartPanelProps {
	cartId: number;
	shareLink: string;
	participants: ParticipantResponse[];
}

export default function SharedCartPanel({
	cartId,
	shareLink,
	participants,
}: SharedCartPanelProps) {
	const [linkCopied, setLinkCopied] = useState(false);
	const [inviteEmail, setInviteEmail] = useState("");
	const [invitedEmails, setInvitedEmails] = useState<string[]>([]);
	const [emailError, setEmailError] = useState("");

	const currentUserId = useAuthStore((s) => s.user?.id);
	const { data: cart } = useCartDetail(cartId);
	const isCurrentUserOwner = cart?.owner_id === currentUserId;
	const kickMutation = useKickParticipant();
	const transferMutation = useTransferOwnership();

	const handleCopyLink = useCallback(async () => {
		try {
			await navigator.clipboard.writeText(shareLink);
			setLinkCopied(true);
			setTimeout(() => setLinkCopied(false), 2000);
		} catch {
			const el = document.createElement("input");
			el.value = shareLink;
			document.body.appendChild(el);
			el.select();
			document.execCommand("copy");
			document.body.removeChild(el);
			setLinkCopied(true);
			setTimeout(() => setLinkCopied(false), 2000);
		}
	}, [shareLink]);

	const handleInviteEmail = () => {
		const email = inviteEmail.trim();
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setEmailError("올바른 이메일 형식을 입력해주세요.");
			return;
		}
		if (invitedEmails.includes(email)) {
			setEmailError("이미 초대된 이메일입니다.");
			return;
		}
		setInvitedEmails((prev) => [...prev, email]);
		setInviteEmail("");
		setEmailError("");
	};

	const handleRemoveInvitedEmail = (email: string) => {
		setInvitedEmails((prev) =>
			prev.filter((currentEmail) => currentEmail !== email)
		);
	};

	const handleTransferOwnership = (participantMemberId: number) => {
		const confirmed = window.confirm("소유권을 이전하시겠어요?");
		if (!confirmed) return;
		transferMutation.mutate({
			cartId,
			body: { new_owner_id: participantMemberId },
		});
	};

	const handleRemoveParticipant = (participantMemberId: number) => {
		const confirmed = window.confirm("이 참여자를 강퇴하시겠어요?");
		if (!confirmed) return;
		kickMutation.mutate({ cartId, targetMemberId: participantMemberId });
	};

	return (
		<div className="flex flex-col gap-6 rounded-2xl border border-[#EDE9E0] bg-white px-6 py-6 shadow-sm">
			<div className="flex items-center justify-between">
				<h2 className="text-base font-semibold text-gray-900">멤버 관리</h2>
				<span className="flex items-center gap-1 text-sm text-gray-500">
					<Users className="h-4 w-4" />
					{participants.length}명
				</span>
			</div>

			<div className="flex flex-col gap-3">
				<p className="text-xs font-medium uppercase tracking-wide text-gray-500">
					참여자 목록
				</p>
				<div className="flex flex-col gap-3">
					{participants.map((participant) => {
						const isOwner = participant.member_id === cart?.owner_id;
						const initial =
							participant.username?.charAt(0)?.toUpperCase() ?? "?";

						return (
							<div
								key={participant.member_id}
								className="flex items-center justify-between rounded-xl bg-[#FAF8F3] px-4 py-3">
								<div className="flex items-center gap-3">
									{participant.profile_image_url ? (
										<img
											src={participant.profile_image_url}
											alt={participant.username}
											className="h-10 w-10 rounded-full object-cover"
										/>
									) : (
										<span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0E6D6] font-semibold text-[#7A6E5A]">
											{initial}
										</span>
									)}
									<div>
										<p className="text-sm font-semibold text-gray-900">
											{participant.username}
										</p>
									</div>
								</div>
								<div className="relative">
									{isOwner ? (
										<span className="rounded-full bg-white px-2 py-1 text-xs font-medium text-gray-600">
											소유자
										</span>
									) : isCurrentUserOwner ? (
										<div className="flex gap-1">
											<button
												type="button"
												onClick={() =>
													handleTransferOwnership(participant.member_id)
												}
												className="rounded-lg px-2 py-1 text-xs font-medium text-gray-700 transition-colors hover:bg-[#F7F3E9]">
												소유자 넘기기
											</button>
											<button
												type="button"
												onClick={() =>
													handleRemoveParticipant(participant.member_id)
												}
												className="rounded-lg px-2 py-1 text-xs font-medium text-red-500 transition-colors hover:bg-red-50">
												강퇴
											</button>
										</div>
									) : (
										<span className="rounded-full bg-white px-2 py-1 text-xs font-medium text-gray-600">
											참여자
										</span>
									)}
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<div className="border-t border-[#F0EBE0] pt-6">
				<div className="flex flex-col gap-5">
					<div className="flex flex-col gap-2">
						<p className="text-xs font-medium uppercase tracking-wide text-gray-500">
							링크로 초대
						</p>
						<div className="flex items-center gap-2 rounded-xl bg-[#F7F3E9] px-3 py-2">
							<Link className="h-3.5 w-3.5 shrink-0 text-gray-400" />
							<span className="flex-1 truncate text-xs text-gray-500">
								{shareLink}
							</span>
						</div>
						<button
							onClick={handleCopyLink}
							className={`flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-medium transition-all ${
								linkCopied
									? "border border-green-200 bg-green-50 text-green-700"
									: "border border-[#EDE9E0] bg-[#F7F3E9] text-gray-700 hover:bg-[#F3EEE0]"
							}`}>
							{linkCopied ? (
								<>
									<Check className="h-4 w-4" />
									링크 복사됨
								</>
							) : (
								<>
									<Link className="h-4 w-4" />
									링크 복사
								</>
							)}
						</button>
					</div>

					<div className="flex flex-col gap-2">
						<p className="text-xs font-medium uppercase tracking-wide text-gray-500">
							이메일로 초대
						</p>
						<div className="flex gap-2">
							<input
								type="email"
								value={inviteEmail}
								onChange={(e) => {
									setInviteEmail(e.target.value);
									setEmailError("");
								}}
								onKeyDown={(e) => e.key === "Enter" && handleInviteEmail()}
								placeholder="example@email.com"
								className="min-w-0 flex-1 rounded-lg border border-[#D9CEBC] px-3 py-2 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#D9CEBC]"
							/>
							<button
								onClick={handleInviteEmail}
								className="rounded-lg border border-[#D9CEBC] bg-[#F7F3E9] px-3 py-2 transition-colors hover:bg-[#F3EEE0]">
								<Mail className="h-4 w-4 text-gray-600" />
							</button>
						</div>

						{emailError && <p className="text-xs text-red-500">{emailError}</p>}

						{invitedEmails.length > 0 && (
							<div className="mt-1 flex flex-col gap-1.5">
								{invitedEmails.map((email) => (
									<div
										key={email}
										className="flex items-center justify-between rounded-lg bg-[#F7F3E9] px-3 py-1.5">
										<span className="truncate text-xs text-gray-700">
											{email}
										</span>
										<button
											onClick={() => handleRemoveInvitedEmail(email)}
											className="ml-2 shrink-0 text-gray-400 transition-colors hover:text-red-500">
											<X className="h-3.5 w-3.5" />
										</button>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
