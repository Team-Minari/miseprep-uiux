import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
	useCloseManageCartModal,
	useManagedCart,
} from "../../store/useCartModalStore";
import { usePersonalCarts, useSharedCarts } from "../../hooks/cart/useCart";
import {
	useUpdateCartSettings,
	useDeleteCart,
	useLeaveCart,
} from "../../hooks/cart/useCartMutation";
import { useAuthStore } from "../../store/auth/useAuthStore";

const toBudgetInput = (budget?: number | null) =>
	budget ? String(budget) : "";

export default function CartManageModal() {
	const managedCart = useManagedCart();
	const closeManageCartModal = useCloseManageCartModal();
	const personalCarts = usePersonalCarts();
	const sharedCarts = useSharedCarts();
	const currentUserId = useAuthStore((s) => s.user?.id);
	const updateCartMutation = useUpdateCartSettings();
	const deleteCartMutation = useDeleteCart();
	const leaveCartMutation = useLeaveCart();
	const navigate = useNavigate();
	const location = useLocation();
	const [searchParams] = useSearchParams();

	const cart =
		managedCart?.type === "shared"
			? sharedCarts.find((item) => item.id === managedCart.id)
			: personalCarts.find((item) => item.id === managedCart?.id);

	const [isPublic, setIsPublic] = useState(false);
	const [cartName, setCartName] = useState("");
	const [purpose, setPurpose] = useState("");
	const [budget, setBudget] = useState("");

	useEffect(() => {
		if (!cart) return;

		setIsPublic(Boolean(cart.is_public));
		setCartName(cart.name);
		setPurpose(cart.purpose ?? "");
		setBudget(toBudgetInput(cart.budget));
	}, [cart]);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				closeManageCartModal();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [closeManageCartModal]);

	if (!managedCart || !cart) return null;

	const isOwner =
		managedCart.type === "personal" || cart.owner_id === currentUserId;
	const submitDisabled = !cartName.trim();
	const actionLabel =
		managedCart.type === "shared"
			? isOwner
				? "공유 장바구니 수정"
				: "공유 장바구니 정보 수정"
			: "개인 장바구니 수정";

	const handleClose = () => {
		closeManageCartModal();
	};

	const handleSave = () => {
		updateCartMutation.mutate(
			{
				cartId: managedCart.id,
				body: {
					cart_name: cartName.trim(),
					is_public: isPublic,
					purpose: purpose.trim(),
					budget: budget.trim()
						? Number(budget.replaceAll(",", ""))
						: undefined,
				},
			},
			{ onSuccess: () => handleClose() }
		);
	};

	const navigateIfViewingTargetCart = (
		cartType: "personal" | "shared",
		cartId: number
	) => {
		const currentCartId = Number(searchParams.get("id"));
		const currentCartType = searchParams.get("type");

		if (
			location.pathname === "/cart/detail" &&
			currentCartId === cartId &&
			currentCartType === cartType
		) {
			navigate("/cart");
		}
	};

	const handleDelete = () => {
		const confirmed = window.confirm("이 장바구니를 삭제하시겠어요?");
		if (!confirmed) return;

		deleteCartMutation.mutate(managedCart.id, {
			onSuccess: () => {
				navigateIfViewingTargetCart(managedCart.type, managedCart.id);
				handleClose();
			},
		});
	};

	const handleLeave = () => {
		const confirmed = window.confirm("이 공유 장바구니에서 탈퇴하시겠어요?");
		if (!confirmed) return;

		leaveCartMutation.mutate(managedCart.id, {
			onSuccess: () => {
				navigateIfViewingTargetCart("shared", managedCart.id);
				handleClose();
			},
		});
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="absolute inset-0 bg-black/40"
				onClick={handleClose}
			/>

			<motion.div
				initial={{ opacity: 0, scale: 0.95, y: 20 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				exit={{ opacity: 0, scale: 0.95, y: 20 }}
				transition={{ type: "spring", damping: 25, stiffness: 300 }}
				className="relative mx-4 w-full max-w-md overflow-hidden rounded-lg bg-white shadow-xl"
				onClick={(event) => event.stopPropagation()}>
				<div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
					<div className="flex items-center gap-2">
						<h2 className="text-lg font-semibold text-gray-900">
							{actionLabel}
						</h2>
						{managedCart.type === "shared" && (
							<span
								className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
									isOwner
										? "bg-[#F7F3E9] text-[#7A6E5A]"
										: "bg-[#EEF4FF] text-[#456A9B]"
								}`}>
								{isOwner ? "소유자" : "참여자"}
							</span>
						)}
					</div>
					<button
						onClick={handleClose}
						className="rounded p-1 transition-colors hover:bg-gray-100">
						<X className="h-5 w-5 text-gray-500" />
					</button>
				</div>

				<div className="max-h-[70vh] space-y-4 overflow-y-auto px-6 py-4">
					<div>
						<label className="mb-2 block text-sm font-medium text-gray-700">
							공개/비공개 선택 <span className="text-red-500">*</span>
						</label>
						<div className="flex gap-2">
							<button
								type="button"
								onClick={() => setIsPublic(false)}
								className={`flex-1 rounded-lg border-2 px-4 py-2 transition-all ${
									!isPublic
										? "border-[#D9CEBC] bg-[#FDFBF6] text-[#9E8E70]"
										: "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
								}`}>
								비공개
							</button>
							<button
								type="button"
								onClick={() => setIsPublic(true)}
								className={`flex-1 rounded-lg border-2 px-4 py-2 transition-all ${
									isPublic
										? "border-[#D9CEBC] bg-[#FDFBF6] text-[#9E8E70]"
										: "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
								}`}>
								공개
							</button>
						</div>
					</div>

					<div>
						<label
							htmlFor="manage-cart-name"
							className="mb-2 block text-sm font-medium text-gray-700">
							장바구니 이름 <span className="text-red-500">*</span>
						</label>
						<input
							id="manage-cart-name"
							type="text"
							value={cartName}
							onChange={(event) => setCartName(event.target.value)}
							placeholder="예: 생활용품 구매 목록"
							className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#D9CEBC]"
						/>
					</div>

					<div>
						<label
							htmlFor="manage-purpose"
							className="mb-2 block text-sm font-medium text-gray-700">
							목적 <span className="text-red-500">*</span>
						</label>
						<input
							id="manage-purpose"
							type="text"
							value={purpose}
							onChange={(event) => setPurpose(event.target.value)}
							placeholder="캠핑, 워크샵, 글램핑 등"
							className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#D9CEBC]"
						/>
					</div>

					<div>
						<label
							htmlFor="manage-budget"
							className="mb-2 block text-sm font-medium text-gray-700">
							예산 (선택사항)
						</label>
						<div className="relative">
							<input
								id="manage-budget"
								type="text"
								inputMode="numeric"
								value={budget}
								onChange={(event) =>
									setBudget(event.target.value.replace(/[^\d]/g, ""))
								}
								placeholder="0"
								className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-8 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#D9CEBC]"
							/>
							<span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
								원
							</span>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
					<div>
						{managedCart.type === "personal" || isOwner ? (
							<button
								type="button"
								onClick={handleDelete}
								className="text-sm font-medium text-red-500 transition-colors hover:text-red-600">
								장바구니 삭제
							</button>
						) : (
							<button
								type="button"
								onClick={handleLeave}
								className="text-sm font-medium text-red-500 transition-colors hover:text-red-600">
								장바구니 탈퇴
							</button>
						)}
					</div>

					<div className="flex gap-2">
						<button
							type="button"
							onClick={handleClose}
							className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100">
							취소
						</button>
						<button
							type="button"
							onClick={handleSave}
							disabled={submitDisabled}
							className="rounded-lg border-2 border-[#D9CEBC] bg-[#FDFBF6] px-4 py-2 text-sm font-medium text-[#9E8E70] transition-colors hover:bg-[#F7F3E9] disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-400">
							저장하기
						</button>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
