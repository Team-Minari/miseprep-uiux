// 장바구니 상품 아이템 타입
export interface CartItem {
	id: number;
	productId: number;
	name: string;
	price: number;
	thumbnail: string;
	addedBy?: string;
	addedByAvatar?: string;
	description?: string;
	category?: CartCategory;
}

export interface CartParticipant {
	id: number;
	name: string;
	email: string;
	role: "owner" | "member";
	avatar: string;
}

export interface CartBase {
	id: number;
	name: string;
	items: CartItem[];
	budget?: number;
	participants?: CartParticipant[];
}

// 개인 장바구니 타입 (내 장바구니 - private)
export interface PersonalCart extends CartBase {}

// 공유 장바구니 타입 (내 장바구니 - shared with team)
export interface SharedCart extends CartBase {}

// 공개 장바구니 카테고리 (ProductSection 카테고리와 동일)
export type CartCategory = "living" | "ingredients" | "office" | "camping";

// 공개 장바구니 타입 (다른 사람들의 public 장바구니)
export interface PublicCart {
	id: number;
	ownerName: string; // 장바구니 소유자 닉네임
	name: string;
	type: "personal" | "shared"; // 소유자 기준 개인 or 공유 여부
	category: CartCategory; // 장바구니 주요 카테고리
	items: CartItem[];
	likeCount: number; // 인기도 지표
	budget?: number;
	participants?: CartParticipant[];
}

// ─────────────────────────────────────────
// 내 장바구니 데이터
// ─────────────────────────────────────────

export const personalCarts: PersonalCart[] = [
	{
		id: 1,
		name: "겨울 옷 쇼핑 목록",
		budget: 250000,
		items: [
			{
				id: 1,
				productId: 101,
				name: "유기농 브로콜리 400g",
				price: 3200,
				thumbnail:
					"https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
				description: "신선한 유기농 브로콜리. 비타민C와 식이섬유가 풍부합니다.",
				category: "ingredients",
			},
			{
				id: 2,
				productId: 102,
				name: "제주 감귤 3kg",
				price: 14900,
				thumbnail:
					"https://images.unsplash.com/photo-1568702846914-96b305d2ead1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
				description: "새콤달콤한 제주산 감귤. 비타민이 풍부한 겨울 과일입니다.",
				category: "ingredients",
			},
			{
				id: 3,
				productId: 103,
				name: "국내산 사과 5개입",
				price: 8900,
				thumbnail:
					"https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
				description: "아삭하고 달콤한 국내산 사과. 아침 식사 대용으로도 좋습니다.",
				category: "ingredients",
			},
		],
	},
];

export const sharedCarts: SharedCart[] = [
	{
		id: 1,
		name: "Wisoft 겨울 워크숍",
		budget: 120000,
		participants: [
			{
				id: 1,
				name: "정하늘",
				email: "haneul@wisoft.io",
				role: "owner",
				avatar: "정",
			},
			{
				id: 2,
				name: "박지수",
				email: "jisu@wisoft.io",
				role: "member",
				avatar: "박",
			},
			{
				id: 3,
				name: "김도윤",
				email: "doyoon@wisoft.io",
				role: "member",
				avatar: "김",
			},
		],
		items: [
			{
				id: 4,
				productId: 25,
				name: "볼펜 0.5mm 10자루",
				price: 3900,
				thumbnail:
					"https://images.unsplash.com/photo-1585336261022-680e295ce3fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
				addedBy: "정하늘",
				addedByAvatar: "정",
				description: "부드러운 필기감과 선명한 잉크로 오랜 시간 사용 가능한 볼펜입니다.",
				category: "office",
			},
			{
				id: 5,
				productId: 27,
				name: "A4 복사용지 80g 500매",
				price: 5900,
				thumbnail:
					"https://images.unsplash.com/photo-1568702846914-96b305d2ead1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
				addedBy: "박지수",
				addedByAvatar: "박",
				description:
					"양면 인쇄에 적합한 80g 고백색도 용지로 다양한 프린터와 호환됩니다.",
				category: "office",
			},
			{
				id: 6,
				productId: 31,
				name: "무선 마우스 M185",
				price: 19900,
				thumbnail:
					"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
				addedBy: "김도윤",
				addedByAvatar: "김",
				description:
					"초소형 수신기와 긴 배터리 수명으로 편리한 무선 환경을 제공합니다.",
				category: "office",
			},
		],
	},
];

// ─────────────────────────────────────────
// 다른 사람들의 공개(public) 장바구니 데이터
// → 메인 페이지 "가장 인기있는 장바구니" & CartListPage에서 사용
// 카테고리별 최소 10개 이상 보유
// ─────────────────────────────────────────

