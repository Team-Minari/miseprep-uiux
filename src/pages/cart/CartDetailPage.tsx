import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Heart, ShoppingBag, ShoppingCart, Trash2, User } from "lucide-react";
import {
	publicCarts,
	type CartItem,
	type CartParticipant,
} from "../../mock/cartData";
import {
	findProductById,
	getCategoryLabel,
	type ProductSnapshot,
} from "../../mock/product";
import SharedCartPanel from "../../components/cart/SharedCartPanel";
import { useOpenSelectCartModal } from "../../store/useCartModalStore";
import { usePersonalCarts, useSharedCarts } from "../../store/useCartStore";

type CartType = "personal" | "shared";

type CartDetail = {
	id: number;
	name: string;
	type: CartType;
	items: CartItem[];
	budget?: number;
	purpose?: string;
	participants?: CartParticipant[];
	ownerName?: string;
	likeCount?: number;
};

type EnrichedCartItem = CartItem & {
	detailProductId: number;
	description: string;
	categoryLabel: string;
	fallbackProduct: ProductSnapshot;
};

export default function CartDetailPage() {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const openSelectCartModal = useOpenSelectCartModal();
	const personalCarts = usePersonalCarts();
	const sharedCarts = useSharedCarts();

	const cartId = Number(searchParams.get("id"));
	const cartType = searchParams.get("type") as CartType | null;
	const source = searchParams.get("source");
	const isPublic = source === "public";

	const cart: CartDetail | undefined = useMemo(() => {
		if (isPublic) {
			const found = publicCarts.find(
				(currentCart) => currentCart.id === cartId
			);
			return found ? { ...found, type: found.type } : undefined;
		}

		const allCarts = [
			...personalCarts.map((currentCart) => ({
				...currentCart,
				type: "personal" as const,
			})),
			...sharedCarts.map((currentCart) => ({
				...currentCart,
				type: "shared" as const,
			})),
		];

		return allCarts.find(
			(currentCart) =>
				currentCart.id === cartId && currentCart.type === cartType
		);
	}, [cartId, cartType, isPublic, personalCarts, sharedCarts]);

	const [items, setItems] = useState<CartItem[]>(cart?.items ?? []);
	const [checkedIds, setCheckedIds] = useState<Set<number>>(
		new Set(cart?.items.map((item) => item.id) ?? [])
	);

	useEffect(() => {
		setItems(cart?.items ?? []);
		setCheckedIds(new Set(cart?.items.map((item) => item.id) ?? []));
	}, [cart]);

	const enhancedItems = useMemo<EnrichedCartItem[]>(
		() =>
			items.map((item) => {
				const matchedProduct = findProductById(item.productId);
				const fallbackProduct: ProductSnapshot = {
					id: item.productId,
					image_url: matchedProduct?.image_url ?? item.thumbnail,
					name: matchedProduct?.name ?? item.name,
					description:
						matchedProduct?.description ??
						item.description ??
						"장바구니에서 담은 상품 상세 정보입니다.",
					price: matchedProduct?.price ?? item.price,
					category: matchedProduct?.category ?? item.category ?? "best",
				};

				return {
					...item,
					detailProductId: matchedProduct?.id ?? item.productId,
					description: fallbackProduct.description,
					categoryLabel: getCategoryLabel(fallbackProduct.category),
					fallbackProduct,
				};
			}),
		[items]
	);

	const isAllChecked =
		enhancedItems.length > 0 && checkedIds.size === enhancedItems.length;
	const isIndeterminate =
		checkedIds.size > 0 && checkedIds.size < enhancedItems.length;

	const handleToggleAll = () => {
		setCheckedIds(
			isAllChecked ? new Set() : new Set(enhancedItems.map((item) => item.id))
		);
	};

	const handleToggleItem = (id: number) => {
		setCheckedIds((prev) => {
			const next = new Set(prev);
			if (next.has(id)) {
				next.delete(id);
			} else {
				next.add(id);
			}
			return next;
		});
	};

	const handleDelete = (id: number) => {
		setItems((prev) => prev.filter((item) => item.id !== id));
		setCheckedIds((prev) => {
			const next = new Set(prev);
			next.delete(id);
			return next;
		});
	};

	const handleDeleteChecked = () => {
		setItems((prev) => prev.filter((item) => !checkedIds.has(item.id)));
		setCheckedIds(new Set());
	};

	const handleOpenProduct = (item: EnrichedCartItem) => {
		navigate(`/product/${item.detailProductId}`, {
			state: { fallbackProduct: item.fallbackProduct },
		});
	};

	const checkedItems = enhancedItems.filter((item) => checkedIds.has(item.id));
	const totalPrice = checkedItems.reduce((acc, item) => acc + item.price, 0);
	const showSharedPanel =
		cart?.type === "shared" && !!cart.participants?.length;
	const budgetUsage = cart?.budget
		? Math.min((totalPrice / cart.budget) * 100, 100)
		: 0;

	const formatPrice = (price: number) => `${price.toLocaleString("ko-KR")}원`;

	return (
		<div className="bg-white">
			<div className="bg-white">
				<div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 pb-5 pt-8">
					<div className="flex items-center gap-3 pl-6">
						<h1 className="text-xl font-semibold text-gray-900">
							{cart?.name ?? "장바구니"}
						</h1>
						{cart?.type === "shared" && (
							<span className="rounded-full border border-[#D9CEBC] bg-[#F7F3E9] px-2 py-0.5 text-sm font-medium text-[#7A6E5A]">
								공유
							</span>
						)}
						{cart?.purpose && (
							<span className="rounded-full bg-[#EEF4FF] px-3 py-1 text-sm font-medium text-[#456A9B]">
								{cart.purpose}
							</span>
						)}
						{cart?.budget && (
							<div className="ml-2 flex w-fit min-w-[320px] items-end gap-4 px-2 py-1">
								<div className="flex flex-1 flex-col gap-2">
									<p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-gray-500">
										예산
									</p>
									<div className="h-2.5 overflow-hidden rounded-full bg-[#E9E1D3]">
										<div
											className="h-full rounded-full bg-[#C8A97A]"
											style={{ width: `${budgetUsage}%` }}
										/>
									</div>
									<div className="flex items-center justify-between gap-3 text-[11px]">
										<span className="text-gray-500">선택 금액</span>
										<span className="font-medium text-gray-700">
											{formatPrice(totalPrice)}
											<span className="mx-1 text-gray-400">/</span>
											{formatPrice(cart.budget)}
										</span>
									</div>
								</div>
							</div>
						)}
					</div>

					{isPublic && cart?.ownerName && (
						<div className="flex items-center gap-3 pr-6">
							<span className="flex items-center gap-1 text-sm text-gray-500">
								<User className="h-3.5 w-3.5" />
								{cart.ownerName}
							</span>
							{typeof cart.likeCount === "number" && (
								<span className="flex items-center gap-1 text-sm text-[#C8A97A]">
									<Heart className="h-3.5 w-3.5 fill-[#C8A97A]" />
									{cart.likeCount}
								</span>
							)}
						</div>
					)}
				</div>
			</div>

			<div className="mx-auto max-w-7xl px-6 pb-4 pt-5">
				{enhancedItems.length === 0 ? (
					<div className="flex flex-col items-center justify-center gap-5 rounded-2xl bg-white py-24">
						<div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#F7F3E9]">
							<ShoppingBag className="h-12 w-12 text-[#C8BFA8]" />
						</div>
						<div className="space-y-1.5 text-center">
							<p className="text-xl font-semibold text-gray-800">
								장바구니가 비어있습니다
							</p>
							<p className="text-sm text-gray-500">원하는 상품을 담아보세요!</p>
						</div>
						<button
							onClick={() => navigate("/")}
							className="mt-2 rounded-xl bg-[#F7F3E9] px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:bg-[#F3EEE0]">
							쇼핑 계속하기
						</button>
					</div>
				) : (
					<div className="flex flex-col gap-10">
						<div
							className={`${
								showSharedPanel
									? "grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]"
									: "w-full"
							}`}>
							<div className="min-w-0">
								<div className="mb-1 flex items-center justify-between px-6 py-3">
									<label className="flex cursor-pointer select-none items-center gap-2.5">
										<input
											type="checkbox"
											checked={isAllChecked}
											ref={(element) => {
												if (element) {
													element.indeterminate = isIndeterminate;
												}
											}}
											onChange={handleToggleAll}
											className="h-4 w-4 cursor-pointer rounded border-gray-300 accent-gray-800"
										/>
										<span className="text-sm font-medium text-gray-700">
											{isPublic ? "담을 상품 선택" : "전체 선택"}
											<span className="ml-1 text-gray-400">
												({checkedIds.size}/{enhancedItems.length})
											</span>
										</span>
									</label>

									{!isPublic && checkedIds.size > 0 && (
										<button
											onClick={handleDeleteChecked}
											className="text-sm text-red-400 transition-colors hover:text-red-600">
											선택 삭제
										</button>
									)}
								</div>

								<div className="overflow-hidden rounded-2xl bg-white divide-y divide-[#F0EBE0]">
									{enhancedItems.map((item) => {
										const isChecked = checkedIds.has(item.id);

										return (
											<div
												key={item.id}
												className={`flex items-center gap-5 px-6 py-5 transition-colors ${
													isChecked ? "bg-white" : "bg-gray-50/60"
												}`}>
												<input
													type="checkbox"
													checked={isChecked}
													onChange={() => handleToggleItem(item.id)}
													className="h-4 w-4 shrink-0 cursor-pointer rounded border-gray-300 accent-gray-800"
												/>

												<button
													type="button"
													onClick={() => handleOpenProduct(item)}
													className={`h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-[#F7F3E9] text-left transition hover:scale-[1.02] ${
														!isChecked ? "opacity-40" : ""
													}`}>
													<img
														src={item.fallbackProduct.image_url}
														alt={item.name}
														className="h-full w-full object-cover"
													/>
												</button>

												<div
													className={`min-w-0 flex-1 transition-opacity ${
														!isChecked ? "opacity-40" : ""
													}`}>
													<div className="mb-2 flex items-center gap-2 text-[11px]">
														<span className="rounded-full bg-[#F6F0E4] px-2 py-0.5 text-[#7A6E5A]">
															{item.categoryLabel}
														</span>
														{cart?.type === "shared" && item.addedBy && (
															<span className="rounded-full bg-[#EEF4FF] px-2 py-0.5 text-[#456A9B]">
																{item.addedBy} 담음
															</span>
														)}
													</div>

													<button
														type="button"
														onClick={() => handleOpenProduct(item)}
														className="block max-w-full text-left">
														<p className="truncate text-base font-semibold text-gray-900 hover:text-[#7A6E5A]">
															{item.fallbackProduct.name}
														</p>
													</button>
													<p className="mt-1 line-clamp-2 text-sm text-gray-500">
														{item.description}
													</p>
													<div className="mt-3">
														<p className="text-sm font-semibold text-gray-800">
															{formatPrice(item.price)}
														</p>
													</div>
												</div>

												<div className="w-24 text-right">
													<p className="text-sm font-bold text-gray-900">
														{formatPrice(item.price)}
													</p>
												</div>

												{!isPublic && (
													<button
														onClick={() => handleDelete(item.id)}
														className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500">
														<Trash2 className="h-4 w-4" />
													</button>
												)}
											</div>
										);
									})}
								</div>
							</div>

							{showSharedPanel ? (
								<div className="sticky top-6 flex flex-col gap-4">
									<SharedCartPanel
										cartId={cart!.id}
										shareLink={`${window.location.origin}/cart/detail?id=${cartId}&type=${cartType}`}
										participants={cart!.participants!}
									/>
								</div>
							) : null}
						</div>

						<div className={`${showSharedPanel ? "" : "w-full"} px-2`}>
							<div className="border-t border-[#EDE9E0] pt-8">
								<h2 className="text-base font-semibold text-gray-900">
									{isPublic ? "담기 요약" : "주문 요약"}
								</h2>

								<div className="mt-4 flex flex-col gap-2">
									{checkedItems.length === 0 ? (
										<p className="py-2 text-center text-sm text-gray-400">
											{isPublic
												? "담을 상품을 선택해 주세요"
												: "선택된 상품이 없습니다"}
										</p>
									) : (
										checkedItems.map((item) => (
											<div
												key={item.id}
												className="flex justify-between gap-3 text-sm text-gray-600">
												<div className="min-w-0">
													<p className="truncate">{item.name}</p>
													{cart?.type === "shared" && item.addedBy && (
														<p className="mt-1 text-xs text-gray-400">
															담은 사람 {item.addedBy}
														</p>
													)}
												</div>
												<span className="shrink-0 font-medium text-gray-800">
													{formatPrice(item.price)}
												</span>
											</div>
										))
									)}
								</div>

								<div className="mt-6 flex flex-col gap-2.5 border-t border-[#EDE9E0] pt-6">
									<div className="flex justify-between text-sm text-gray-500">
										<span>선택 상품</span>
										<span>{checkedItems.length}개</span>
									</div>
									<div className="mt-1 flex items-baseline justify-between">
										<span className="text-sm font-medium text-gray-700">
											합계
										</span>
										<span className="text-xl font-bold text-gray-900">
											{formatPrice(totalPrice)}
										</span>
									</div>
								</div>

								<div className="mt-6">
									{isPublic ? (
										<div className="flex flex-col gap-2">
											<button
												disabled={checkedItems.length === 0}
												onClick={openSelectCartModal}
												className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F7F3E9] py-3.5 text-sm font-semibold tracking-wide text-black transition-colors hover:bg-[#F3EEE0] disabled:cursor-not-allowed disabled:opacity-40">
												<ShoppingCart className="h-4 w-4" />
												선택 상품 담기 ({checkedItems.length})
											</button>
											<button
												onClick={() => {
													setCheckedIds(
														new Set(enhancedItems.map((item) => item.id))
													);
													openSelectCartModal();
												}}
												className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#D9CEBC] py-3.5 text-sm font-semibold tracking-wide text-gray-700 transition-colors hover:bg-[#FDFBF6]">
												<ShoppingCart className="h-4 w-4" />
												모두 담기 ({enhancedItems.length})
											</button>
										</div>
									) : (
										<button
											disabled={checkedItems.length === 0}
											className="w-full rounded-xl bg-[#F7F3E9] py-3.5 text-sm font-semibold tracking-wide text-black transition-colors hover:bg-[#F3EEE0] disabled:cursor-not-allowed disabled:opacity-40">
											주문하기 ({checkedItems.length})
										</button>
									)}
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
