import { motion } from "framer-motion";
import { X } from "lucide-react";
import React, { useState, useEffect, useCallback } from "react";
import { useCloseAddToCartModal } from "../../store/useCartModalStore.ts";
import { useCreateCart } from "../../hooks/cart/useCartMutation";

// 장바구니 존재 X -> 장바구니 생성 모달
export default function AddToCartModal() {
	// 폼 상태
	const [isPublic, setIsPublic] = useState(false);
	const [cartName, setCartName] = useState("");
	const [budget, setBudget] = useState("");
	const [purpose, setPurpose] = useState("");

	// 모달 닫기 액션 가져오기
	const closeAddToCartModal = useCloseAddToCartModal();
	const createCartMutation = useCreateCart();

	const handleClose = useCallback(() => {
		closeAddToCartModal();
	}, [closeAddToCartModal]);

	const handleSetPrivate = () => {
		setIsPublic(false);
	};

	const handleSetPublic = () => {
		setIsPublic(true);
	};

	const handleCartNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCartName(e.target.value);
	};

	const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBudget(e.target.value);
	};

	const handlePurposeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPurpose(e.target.value);
	};

	const handleStopPropagation = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	// 폼 제출 핸들러
	const handleSubmit = (type: "personal" | "shared") => {
		const budgetValue = budget.trim()
			? Number(budget.replaceAll(",", ""))
			: undefined;

		createCartMutation.mutate(
			{
				name: cartName.trim(),
				purpose: purpose.trim(),
				is_public: isPublic,
				budget: budgetValue,
				cart_type: type === "shared" ? "SHARED" : "PERSONAL",
			},
			{ onSuccess: () => handleClose() }
		);
	};

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
				onClick={handleStopPropagation}>
				{/* 헤더 */}
				<div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
					<h2 className="text-lg font-semibold text-gray-900">
						새 장바구니 만들기
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
								onClick={handleSetPrivate}
								className={`flex-1 px-4 py-2 rounded-lg border-2 transition-all ${
									!isPublic
										? "border-[#D9CEBC] bg-[#FDFBF6] text-[#9E8E70]"
										: "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
								}`}>
								비공개
							</button>
							<button
								onClick={handleSetPublic}
								className={`flex-1 px-4 py-2 rounded-lg border-2 transition-all ${
									isPublic
										? "border-[#D9CEBC] bg-[#FDFBF6] text-[#9E8E70]"
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
							onChange={handleCartNameChange}
							placeholder="예: 생활용품 구매 목록"
							className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9CEBC] focus:border-transparent"
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
								onChange={handleBudgetChange}
								placeholder="0"
								className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9CEBC] focus:border-transparent"
							/>
							<span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
								원
							</span>
						</div>
					</div>

					{/* 목적 */}
					<div>
						<label
							htmlFor="purpose"
							className="block text-sm font-medium text-gray-700 mb-2">
							목적 (선택사항)
						</label>
						<input
							id="purpose"
							type="text"
							value={purpose}
							onChange={handlePurposeChange}
							placeholder="캠핑, 워크샵, 글램핑 등"
							className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9CEBC] focus:border-transparent"
						/>
					</div>
				</div>

				{/* 푸터 - 액션 버튼 */}
				<div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-2">
					<button
						onClick={handleClose}
						className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
						취소
					</button>
					<button
						onClick={() => handleSubmit("personal")}
						disabled={!cartName.trim()}
						className="px-4 py-2 text-sm font-medium text-[#9E8E70] bg-[#FDFBF6] border-2 border-[#D9CEBC] hover:bg-[#F7F3E9] disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed rounded-lg transition-colors">
						개인 장바구니 생성
					</button>
					<button
						onClick={() => handleSubmit("shared")}
						disabled={!cartName.trim()}
						className="px-4 py-2 text-sm font-medium text-[#9E8E70] bg-[#FDFBF6] border-2 border-[#D9CEBC] hover:bg-[#F7F3E9] disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed rounded-lg transition-colors">
						공유 장바구니 생성
					</button>
				</div>
			</motion.div>
		</div>
	);
}
