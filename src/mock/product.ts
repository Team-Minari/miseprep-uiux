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

export interface ProductSnapshot {
	id: number;
	image_url: string;
	name: string;
	description: string;
	price: number;
	category: string;
}

// 카테고리 목록
export const categories: Category[] = [
	{ id: "best", label: "베스트" },
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

	// ── 식재료 추가 (id: 101~116, 총 24개) ──
	{
		id: 101,
		image_url:
			"https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "유기농 브로콜리 400g",
		description: "신선한 유기농 브로콜리. 비타민C와 식이섬유가 풍부합니다.",
		price: 3200,
		stock: 300,
		category: "ingredients",
		created_at: "2026-01-05T08:00:00",
		updated_at: "2026-02-20T09:00:00",
	},
	{
		id: 102,
		image_url:
			"https://images.unsplash.com/photo-1568702846914-96b305d2ead1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "제주 감귤 3kg",
		description: "새콤달콤한 제주산 감귤. 비타민이 풍부한 겨울 과일입니다.",
		price: 14900,
		stock: 200,
		category: "ingredients",
		created_at: "2026-01-10T09:00:00",
		updated_at: "2026-02-19T14:00:00",
	},
	{
		id: 103,
		image_url:
			"https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "국내산 사과 5개입",
		description: "아삭하고 달콤한 국내산 사과. 아침 식사 대용으로도 좋습니다.",
		price: 8900,
		stock: 250,
		category: "ingredients",
		created_at: "2026-01-12T10:00:00",
		updated_at: "2026-02-21T11:00:00",
	},
	{
		id: 104,
		image_url:
			"https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "청정원 순창 고추장 500g",
		description: "전통 방식으로 빚은 순창 고추장. 감칠맛이 풍부합니다.",
		price: 6900,
		stock: 400,
		category: "ingredients",
		created_at: "2026-01-08T08:00:00",
		updated_at: "2026-02-20T10:00:00",
	},
	{
		id: 105,
		image_url:
			"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "유기농 닭가슴살 400g",
		description:
			"촉촉하고 담백한 닭가슴살. 다이어트와 근육 형성에 도움이 됩니다.",
		price: 7900,
		stock: 180,
		category: "ingredients",
		created_at: "2026-01-15T10:00:00",
		updated_at: "2026-02-18T15:00:00",
	},
	{
		id: 106,
		image_url:
			"https://images.unsplash.com/photo-1563379926898-05f4575a45d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "국산 된장 500g",
		description: "전통 방식으로 만든 국산 된장. 구수한 맛이 일품입니다.",
		price: 5400,
		stock: 350,
		category: "ingredients",
		created_at: "2026-01-07T09:00:00",
		updated_at: "2026-02-21T09:00:00",
	},
	{
		id: 107,
		image_url:
			"https://images.unsplash.com/photo-1506459225024-1428097a7e18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "CJ 스팸 클래식 200g×3입",
		description: "남녀노소 누구나 좋아하는 스팸 클래식 세트입니다.",
		price: 11900,
		stock: 500,
		category: "ingredients",
		created_at: "2026-01-04T07:00:00",
		updated_at: "2026-02-19T10:00:00",
	},
	{
		id: 108,
		image_url:
			"https://images.unsplash.com/photo-1599490659213-e2b9527bd087?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "국내산 당근 1kg",
		description:
			"베타카로틴 풍부한 국내산 신선 당근. 각종 요리에 활용도가 높습니다.",
		price: 2900,
		stock: 400,
		category: "ingredients",
		created_at: "2026-01-09T09:00:00",
		updated_at: "2026-02-20T12:00:00",
	},
	{
		id: 109,
		image_url:
			"https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "샘표 간장 500ml",
		description: "요리에 깊은 맛을 더해주는 샘표 진간장입니다.",
		price: 4200,
		stock: 600,
		category: "ingredients",
		created_at: "2026-01-06T08:00:00",
		updated_at: "2026-02-18T11:00:00",
	},
	{
		id: 110,
		image_url:
			"https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "고구마 2kg",
		description: "달콤하고 부드러운 고구마. 군고구마나 찜으로 즐기세요.",
		price: 7900,
		stock: 220,
		category: "ingredients",
		created_at: "2026-01-11T10:00:00",
		updated_at: "2026-02-21T14:00:00",
	},
	{
		id: 111,
		image_url:
			"https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "오뚜기 카레 200g×3입",
		description:
			"부드럽고 진한 맛의 오뚜기 카레. 가족 모두가 좋아하는 맛입니다.",
		price: 5600,
		stock: 480,
		category: "ingredients",
		created_at: "2026-01-13T09:00:00",
		updated_at: "2026-02-19T16:00:00",
	},
	{
		id: 112,
		image_url:
			"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "무항생제 삼겹살 500g",
		description:
			"무항생제 인증 국내산 신선 삼겹살. 마트 직송으로 신선도를 보장합니다.",
		price: 16900,
		stock: 130,
		category: "ingredients",
		created_at: "2026-01-17T10:00:00",
		updated_at: "2026-02-20T16:00:00",
	},
	{
		id: 113,
		image_url:
			"https://images.unsplash.com/photo-1607532941433-304659e8198a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "비비고 왕교자 350g",
		description: "육즙이 풍부한 비비고 왕교자. 만두피가 얇고 소가 꽉 찼습니다.",
		price: 7500,
		stock: 300,
		category: "ingredients",
		created_at: "2026-01-19T08:00:00",
		updated_at: "2026-02-21T10:00:00",
	},
	{
		id: 114,
		image_url:
			"https://images.unsplash.com/photo-1597362925123-77861d3fbac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "롯데 오렌지 주스 1.5L",
		description:
			"과육이 살아있는 100% 오렌지 주스. 아침을 상쾌하게 시작하세요.",
		price: 4900,
		stock: 350,
		category: "ingredients",
		created_at: "2026-01-21T09:00:00",
		updated_at: "2026-02-19T13:00:00",
	},
	{
		id: 115,
		image_url:
			"https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "두부면 200g×2입",
		description:
			"저탄수 고단백 두부면. 다이어트 식단에 적합한 건강 식품입니다.",
		price: 4800,
		stock: 210,
		category: "ingredients",
		created_at: "2026-01-23T10:00:00",
		updated_at: "2026-02-20T11:00:00",
	},
	{
		id: 116,
		image_url:
			"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "파스타 스파게티 500g",
		description: "이탈리아 정통 세몰리나 밀가루로 만든 스파게티면입니다.",
		price: 3500,
		stock: 450,
		category: "ingredients",
		created_at: "2026-01-26T08:00:00",
		updated_at: "2026-02-21T08:00:00",
	},

	// ── 생활용품 추가 (id: 201~216, 총 24개) ──
	{
		id: 201,
		image_url:
			"https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "섬유유연제 2L 라벤더향",
		description:
			"부드럽고 상쾌한 라벤더 향기가 오래 지속되는 섬유유연제입니다.",
		price: 9900,
		stock: 280,
		category: "living",
		created_at: "2026-01-05T08:00:00",
		updated_at: "2026-02-20T09:00:00",
	},
	{
		id: 202,
		image_url:
			"https://images.unsplash.com/photo-1563453392212-326f5e854473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "세탁세제 파우더 3kg",
		description: "강력한 세정력과 뛰어난 살균 효과의 프리미엄 세탁 세제입니다.",
		price: 14900,
		stock: 320,
		category: "living",
		created_at: "2026-01-08T09:00:00",
		updated_at: "2026-02-19T14:00:00",
	},
	{
		id: 203,
		image_url:
			"https://images.unsplash.com/photo-1585771724684-38269d6639fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "주방세제 500ml 레몬향",
		description: "그리스와 기름때를 깔끔하게 제거하는 주방 세제입니다.",
		price: 3900,
		stock: 500,
		category: "living",
		created_at: "2026-01-10T10:00:00",
		updated_at: "2026-02-21T11:00:00",
	},
	{
		id: 204,
		image_url:
			"https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "일회용 마스크 KF94 50매",
		description:
			"KF94 등급의 미세먼지 차단 마스크. 안전하고 편안한 착용감을 제공합니다.",
		price: 18900,
		stock: 600,
		category: "living",
		created_at: "2026-01-07T08:00:00",
		updated_at: "2026-02-18T10:00:00",
	},
	{
		id: 205,
		image_url:
			"https://images.unsplash.com/photo-1583947215259-38e31be8751f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "수건 대형 6매입",
		description: "부드럽고 흡수력이 좋은 순면 대형 수건 세트입니다.",
		price: 22900,
		stock: 160,
		category: "living",
		created_at: "2026-01-12T09:00:00",
		updated_at: "2026-02-20T15:00:00",
	},
	{
		id: 206,
		image_url:
			"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "고무장갑 M·L 2켤레",
		description: "내구성이 뛰어난 천연고무 장갑. 설거지와 청소에 필수입니다.",
		price: 3200,
		stock: 700,
		category: "living",
		created_at: "2026-01-14T11:00:00",
		updated_at: "2026-02-20T15:00:00",
	},
	{
		id: 207,
		image_url:
			"https://images.unsplash.com/photo-1616401784845-180882ba9ba8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "미용 면봉 500개입",
		description: "부드럽고 안전한 순면 미용 면봉 대용량 패키지입니다.",
		price: 4500,
		stock: 420,
		category: "living",
		created_at: "2026-01-16T10:00:00",
		updated_at: "2026-02-21T11:00:00",
	},
	{
		id: 208,
		image_url:
			"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "샴푸 680ml 손상모발용",
		description: "단백질 성분으로 손상된 모발을 집중 케어하는 샴푸입니다.",
		price: 12900,
		stock: 240,
		category: "living",
		created_at: "2026-01-19T09:00:00",
		updated_at: "2026-02-19T13:00:00",
	},
	{
		id: 209,
		image_url:
			"https://images.unsplash.com/photo-1571781926291-c477ebfd024b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "칫솔 4입 세트",
		description: "부드러운 모로 잇몸을 보호하는 가족용 칫솔 4개 세트입니다.",
		price: 5900,
		stock: 380,
		category: "living",
		created_at: "2026-01-21T10:00:00",
		updated_at: "2026-02-20T10:00:00",
	},
	{
		id: 210,
		image_url:
			"https://images.unsplash.com/photo-1601999009162-2459b78386a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "핸드워시 300ml 허브향",
		description: "99.9% 살균 효과의 폼 타입 핸드워시입니다.",
		price: 4800,
		stock: 450,
		category: "living",
		created_at: "2026-01-23T08:00:00",
		updated_at: "2026-02-18T12:00:00",
	},
	{
		id: 211,
		image_url:
			"https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "청소 극세사 걸레 5매",
		description: "강력한 흡수력과 먼지 제거력을 가진 극세사 청소포입니다.",
		price: 7900,
		stock: 300,
		category: "living",
		created_at: "2026-01-25T09:00:00",
		updated_at: "2026-02-21T09:00:00",
	},
	{
		id: 212,
		image_url:
			"https://images.unsplash.com/photo-1584556812952-905ffd0c611a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "두루마리 화장지 30롤",
		description: "부드럽고 실용적인 3겹 두루마리 화장지 대용량 패키지입니다.",
		price: 19900,
		stock: 500,
		category: "living",
		created_at: "2026-01-27T08:00:00",
		updated_at: "2026-02-20T16:00:00",
	},
	{
		id: 213,
		image_url:
			"https://images.unsplash.com/photo-1585771724684-38269d6639fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "욕실 청소용 스펀지 3입",
		description:
			"욕실 타일과 거울을 흠집 없이 깔끔하게 닦는 청소 스펀지입니다.",
		price: 3500,
		stock: 600,
		category: "living",
		created_at: "2026-01-29T10:00:00",
		updated_at: "2026-02-19T11:00:00",
	},
	{
		id: 214,
		image_url:
			"https://images.unsplash.com/photo-1523381294911-8d3cead13475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "빨래 건조대 스탠드형",
		description: "접이식 스탠드형 빨래 건조대. 실내외 모두 사용 가능합니다.",
		price: 24900,
		stock: 120,
		category: "living",
		created_at: "2026-02-01T08:00:00",
		updated_at: "2026-02-21T14:00:00",
	},
	{
		id: 215,
		image_url:
			"https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "지퍼백 대·소 혼합 30매",
		description: "냉동·냉장 보관에 적합한 밀폐형 지퍼백 혼합 세트입니다.",
		price: 4200,
		stock: 650,
		category: "living",
		created_at: "2026-02-03T09:00:00",
		updated_at: "2026-02-20T10:00:00",
	},
	{
		id: 216,
		image_url:
			"https://images.unsplash.com/photo-1602143407151-7111542de6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "손 소독제 500ml 펌프형",
		description:
			"에탄올 62% 함유 손 소독제. 바이러스와 세균을 효과적으로 제거합니다.",
		price: 6900,
		stock: 400,
		category: "living",
		created_at: "2026-02-05T10:00:00",
		updated_at: "2026-02-21T09:00:00",
	},

	// ── 사무용품 추가 (id: 301~316, 총 24개) ──
	{
		id: 301,
		image_url:
			"https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "A5 노트 5권 세트",
		description: "줄이 있는 A5 학습용·업무용 노트 5권 세트입니다.",
		price: 6900,
		stock: 500,
		category: "office",
		created_at: "2026-01-05T08:00:00",
		updated_at: "2026-02-20T09:00:00",
	},
	{
		id: 302,
		image_url:
			"https://images.unsplash.com/photo-1611532736597-de2d4265fba3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "가위 대형·소형 2종 세트",
		description: "업무와 일상 모두 사용 가능한 가위 2종 세트입니다.",
		price: 4900,
		stock: 380,
		category: "office",
		created_at: "2026-01-08T09:00:00",
		updated_at: "2026-02-19T14:00:00",
	},
	{
		id: 303,
		image_url:
			"https://images.unsplash.com/photo-1542621334-a254cf47733d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "컬러 마커 12색 세트",
		description:
			"선명한 발색과 뛰어난 내수성을 갖춘 컬러 마커 12색 패키지입니다.",
		price: 8900,
		stock: 300,
		category: "office",
		created_at: "2026-01-10T10:00:00",
		updated_at: "2026-02-21T11:00:00",
	},
	{
		id: 304,
		image_url:
			"https://images.unsplash.com/photo-1586075010923-2dd4570fb338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "파일 바인더 A4 4cm",
		description: "내구성이 뛰어난 D링 파일 바인더. 서류 정리에 필수입니다.",
		price: 5900,
		stock: 450,
		category: "office",
		created_at: "2026-01-12T09:00:00",
		updated_at: "2026-02-18T10:00:00",
	},
	{
		id: 305,
		image_url:
			"https://images.unsplash.com/photo-1504711434969-e33886168f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "인덱스 분류 탭 5색 세트",
		description: "서류 분류에 필수인 5가지 색상의 인덱스 탭 세트입니다.",
		price: 3200,
		stock: 600,
		category: "office",
		created_at: "2026-01-14T11:00:00",
		updated_at: "2026-02-20T15:00:00",
	},
	{
		id: 306,
		image_url:
			"https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "키보드 청소 키트",
		description: "컴퓨터 키보드와 모니터 청소에 필요한 청소 도구 세트입니다.",
		price: 9900,
		stock: 200,
		category: "office",
		created_at: "2026-01-16T10:00:00",
		updated_at: "2026-02-21T11:00:00",
	},
	{
		id: 307,
		image_url:
			"https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "지우개 대형 10개입",
		description: "깔끔하게 지워지는 무PVC 지우개 대용량 세트입니다.",
		price: 2900,
		stock: 800,
		category: "office",
		created_at: "2026-01-19T09:00:00",
		updated_at: "2026-02-19T13:00:00",
	},
	{
		id: 308,
		image_url:
			"https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "멀티탭 4구 3m",
		description:
			"안전 셔터 장착 4구 멀티탭. 사무실과 가정 모두 사용 가능합니다.",
		price: 14900,
		stock: 250,
		category: "office",
		created_at: "2026-01-21T10:00:00",
		updated_at: "2026-02-20T10:00:00",
	},
	{
		id: 309,
		image_url:
			"https://images.unsplash.com/photo-1585771724684-38269d6639fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "투명 명함 케이스 100매",
		description:
			"깔끔하게 명함을 보관할 수 있는 투명 아크릴 명함 케이스입니다.",
		price: 4500,
		stock: 400,
		category: "office",
		created_at: "2026-01-23T08:00:00",
		updated_at: "2026-02-18T12:00:00",
	},
	{
		id: 310,
		image_url:
			"https://images.unsplash.com/photo-1509395176047-4a66953fd231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "계산기 12자리 태양열",
		description: "태양열과 건전지 겸용의 12자리 사무용 계산기입니다.",
		price: 7900,
		stock: 300,
		category: "office",
		created_at: "2026-01-25T09:00:00",
		updated_at: "2026-02-21T09:00:00",
	},
	{
		id: 311,
		image_url:
			"https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "탁상용 시계 알람형",
		description: "심플한 디자인의 탁상시계. 알람 기능이 내장되어 있습니다.",
		price: 12900,
		stock: 180,
		category: "office",
		created_at: "2026-01-27T08:00:00",
		updated_at: "2026-02-20T16:00:00",
	},
	{
		id: 312,
		image_url:
			"https://images.unsplash.com/photo-1588702547954-4a4823027e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "마우스 패드 대형 XXL",
		description: "책상 전체를 커버하는 대형 XXL 마우스 패드입니다.",
		price: 11900,
		stock: 220,
		category: "office",
		created_at: "2026-01-29T10:00:00",
		updated_at: "2026-02-19T11:00:00",
	},
	{
		id: 313,
		image_url:
			"https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "손목 지지대 젤 타입",
		description: "장시간 타이핑 시 손목 피로를 줄여주는 젤 손목 지지대입니다.",
		price: 8900,
		stock: 280,
		category: "office",
		created_at: "2026-02-01T08:00:00",
		updated_at: "2026-02-21T14:00:00",
	},
	{
		id: 314,
		image_url:
			"https://images.unsplash.com/photo-1543965170-e399660d9c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "수정 테이프 10개입",
		description: "부드럽게 덮이는 고급 수정 테이프 대용량 패키지입니다.",
		price: 5900,
		stock: 550,
		category: "office",
		created_at: "2026-02-03T09:00:00",
		updated_at: "2026-02-20T10:00:00",
	},
	{
		id: 315,
		image_url:
			"https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "C타입 USB 허브 4포트",
		description:
			"노트북과 연결하는 C타입 4포트 USB 허브. 재택근무 필수품입니다.",
		price: 22900,
		stock: 150,
		category: "office",
		created_at: "2026-02-05T10:00:00",
		updated_at: "2026-02-21T09:00:00",
	},
	{
		id: 316,
		image_url:
			"https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "책상 정리함 5칸",
		description: "사무용품을 깔끔하게 정리하는 5칸 데스크 오거나이저입니다.",
		price: 16900,
		stock: 200,
		category: "office",
		created_at: "2026-02-07T08:00:00",
		updated_at: "2026-02-20T15:00:00",
	},

	// ── 캠핑용품 추가 (id: 401~420) ──
	{
		id: 401,
		image_url:
			"https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "캠핑 랜턴 LED 충전식",
		description:
			"밝기 조절이 가능한 충전식 LED 캠핑 랜턴. 방수 기능이 있습니다.",
		price: 22900,
		stock: 150,
		category: "camping",
		created_at: "2026-01-30T08:00:00",
		updated_at: "2026-02-20T15:00:00",
	},
	{
		id: 402,
		image_url:
			"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "침낭 -5℃ 머미형",
		description:
			"추운 계절 캠핑에 적합한 -5℃ 보온 침낭. 컴팩트하게 압축 수납됩니다.",
		price: 54900,
		stock: 90,
		category: "camping",
		created_at: "2026-02-01T09:00:00",
		updated_at: "2026-02-19T11:00:00",
	},
	{
		id: 403,
		image_url:
			"https://images.unsplash.com/photo-1550236520-7050f3582da0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "캠핑 코펠 세트 4인용",
		description:
			"가벼운 알루미늄 소재의 4인용 코펠 세트. 냄비·프라이팬 포함입니다.",
		price: 39900,
		stock: 110,
		category: "camping",
		created_at: "2026-02-03T10:00:00",
		updated_at: "2026-02-21T13:00:00",
	},
	{
		id: 404,
		image_url:
			"https://images.unsplash.com/photo-1537905569824-f89f14cceb68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "헤드 랜턴 200루멘",
		description:
			"가볍고 밝은 200루멘 헤드 랜턴. 야간 산행과 캠핑에 필수입니다.",
		price: 18900,
		stock: 200,
		category: "camping",
		created_at: "2026-02-05T08:00:00",
		updated_at: "2026-02-20T14:00:00",
	},
	{
		id: 405,
		image_url:
			"https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "캠핑 테이블 접이식 알루미늄",
		description: "가볍고 내구성 있는 알루미늄 접이식 캠핑 테이블입니다.",
		price: 34900,
		stock: 130,
		category: "camping",
		created_at: "2026-02-07T09:00:00",
		updated_at: "2026-02-19T11:00:00",
	},
	{
		id: 406,
		image_url:
			"https://images.unsplash.com/photo-1548192746-dd526f154ed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "모기 기피제 스프레이 200ml",
		description: "피부 자극이 적은 DEET 성분의 모기 기피제입니다.",
		price: 7900,
		stock: 350,
		category: "camping",
		created_at: "2026-02-09T10:00:00",
		updated_at: "2026-02-21T10:00:00",
	},
	{
		id: 407,
		image_url:
			"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "캠핑 매트 자충식 2인용",
		description: "자동으로 공기가 채워지는 편리한 자충식 캠핑 매트입니다.",
		price: 42900,
		stock: 100,
		category: "camping",
		created_at: "2026-02-11T08:00:00",
		updated_at: "2026-02-20T15:00:00",
	},
	{
		id: 408,
		image_url:
			"https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "불쏘시개 천연 착화제 20개",
		description: "천연 소재로 만든 착화제. 화로대 불 피우기를 간편하게 합니다.",
		price: 6900,
		stock: 400,
		category: "camping",
		created_at: "2026-02-13T09:00:00",
		updated_at: "2026-02-19T13:00:00",
	},
	{
		id: 409,
		image_url:
			"https://images.unsplash.com/photo-1501854140801-50d01698950b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "방수 타프 4×4m",
		description: "자외선 차단과 방수 기능을 겸비한 4×4m 캠핑 타프입니다.",
		price: 59900,
		stock: 70,
		category: "camping",
		created_at: "2026-02-15T10:00:00",
		updated_at: "2026-02-21T11:00:00",
	},
	{
		id: 410,
		image_url:
			"https://images.unsplash.com/photo-1596273312216-32cbe28e57b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "캠핑 가스 버너 1구",
		description: "경량 가스 버너. 야외에서 간편하게 요리를 즐기세요.",
		price: 24900,
		stock: 160,
		category: "camping",
		created_at: "2026-02-17T08:00:00",
		updated_at: "2026-02-20T16:00:00",
	},
	{
		id: 411,
		image_url:
			"https://images.unsplash.com/photo-1473863861393-68b974b69936?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "고중량 해먹 200kg",
		description: "최대 200kg을 지탱하는 내구성 높은 나일론 해먹입니다.",
		price: 29900,
		stock: 90,
		category: "camping",
		created_at: "2026-02-19T09:00:00",
		updated_at: "2026-02-21T09:00:00",
	},
	{
		id: 412,
		image_url:
			"https://images.unsplash.com/photo-1544552866-d3ed42536cfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "접이식 캠핑 워터 저그 10L",
		description: "쉽게 접히는 실리콘 소재 캠핑용 물통. 10L 대용량입니다.",
		price: 14900,
		stock: 220,
		category: "camping",
		created_at: "2026-02-21T10:00:00",
		updated_at: "2026-02-21T14:00:00",
	},
	{
		id: 413,
		image_url:
			"https://images.unsplash.com/photo-1510672981848-a1c4f1cb5ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "캠핑 멀티툴 18기능",
		description: "나이프·플라이어 등 18가지 기능을 포함한 캠핑 멀티툴입니다.",
		price: 32900,
		stock: 140,
		category: "camping",
		created_at: "2026-02-22T08:00:00",
		updated_at: "2026-02-22T15:00:00",
	},
	{
		id: 414,
		image_url:
			"https://images.unsplash.com/photo-1522163182402-834f871fd851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "캠핑 담요 극세사 양면",
		description:
			"가볍고 따뜻한 극세사 양면 캠핑 담요. 차박과 캠핑에 적합합니다.",
		price: 19900,
		stock: 180,
		category: "camping",
		created_at: "2026-02-23T09:00:00",
		updated_at: "2026-02-23T11:00:00",
	},
	{
		id: 415,
		image_url:
			"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "텐트 펙 20개입 알루미늄",
		description:
			"가볍고 단단한 알루미늄 소재 텐트 펙. 다양한 지형에 사용 가능합니다.",
		price: 8900,
		stock: 300,
		category: "camping",
		created_at: "2026-02-24T10:00:00",
		updated_at: "2026-02-24T13:00:00",
	},
	{
		id: 416,
		image_url:
			"https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "캠핑 팩킹 백팩 60L",
		description:
			"60L 대용량 캠핑 배낭. 등산과 장기 캠핑에 최적화된 디자인입니다.",
		price: 89900,
		stock: 60,
		category: "camping",
		created_at: "2026-02-25T08:00:00",
		updated_at: "2026-02-25T15:00:00",
	},

	// ── 베스트 (24개) ──
	{
		id: 501,
		image_url:
			"https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "프리미엄 스마트워치 Series X",
		description: "심박·혈압·수면 측정, GPS 내장의 프리미엄 스마트워치입니다.",
		price: 189900,
		stock: 80,
		category: "best",
		created_at: "2026-01-01T09:00:00",
		updated_at: "2026-02-20T10:00:00",
	},
	{
		id: 502,
		image_url:
			"https://images.unsplash.com/photo-1585386959984-a4155224a1ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "무선 블루투스 이어폰 Pro",
		description:
			"노이즈 캔슬링과 30시간 배터리를 탑재한 프리미엄 무선 이어폰입니다.",
		price: 149900,
		stock: 120,
		category: "best",
		created_at: "2026-01-02T09:00:00",
		updated_at: "2026-02-21T11:00:00",
	},
	{
		id: 503,
		image_url:
			"https://images.unsplash.com/photo-1491553895911-0055eca6402d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "러닝화 울트라부스트 2026",
		description:
			"반응성 높은 부스트 폼 쿠셔닝으로 장거리 러닝에 최적화된 신발입니다.",
		price: 179900,
		stock: 95,
		category: "best",
		created_at: "2026-01-03T08:00:00",
		updated_at: "2026-02-19T12:00:00",
	},
	{
		id: 504,
		image_url:
			"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "노트북 스탠드 알루미늄 6단계",
		description: "6단계 높이 조절이 가능한 알루미늄 합금 노트북 스탠드입니다.",
		price: 39900,
		stock: 200,
		category: "best",
		created_at: "2026-01-04T08:00:00",
		updated_at: "2026-02-20T09:00:00",
	},
	{
		id: 505,
		image_url:
			"https://images.unsplash.com/photo-1486401899868-0e435ed85128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "요가 매트 6mm 논슬립",
		description:
			"미끄럼 방지 TPE 소재의 두꺼운 요가 매트. 관절 보호에 탁월합니다.",
		price: 29900,
		stock: 150,
		category: "best",
		created_at: "2026-01-05T09:00:00",
		updated_at: "2026-02-21T10:00:00",
	},
	{
		id: 506,
		image_url:
			"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "캐리어 28인치 경량 TSA락",
		description:
			"1.8kg 초경량 폴리카보네이트 소재에 TSA 자물쇠가 내장된 캐리어입니다.",
		price: 129900,
		stock: 70,
		category: "best",
		created_at: "2026-01-06T08:00:00",
		updated_at: "2026-02-19T15:00:00",
	},
	{
		id: 507,
		image_url:
			"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "맥북 프로 파우치 16인치",
		description: "양털 내피로 스크래치를 방지하는 16인치 노트북 파우치입니다.",
		price: 24900,
		stock: 180,
		category: "best",
		created_at: "2026-01-07T09:00:00",
		updated_at: "2026-02-20T11:00:00",
	},
	{
		id: 508,
		image_url:
			"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "오버이어 헤드폰 스튜디오급",
		description:
			"40mm 드라이버로 풍부한 저음과 세밀한 고음을 재현하는 헤드폰입니다.",
		price: 89900,
		stock: 110,
		category: "best",
		created_at: "2026-01-08T08:00:00",
		updated_at: "2026-02-21T09:00:00",
	},
	{
		id: 509,
		image_url:
			"https://images.unsplash.com/photo-1585771724684-38269d6639fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "공기청정기 20평형 H13 헤파필터",
		description:
			"H13 등급 헤파필터로 초미세먼지 99.97%를 제거하는 공기청정기입니다.",
		price: 199900,
		stock: 60,
		category: "best",
		created_at: "2026-01-09T10:00:00",
		updated_at: "2026-02-20T14:00:00",
	},
	{
		id: 510,
		image_url:
			"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "에어프라이어 5.5L 디지털",
		description:
			"5.5L 대용량 에어프라이어. 기름 없이 바삭하게 튀김을 즐기세요.",
		price: 79900,
		stock: 130,
		category: "best",
		created_at: "2026-01-10T09:00:00",
		updated_at: "2026-02-19T13:00:00",
	},
	{
		id: 511,
		image_url:
			"https://images.unsplash.com/photo-1574482620826-40685ca5eef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "전동 킥보드 접이식 25km/h",
		description: "최대 25km/h, 주행거리 30km의 접이식 전동 킥보드입니다.",
		price: 349900,
		stock: 40,
		category: "best",
		created_at: "2026-01-11T08:00:00",
		updated_at: "2026-02-21T16:00:00",
	},
	{
		id: 512,
		image_url:
			"https://images.unsplash.com/photo-1587467512961-120760940315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "스탠드 선풍기 DC 모터 14단",
		description: "14단 풍속 조절이 가능한 저소음 DC 모터 스탠드 선풍기입니다.",
		price: 69900,
		stock: 90,
		category: "best",
		created_at: "2026-01-12T09:00:00",
		updated_at: "2026-02-20T10:00:00",
	},
	{
		id: 513,
		image_url:
			"https://images.unsplash.com/photo-1491553895911-0055eca6402d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "폼롤러 고밀도 45cm",
		description: "근막 이완과 근육 회복에 효과적인 고밀도 EPP 폼롤러입니다.",
		price: 18900,
		stock: 200,
		category: "best",
		created_at: "2026-01-13T10:00:00",
		updated_at: "2026-02-19T11:00:00",
	},
	{
		id: 514,
		image_url:
			"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "즉석 카메라 필름 20장 세트",
		description: "빈티지 감성의 즉석 카메라 전용 필름 20장 패키지입니다.",
		price: 19900,
		stock: 250,
		category: "best",
		created_at: "2026-01-14T08:00:00",
		updated_at: "2026-02-21T09:00:00",
	},
	{
		id: 515,
		image_url:
			"https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "에어맥스 운동화 한정판",
		description: "에어 쿠셔닝 기술이 적용된 한정판 에어맥스 운동화입니다.",
		price: 219900,
		stock: 50,
		category: "best",
		created_at: "2026-01-15T09:00:00",
		updated_at: "2026-02-20T15:00:00",
	},
	{
		id: 516,
		image_url:
			"https://images.unsplash.com/photo-1544947950-fa07a98d237f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "베스트셀러 소설 패키지 5권",
		description: "2025년 올해의 책 수상작 포함 베스트셀러 소설 5권 세트입니다.",
		price: 74900,
		stock: 160,
		category: "best",
		created_at: "2026-01-16T10:00:00",
		updated_at: "2026-02-19T14:00:00",
	},
	{
		id: 517,
		image_url:
			"https://images.unsplash.com/photo-1519710164239-da123dc03ef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "보온 텀블러 500ml 스탠리",
		description:
			"24시간 보온·48시간 보냉이 가능한 스테인리스 스틸 텀블러입니다.",
		price: 49900,
		stock: 300,
		category: "best",
		created_at: "2026-01-17T08:00:00",
		updated_at: "2026-02-21T10:00:00",
	},
	{
		id: 518,
		image_url:
			"https://images.unsplash.com/photo-1484820540004-14229fe36ca4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "LED 스탠드 조명 3색 조절",
		description: "밝기·색온도 조절이 가능한 눈 보호 LED 스탠드 조명입니다.",
		price: 34900,
		stock: 140,
		category: "best",
		created_at: "2026-01-18T09:00:00",
		updated_at: "2026-02-20T11:00:00",
	},
	{
		id: 519,
		image_url:
			"https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "아로마 디퓨저 초음파 300ml",
		description: "초음파 방식으로 향기를 퍼뜨리는 300ml 아로마 디퓨저입니다.",
		price: 29900,
		stock: 170,
		category: "best",
		created_at: "2026-01-19T10:00:00",
		updated_at: "2026-02-19T12:00:00",
	},
	{
		id: 520,
		image_url:
			"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "핏빗 스마트밴드 활동량 측정",
		description: "걸음수·칼로리·수면 패턴을 측정하는 슬림 스마트밴드입니다.",
		price: 99900,
		stock: 100,
		category: "best",
		created_at: "2026-01-20T08:00:00",
		updated_at: "2026-02-21T13:00:00",
	},
	{
		id: 521,
		image_url:
			"https://images.unsplash.com/photo-1583394838336-acd977736f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "무선 충전 패드 15W 고속",
		description: "최대 15W 고속 무선 충전을 지원하는 슬림 패드입니다.",
		price: 22900,
		stock: 280,
		category: "best",
		created_at: "2026-01-21T09:00:00",
		updated_at: "2026-02-20T10:00:00",
	},
	{
		id: 522,
		image_url:
			"https://images.unsplash.com/photo-1602143407151-7111542de6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "포켓 보조배터리 20000mAh",
		description:
			"20000mAh 대용량으로 스마트폰을 4~5회 충전 가능한 보조배터리입니다.",
		price: 39900,
		stock: 220,
		category: "best",
		created_at: "2026-01-22T10:00:00",
		updated_at: "2026-02-19T11:00:00",
	},
	{
		id: 523,
		image_url:
			"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "미니 프로젝터 1080P 포터블",
		description:
			"풀HD 1080P 해상도의 포터블 미니 프로젝터. 야외 영화 감상에 적합합니다.",
		price: 249900,
		stock: 55,
		category: "best",
		created_at: "2026-01-23T08:00:00",
		updated_at: "2026-02-21T14:00:00",
	},
	{
		id: 524,
		image_url:
			"https://images.unsplash.com/photo-1585771724684-38269d6639fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
		name: "전동 칫솔 음파진동 3모드",
		description:
			"분당 3만 회 음파 진동으로 플라그를 효과적으로 제거하는 전동 칫솔입니다.",
		price: 59900,
		stock: 190,
		category: "best",
		created_at: "2026-01-24T09:00:00",
		updated_at: "2026-02-20T09:00:00",
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

export const getCategoryLabel = (categoryId: string): string =>
	categories.find((category) => category.id === categoryId)?.label ?? categoryId;

export const toProductDetail = (product: ProductSnapshot): ProductDetail => ({
	...productDetail,
	...product,
	subtitle: `${getCategoryLabel(product.category)} 카테고리 상품`,
	images: [product.image_url],
	features: [
		{ text: `${product.name} 상품 상세 페이지입니다.` },
		{ text: "목록, 장바구니, 상세 페이지에서 동일한 상품 기준 정보를 제공합니다." },
		{ text: `${getCategoryLabel(product.category)} 카테고리의 대표 상품 정보입니다.` },
	],
	specs: [
		{ label: "카테고리", value: getCategoryLabel(product.category) },
		{ label: "상품명", value: product.name },
		{ label: "가격", value: `${product.price.toLocaleString("ko-KR")}원` },
	],
});
