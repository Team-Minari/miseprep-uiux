import { useState, useCallback } from "react";
import { Link, Mail, Check, X } from "lucide-react";

interface MemberInviteProps {
	/** 초대 링크 URL */
	shareLink: string;
}

export default function MemberInvite({ shareLink }: MemberInviteProps) {
	/* ── 링크 복사 상태 ── */
	const [linkCopied, setLinkCopied] = useState(false);

	/* ── 이메일 초대 상태 ── */
	const [inviteEmail, setInviteEmail] = useState("");
	const [invitedEmails, setInvitedEmails] = useState<string[]>([]);
	const [emailError, setEmailError] = useState("");

	/* ── 핸들러 ── */
	const handleCopyLink = useCallback(async () => {
		try {
			await navigator.clipboard.writeText(shareLink);
			setLinkCopied(true);
			setTimeout(() => setLinkCopied(false), 2000);
		} catch {
			// clipboard API 미지원 환경 fallback
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
		setInvitedEmails((prev) => prev.filter((e) => e !== email));
	};

	return (
		<div className="bg-white rounded-2xl border border-[#EDE9E0] shadow-sm px-6 py-6 flex flex-col gap-5">
			<h2 className="text-base font-semibold text-gray-900">멤버 초대</h2>

			{/* 링크로 초대 */}
			<div className="flex flex-col gap-2">
				<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
					링크로 초대
				</p>
				<div className="flex items-center gap-2 px-3 py-2 bg-[#F7F3E9] rounded-xl">
					<Link className="w-3.5 h-3.5 text-gray-400 shrink-0" />
					<span className="flex-1 text-xs text-gray-500 truncate">
						{shareLink}
					</span>
				</div>
				<button
					onClick={handleCopyLink}
					className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-medium transition-all ${
						linkCopied
							? "bg-green-50 text-green-700 border border-green-200"
							: "bg-[#F7F3E9] hover:bg-[#F3EEE0] text-gray-700 border border-[#EDE9E0]"
					}`}>
					{linkCopied ? (
						<>
							<Check className="w-4 h-4" />
							링크 복사됨
						</>
					) : (
						<>
							<Link className="w-4 h-4" />
							링크 복사
						</>
					)}
				</button>
			</div>

			{/* 이메일로 초대 */}
			<div className="flex flex-col gap-2">
				<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
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
						className="flex-1 min-w-0 px-3 py-2 text-sm border border-[#D9CEBC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9CEBC] focus:border-transparent"
					/>
					<button
						onClick={handleInviteEmail}
						className="px-3 py-2 bg-[#F7F3E9] hover:bg-[#F3EEE0] border border-[#D9CEBC] rounded-lg transition-colors">
						<Mail className="w-4 h-4 text-gray-600" />
					</button>
				</div>

				{emailError && <p className="text-xs text-red-500">{emailError}</p>}

				{/* 초대된 이메일 목록 */}
				{invitedEmails.length > 0 && (
					<div className="flex flex-col gap-1.5 mt-1">
						{invitedEmails.map((email) => (
							<div
								key={email}
								className="flex items-center justify-between px-3 py-1.5 bg-[#F7F3E9] rounded-lg">
								<span className="text-xs text-gray-700 truncate">{email}</span>
								<button
									onClick={() => handleRemoveInvitedEmail(email)}
									className="ml-2 text-gray-400 hover:text-red-500 transition-colors shrink-0">
									<X className="w-3.5 h-3.5" />
								</button>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
