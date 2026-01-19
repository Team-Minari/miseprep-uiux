import { motion } from "framer-motion";
import { X, Plus, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useModalStore } from "../../store/useModalStore";

// 공유 장바구니 여부
interface CreateCartModalProps {
	isShared: boolean;
}

export default function CreateCartModal({ isShared }: CreateCartModalProps) {
	// 폼 상태
	const [isPublic, setIsPublic] = useState(false);
	const [cartName, setCartName] = useState("");
	const [budget, setBudget] = useState("");
	const [emails, setEmails] = useState<string[]>([""]);

	// 모달 닫기 액션 가져오기
	const closeCreateCartModal = useModalStore(
		(state) => state.closeCreateCartModal
	);
	const closeCreateSharedCartModal = useModalStore(
		(state) => state.closeCreateSharedCartModal
	);

	// isShared 값에 따라 적절한 닫기 함수 선택
	const handleClose = isShared
		? closeCreateSharedCartModal
		: closeCreateCartModal;

	// ESC 키로 모달 닫기
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				handleClose();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [handleClose]);

	// 이메일 입력 핸들러
	const handleAddEmail = () => {
		setEmails([...emails, ""]);
	};

	// 추가한 이메일 삭제 버튼 핸들러
	const handleRemoveEmail = (index: number) => {
		setEmails(emails.filter((_, i) => i !== index));
	};

	/**
	 * 이메일 값 변경
	 */
	const handleEmailChange = (index: number, value: string) => {
		const newEmails = [...emails];
		newEmails[index] = value;
		setEmails(newEmails);
	};

	// 추후 API 연동하여 폼 제출 시 데이터 제공
	const handleSubmit = () => {
		console.log({
			isShared,
			isPublic,
			cartName,
			budget,
			emails: emails.filter((email) => email.trim() !== ""),
		});
		handleClose();
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			{/* 배경 오버레이 */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="absolute inset-0 bg-black/40"
				onClick={handleClose}
			/>

			{/* 모달 본체 */}
			<motion.div
				initial={{ opacity: 0, scale: 0.95, y: 20 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				exit={{ opacity: 0, scale: 0.95, y: 20 }}
				transition={{ type: "spring", damping: 25, stiffness: 300 }}
				className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden"
				onClick={(e) => e.stopPropagation()}>
				{/* 헤더 */}
				<div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
					<h2 className="text-lg font-semibold text-gray-900">
						{isShared ? "새 공유 장바구니 만들기" : "새 장바구니 만들기"}
					</h2>
					<button
						onClick={handleClose}
						className="p-1 hover:bg-gray-100 rounded transition-colors">
						<X className="w-5 h-5 text-gray-500" />
					</button>
				</div>

				{/* 폼 컨텐츠 */}
				<div className="px-6 py-4 space-y-4 max-h-[70vh] overflow-y-auto">
					{/* 공개/비공개 토글 */}
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">
							공개/비공개 선택 <span className="text-red-500">*</span>
						</label>
						<div className="flex gap-2">
							<button
								onClick={() => setIsPublic(false)}
								className={`flex-1 px-4 py-2 rounded-lg border-2 transition-all ${
									!isPublic
										? "border-blue-500 bg-blue-50 text-blue-700"
										: "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
								}`}>
								비공개
							</button>
							<button
								onClick={() => setIsPublic(true)}
								className={`flex-1 px-4 py-2 rounded-lg border-2 transition-all ${
									isPublic
										? "border-blue-500 bg-blue-50 text-blue-700"
										: "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
								}`}>
								공개
							</button>
						</div>
					</div>

					{/* 장바구니 이름 */}
					<div>
						<label
							htmlFor="cart-name"
							className="block text-sm font-medium text-gray-700 mb-2">
							장바구니 이름 <span className="text-red-500">*</span>
						</label>
						<input
							id="cart-name"
							type="text"
							value={cartName}
							onChange={(e) => setCartName(e.target.value)}
							placeholder="예: 생활용품 구매 목록"
							className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						/>
					</div>

					{/* 예산 */}
					<div>
						<label
							htmlFor="budget"
							className="block text-sm font-medium text-gray-700 mb-2">
							예산 (선택사항)
						</label>
						<div className="relative">
							<input
								id="budget"
								type="text"
								value={budget}
								onChange={(e) => setBudget(e.target.value)}
								placeholder="0"
								className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							/>
							<span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
								원
							</span>
						</div>
					</div>

					{/* 공유 장바구니일 경우에만 초대 멤버 표시 */}
					{isShared && (
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								초대할 사람 (선택사항)
							</label>
							<div className="space-y-2">
								{emails.map((email, index) => (
									<div key={index} className="flex gap-2">
										<input
											type="email"
											value={email}
											onChange={(e) => handleEmailChange(index, e.target.value)}
											placeholder="example@email.com"
											className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										/>
										{emails.length > 1 && (
											<button
												onClick={() => handleRemoveEmail(index)}
												className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors">
												<Trash2 className="w-4 h-4" />
											</button>
										)}
									</div>
								))}

								{/* 이메일 추가 버튼 */}
								<button
									onClick={handleAddEmail}
									className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium">
									<Plus className="w-4 h-4" />
									이메일 추가
								</button>
							</div>
						</div>
					)}
				</div>

				{/* 푸터 - 액션 버튼 */}
				<div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-2">
					<button
						onClick={handleClose}
						className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
						취소
					</button>
					<button
						onClick={handleSubmit}
						disabled={!cartName.trim()}
						className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed rounded-lg transition-colors">
						생성하기
					</button>
				</div>
			</motion.div>
		</div>
	);
}
