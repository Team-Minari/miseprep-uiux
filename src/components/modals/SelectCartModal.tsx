import { motion } from "framer-motion";
import { X, Inbox } from "lucide-react";
import { useEffect } from "react";
import { useCloseSelectCartModal } from "../../store/useCartModalStore.ts";
import { usePersonalCarts, useSharedCarts } from "../../hooks/cart/useCart";

// 장바구니 존재 -> 장바구니 선택 모달
export default function SelectCartModal() {
	const closeSelectCartModal = useCloseSelectCartModal();
	const personalCarts = usePersonalCarts();
	const sharedCarts = useSharedCarts();

	// 전체 장바구니 목록 (개인 + 공유)
	const allCarts = [
		...personalCarts.map((cart) => ({ ...cart, type: "personal" as const })),
		...sharedCarts.map((cart) => ({ ...cart, type: "shared" as const })),
	];

	const handleSelectCart = (
		cartId: number,
		cartType: "personal" | "shared"
	) => {
		console.log({ selectedCartId: cartId, cartType });
		closeSelectCartModal();
	};

	const handleStopPropagation = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	// ESC 키로 모달 닫기
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				closeSelectCartModal();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [closeSelectCartModal]);

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			{/* 배경 오버레이 */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="absolute inset-0 bg-black/40"
				onClick={closeSelectCartModal}
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
					<h2 className="text-lg font-semibold text-gray-900">장바구니 선택</h2>
					<button
						onClick={closeSelectCartModal}
						className="p-1 hover:bg-gray-100 rounded transition-colors">
						<X className="w-5 h-5 text-gray-500" />
					</button>
				</div>

				{/* 장바구니 목록 */}
				<div className="px-6 py-4 space-y-4 max-h-[60vh] overflow-y-auto">
					{/* 개인 장바구니 섹션 */}
					{personalCarts.length > 0 && (
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								개인 장바구니
							</label>
							<div className="space-y-1">
								{personalCarts.map((cart) => (
									<button
										key={`personal-${cart.id}`}
										onClick={() => handleSelectCart(cart.id, "personal")}
										className="w-full px-3 py-2.5 flex items-center gap-3 text-left border border-gray-200 rounded-lg hover:border-[#D9CEBC] hover:bg-[#FDFBF6] transition-all group">
										<Inbox className="w-4 h-4 text-gray-400 group-hover:text-[#9E8E70] transition-colors" />
										<span className="flex-1 text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
											{cart.name}
										</span>
									</button>
								))}
							</div>
						</div>
					)}

					{/* 공유 장바구니 섹션 */}
					{sharedCarts.length > 0 && (
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								공유 장바구니
							</label>
							<div className="space-y-1">
								{sharedCarts.map((cart) => (
									<button
										key={`shared-${cart.id}`}
										onClick={() => handleSelectCart(cart.id, "shared")}
										className="w-full px-3 py-2.5 flex items-center gap-3 text-left border border-gray-200 rounded-lg hover:border-[#D9CEBC] hover:bg-[#FDFBF6] transition-all group">
										<Inbox className="w-4 h-4 text-gray-400 group-hover:text-[#9E8E70] transition-colors" />
										<span className="flex-1 text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
											{cart.name}
										</span>
									</button>
								))}
							</div>
						</div>
					)}

					{/* 장바구니가 없을 경우 (안전장치) */}
					{allCarts.length === 0 && (
						<div className="py-6 text-center">
							<p className="text-sm text-gray-500">
								장바구니가 없습니다. 새 장바구니를 만들어 주세요.
							</p>
						</div>
					)}
				</div>

				{/* 푸터 - 액션 버튼 */}
				<div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-2">
					<button
						onClick={closeSelectCartModal}
						className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
						취소
					</button>
				</div>
			</motion.div>
		</div>
	);
}
