import { useState } from "react";
import { ShoppingCart, Users, User, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { publicCarts } from "../../mock/cartData";
import type { PublicCart, CartCategory } from "../../mock/cartData";

// ─────────────────────────────────────────
// 카테고리 탭 정의 (ProductSection과 동일 순서)
// ─────────────────────────────────────────
const cartCategories: { id: CartCategory; label: string }[] = [
	{ id: "living", label: "생활용품" },
	{ id: "ingredients", label: "식재료" },
	{ id: "office", label: "사무용품" },
	{ id: "camping", label: "캠핑용품" },
];

// ─────────────────────────────────────────
// 유틸: 대표 썸네일 반환
// ─────────────────────────────────────────
function getRepresentativeThumbnail(items: PublicCart["items"]): string {
	return items.length > 0
		? items[0].thumbnail
		: "https://images.unsplash.com/photo-1506617564039-2f3b650b7010?w=400&q=80";
}

// ─────────────────────────────────────────
// 유틸: 장바구니 총 금액 계산
// ─────────────────────────────────────────
function calcTotalPrice(items: PublicCart["items"]): number {
	return items.reduce((sum, item) => sum + item.price, 0);
}

// ─────────────────────────────────────────
// CartCard 컴포넌트
// ─────────────────────────────────────────
function CartCard({ cart }: { cart: PublicCart }) {
	const navigate = useNavigate();
	const isShared = cart.type === "shared";
	const totalPrice = calcTotalPrice(cart.items);
	const thumbnail = getRepresentativeThumbnail(cart.items);

	const handleClick = () => {
		navigate(`/cart/detail?id=${cart.id}&type=${cart.type}&source=public`);
	};

	return (
		<div className="group flex flex-col cursor-pointer" onClick={handleClick}>
			{/* 대표 상품 이미지 */}
			<div
				className="relative w-full rounded-xl overflow-hidden mb-3"
				style={{ aspectRatio: "1 / 1" }}>
				<img
					src={thumbnail}
					alt={cart.name}
					className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
				/>
			</div>

			{/* 장바구니 정보 */}
			<div className="flex flex-col gap-1">
				{/* 장바구니 이름 + 개인/공유 뱃지 (이름 오른쪽) */}
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

				{/* 소유자 닉네임 + 담긴 상품 개수 */}
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
// CartSection (메인 페이지 노출용)
// ─────────────────────────────────────────
export default function CartSection() {
	const navigate = useNavigate();
	const [activeCategory, setActiveCategory] = useState<CartCategory>(
		cartCategories[0].id
	);

	// 선택된 카테고리로 필터링 후 인기순(likeCount 내림차순) 정렬, 최대 8개
	const filteredCarts = publicCarts
		.filter((c) => c.category === activeCategory)
		.sort((a, b) => b.likeCount - a.likeCount)
		.slice(0, 8);

	const currentCategory = cartCategories.find((c) => c.id === activeCategory)!;

	return (
		<section className="w-full bg-white py-16">
			<div className="max-w-7xl mx-auto px-6">
				{/* 섹션 타이틀 */}
				<h2 className="text-2xl font-bold text-gray-900 mb-5">
					가장 인기있는 장바구니
				</h2>

				{/* 카테고리 탭 */}
				<div className="flex border-b border-gray-200 mb-6">
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

				{/* 장바구니 그리드: 4열 */}
				{filteredCarts.length > 0 ? (
					<div className="grid grid-cols-4 gap-x-6 gap-y-16">
						{filteredCarts.map((cart) => (
							<CartCard key={cart.id} cart={cart} />
						))}
					</div>
				) : (
					<div className="flex flex-col items-center justify-center py-24 gap-3 text-gray-400">
						<ShoppingCart className="w-12 h-12 opacity-30" />
						<p className="text-sm">
							{currentCategory.label} 카테고리의 인기 장바구니가 없습니다.
						</p>
					</div>
				)}

				{/* 전체보기 버튼 */}
				{filteredCarts.length > 0 && (
					<div className="flex justify-center mt-10">
						<button
							onClick={() => navigate("/cart")}
							className="px-16 py-4 border border-gray-200 rounded-2xl flex items-center justify-center gap-1.5 text-gray-500 font-medium hover:bg-[#F6F0E4] hover:border-[#D4B896] transition-all">
							<span>{currentCategory.label} 장바구니 전체보기</span>
							<ChevronRight className="w-4 h-4" />
						</button>
					</div>
				)}
			</div>
		</section>
	);
}
