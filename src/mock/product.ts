/** 상품 인터페이스 */
export interface Product {
	id: number;
	image_url: string;
	name: string;
	description: string;
	price: number;
	stock: number;
	category: string;
	created_at: string;
	updated_at: string;
}

// ProductDetailPage 전용 확장 타입

/** 상품 특징 */
export interface ProductFeature {
	text: string;
}

/** 상품 스펙 (상세 정보 테이블 행) */
export interface ProductSpec {
	label: string;
	value: string;
}

/** 상품 상세 정보 (Product 확장) */
export interface ProductDetail extends Product {
	subtitle: string;
	images: string[];
	features: ProductFeature[];
	specs: ProductSpec[];
}

/** 카테고리 (ProductSection 탭) */
export interface Category {
	id: string;
	label: string;
}

// 카테고리 목록
export const categories: Category[] = [
	{ id: "living", label: "생활용품" },
	{ id: "ingredients", label: "식재료" },
	{ id: "office", label: "사무용품" },
	{ id: "camping", label: "캠핑용품" },
];

// 전체 상품 데이터
export const products: Product[] = [
	// ── 식재료 ──
	{
		id: 1,
		image_url:
			"https://images.unsplash.com/photo-1763140446057-9becaa30b868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "한우 불고기 밀키트 450g",
		description:
			"피코크 브랜드의 프리미엄 한우 불고기 밀키트. 신선한 한우와 특제 양념으로 간편하게 불고기를 즐길 수 있습니다.",
		price: 12900,
		stock: 150,
		category: "ingredients",
		created_at: "2026-01-15T09:00:00",
		updated_at: "2026-02-20T14:30:00",
	},
	{
		id: 2,
		image_url:
			"https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "국내산 계란 30구",
		description:
			"노브랜드 국내산 신선 계란 30구. HACCP 인증 농장에서 당일 수거한 계란을 안전하게 배송합니다.",
		price: 6900,
		stock: 300,
		category: "ingredients",
		created_at: "2026-01-10T08:00:00",
		updated_at: "2026-02-21T10:00:00",
	},
	{
		id: 3,
		image_url:
			"https://images.unsplash.com/photo-1557142046-c704a3adf364?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "국산콩 두부 300g×2입",
		description:
			"풀무원 국산콩 100%로 만든 두부. 고소한 맛과 부드러운 식감이 특징입니다.",
		price: 3480,
		stock: 500,
		category: "ingredients",
		created_at: "2026-01-12T09:30:00",
		updated_at: "2026-02-19T11:00:00",
	},
	{
		id: 4,
		image_url:
			"https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "햇반 210g×12개",
		description:
			"CJ제일제당 햇반. 100% 국내산 쌀로 지은 즉석밥으로 전자레인지 2분이면 갓 지은 밥맛을 즐길 수 있습니다.",
		price: 14900,
		stock: 800,
		category: "ingredients",
		created_at: "2026-01-05T07:00:00",
		updated_at: "2026-02-20T09:00:00",
	},
	{
		id: 5,
		image_url:
			"https://images.unsplash.com/photo-1534483509719-3feaee7c30da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "참치 135g×4캔",
		description:
			"동원 참치. 깨끗한 바다에서 잡은 참치를 신선하게 가공한 프리미엄 참치캔입니다.",
		price: 8900,
		stock: 600,
		category: "ingredients",
		created_at: "2026-01-08T10:00:00",
		updated_at: "2026-02-18T15:00:00",
	},
	{
		id: 6,
		image_url:
			"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "진라면 순한맛 5입",
		description:
			"오뚜기 진라면 순한맛. 깊고 진한 국물 맛에 순한 매운맛을 더해 누구나 즐길 수 있는 라면입니다.",
		price: 3200,
		stock: 1200,
		category: "ingredients",
		created_at: "2026-01-03T08:00:00",
		updated_at: "2026-02-21T08:00:00",
	},
	{
		id: 7,
		image_url:
			"https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "냉동 새우 500g",
		description:
			"노브랜드 냉동 새우. 급속 냉동으로 신선함을 그대로 유지한 대하급 새우입니다.",
		price: 9900,
		stock: 200,
		category: "ingredients",
		created_at: "2026-01-14T11:00:00",
		updated_at: "2026-02-19T16:00:00",
	},
	{
		id: 8,
		image_url:
			"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "로제파스타 소스 200g",
		description:
			"피코크 로제파스타 소스. 토마토와 크림의 조화로운 맛으로 집에서도 레스토랑급 파스타를 즐길 수 있습니다.",
		price: 4500,
		stock: 400,
		category: "ingredients",
		created_at: "2026-01-20T09:00:00",
		updated_at: "2026-02-20T12:00:00",
	},

	// ── 생활용품 ──
	{
		id: 9,
		image_url:
			"https://images.unsplash.com/photo-1584556812952-905ffd0c611a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "크리넥스 티슈 250매×6입",
		description:
			"유한킴벌리 크리넥스 티슈. 부드러운 3겹 구조로 얼굴에도 안심하고 사용할 수 있습니다.",
		price: 12900,
		stock: 350,
		category: "living",
		created_at: "2026-01-06T08:00:00",
		updated_at: "2026-02-21T09:00:00",
	},
	{
		id: 10,
		image_url:
			"https://images.unsplash.com/photo-1559056199-641a0ac8b55e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "페리오 치약 세트 3입",
		description:
			"LG생활건강 페리오 치약 세트. 충치 예방과 시린이 케어를 동시에 해결하는 토탈케어 치약입니다.",
		price: 7900,
		stock: 450,
		category: "living",
		created_at: "2026-01-09T10:00:00",
		updated_at: "2026-02-19T14:00:00",
	},
	{
		id: 11,
		image_url:
			"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "해피바스 바디워시 500ml",
		description:
			"아모레퍼시픽 해피바스 바디워시. 자연 유래 성분으로 피부에 순하면서도 깨끗하게 세정합니다.",
		price: 6900,
		stock: 380,
		category: "living",
		created_at: "2026-01-11T09:00:00",
		updated_at: "2026-02-20T11:00:00",
	},
	{
		id: 12,
		image_url:
			"https://images.unsplash.com/photo-1610141189012-7f4eaa5e3505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "쓰레기봉투 20L×50매",
		description:
			"노브랜드 종량제 규격 쓰레기봉투. 튼튼한 재질로 찢어짐 없이 사용 가능합니다.",
		price: 5900,
		stock: 900,
		category: "living",
		created_at: "2026-01-07T08:00:00",
		updated_at: "2026-02-18T10:00:00",
	},
	{
		id: 13,
		image_url:
			"https://images.unsplash.com/photo-1586380951230-e6703d9f6833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "스카치 투명테이프 3입",
		description:
			"3M 스카치 투명테이프. 깔끔하게 붙고 쉽게 떼어지는 다용도 테이프입니다.",
		price: 4500,
		stock: 700,
		category: "living",
		created_at: "2026-01-13T11:00:00",
		updated_at: "2026-02-20T15:00:00",
	},
	{
		id: 14,
		image_url:
			"https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "유한락스 표백제 2L",
		description:
			"유한양행 유한락스 표백제. 강력한 살균력으로 주방과 욕실을 깨끗하게 관리합니다.",
		price: 3900,
		stock: 550,
		category: "living",
		created_at: "2026-01-04T07:00:00",
		updated_at: "2026-02-19T09:00:00",
	},
	{
		id: 15,
		image_url:
			"https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "데일리 모이스처 로션 200ml",
		description:
			"피지오겔 데일리 모이스처 로션. 민감한 피부를 위한 저자극 보습 로션입니다.",
		price: 18900,
		stock: 250,
		category: "living",
		created_at: "2026-01-16T10:00:00",
		updated_at: "2026-02-21T11:00:00",
	},
	{
		id: 16,
		image_url:
			"https://images.unsplash.com/photo-1583947215259-38e31be8751f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "순수한면 생리대 중형 32매",
		description:
			"깨끗한나라 순수한면 생리대. 순면 커버로 피부 자극을 최소화한 중형 생리대입니다.",
		price: 8900,
		stock: 420,
		category: "living",
		created_at: "2026-01-18T09:00:00",
		updated_at: "2026-02-20T10:00:00",
	},

	// ── 사무용품 ──
	{
		id: 25,
		image_url:
			"https://images.unsplash.com/photo-1585336261022-680e295ce3fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "볼펜 0.5mm 10자루",
		description:
			"모나미 볼펜. 부드러운 필기감과 선명한 잉크로 오랜 시간 사용해도 편안한 필기구입니다.",
		price: 3900,
		stock: 1000,
		category: "office",
		created_at: "2026-01-05T08:00:00",
		updated_at: "2026-02-18T10:00:00",
	},
	{
		id: 26,
		image_url:
			"https://images.unsplash.com/photo-1586075010923-2dd4570fb338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "포스트잇 76×76mm 6색 6패드",
		description:
			"3M 포스트잇. 떼었다 붙였다 반복 사용 가능하며 6가지 색상으로 효율적인 정리가 가능합니다.",
		price: 7900,
		stock: 600,
		category: "office",
		created_at: "2026-01-07T09:00:00",
		updated_at: "2026-02-20T11:00:00",
	},
	{
		id: 27,
		image_url:
			"https://images.unsplash.com/photo-1568702846914-96b305d2ead1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "A4 복사용지 80g 500매",
		description:
			"더존 A4 복사용지. 양면 인쇄에 적합한 80g 고백색도 용지로 잉크젯·레이저 프린터 호환 가능합니다.",
		price: 5900,
		stock: 800,
		category: "office",
		created_at: "2026-01-03T07:00:00",
		updated_at: "2026-02-19T09:00:00",
	},
	{
		id: 28,
		image_url:
			"https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "스테이플러 대용량 No.10",
		description:
			"알파 대용량 스테이플러. 한 번에 최대 30매까지 제본 가능한 사무실 필수 문구입니다.",
		price: 6900,
		stock: 450,
		category: "office",
		created_at: "2026-01-09T10:00:00",
		updated_at: "2026-02-20T15:00:00",
	},
	{
		id: 29,
		image_url:
			"https://images.unsplash.com/photo-1586281380349-632531db7ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "투명 파일 케이스 20개입",
		description:
			"노브랜드 투명 파일 케이스. A4 서류를 깔끔하게 정리할 수 있는 투명 PP 소재입니다.",
		price: 4900,
		stock: 700,
		category: "office",
		created_at: "2026-01-11T09:00:00",
		updated_at: "2026-02-18T14:00:00",
	},
	{
		id: 30,
		image_url:
			"https://images.unsplash.com/photo-1618410320928-25228d811631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "USB 메모리 64GB",
		description:
			"삼성 USB 메모리. USB 3.1 지원으로 빠른 전송 속도를 제공하며 메탈 소재로 내구성이 뛰어납니다.",
		price: 12900,
		stock: 320,
		category: "office",
		created_at: "2026-01-14T10:00:00",
		updated_at: "2026-02-21T11:00:00",
	},
	{
		id: 31,
		image_url:
			"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "무선 마우스 M185",
		description:
			"로지텍 무선 마우스 M185. 초소형 수신기와 긴 배터리 수명으로 편리한 무선 환경을 제공합니다.",
		price: 19900,
		stock: 160,
		category: "office",
		created_at: "2026-01-06T08:00:00",
		updated_at: "2026-02-20T10:00:00",
	},
	{
		id: 32,
		image_url:
			"https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "형광펜 6색 세트",
		description:
			"노브랜드 형광펜 세트. 선명한 6가지 형광 색상으로 필기 정리와 밑줄 표시에 유용합니다.",
		price: 3900,
		stock: 850,
		category: "office",
		created_at: "2026-01-16T09:00:00",
		updated_at: "2026-02-19T16:00:00",
	},

	// ── 캠핑용품 ──
	{
		id: 49,
		image_url:
			"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "원터치 팝업 텐트 3-4인용",
		description:
			"노브랜드 원터치 텐트. 3초 만에 펼쳐지는 간편한 설치로 초보 캠퍼에게 추천하는 제품입니다.",
		price: 49900,
		stock: 100,
		category: "camping",
		created_at: "2026-01-20T08:00:00",
		updated_at: "2026-02-20T15:00:00",
	},
	{
		id: 50,
		image_url:
			"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "캠핑용 폴딩 체어 세트 (2P)",
		description:
			"노브랜드 접이식 캠핑 의자. 튼튼한 프레임과 내구성이 뛰어난 옥스퍼드 원단으로 편안한 휴식을 제공합니다.",
		price: 29800,
		stock: 150,
		category: "camping",
		created_at: "2026-01-22T09:00:00",
		updated_at: "2026-02-19T11:00:00",
	},
	{
		id: 51,
		image_url:
			"https://images.unsplash.com/photo-1596263576925-d90d63691097?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "프리미엄 캠핑 화로대",
		description:
			"튼튼한 스테인리스 소재의 캠핑 화로대. 컴팩트한 사이즈로 수납과 이동이 편리합니다.",
		price: 35900,
		stock: 80,
		category: "camping",
		created_at: "2026-01-25T10:00:00",
		updated_at: "2026-02-21T13:00:00",
	},
	{
		id: 52,
		image_url:
			"https://images.unsplash.com/photo-1533900298318-6b8da08a523e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "대용량 아이스박스 30L",
		description:
			"강력한 보냉 성능을 자랑하는 아이스박스. 여름철 캠핑 및 야외 활동 시 식재료를 신선하게 보관합니다.",
		price: 45000,
		stock: 120,
		category: "camping",
		created_at: "2026-01-28T08:00:00",
		updated_at: "2026-02-20T14:00:00",
	},
];