export const publicCarts: PublicCart[] = [
	// ── 생활용품 (living) ──────────────────────────
	{
		id: 101,
		ownerName: "김민준",
		name: "주방 필수템 모음",
		type: "personal",
		category: "living",
		likeCount: 342,
		items: [
			{
				id: 10,
				productId: 301,
				name: "스테인리스 주방 가위",
				price: 12900,
				thumbnail:
					"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
			},
			{
				id: 11,
				productId: 302,
				name: "실리콘 주걱 세트 3P",
				price: 8500,
				thumbnail:
					"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
			},
			{
				id: 12,
				productId: 303,
				name: "대나무 도마",
				price: 15000,
				thumbnail:
					"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
			},
		],
	},
	{
		id: 102,
		ownerName: "이서연",
		name: "자취방 생활용품 세트",
		type: "personal",
		category: "living",
		likeCount: 287,
		items: [
			{
				id: 13,
				productId: 401,
				name: "크리넥스 티슈 250매×6입",
				price: 12900,
				thumbnail:
					"https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=400&q=80",
			},
			{
				id: 14,
				productId: 402,
				name: "샤워기 헤드 교체용",
				price: 19800,
				thumbnail:
					"https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=400&q=80",
			},
			{
				id: 15,
				productId: 403,
				name: "행거 수납봉 2P",
				price: 6500,
				thumbnail:
					"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
			},
		],
	},
	{
		id: 107,
		ownerName: "오승환",
		name: "홈카페 도구 모음",
		type: "personal",
		category: "living",
		likeCount: 143,
		items: [
			{
				id: 27,
				productId: 901,
				name: "에스프레소 머신용 분쇄기",
				price: 89000,
				thumbnail:
					"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
			},
			{
				id: 28,
				productId: 902,
				name: "스테인리스 텀블러 500ml",
				price: 22000,
				thumbnail:
					"https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80",
			},
		],
	},
	{
		id: 111,
		ownerName: "윤지호",
		name: "욕실 청결 용품 세트",
		type: "personal",
		category: "living",
		likeCount: 118,
		items: [
			{
				id: 31,
				productId: 1101,
				name: "페리오 치약 세트 3입",
				price: 7900,
				thumbnail:
					"https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80",
			},
			{
				id: 32,
				productId: 1102,
				name: "유한락스 표백제 2L",
				price: 3900,
				thumbnail:
					"https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&q=80",
			},
		],
	},
	{
		id: 112,
		ownerName: "강미래",
		name: "신혼집 주방 세팅",
		type: "shared",
		category: "living",
		likeCount: 205,
		items: [
			{
				id: 33,
				productId: 1103,
				name: "해피바스 바디워시 500ml",
				price: 6900,
				thumbnail:
					"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80",
			},
			{
				id: 34,
				productId: 1104,
				name: "순수한면 생리대 중형 32매",
				price: 8900,
				thumbnail:
					"https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&q=80",
			},
		],
	},
	{
		id: 113,
		ownerName: "박현우",
		name: "봄맞이 청소 용품",
		type: "personal",
		category: "living",
		likeCount: 167,
		items: [
			{
				id: 35,
				productId: 1105,
				name: "데일리 모이스처 로션 200ml",
				price: 18900,
				thumbnail:
					"https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&q=80",
			},
			{
				id: 36,
				productId: 1106,
				name: "쓰레기봉투 20L×50매",
				price: 5900,
				thumbnail:
					"https://images.unsplash.com/photo-1610141189012-7f4eaa5e3505?w=400&q=80",
			},
		],
	},
	{
		id: 114,
		ownerName: "최하은",
		name: "여름 보습 스킨케어",
		type: "personal",
		category: "living",
		likeCount: 136,
		items: [
			{
				id: 37,
				productId: 1107,
				name: "선크림 SPF50+ 50ml",
				price: 24000,
				thumbnail:
					"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80",
			},
			{
				id: 38,
				productId: 1108,
				name: "알로에 수딩 젤 300ml",
				price: 9900,
				thumbnail:
					"https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&q=80",
			},
		],
	},
	{
		id: 115,
		ownerName: "임준서 팀",
		name: "기숙사 공동 생필품",
		type: "shared",
		category: "living",
		likeCount: 182,
		items: [
			{
				id: 39,
				productId: 1109,
				name: "스카치 투명테이프 3입",
				price: 4500,
				thumbnail:
					"https://images.unsplash.com/photo-1586380951230-e6703d9f6833?w=400&q=80",
			},
			{
				id: 40,
				productId: 1110,
				name: "크리넥스 티슈 250매×6입",
				price: 12900,
				thumbnail:
					"https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=400&q=80",
			},
		],
	},
	{
		id: 116,
		ownerName: "정수아",
		name: "인테리어 소품 쇼핑",
		type: "personal",
		category: "living",
		likeCount: 90,
		items: [
			{
				id: 41,
				productId: 1111,
				name: "LED 무드등 소형",
				price: 15000,
				thumbnail:
					"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
			},
		],
	},
	{
		id: 117,
		ownerName: "한도현",
		name: "반려동물 용품 세트",
		type: "personal",
		category: "living",
		likeCount: 74,
		items: [
			{
				id: 42,
				productId: 1112,
				name: "강아지 간식 100g",
				price: 8500,
				thumbnail:
					"https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80",
			},
		],
	},

	// ── 식재료 (ingredients) ───────────────────────
	{
		id: 105,
		ownerName: "정도윤 팀",
		name: "동아리 MT 공동구매",
		type: "shared",
		category: "ingredients",
		likeCount: 176,
		items: [
			{
				id: 21,
				productId: 701,
				name: "진라면 순한맛 5입",
				price: 3200,
				thumbnail:
					"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&q=80",
			},
			{
				id: 22,
				productId: 702,
				name: "햇반 210g×12개",
				price: 14900,
				thumbnail:
					"https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&q=80",
			},
			{
				id: 23,
				productId: 703,
				name: "참치 135g×4캔",
				price: 8900,
				thumbnail:
					"https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=400&q=80",
			},
		],
	},
	{
		id: 108,
		ownerName: "임수진 팀",
		name: "학과 연구실 간식 공동주문",
		type: "shared",
		category: "ingredients",
		likeCount: 129,
		items: [
			{
				id: 29,
				productId: 1001,
				name: "국내산 계란 30구",
				price: 6900,
				thumbnail:
					"https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&q=80",
			},
			{
				id: 30,
				productId: 1002,
				name: "로제파스타 소스 200g",
				price: 4500,
				thumbnail:
					"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80",
			},
		],
	},
	{
		id: 121,
		ownerName: "송민아",
		name: "주말 바베큐 파티 재료",
		type: "shared",
		category: "ingredients",
		likeCount: 241,
		items: [
			{
				id: 51,
				productId: 2001,
				name: "한우 불고기 밀키트 450g",
				price: 12900,
				thumbnail:
					"https://images.unsplash.com/photo-1763140446057-9becaa30b868?w=400&q=80",
			},
			{
				id: 52,
				productId: 2002,
				name: "냉동 새우 500g",
				price: 9900,
				thumbnail:
					"https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&q=80",
			},
		],
	},
	{
		id: 122,
		ownerName: "권지훈",
		name: "건강 식단 일주일치",
		type: "personal",
		category: "ingredients",
		likeCount: 195,
		items: [
			{
				id: 53,
				productId: 2003,
				name: "국산콩 두부 300g×2입",
				price: 3480,
				thumbnail:
					"https://images.unsplash.com/photo-1557142046-c704a3adf364?w=400&q=80",
			},
			{
				id: 54,
				productId: 2004,
				name: "현미밥 즉석 18개입",
				price: 18900,
				thumbnail:
					"https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&q=80",
			},
		],
	},
	{
		id: 123,
		ownerName: "박지은",
		name: "자취 초보 냉장고 채우기",
		type: "personal",
		category: "ingredients",
		likeCount: 163,
		items: [
			{
				id: 55,
				productId: 2005,
				name: "햇반 210g×12개",
				price: 14900,
				thumbnail:
					"https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&q=80",
			},
			{
				id: 56,
				productId: 2006,
				name: "국내산 계란 30구",
				price: 6900,
				thumbnail:
					"https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&q=80",
			},
		],
	},
	{
		id: 124,
		ownerName: "이찬우 팀",
		name: "회사 점심 도시락 재료",
		type: "shared",
		category: "ingredients",
		likeCount: 148,
		items: [
			{
				id: 57,
				productId: 2007,
				name: "참치 135g×4캔",
				price: 8900,
				thumbnail:
					"https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=400&q=80",
			},
			{
				id: 58,
				productId: 2008,
				name: "진라면 순한맛 5입",
				price: 3200,
				thumbnail:
					"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&q=80",
			},
		],
	},
	{
		id: 125,
		ownerName: "최수현",
		name: "다이어트 식품 모음",
		type: "personal",
		category: "ingredients",
		likeCount: 112,
		items: [
			{
				id: 59,
				productId: 2009,
				name: "로제파스타 소스 200g",
				price: 4500,
				thumbnail:
					"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80",
			},
		],
	},
	{
		id: 126,
		ownerName: "조민혁",
		name: "라면 마니아 컬렉션",
		type: "personal",
		category: "ingredients",
		likeCount: 98,
		items: [
			{
				id: 60,
				productId: 2010,
				name: "진라면 순한맛 5입",
				price: 3200,
				thumbnail:
					"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&q=80",
			},
		],
	},
	{
		id: 127,
		ownerName: "신예은",
		name: "채식 식단 장보기",
		type: "personal",
		category: "ingredients",
		likeCount: 85,
		items: [
			{
				id: 61,
				productId: 2011,
				name: "국산콩 두부 300g×2입",
				price: 3480,
				thumbnail:
					"https://images.unsplash.com/photo-1557142046-c704a3adf364?w=400&q=80",
			},
		],
	},
	{
		id: 128,
		ownerName: "문성현 팀",
		name: "야유회 단체 식재료",
		type: "shared",
		category: "ingredients",
		likeCount: 71,
		items: [
			{
				id: 62,
				productId: 2012,
				name: "냉동 새우 500g",
				price: 9900,
				thumbnail:
					"https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&q=80",
			},
		],
	},

	// ── 사무용품 (office) ──────────────────────────
	{
		id: 103,
		ownerName: "박지훈 팀",
		name: "개발팀 사무용품 공동구매",
		type: "shared",
		category: "office",
		likeCount: 215,
		items: [
			{
				id: 16,
				productId: 501,
				name: "무선 마우스 M185",
				price: 19900,
				thumbnail:
					"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80",
			},
			{
				id: 17,
				productId: 502,
				name: "포스트잇 6색 6패드",
				price: 7900,
				thumbnail:
					"https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&q=80",
			},
			{
				id: 18,
				productId: 503,
				name: "A4 복사용지 80g 500매",
				price: 5900,
				thumbnail:
					"https://images.unsplash.com/photo-1568702846914-96b305d2ead1?w=400&q=80",
			},
		],
	},
	{
		id: 106,
		ownerName: "한소희",
		name: "신학기 사무용품 준비",
		type: "personal",
		category: "office",
		likeCount: 154,
		items: [
			{
				id: 24,
				productId: 801,
				name: "볼펜 0.5mm 10자루",
				price: 3900,
				thumbnail:
					"https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&q=80",
			},
			{
				id: 25,
				productId: 802,
				name: "형광펜 6색 세트",
				price: 3900,
				thumbnail:
					"https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&q=80",
			},
			{
				id: 26,
				productId: 803,
				name: "USB 메모리 64GB",
				price: 12900,
				thumbnail:
					"https://images.unsplash.com/photo-1618410320928-25228d811631?w=400&q=80",
			},
		],
	},
	{
		id: 131,
		ownerName: "김도윤",
		name: "재택근무 홈오피스 세팅",
		type: "personal",
		category: "office",
		likeCount: 288,
		items: [
			{
				id: 71,
				productId: 3001,
				name: "무선 마우스 M185",
				price: 19900,
				thumbnail:
					"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80",
			},
			{
				id: 72,
				productId: 3002,
				name: "USB 메모리 64GB",
				price: 12900,
				thumbnail:
					"https://images.unsplash.com/photo-1618410320928-25228d811631?w=400&q=80",
			},
		],
	},
	{
		id: 132,
		ownerName: "이하나 팀",
		name: "스터디 그룹 공통 문구",
		type: "shared",
		category: "office",
		likeCount: 173,
		items: [
			{
				id: 73,
				productId: 3003,
				name: "포스트잇 76×76mm 6색 6패드",
				price: 7900,
				thumbnail:
					"https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&q=80",
			},
			{
				id: 74,
				productId: 3004,
				name: "볼펜 0.5mm 10자루",
				price: 3900,
				thumbnail:
					"https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&q=80",
			},
		],
	},
	{
		id: 133,
		ownerName: "정우성",
		name: "문서 정리 키트",
		type: "personal",
		category: "office",
		likeCount: 142,
		items: [
			{
				id: 75,
				productId: 3005,
				name: "투명 파일 케이스 20개입",
				price: 4900,
				thumbnail:
					"https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
			},
			{
				id: 76,
				productId: 3006,
				name: "스테이플러 대용량 No.10",
				price: 6900,
				thumbnail:
					"https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&q=80",
			},
		],
	},
	{
		id: 134,
		ownerName: "황소연",
		name: "데스크 셋업 미니멀",
		type: "personal",
		category: "office",
		likeCount: 126,
		items: [
			{
				id: 77,
				productId: 3007,
				name: "A4 복사용지 80g 500매",
				price: 5900,
				thumbnail:
					"https://images.unsplash.com/photo-1568702846914-96b305d2ead1?w=400&q=80",
			},
		],
	},
	{
		id: 135,
		ownerName: "안재현 팀",
		name: "사무실 이사 용품",
		type: "shared",
		category: "office",
		likeCount: 108,
		items: [
			{
				id: 78,
				productId: 3008,
				name: "형광펜 6색 세트",
				price: 3900,
				thumbnail:
					"https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&q=80",
			},
		],
	},
	{
		id: 136,
		ownerName: "류지민",
		name: "수험생 필기 세트",
		type: "personal",
		category: "office",
		likeCount: 93,
		items: [
			{
				id: 79,
				productId: 3009,
				name: "볼펜 0.5mm 10자루",
				price: 3900,
				thumbnail:
					"https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&q=80",
			},
		],
	},
	{
		id: 137,
		ownerName: "오미래",
		name: "프리랜서 홈오피스",
		type: "personal",
		category: "office",
		likeCount: 78,
		items: [
			{
				id: 80,
				productId: 3010,
				name: "무선 마우스 M185",
				price: 19900,
				thumbnail:
					"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80",
			},
		],
	},
	{
		id: 138,
		ownerName: "조현석 팀",
		name: "팀 프로젝트 공용 문구",
		type: "shared",
		category: "office",
		likeCount: 65,
		items: [
			{
				id: 81,
				productId: 3011,
				name: "포스트잇 76×76mm 6색 6패드",
				price: 7900,
				thumbnail:
					"https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&q=80",
			},
		],
	},

	// ── 캠핑용품 (camping) ─────────────────────────
	{
		id: 104,
		ownerName: "최유나",
		name: "캠핑 준비물 체크리스트",
		type: "personal",
		category: "camping",
		likeCount: 198,
		items: [
			{
				id: 19,
				productId: 601,
				name: "원터치 팝업 텐트 3-4인용",
				price: 49900,
				thumbnail:
					"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&q=80",
			},
			{
				id: 20,
				productId: 602,
				name: "캠핑용 폴딩 체어 세트 (2P)",
				price: 29800,
				thumbnail:
					"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400&q=80",
			},
		],
	},
	{
		id: 141,
		ownerName: "서준혁",
		name: "1박 2일 솔로 캠핑 장비",
		type: "personal",
		category: "camping",
		likeCount: 267,
		items: [
			{
				id: 91,
				productId: 4001,
				name: "프리미엄 캠핑 화로대",
				price: 35900,
				thumbnail:
					"https://images.unsplash.com/photo-1596263576925-d90d63691097?w=400&q=80",
			},
			{
				id: 92,
				productId: 4002,
				name: "원터치 팝업 텐트 3-4인용",
				price: 49900,
				thumbnail:
					"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&q=80",
			},
		],
	},
	{
		id: 142,
		ownerName: "나영희 팀",
		name: "가족 글램핑 준비",
		type: "shared",
		category: "camping",
		likeCount: 231,
		items: [
			{
				id: 93,
				productId: 4003,
				name: "대용량 아이스박스 30L",
				price: 45000,
				thumbnail:
					"https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=400&q=80",
			},
			{
				id: 94,
				productId: 4004,
				name: "캠핑용 폴딩 체어 세트 (2P)",
				price: 29800,
				thumbnail:
					"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400&q=80",
			},
		],
	},
	{
		id: 143,
		ownerName: "문재현",
		name: "여름 워터 캠핑 세트",
		type: "personal",
		category: "camping",
		likeCount: 179,
		items: [
			{
				id: 95,
				productId: 4005,
				name: "대용량 아이스박스 30L",
				price: 45000,
				thumbnail:
					"https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=400&q=80",
			},
		],
	},
	{
		id: 144,
		ownerName: "유진아 팀",
		name: "대학 동기 MT 캠핑",
		type: "shared",
		category: "camping",
		likeCount: 155,
		items: [
			{
				id: 96,
				productId: 4006,
				name: "프리미엄 캠핑 화로대",
				price: 35900,
				thumbnail:
					"https://images.unsplash.com/photo-1596263576925-d90d63691097?w=400&q=80",
			},
			{
				id: 97,
				productId: 4007,
				name: "원터치 팝업 텐트 3-4인용",
				price: 49900,
				thumbnail:
					"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&q=80",
			},
		],
	},
	{
		id: 145,
		ownerName: "김태양",
		name: "백패킹 경량 장비",
		type: "personal",
		category: "camping",
		likeCount: 133,
		items: [
			{
				id: 98,
				productId: 4008,
				name: "캠핑용 폴딩 체어 세트 (2P)",
				price: 29800,
				thumbnail:
					"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400&q=80",
			},
		],
	},
	{
		id: 146,
		ownerName: "박채린 팀",
		name: "회사 단체 캠핑 용품",
		type: "shared",
		category: "camping",
		likeCount: 112,
		items: [
			{
				id: 99,
				productId: 4009,
				name: "대용량 아이스박스 30L",
				price: 45000,
				thumbnail:
					"https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=400&q=80",
			},
		],
	},
	{
		id: 147,
		ownerName: "장민수",
		name: "오토캠핑 필수 장비",
		type: "personal",
		category: "camping",
		likeCount: 89,
		items: [
			{
				id: 100,
				productId: 4010,
				name: "프리미엄 캠핑 화로대",
				price: 35900,
				thumbnail:
					"https://images.unsplash.com/photo-1596263576925-d90d63691097?w=400&q=80",
			},
		],
	},
	{
		id: 148,
		ownerName: "홍지수",
		name: "감성 캠핑 소품",
		type: "personal",
		category: "camping",
		likeCount: 74,
		items: [
			{
				id: 101,
				productId: 4011,
				name: "원터치 팝업 텐트 3-4인용",
				price: 49900,
				thumbnail:
					"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&q=80",
			},
		],
	},
	{
		id: 149,
		ownerName: "이준호 팀",
		name: "낚시 겸 캠핑 장비",
		type: "shared",
		category: "camping",
		likeCount: 62,
		items: [
			{
				id: 102,
				productId: 4012,
				name: "캠핑용 폴딩 체어 세트 (2P)",
				price: 29800,
				thumbnail:
					"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400&q=80",
			},
		],
	},

	// ── 추가 생활용품 (living) ──────────────────────
	{
		id: 201,
		ownerName: "김하린",
		name: "미니멀 세탁 용품",
		type: "personal" as const,
		category: "living" as const,
		likeCount: 68,
		items: [
			{
				id: 201,
				productId: 5001,
				name: "섬유유연제 1L",
				price: 5900,
				thumbnail:
					"https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&q=80",
			},
		],
	},
	{
		id: 202,
		ownerName: "이태민 팀",
		name: "사무실 청소 용품",
		type: "shared" as const,
		category: "living" as const,
		likeCount: 59,
		items: [
			{
				id: 202,
				productId: 5002,
				name: "물걸레 청소포 30매",
				price: 4900,
				thumbnail:
					"https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&q=80",
			},
		],
	},
	{
		id: 203,
		ownerName: "박서진",
		name: "아기 목욕 용품",
		type: "personal" as const,
		category: "living" as const,
		likeCount: 52,
		items: [
			{
				id: 203,
				productId: 5003,
				name: "베이비 바디워시 300ml",
				price: 12900,
				thumbnail:
					"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80",
			},
		],
	},
	{
		id: 204,
		ownerName: "최민호",
		name: "겨울철 가습 용품",
		type: "personal" as const,
		category: "living" as const,
		likeCount: 46,
		items: [
			{
				id: 204,
				productId: 5004,
				name: "초음파 가습기",
				price: 29900,
				thumbnail:
					"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
			},
		],
	},
	{
		id: 205,
		ownerName: "송유진 팀",
		name: "학교 기숙사 공용 세제",
		type: "shared" as const,
		category: "living" as const,
		likeCount: 41,
		items: [
			{
				id: 205,
				productId: 5005,
				name: "주방세제 500ml",
				price: 3200,
				thumbnail:
					"https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&q=80",
			},
		],
	},
	{
		id: 206,
		ownerName: "장유나",
		name: "욕실 리모델링 소품",
		type: "personal" as const,
		category: "living" as const,
		likeCount: 37,
		items: [
			{
				id: 206,
				productId: 5006,
				name: "스테인리스 수건걸이",
				price: 8900,
				thumbnail:
					"https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=400&q=80",
			},
		],
	},
	{
		id: 207,
		ownerName: "한지우",
		name: "향기 디퓨저 세트",
		type: "personal" as const,
		category: "living" as const,
		likeCount: 33,
		items: [
			{
				id: 207,
				productId: 5007,
				name: "라벤더 디퓨저 200ml",
				price: 18000,
				thumbnail:
					"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
			},
		],
	},
	{
		id: 208,
		ownerName: "오현서 팀",
		name: "공유 오피스 생필품",
		type: "shared" as const,
		category: "living" as const,
		likeCount: 29,
		items: [
			{
				id: 208,
				productId: 5008,
				name: "핸드워시 250ml",
				price: 3500,
				thumbnail:
					"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80",
			},
		],
	},
	{
		id: 209,
		ownerName: "윤서윤",
		name: "다용도 수납 정리",
		type: "personal" as const,
		category: "living" as const,
		likeCount: 25,
		items: [
			{
				id: 209,
				productId: 5009,
				name: "투명 수납함 3단",
				price: 15900,
				thumbnail:
					"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
			},
		],
	},
	{
		id: 210,
		ownerName: "강태현",
		name: "혼자사는 남자 필수템",
		type: "personal" as const,
		category: "living" as const,
		likeCount: 22,
		items: [
			{
				id: 210,
				productId: 5010,
				name: "만능 세탁 세제 2L",
				price: 9900,
				thumbnail:
					"https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&q=80",
			},
		],
	},
	{
		id: 211,
		ownerName: "문소율",
		name: "비건 스킨케어",
		type: "personal" as const,
		category: "living" as const,
		likeCount: 19,
		items: [
			{
				id: 211,
				productId: 5011,
				name: "비건 클렌징 폼 150ml",
				price: 16900,
				thumbnail:
					"https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&q=80",
			},
		],
	},
	{
		id: 212,
		ownerName: "서하늘 팀",
		name: "동호회 피크닉 용품",
		type: "shared" as const,
		category: "living" as const,
		likeCount: 16,
		items: [
			{
				id: 212,
				productId: 5012,
				name: "돗자리 대형",
				price: 12000,
				thumbnail:
					"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
			},
		],
	},
	{
		id: 213,
		ownerName: "이나연",
		name: "헤어케어 루틴",
		type: "personal" as const,
		category: "living" as const,
		likeCount: 13,
		items: [
			{
				id: 213,
				productId: 5013,
				name: "두피 샴푸 500ml",
				price: 14900,
				thumbnail:
					"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80",
			},
		],
	},
	{
		id: 214,
		ownerName: "김도원",
		name: "자취 첫 살림살이",
		type: "personal" as const,
		category: "living" as const,
		likeCount: 10,
		items: [
			{
				id: 214,
				productId: 5014,
				name: "빨래건조대 접이식",
				price: 22000,
				thumbnail:
					"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
			},
		],
	},

	// ── 추가 식재료 (ingredients) ───────────────────
	{
		id: 301,
		ownerName: "정하율",
		name: "간편 아침 세트",
		type: "personal" as const,
		category: "ingredients" as const,
		likeCount: 63,
		items: [
			{
				id: 301,
				productId: 6001,
				name: "그래놀라 500g",
				price: 7900,
				thumbnail:
					"https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&q=80",
			},
		],
	},
	{
		id: 302,
		ownerName: "홍서현 팀",
		name: "동네 반찬가게 공동구매",
		type: "shared" as const,
		category: "ingredients" as const,
		likeCount: 57,
		items: [
			{
				id: 302,
				productId: 6002,
				name: "갈비찜 밀키트 600g",
				price: 15900,
				thumbnail:
					"https://images.unsplash.com/photo-1763140446057-9becaa30b868?w=400&q=80",
			},
		],
	},
	{
		id: 303,
		ownerName: "류지훈",
		name: "홈파티 디저트 재료",
		type: "personal" as const,
		category: "ingredients" as const,
		likeCount: 51,
		items: [
			{
				id: 303,
				productId: 6003,
				name: "생크림 500ml",
				price: 4200,
				thumbnail:
					"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80",
			},
		],
	},
	{
		id: 304,
		ownerName: "안세영",
		name: "여름 음료 만들기",
		type: "personal" as const,
		category: "ingredients" as const,
		likeCount: 45,
		items: [
			{
				id: 304,
				productId: 6004,
				name: "레몬 1kg",
				price: 6900,
				thumbnail:
					"https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=400&q=80",
			},
		],
	},
	{
		id: 305,
		ownerName: "백준혁 팀",
		name: "소풍 간식 공동구매",
		type: "shared" as const,
		category: "ingredients" as const,
		likeCount: 40,
		items: [
			{
				id: 305,
				productId: 6005,
				name: "삼각김밥 10입",
				price: 9900,
				thumbnail:
					"https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&q=80",
			},
		],
	},
	{
		id: 306,
		ownerName: "김나윤",
		name: "건강 주스 재료",
		type: "personal" as const,
		category: "ingredients" as const,
		likeCount: 36,
		items: [
			{
				id: 306,
				productId: 6006,
				name: "케일 200g",
				price: 3500,
				thumbnail:
					"https://images.unsplash.com/photo-1557142046-c704a3adf364?w=400&q=80",
			},
		],
	},
	{
		id: 307,
		ownerName: "이승우",
		name: "김치찌개 재료 세트",
		type: "personal" as const,
		category: "ingredients" as const,
		likeCount: 32,
		items: [
			{
				id: 307,
				productId: 6007,
				name: "돼지 앞다리살 500g",
				price: 8900,
				thumbnail:
					"https://images.unsplash.com/photo-1763140446057-9becaa30b868?w=400&q=80",
			},
		],
	},
	{
		id: 308,
		ownerName: "박채원 팀",
		name: "연구실 커피 원두 공구",
		type: "shared" as const,
		category: "ingredients" as const,
		likeCount: 28,
		items: [
			{
				id: 308,
				productId: 6008,
				name: "원두 커피 1kg",
				price: 19900,
				thumbnail:
					"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
			},
		],
	},
	{
		id: 309,
		ownerName: "우지민",
		name: "과일 정기배송 리스트",
		type: "personal" as const,
		category: "ingredients" as const,
		likeCount: 24,
		items: [
			{
				id: 309,
				productId: 6009,
				name: "사과 5입",
				price: 8900,
				thumbnail:
					"https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=400&q=80",
			},
		],
	},
	{
		id: 310,
		ownerName: "신태양",
		name: "매운맛 라면 도전",
		type: "personal" as const,
		category: "ingredients" as const,
		likeCount: 21,
		items: [
			{
				id: 310,
				productId: 6010,
				name: "불닭볶음면 5입",
				price: 3900,
				thumbnail:
					"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&q=80",
			},
		],
	},
	{
		id: 311,
		ownerName: "조아린 팀",
		name: "회식 재료 공동구매",
		type: "shared" as const,
		category: "ingredients" as const,
		likeCount: 18,
		items: [
			{
				id: 311,
				productId: 6011,
				name: "삼겹살 600g",
				price: 14900,
				thumbnail:
					"https://images.unsplash.com/photo-1763140446057-9becaa30b868?w=400&q=80",
			},
		],
	},
	{
		id: 312,
		ownerName: "한예은",
		name: "베이킹 입문 재료",
		type: "personal" as const,
		category: "ingredients" as const,
		likeCount: 15,
		items: [
			{
				id: 312,
				productId: 6012,
				name: "강력분 밀가루 1kg",
				price: 3200,
				thumbnail:
					"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80",
			},
		],
	},
	{
		id: 313,
		ownerName: "문지호",
		name: "혼밥 냉동식품 세트",
		type: "personal" as const,
		category: "ingredients" as const,
		likeCount: 12,
		items: [
			{
				id: 313,
				productId: 6013,
				name: "냉동 만두 700g",
				price: 6900,
				thumbnail:
					"https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&q=80",
			},
		],
	},
	{
		id: 314,
		ownerName: "강소민",
		name: "비건 식재료 장보기",
		type: "personal" as const,
		category: "ingredients" as const,
		likeCount: 9,
		items: [
			{
				id: 314,
				productId: 6014,
				name: "유기농 두유 1L",
				price: 4500,
				thumbnail:
					"https://images.unsplash.com/photo-1557142046-c704a3adf364?w=400&q=80",
			},
		],
	},

	// ── 추가 사무용품 (office) ──────────────────────
	{
		id: 401,
		ownerName: "이다은",
		name: "시험 준비 문구",
		type: "personal" as const,
		category: "office" as const,
		likeCount: 58,
		items: [
			{
				id: 401,
				productId: 7001,
				name: "노크식 볼펜 5입",
				price: 2900,
				thumbnail:
					"https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&q=80",
			},
		],
	},
	{
		id: 402,
		ownerName: "김준영 팀",
		name: "팀 회의실 비품",
		type: "shared" as const,
		category: "office" as const,
		likeCount: 53,
		items: [
			{
				id: 402,
				productId: 7002,
				name: "화이트보드 마커 6색",
				price: 5900,
				thumbnail:
					"https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&q=80",
			},
		],
	},
	{
		id: 403,
		ownerName: "서민아",
		name: "다이어리 꾸미기",
		type: "personal" as const,
		category: "office" as const,
		likeCount: 47,
		items: [
			{
				id: 403,
				productId: 7003,
				name: "마스킹 테이프 10입",
				price: 8900,
				thumbnail:
					"https://images.unsplash.com/photo-1586380951230-e6703d9f6833?w=400&q=80",
			},
		],
	},
	{
		id: 404,
		ownerName: "박시율",
		name: "공시생 필수 세트",
		type: "personal" as const,
		category: "office" as const,
		likeCount: 42,
		items: [
			{
				id: 404,
				productId: 7004,
				name: "뾰족 샤프 0.5mm",
				price: 3500,
				thumbnail:
					"https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&q=80",
			},
		],
	},
	{
		id: 405,
		ownerName: "정하은 팀",
		name: "강의실 공용 필기구",
		type: "shared" as const,
		category: "office" as const,
		likeCount: 38,
		items: [
			{
				id: 405,
				productId: 7005,
				name: "보드 마카 세트",
				price: 6900,
				thumbnail:
					"https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&q=80",
			},
		],
	},
	{
		id: 406,
		ownerName: "최유빈",
		name: "그래픽 작업 도구",
		type: "personal" as const,
		category: "office" as const,
		likeCount: 34,
		items: [
			{
				id: 406,
				productId: 7006,
				name: "타블렛 보호필름",
				price: 12900,
				thumbnail:
					"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80",
			},
		],
	},
	{
		id: 407,
		ownerName: "한도진",
		name: "미팅 준비 세트",
		type: "personal" as const,
		category: "office" as const,
		likeCount: 30,
		items: [
			{
				id: 407,
				productId: 7007,
				name: "명함 지갑 가죽",
				price: 15000,
				thumbnail:
					"https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&q=80",
			},
		],
	},
	{
		id: 408,
		ownerName: "권서아 팀",
		name: "인턴 팀 사무용품",
		type: "shared" as const,
		category: "office" as const,
		likeCount: 26,
		items: [
			{
				id: 408,
				productId: 7008,
				name: "클립보드 A4",
				price: 4500,
				thumbnail:
					"https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
			},
		],
	},
	{
		id: 409,
		ownerName: "임지아",
		name: "노트 수집가 세트",
		type: "personal" as const,
		category: "office" as const,
		likeCount: 23,
		items: [
			{
				id: 409,
				productId: 7009,
				name: "스프링 노트 5권",
				price: 7900,
				thumbnail:
					"https://images.unsplash.com/photo-1568702846914-96b305d2ead1?w=400&q=80",
			},
		],
	},
	{
		id: 410,
		ownerName: "배성민",
		name: "책상 정리 도구",
		type: "personal" as const,
		category: "office" as const,
		likeCount: 20,
		items: [
			{
				id: 410,
				productId: 7010,
				name: "서류 트레이 3단",
				price: 11900,
				thumbnail:
					"https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
			},
		],
	},
	{
		id: 411,
		ownerName: "신하영 팀",
		name: "디자인팀 공용 문구",
		type: "shared" as const,
		category: "office" as const,
		likeCount: 17,
		items: [
			{
				id: 411,
				productId: 7011,
				name: "색연필 36색",
				price: 15900,
				thumbnail:
					"https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&q=80",
			},
		],
	},
	{
		id: 412,
		ownerName: "윤채은",
		name: "캘리그라피 입문",
		type: "personal" as const,
		category: "office" as const,
		likeCount: 14,
		items: [
			{
				id: 412,
				productId: 7012,
				name: "딥펜 세트",
				price: 22000,
				thumbnail:
					"https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&q=80",
			},
		],
	},
	{
		id: 413,
		ownerName: "고영준",
		name: "코딩 데스크 셋업",
		type: "personal" as const,
		category: "office" as const,
		likeCount: 11,
		items: [
			{
				id: 413,
				productId: 7013,
				name: "노트북 거치대",
				price: 29900,
				thumbnail:
					"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80",
			},
		],
	},
	{
		id: 414,
		ownerName: "남지현",
		name: "플래너 매니아",
		type: "personal" as const,
		category: "office" as const,
		likeCount: 8,
		items: [
			{
				id: 414,
				productId: 7014,
				name: "2026 위클리 플래너",
				price: 12900,
				thumbnail:
					"https://images.unsplash.com/photo-1568702846914-96b305d2ead1?w=400&q=80",
			},
		],
	},

	// ── 추가 캠핑용품 (camping) ─────────────────────
	{
		id: 501,
		ownerName: "김하진",
		name: "미니멀 캠핑 장비",
		type: "personal" as const,
		category: "camping" as const,
		likeCount: 56,
		items: [
			{
				id: 501,
				productId: 8001,
				name: "미니 버너 세트",
				price: 35000,
				thumbnail:
					"https://images.unsplash.com/photo-1596263576925-d90d63691097?w=400&q=80",
			},
		],
	},
	{
		id: 502,
		ownerName: "이서준 팀",
		name: "가족 캠핑 음식 준비",
		type: "shared" as const,
		category: "camping" as const,
		likeCount: 50,
		items: [
			{
				id: 502,
				productId: 8002,
				name: "캠핑 코펠 세트",
				price: 42000,
				thumbnail:
					"https://images.unsplash.com/photo-1596263576925-d90d63691097?w=400&q=80",
			},
		],
	},
	{
		id: 503,
		ownerName: "박시온",
		name: "겨울 캠핑 방한 세트",
		type: "personal" as const,
		category: "camping" as const,
		likeCount: 44,
		items: [
			{
				id: 503,
				productId: 8003,
				name: "동계용 침낭 -10℃",
				price: 79900,
				thumbnail:
					"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&q=80",
			},
		],
	},
	{
		id: 504,
		ownerName: "정민주",
		name: "캠핑 조명 모음",
		type: "personal" as const,
		category: "camping" as const,
		likeCount: 39,
		items: [
			{
				id: 504,
				productId: 8004,
				name: "LED 캠핑 랜턴",
				price: 25900,
				thumbnail:
					"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&q=80",
			},
		],
	},
	{
		id: 505,
		ownerName: "황서연 팀",
		name: "봄 꽃놀이 캠핑",
		type: "shared" as const,
		category: "camping" as const,
		likeCount: 35,
		items: [
			{
				id: 505,
				productId: 8005,
				name: "타프 스크린 대형",
				price: 89000,
				thumbnail:
					"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&q=80",
			},
		],
	},
	{
		id: 506,
		ownerName: "송지안",
		name: "캠핑 취사 도구",
		type: "personal" as const,
		category: "camping" as const,
		likeCount: 31,
		items: [
			{
				id: 506,
				productId: 8006,
				name: "캠핑 칼세트 3P",
				price: 18900,
				thumbnail:
					"https://images.unsplash.com/photo-1596263576925-d90d63691097?w=400&q=80",
			},
		],
	},
	{
		id: 507,
		ownerName: "오태성",
		name: "차박 필수 장비",
		type: "personal" as const,
		category: "camping" as const,
		likeCount: 27,
		items: [
			{
				id: 507,
				productId: 8007,
				name: "차량용 에어매트",
				price: 45900,
				thumbnail:
					"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&q=80",
			},
		],
	},
	{
		id: 508,
		ownerName: "노은서 팀",
		name: "여름 물놀이 캠핑",
		type: "shared" as const,
		category: "camping" as const,
		likeCount: 23,
		items: [
			{
				id: 508,
				productId: 8008,
				name: "방수 돗자리 XL",
				price: 19900,
				thumbnail:
					"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400&q=80",
			},
		],
	},
	{
		id: 509,
		ownerName: "윤세진",
		name: "캠핑 수납 정리함",
		type: "personal" as const,
		category: "camping" as const,
		likeCount: 20,
		items: [
			{
				id: 509,
				productId: 8009,
				name: "접이식 수납 박스 50L",
				price: 22000,
				thumbnail:
					"https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=400&q=80",
			},
		],
	},
	{
		id: 510,
		ownerName: "배하은",
		name: "글램핑 인테리어",
		type: "personal" as const,
		category: "camping" as const,
		likeCount: 17,
		items: [
			{
				id: 510,
				productId: 8010,
				name: "감성 전구 조명 5m",
				price: 12900,
				thumbnail:
					"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&q=80",
			},
		],
	},
	{
		id: 511,
		ownerName: "임채준 팀",
		name: "등산 겸 캠핑 세트",
		type: "shared" as const,
		category: "camping" as const,
		likeCount: 14,
		items: [
			{
				id: 511,
				productId: 8011,
				name: "경량 등산화",
				price: 59900,
				thumbnail:
					"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400&q=80",
			},
		],
	},
	{
		id: 512,
		ownerName: "강예찬",
		name: "캠핑 커피 세트",
		type: "personal" as const,
		category: "camping" as const,
		likeCount: 11,
		items: [
			{
				id: 512,
				productId: 8012,
				name: "핸드드립 세트",
				price: 28900,
				thumbnail:
					"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
			},
		],
	},
	{
		id: 513,
		ownerName: "조서진",
		name: "반려견 캠핑 용품",
		type: "personal" as const,
		category: "camping" as const,
		likeCount: 8,
		items: [
			{
				id: 513,
				productId: 8013,
				name: "접이식 강아지 울타리",
				price: 35900,
				thumbnail:
					"https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80",
			},
		],
	},
	{
		id: 514,
		ownerName: "한승현 팀",
		name: "겨울 캠핑 핫팩 공구",
		type: "shared" as const,
		category: "camping" as const,
		likeCount: 5,
		items: [
			{
				id: 514,
				productId: 8014,
				name: "대용량 핫팩 30입",
				price: 9900,
				thumbnail:
					"https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=400&q=80",
			},
		],
	},
];
