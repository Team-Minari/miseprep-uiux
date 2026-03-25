import { useCallback, useEffect, useRef, useState } from "react";
import { Check, Link, Mail, Users, X } from "lucide-react";
import type { CartParticipant } from "../../mock/cartData";
import {
	useCurrentUserEmail,
	useRemoveSharedCartParticipant,
	useTransferSharedCartOwnership,
} from "../../store/useCartStore";

interface SharedCartPanelProps {
	cartId: number;
	shareLink: string;
	participants: CartParticipant[];
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
	const [activeParticipantId, setActiveParticipantId] = useState<number | null>(
		null
	);
	const menuRef = useRef<HTMLDivElement | null>(null);
	const currentUserEmail = useCurrentUserEmail();
	const transferSharedCartOwnership = useTransferSharedCartOwnership();
	const removeSharedCartParticipant = useRemoveSharedCartParticipant();

	const currentParticipant = participants.find(
		(participant) => participant.email === currentUserEmail
	);
	const isCurrentUserOwner = currentParticipant?.role === "owner";

	useEffect(() => {
		const handlePointerDown = (event: MouseEvent) => {
			if (!menuRef.current?.contains(event.target as Node)) {
				setActiveParticipantId(null);
			}
		};

		document.addEventListener("mousedown", handlePointerDown);
		return () => document.removeEventListener("mousedown", handlePointerDown);
	}, []);

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

	const handleTransferOwnership = (participantId: number) => {
		transferSharedCartOwnership(cartId, participantId);
		setActiveParticipantId(null);
	};

	const handleRemoveParticipant = (participantId: number) => {
		removeSharedCartParticipant(cartId, participantId);
		setActiveParticipantId(null);
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
				<div ref={menuRef} className="flex flex-col gap-3">
					{participants.map((participant) => (
						<div
							key={participant.id}
							className="flex items-center justify-between rounded-xl bg-[#FAF8F3] px-4 py-3">
							<div className="flex items-center gap-3">
								<span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0E6D6] font-semibold text-[#7A6E5A]">
									{participant.avatar}
								</span>
								<div>
									<p className="text-sm font-semibold text-gray-900">
										{participant.name}
									</p>
									<p className="text-xs text-gray-500">{participant.email}</p>
								</div>
							</div>
							<div className="relative">
								{participant.role === "owner" ? (
									<span className="rounded-full bg-white px-2 py-1 text-xs font-medium text-gray-600">
										소유자
									</span>
								) : isCurrentUserOwner ? (
									<>
										<button
											type="button"
											onClick={() =>
												setActiveParticipantId((currentId) =>
													currentId === participant.id ? null : participant.id
												)
											}
											className="rounded-full bg-white px-2 py-1 text-xs font-medium text-[#456A9B] transition-colors hover:bg-[#EEF4FF]">
											참여자
										</button>
										{activeParticipantId === participant.id && (
											<div className="absolute right-0 top-[calc(100%+8px)] z-10 min-w-[132px] rounded-xl border border-[#EDE9E0] bg-white p-1 shadow-lg">
												<button
													type="button"
													onClick={() =>
														handleTransferOwnership(participant.id)
													}
													className="w-full rounded-lg px-3 py-2 text-left text-xs font-medium text-gray-700 transition-colors hover:bg-[#F7F3E9]">
													소유자 넘기기
												</button>
												<button
													type="button"
													onClick={() =>
														handleRemoveParticipant(participant.id)
													}
													className="w-full rounded-lg px-3 py-2 text-left text-xs font-medium text-red-500 transition-colors hover:bg-red-50">
													참여자 강퇴
												</button>
											</div>
										)}
									</>
								) : (
									<span className="rounded-full bg-white px-2 py-1 text-xs font-medium text-gray-600">
										참여자
									</span>
								)}
							</div>
						</div>
					))}
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
