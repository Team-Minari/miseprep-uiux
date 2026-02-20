import { useState } from "react";
import { ShoppingCart, Star } from "lucide-react";

interface Product {
	id: number;
	brand: string;
	name: string;
	price: number;
	rating: number;
	emoji: string;
	bg: string;
}

interface Category {
	id: string;
	label: string;
	products: Product[];
}

interface ProductSectionProps {
	title: string;
}

const categories: Category[] = [
	{
		id: "food",
		label: "식품 및 식자재",
		products: [
			{
				id: 1,
				brand: "피코크",
				name: "한우 불고기 밀키트 450g",
				price: 12900,
				rating: 4.8,
				emoji: "�",
				bg: "#fff0f0",
			},
			{
				id: 2,
				brand: "노브랜드",
				name: "국내산 계란 30구",
				price: 6900,
				rating: 4.7,
				emoji: "🥚",
				bg: "#fffbf0",
			},
			{
				id: 3,
				brand: "풀무원",
				name: "국산콩 두부 300g×2입",
				price: 3480,
				rating: 4.6,
				emoji: "�",
				bg: "#f5f5f0",
			},
			{
				id: 4,
				brand: "CJ제일제당",
				name: "햇반 210g×12개",
				price: 14900,
				rating: 4.9,
				emoji: "�",
				bg: "#fef9f0",
			},
			{
				id: 5,
				brand: "동원",
				name: "참치 135g×4캔",
				price: 8900,
				rating: 4.7,
				emoji: "🐟",
				bg: "#f0f7ff",
			},
			{
				id: 6,
				brand: "오뚜기",
				name: "진라면 순한맛 5입",
				price: 3200,
				rating: 4.5,
				emoji: "🍜",
				bg: "#fff5e8",
			},
			{
				id: 7,
				brand: "노브랜드",
				name: "냉동 새우 500g",
				price: 9900,
				rating: 4.6,
				emoji: "�",
				bg: "#fff0f5",
			},
			{
				id: 8,
				brand: "피코크",
				name: "로제파스타 소스 200g",
				price: 4500,
				rating: 4.4,
				emoji: "🍝",
				bg: "#fff0ee",
			},
		],
	},
	{
		id: "living",
		label: "생활용품",
		products: [
			{
				id: 9,
				brand: "유한킴벌리",
				name: "크리넥스 티슈 250매×6입",
				price: 12900,
				rating: 4.8,
				emoji: "�",
				bg: "#f5f5ff",
			},
			{
				id: 10,
				brand: "LG생활건강",
				name: "페리오 치약 세트 3입",
				price: 7900,
				rating: 4.6,
				emoji: "🪥",
				bg: "#f0f5ff",
			},
			{
				id: 11,
				brand: "아모레퍼시픽",
				name: "해피바스 바디워시 500ml",
				price: 6900,
				rating: 4.5,
				emoji: "🧴",
				bg: "#fff5f0",
			},
			{
				id: 12,
				brand: "노브랜드",
				name: "쓰레기봉투 20L×50매",
				price: 5900,
				rating: 4.3,
				emoji: "🗑️",
				bg: "#f5f5f5",
			},
			{
				id: 13,
				brand: "3M",
				name: "스카치 투명테이프 3입",
				price: 4500,
				rating: 4.7,
				emoji: "📦",
				bg: "#fff8f0",
			},
			{
				id: 14,
				brand: "유한양행",
				name: "유한락스 표백제 2L",
				price: 3900,
				rating: 4.4,
				emoji: "�",
				bg: "#f0f8ff",
			},
			{
				id: 15,
				brand: "피지오겔",
				name: "데일리 모이스처 로션 200ml",
				price: 18900,
				rating: 4.8,
				emoji: "🧴",
				bg: "#fff5f5",
			},
			{
				id: 16,
				brand: "깨끗한나라",
				name: "순수한면 생리대 중형 32매",
				price: 8900,
				rating: 4.6,
				emoji: "�",
				bg: "#f0fff0",
			},
		],
	},
	{
		id: "kitchen",
		label: "주방용품",
		products: [
			{
				id: 17,
				brand: "락앤락",
				name: "클리어 밀폐용기 4P세트",
				price: 19900,
				rating: 4.9,
				emoji: "�",
				bg: "#f0f8ff",
			},
			{
				id: 18,
				brand: "해피콜",
				name: "IH 프라이팬 28cm",
				price: 34900,
				rating: 4.8,
				emoji: "�",
				bg: "#f5f5f5",
			},
			{
				id: 19,
				brand: "노브랜드",
				name: "식기건조대 스텐 대형",
				price: 15900,
				rating: 4.5,
				emoji: "🫗",
				bg: "#fff8f5",
			},
			{
				id: 20,
				brand: "키친아트",
				name: "도마 항균 양면 대형",
				price: 12900,
				rating: 4.6,
				emoji: "🔪",
				bg: "#f0fff0",
			},
			{
				id: 21,
				brand: "쿠쿠",
				name: "전기압력밥솥 6인용",
				price: 89000,
				rating: 4.9,
				emoji: "🍚",
				bg: "#fff0f0",
			},
			{
				id: 22,
				brand: "노브랜드",
				name: "칼갈이 세라믹 2단",
				price: 8900,
				rating: 4.4,
				emoji: "🗡️",
				bg: "#f5f5ff",
			},
			{
				id: 23,
				brand: "실리쿡",
				name: "실리콘 주방장갑 2P",
				price: 5900,
				rating: 4.7,
				emoji: "🧤",
				bg: "#fff5e8",
			},
			{
				id: 24,
				brand: "테팔",
				name: "유리 계량컵 500ml",
				price: 7900,
				rating: 4.5,
				emoji: "🥛",
				bg: "#f0f5ff",
			},
		],
	},
	{
		id: "office",
		label: "사무용품",
		products: [
			{
				id: 25,
				brand: "모나미",
				name: "볼펜 0.5mm 10자루",
				price: 3900,
				rating: 4.6,
				emoji: "✒️",
				bg: "#f0f0ff",
			},
			{
				id: 26,
				brand: "3M",
				name: "포스트잇 76×76mm 6색 6패드",
				price: 7900,
				rating: 4.8,
				emoji: "📝",
				bg: "#fff8f0",
			},
			{
				id: 27,
				brand: "더존",
				name: "A4 복사용지 80g 500매",
				price: 5900,
				rating: 4.5,
				emoji: "📄",
				bg: "#f5f5f5",
			},
			{
				id: 28,
				brand: "알파",
				name: "스테이플러 대용량 No.10",
				price: 6900,
				rating: 4.4,
				emoji: "📎",
				bg: "#f0f8ff",
			},
			{
				id: 29,
				brand: "노브랜드",
				name: "투명 파일 케이스 20개입",
				price: 4900,
				rating: 4.3,
				emoji: "📁",
				bg: "#fff0f5",
			},
			{
				id: 30,
				brand: "삼성",
				name: "USB 메모리 64GB",
				price: 12900,
				rating: 4.7,
				emoji: "💾",
				bg: "#f5f0ff",
			},
			{
				id: 31,
				brand: "로지텍",
				name: "무선 마우스 M185",
				price: 19900,
				rating: 4.8,
				emoji: "🖱️",
				bg: "#f0f5f0",
			},
			{
				id: 32,
				brand: "노브랜드",
				name: "형광펜 6색 세트",
				price: 3900,
				rating: 4.5,
				emoji: "🖊️",
				bg: "#fffff0",
			},
		],
	},
	{
		id: "fashion",
		label: "패션의류/잡화",
		products: [
			{
				id: 33,
				brand: "노브랜드",
				name: "기본 코튼 티셔츠 (화이트)",
				price: 9900,
				rating: 4.5,
				emoji: "👕",
				bg: "#f5f5f5",
			},
			{
				id: 34,
				brand: "스파오",
				name: "슬림핏 청바지 32인치",
				price: 29900,
				rating: 4.6,
				emoji: "👖",
				bg: "#f0f0ff",
			},
			{
				id: 35,
				brand: "노브랜드",
				name: "클래식 스니커즈 270mm",
				price: 24900,
				rating: 4.7,
				emoji: "👟",
				bg: "#fff5f0",
			},
			{
				id: 36,
				brand: "내셔널지오그래픽",
				name: "야구모자 베이지",
				price: 19900,
				rating: 4.8,
				emoji: "🧢",
				bg: "#fff8f0",
			},
			{
				id: 37,
				brand: "폴로",
				name: "캔버스 토트백 대형",
				price: 34900,
				rating: 4.6,
				emoji: "👜",
				bg: "#f5f0e8",
			},
			{
				id: 38,
				brand: "노브랜드",
				name: "양말 5켤레 세트",
				price: 7900,
				rating: 4.4,
				emoji: "�",
				bg: "#f0fff0",
			},
			{
				id: 39,
				brand: "썬스톤",
				name: "선글라스 UV400",
				price: 14900,
				rating: 4.5,
				emoji: "🕶️",
				bg: "#f0f5ff",
			},
			{
				id: 40,
				brand: "반클리프",
				name: "실버 팔찌 체인형",
				price: 49900,
				rating: 4.9,
				emoji: "💍",
				bg: "#f8f8f8",
			},
		],
	},
	{
		id: "books",
		label: "도서/음반/DVD",
		products: [
			{
				id: 41,
				brand: "위즈덤하우스",
				name: "원씽 (게리 켈러)",
				price: 16800,
				rating: 4.8,
				emoji: "📗",
				bg: "#f0fff0",
			},
			{
				id: 42,
				brand: "한빛미디어",
				name: "모던 리액트 Deep Dive",
				price: 45000,
				rating: 4.9,
				emoji: "📘",
				bg: "#f0f5ff",
			},
			{
				id: 43,
				brand: "SM엔터",
				name: "aespa - Armageddon (정규 1집)",
				price: 18900,
				rating: 4.9,
				emoji: "💿",
				bg: "#fff0f5",
			},
			{
				id: 44,
				brand: "유니버설",
				name: "BTS - Proof (앤솔로지 앨범)",
				price: 24900,
				rating: 4.8,
				emoji: "🎵",
				bg: "#f5f0ff",
			},
			{
				id: 45,
				brand: "롤링다이스",
				name: "보드게임 - 스플렌더",
				price: 39900,
				rating: 4.7,
				emoji: "�",
				bg: "#fff8f0",
			},
			{
				id: 46,
				brand: "길벗",
				name: "혼자 공부하는 파이썬 (2판)",
				price: 22000,
				rating: 4.7,
				emoji: "📙",
				bg: "#fff5e8",
			},
			{
				id: 47,
				brand: "워너브라더스",
				name: "인터스텔라 4K UHD 블루레이",
				price: 28900,
				rating: 4.9,
				emoji: "�",
				bg: "#f0f0ff",
			},
			{
				id: 48,
				brand: "소니뮤직",
				name: "Harry Styles - Harry's House",
				price: 19900,
				rating: 4.6,
				emoji: "🎸",
				bg: "#f0fff0",
			},
		],
	},
];

