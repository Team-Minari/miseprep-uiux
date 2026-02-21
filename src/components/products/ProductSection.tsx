import { useState } from "react";
import { useNavigate } from "react-router";
import { ShoppingCart } from "lucide-react";
import { categories, getProductsByCategory } from "../../mock/product";

interface ProductSectionProps {
	title: string;
}

export default function ProductSection({ title }: ProductSectionProps) {
	const navigate = useNavigate();
	const [activeCategory, setActiveCategory] = useState(categories[0].id);

	const currentCategory = categories.find((c) => c.id === activeCategory)!;
	const currentProducts = getProductsByCategory(activeCategory);

	return (
		<section className="w-full bg-white py-16">
			<div className="max-w-7xl mx-auto px-6">
				{/* 섹션 타이틀 - props로 주입 */}
				<h2 className="text-2xl font-bold text-gray-900 mb-5">{title}</h2>

				{/* 카테고리 탭 */}
				<div className="flex border-b border-gray-200 mb-6">
					{categories.map((cat) => (
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

				{/* 상품 그리드: 4열 2행 = 8개 */}
				<div className="grid grid-cols-4 gap-x-6 gap-y-16">
					{currentProducts.map((product) => (
						<div
							key={product.id}
							onClick={() => navigate(`/product/${product.id}`)}
							className="group flex flex-col cursor-pointer">
							{/* 상품 이미지 */}
							<div
								className="relative w-full rounded-xl overflow-hidden mb-3"
								style={{ aspectRatio: "1 / 1" }}>
								<img
									src={product.image_url}
									alt={product.name}
									className="w-full h-full object-cover"
								/>
								{/* 장바구니 버튼 */}
								<button
									className="absolute bottom-2.5 right-2.5 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
									aria-label="장바구니 담기">
									<ShoppingCart className="w-4 h-4 text-gray-700" />
								</button>
							</div>

							{/* 상품 정보 */}
							<div className="flex flex-col gap-1">
								{/* 상품명 */}
								<p className="text-sm text-gray-900 leading-snug line-clamp-2">
									{product.name}
								</p>

								{/* 상품 설명 (1줄 요약) */}
								<p className="text-xs text-gray-400 line-clamp-1">
									{product.description}
								</p>

								{/* 가격 */}
								<p className="text-base font-bold text-gray-900 mt-0.5">
									{product.price.toLocaleString()}원
								</p>

								{/* 재고 */}
								<div className="flex items-center gap-1 mt-0.5">
									<span className="text-xs text-gray-500">
										재고 {product.stock}개
									</span>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* 전체보기 버튼 */}
				<div className="flex justify-center mt-10">
					<button className="px-16 py-4 border border-gray-200 rounded-2xl flex items-center justify-center gap-1.5 text-gray-500 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all">
						<span>{currentCategory.label} 전체보기</span>
						<svg
							className="w-4 h-4"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
}