// ──────────────────────────────────────────────
// ProductDetailPage 상세 데이터 (id=1 상품 기반)
// ──────────────────────────────────────────────

export const productDetail: ProductDetail = {
	// DB 테이블 필드
	id: 1,
	image_url:
		"https://images.unsplash.com/photo-1763140446057-9becaa30b868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
	name: "프리미엄 한우 등심",
	description:
		"최상급 1++등급 한우로 만든 부드러운 등심입니다. 적절한 마블링으로 고소하고 깊은 맛을 느낄 수 있으며, 스테이크·구이·샤브샤브 등 다양하게 활용 가능합니다.",
	price: 45800,
	stock: 75,
	category: "ingredients",
	created_at: "2026-01-02T07:00:00",
	updated_at: "2026-02-21T18:00:00",

	// 확장 필드
	subtitle: "최상급 한우로 만든 부드러운 등심",

	images: [
		"https://images.unsplash.com/photo-1763140446057-9becaa30b868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
		"https://images.unsplash.com/photo-1763633925155-ad1b70f984d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
		"https://images.unsplash.com/photo-1657143378504-681ac84e7b30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
		"https://images.unsplash.com/photo-1677751177812-eef0b47b888d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
	],

	features: [
		{ text: "최상급 1++등급 한우로 부드럽고 풍부한 육즙을 자랑합니다" },
		{ text: "적절한 마블링으로 고소하고 깊은 맛을 느낄 수 있습니다" },
		{ text: "신선도 유지를 위해 냉장 포장되어 배송됩니다" },
		{ text: "스테이크, 구이, 샤브샤브 등 다양하게 활용 가능합니다" },
	],

	specs: [
		{ label: "품목", value: "한우 등심" },
		{ label: "원산지", value: "국내산 (충청남도)" },
		{ label: "등급", value: "1++등급" },
		{ label: "보관방법", value: "냉장보관 (0~10℃)" },
		{ label: "유통기한", value: "제조일로부터 7일" },
	],
};

// ──────────────────────────────────────────────
// 유틸리티 함수
// ──────────────────────────────────────────────

/** 카테고리 ID로 해당 상품 목록 필터링 */
export const getProductsByCategory = (categoryId: string): Product[] =>
	products.filter((p) => p.category === categoryId);

/** 상품 ID로 단일 상품 조회 */
export const findProductById = (id: number): Product | undefined =>
	products.find((p) => p.id === id);