export default function ProductSection({ title }: ProductSectionProps) {
	const [activeCategory, setActiveCategory] = useState("food");

	const currentCategory = categories.find((c) => c.id === activeCategory)!;

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
					{currentCategory.products.map((product) => (
						<div
							key={product.id}
							className="group flex flex-col cursor-pointer">
							{/* 상품 이미지 */}
							<div
								className="relative w-full rounded-xl overflow-hidden mb-3"
								style={{ aspectRatio: "1 / 1", background: product.bg }}>
								<div className="w-full h-full flex items-center justify-center text-7xl">
									{product.emoji}
								</div>
								{/* 장바구니 버튼 */}
								<button
									className="absolute bottom-2.5 right-2.5 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
									aria-label="장바구니 담기">
									<ShoppingCart className="w-4 h-4 text-gray-700" />
								</button>
							</div>

							{/* 상품 정보 */}
							<div className="flex flex-col gap-1">
								{/* 브랜드 */}
								<p className="text-xs text-gray-400">{product.brand}</p>

								{/* 상품명 */}
								<p className="text-sm text-gray-900 leading-snug line-clamp-2">
									{product.name}
								</p>

								{/* 가격 */}
								<p className="text-base font-bold text-gray-900 mt-0.5">
									{product.price.toLocaleString()}원
								</p>

								{/* 별점 */}
								<div className="flex items-center gap-1 mt-0.5">
									<Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
									<span className="text-xs text-gray-600 font-medium">
										{product.rating}
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
