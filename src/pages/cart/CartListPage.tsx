import { useState } from "react";
import { ShoppingCart, Users, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { publicCarts } from "../../mock/cartData";
import type { PublicCart, CartCategory } from "../../mock/cartData";

// ─────────────────────────────────────────
// 카테고리 탭 정의
// ─────────────────────────────────────────
const cartCategories: { id: CartCategory; label: string }[] = [
	{ id: "living", label: "생활용품" },
	{ id: "ingredients", label: "식재료" },
	{ id: "office", label: "사무용품" },
	{ id: "camping", label: "캠핑용품" },
];

const PAGE_SIZE = 24; // 4열 × 6행

// ─────────────────────────────────────────
// 유틸
// ─────────────────────────────────────────
function getRepresentativeThumbnail(items: PublicCart["items"]): string {
	return items.length > 0
		? items[0].thumbnail
		: "https://images.unsplash.com/photo-1506617564039-2f3b650b7010?w=400&q=80";
}

function calcTotalPrice(items: PublicCart["items"]): number {
	return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

// ─────────────────────────────────────────
// CartCard — 클릭 시 상세 페이지로 이동
// ─────────────────────────────────────────
function CartCard({ cart }: { cart: PublicCart }) {
	const navigate = useNavigate();
	const isShared = cart.type === "shared";
	const totalPrice = calcTotalPrice(cart.items);
	const thumbnail = getRepresentativeThumbnail(cart.items);

	const handleClick = () => {
		// source=public 파라미터로 공개 장바구니임을 CartDetailPage에 알림
		navigate(`/cart/detail?id=${cart.id}&type=${cart.type}&source=public`);
	};

	return (
		<div className="group flex flex-col cursor-pointer" onClick={handleClick}>
			{/* 대표 이미지 */}
			<div
				className="relative w-full rounded-xl overflow-hidden mb-3"
				style={{ aspectRatio: "1 / 1" }}>
				<img
					src={thumbnail}
					alt={cart.name}
					className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
				/>
			</div>

			{/* 카드 정보 */}
			<div className="flex flex-col gap-1">
				{/* 장바구니 이름 + 개인/공유 뱃지 */}
				<div className="flex items-center gap-1.5">
					<ShoppingCart className="w-3.5 h-3.5 text-[#C8A97A] shrink-0" />
					<p className="text-sm font-semibold text-gray-900 leading-snug line-clamp-1 flex-1">
						{cart.name}
					</p>
					<span
						className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-xs font-semibold shrink-0 ${
							isShared ? "bg-[#D4B896] text-white" : "bg-gray-100 text-gray-600"
						}`}>
						{isShared ? (
							<Users className="w-3 h-3" />
						) : (
							<User className="w-3 h-3" />
						)}
						{isShared ? "공유" : "개인"}
					</span>
				</div>

				{/* 소유자 · 상품 개수 */}
				<p className="text-xs text-gray-400">
					<span className="font-medium text-gray-500">{cart.ownerName}</span>
					{" · "}담긴 상품{" "}
					<span className="font-medium text-gray-600">
						{cart.items.length}개
					</span>
				</p>

				{/* 총 금액 */}
				<p className="text-base font-bold text-gray-900 mt-0.5">
					{totalPrice.toLocaleString()}원
				</p>
			</div>
		</div>
	);
}

// ─────────────────────────────────────────
// CartListPage
// ─────────────────────────────────────────
export default function CartListPage() {
	const [activeCategory, setActiveCategory] = useState<CartCategory>(
		cartCategories[0].id
	);

	// 선택 카테고리 필터링 → 인기순 정렬 → 최대 PAGE_SIZE(24)개
	const filteredCarts = publicCarts
		.filter((c) => c.category === activeCategory)
		.sort((a, b) => b.likeCount - a.likeCount)
		.slice(0, PAGE_SIZE);

	const currentCategory = cartCategories.find((c) => c.id === activeCategory)!;

	return (
		<div className="min-h-screen bg-white">
			{/* 페이지 헤더 영역 */}
			<div className="bg-white">
				<div className="max-w-7xl mx-auto px-6 py-10">
					<h1 className="text-3xl font-bold text-gray-900">
						{currentCategory.label} 장바구니
					</h1>
					<p className="mt-2 text-sm text-gray-500">
						다른 사람들이 공개한 인기 장바구니를 확인해 보세요
					</p>
				</div>
			</div>

			{/* 본문 */}
			<div className="max-w-7xl mx-auto px-6 py-10">
				{/* 카테고리 탭 */}
				<div className="flex border-b border-gray-200 mb-8">
					{cartCategories.map((cat) => (
						<button
							key={cat.id}
							onClick={() => setActiveCategory(cat.id)}
							className={`px-5 py-2.5 text-sm font-medium rounded-t transition-all whitespace-nowrap ${
								activeCategory === cat.id
									? "bg-[#F6F0E4] text-gray-900 font-bold"
									: "text-gray-500 hover:text-gray-800"
							}`}>
							{cat.label}
						</button>
					))}
				</div>

				{/* 결과 카운트 */}
				<p className="text-sm text-gray-400 mb-6">
					<span className="font-medium text-gray-700">
						{filteredCarts.length}개
					</span>
					의 장바구니
				</p>

				{/* 그리드: 4열 × 6행 */}
				{filteredCarts.length > 0 ? (
					<div className="grid grid-cols-4 gap-x-6 gap-y-14">
						{filteredCarts.map((cart) => (
							<CartCard key={cart.id} cart={cart} />
						))}
					</div>
				) : (
					<div className="flex flex-col items-center justify-center py-32 gap-4 text-gray-400">
						<ShoppingCart className="w-14 h-14 opacity-20" />
						<p className="text-base">
							{currentCategory.label} 카테고리의 공개 장바구니가 없습니다.
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
