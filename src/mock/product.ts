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
/** 상품 리뷰 */
export interface ProductReview {
	id: number;
	author: string;
	rating: number;
	date: string;
	content: string;
	helpful: number;
	image: string | null;
}

/** 상품 옵션 */
export interface ProductOption {
	value: string;
	label: string;
}

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
	originalPrice: number;
	discount: number;
	rating: number;
	reviewCount: number;
	seller: string;
	images: string[];
	options: ProductOption[];
	features: ProductFeature[];
	specs: ProductSpec[];
	reviews: ProductReview[];
	breadcrumb: string[];
}

/** 카테고리 (ProductSection 탭) */
export interface Category {
	id: string;
	label: string;
}

// 카테고리 목록
export const categories: Category[] = [
	{ id: "food", label: "식품 및 식자재" },
	{ id: "living", label: "생활용품" },
	{ id: "kitchen", label: "주방용품" },
	{ id: "office", label: "사무용품" },
	{ id: "fashion", label: "패션의류/잡화" },
	{ id: "books", label: "도서/음반/DVD" },
];

// 전체 상품 데이터
export const products: Product[] = [
	// ── 식품 및 식자재 ──
	{
		id: 1,
		image_url:
			"https://images.unsplash.com/photo-1763140446057-9becaa30b868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "한우 불고기 밀키트 450g",
		description:
			"피코크 브랜드의 프리미엄 한우 불고기 밀키트. 신선한 한우와 특제 양념으로 간편하게 불고기를 즐길 수 있습니다.",
		price: 12900,
		stock: 150,
		category: "food",
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
		category: "food",
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
		category: "food",
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
		category: "food",
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
		category: "food",
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
		category: "food",
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
		category: "food",
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
		category: "food",
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

	// ── 주방용품 ──
	{
		id: 17,
		image_url:
			"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "클리어 밀폐용기 4P세트",
		description:
			"락앤락 클리어 밀폐용기 세트. 강력한 밀폐력으로 식재료를 신선하게 보관할 수 있습니다.",
		price: 19900,
		stock: 180,
		category: "kitchen",
		created_at: "2026-01-10T08:00:00",
		updated_at: "2026-02-19T13:00:00",
	},
	{
		id: 18,
		image_url:
			"https://images.unsplash.com/photo-1585664811087-47f65abbad64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "IH 프라이팬 28cm",
		description:
			"해피콜 IH 프라이팬. 인덕션 호환 가능한 논스틱 코팅 프라이팬으로 모든 열원에서 사용 가능합니다.",
		price: 34900,
		stock: 120,
		category: "kitchen",
		created_at: "2026-01-08T09:00:00",
		updated_at: "2026-02-20T16:00:00",
	},
	{
		id: 19,
		image_url:
			"https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "식기건조대 스텐 대형",
		description:
			"노브랜드 스테인리스 식기건조대. 녹슬지 않는 스텐 소재로 위생적으로 식기를 건조할 수 있습니다.",
		price: 15900,
		stock: 90,
		category: "kitchen",
		created_at: "2026-01-15T10:00:00",
		updated_at: "2026-02-18T14:00:00",
	},
	{
		id: 20,
		image_url:
			"https://images.unsplash.com/photo-1594226801341-41427b4e5c22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "도마 항균 양면 대형",
		description:
			"키친아트 항균 양면 도마. 고밀도 소재로 칼 자국이 잘 생기지 않으며 항균 처리되어 위생적입니다.",
		price: 12900,
		stock: 200,
		category: "kitchen",
		created_at: "2026-01-12T08:00:00",
		updated_at: "2026-02-21T10:00:00",
	},
	{
		id: 21,
		image_url:
			"https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "전기압력밥솥 6인용",
		description:
			"쿠쿠 전기압력밥솥. 다양한 취사 모드와 간편한 세척으로 매일 맛있는 밥을 지을 수 있습니다.",
		price: 89000,
		stock: 50,
		category: "kitchen",
		created_at: "2026-01-02T07:00:00",
		updated_at: "2026-02-20T12:00:00",
	},
	{
		id: 22,
		image_url:
			"https://images.unsplash.com/photo-1593618998160-e34014e67546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "칼갈이 세라믹 2단",
		description:
			"노브랜드 세라믹 칼갈이. 2단계 연마 시스템으로 무디어진 칼날을 간편하게 복원시킵니다.",
		price: 8900,
		stock: 300,
		category: "kitchen",
		created_at: "2026-01-17T09:00:00",
		updated_at: "2026-02-19T15:00:00",
	},
	{
		id: 23,
		image_url:
			"https://images.unsplash.com/photo-1556911220-e15b29be8c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "실리콘 주방장갑 2P",
		description:
			"실리쿡 실리콘 주방장갑. 내열 250℃까지 견디며 미끄럼 방지 처리로 안전하게 사용할 수 있습니다.",
		price: 5900,
		stock: 350,
		category: "kitchen",
		created_at: "2026-01-19T10:00:00",
		updated_at: "2026-02-21T09:00:00",
	},
	{
		id: 24,
		image_url:
			"https://images.unsplash.com/photo-1530982011887-3cc11cc85693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "유리 계량컵 500ml",
		description:
			"테팔 유리 계량컵. 내열 유리 소재로 전자레인지 사용 가능하며 눈금이 선명합니다.",
		price: 7900,
		stock: 280,
		category: "kitchen",
		created_at: "2026-01-21T08:00:00",
		updated_at: "2026-02-20T14:00:00",
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

	// ── 패션의류/잡화 ──
	{
		id: 33,
		image_url:
			"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "기본 코튼 티셔츠 (화이트)",
		description:
			"노브랜드 기본 코튼 티셔츠. 100% 면 소재로 부드러운 착용감과 다양한 스타일링이 가능합니다.",
		price: 9900,
		stock: 500,
		category: "fashion",
		created_at: "2026-01-08T08:00:00",
		updated_at: "2026-02-20T09:00:00",
	},
	{
		id: 34,
		image_url:
			"https://images.unsplash.com/photo-1542272604-787c3835535d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "슬림핏 청바지 32인치",
		description:
			"스파오 슬림핏 청바지. 신축성 있는 데님 소재로 편안한 착용감과 깔끔한 실루엣을 제공합니다.",
		price: 29900,
		stock: 220,
		category: "fashion",
		created_at: "2026-01-10T09:00:00",
		updated_at: "2026-02-19T11:00:00",
	},
	{
		id: 35,
		image_url:
			"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "클래식 스니커즈 270mm",
		description:
			"노브랜드 클래식 스니커즈. 심플한 디자인으로 어떤 코디에나 어울리는 데일리 슈즈입니다.",
		price: 24900,
		stock: 180,
		category: "fashion",
		created_at: "2026-01-12T10:00:00",
		updated_at: "2026-02-21T13:00:00",
	},
	{
		id: 36,
		image_url:
			"https://images.unsplash.com/photo-1588850561407-ed78c334e67a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "야구모자 베이지",
		description:
			"내셔널지오그래픽 야구모자. 코튼 소재의 편안한 착용감과 브랜드 로고 자수가 포인트입니다.",
		price: 19900,
		stock: 300,
		category: "fashion",
		created_at: "2026-01-15T08:00:00",
		updated_at: "2026-02-20T14:00:00",
	},
	{
		id: 37,
		image_url:
			"https://images.unsplash.com/photo-1591561954557-26941169b49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "캔버스 토트백 대형",
		description:
			"폴로 캔버스 토트백. 넉넉한 수납공간과 견고한 캔버스 소재로 데일리 백으로 활용 가능합니다.",
		price: 34900,
		stock: 130,
		category: "fashion",
		created_at: "2026-01-18T09:00:00",
		updated_at: "2026-02-19T15:00:00",
	},
	{
		id: 38,
		image_url:
			"https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "양말 5켤레 세트",
		description:
			"노브랜드 양말 세트. 코튼 혼방 소재로 통기성이 좋으며 데일리용으로 최적화된 기본 양말입니다.",
		price: 7900,
		stock: 600,
		category: "fashion",
		created_at: "2026-01-20T10:00:00",
		updated_at: "2026-02-20T12:00:00",
	},
	{
		id: 39,
		image_url:
			"https://images.unsplash.com/photo-1511499767150-a48a237f0083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "선글라스 UV400",
		description:
			"썬스톤 선글라스. UV400 자외선 차단으로 눈을 보호하며 스타일리시한 디자인이 특징입니다.",
		price: 14900,
		stock: 250,
		category: "fashion",
		created_at: "2026-01-22T08:00:00",
		updated_at: "2026-02-21T10:00:00",
	},
	{
		id: 40,
		image_url:
			"https://images.unsplash.com/photo-1515562141589-67f0d569b6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "실버 팔찌 체인형",
		description:
			"반클리프 실버 팔찌. 925 스털링 실버 소재로 고급스러운 광택과 심플한 체인 디자인이 매력적입니다.",
		price: 49900,
		stock: 80,
		category: "fashion",
		created_at: "2026-01-25T09:00:00",
		updated_at: "2026-02-20T16:00:00",
	},

	// ── 도서/음반/DVD ──
	{
		id: 41,
		image_url:
			"https://images.unsplash.com/photo-1544947950-fa07a98d237f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "원씽 (게리 켈러)",
		description:
			"위즈덤하우스 출판. 성공한 사람들의 단 하나의 비밀을 밝히는 자기계발 베스트셀러입니다.",
		price: 16800,
		stock: 400,
		category: "books",
		created_at: "2026-01-03T07:00:00",
		updated_at: "2026-02-18T09:00:00",
	},
	{
		id: 42,
		image_url:
			"https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "모던 리액트 Deep Dive",
		description:
			"한빛미디어 출판. React의 핵심 개념부터 고급 패턴까지 깊이 있게 다루는 기술 서적입니다.",
		price: 45000,
		stock: 150,
		category: "books",
		created_at: "2026-01-06T08:00:00",
		updated_at: "2026-02-21T11:00:00",
	},
	{
		id: 43,
		image_url:
			"https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "aespa - Armageddon (정규 1집)",
		description:
			"SM엔터테인먼트. aespa의 첫 정규 앨범으로 미래적 세계관과 강렬한 퍼포먼스가 담겨 있습니다.",
		price: 18900,
		stock: 350,
		category: "books",
		created_at: "2026-01-10T09:00:00",
		updated_at: "2026-02-20T13:00:00",
	},
	{
		id: 44,
		image_url:
			"https://images.unsplash.com/photo-1511379938547-c1f69419868d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "BTS - Proof (앤솔로지 앨범)",
		description: "유니버설뮤직. BTS의 9년 활동을 총망라한 앤솔로지 앨범입니다.",
		price: 24900,
		stock: 200,
		category: "books",
		created_at: "2026-01-08T10:00:00",
		updated_at: "2026-02-19T14:00:00",
	},
	{
		id: 45,
		image_url:
			"https://images.unsplash.com/photo-1632501641765-e568d28b0015?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "보드게임 - 스플렌더",
		description:
			"롤링다이스. 전략적 보석 수집 보드게임으로 2-4인 플레이 가능, 30분 내외 플레이 타임입니다.",
		price: 39900,
		stock: 100,
		category: "books",
		created_at: "2026-01-14T11:00:00",
		updated_at: "2026-02-20T10:00:00",
	},
	{
		id: 46,
		image_url:
			"https://images.unsplash.com/photo-1543002588-bfa74002ed7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "혼자 공부하는 파이썬 (2판)",
		description:
			"길벗 출판. 프로그래밍 입문자를 위한 파이썬 학습서로 실습 중심의 친절한 설명이 특징입니다.",
		price: 22000,
		stock: 280,
		category: "books",
		created_at: "2026-01-16T09:00:00",
		updated_at: "2026-02-21T12:00:00",
	},
	{
		id: 47,
		image_url:
			"https://images.unsplash.com/photo-1478720568477-152d9b164e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "인터스텔라 4K UHD 블루레이",
		description:
			"워너브라더스. 크리스토퍼 놀란 감독의 명작 SF 영화를 4K UHD 화질로 감상할 수 있습니다.",
		price: 28900,
		stock: 120,
		category: "books",
		created_at: "2026-01-12T10:00:00",
		updated_at: "2026-02-19T16:00:00",
	},
	{
		id: 48,
		image_url:
			"https://images.unsplash.com/photo-1484755560615-a4c64e778571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "Harry Styles - Harry's House",
		description:
			"소니뮤직. Harry Styles의 3집 앨범으로 팝과 인디 사운드가 조화를 이룬 음반입니다.",
		price: 19900,
		stock: 190,
		category: "books",
		created_at: "2026-01-20T08:00:00",
		updated_at: "2026-02-20T15:00:00",
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
	category: "food",
	created_at: "2026-01-02T07:00:00",
	updated_at: "2026-02-21T18:00:00",

	// 확장 필드
	subtitle: "최상급 한우로 만든 부드러운 등심",
	originalPrice: 55000,
	discount: 17,
	rating: 4.9,
	reviewCount: 28493,
	seller: "emart 신선식품",

	images: [
		"https://images.unsplash.com/photo-1763140446057-9becaa30b868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
		"https://images.unsplash.com/photo-1763633925155-ad1b70f984d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
		"https://images.unsplash.com/photo-1657143378504-681ac84e7b30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
		"https://images.unsplash.com/photo-1677751177812-eef0b47b888d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
	],

	options: [
		{ value: "300g", label: "300g (2인분)" },
		{ value: "500g", label: "500g (3-4인분)" },
		{ value: "800g", label: "800g (5-6인분)" },
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

	breadcrumb: ["홈", "신선식품", "정육/계란", "한우"],

	reviews: [
		{
			id: 1,
			author: "김**",
			rating: 5,
			date: "2026.02.15",
			content:
				"고기 품질이 정말 좋아요! 마블링도 적당하고 신선해서 가족들이 모두 만족했습니다. 다음에도 재구매 의사 있어요.",
			helpful: 342,
			image:
				"https://images.unsplash.com/photo-1758520387434-3ade1dbb4cf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
		},
		{
			id: 2,
			author: "이**",
			rating: 5,
			date: "2026.02.14",
			content:
				"처음 구매했는데 육질이 부드럽고 맛있어요. 포장도 깔끔하고 배송도 빨라서 좋았습니다.",
			helpful: 189,
			image: null,
		},
		{
			id: 3,
			author: "박**",
			rating: 4,
			date: "2026.02.13",
			content:
				"가격 대비 품질이 우수합니다. 다만 양이 조금 적은 것 같아요. 그래도 맛은 최고!",
			helpful: 127,
			image:
				"https://images.unsplash.com/photo-1633177188754-980c2a6b6266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
		},
		{
			id: 4,
			author: "최**",
			rating: 5,
			date: "2026.02.12",
			content:
				"진짜 맛있어요!! 특히 구워먹으면 육즙이 살아있어서 환상적입니다. 강력 추천!",
			helpful: 256,
			image: null,
		},
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
