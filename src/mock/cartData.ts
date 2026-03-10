// 장바구니 상품 아이템 타입
export interface CartItem {
	id: number;
	productId: number;
	name: string;
	price: number;
	quantity: number;
	thumbnail: string;
}

// 개인 장바구니 타입 (내 장바구니 - private)
export interface PersonalCart {
	id: number;
	name: string;
	items: CartItem[];
}

// 공유 장바구니 타입 (내 장바구니 - shared with team)
export interface SharedCart {
	id: number;
	name: string;
	items: CartItem[];
}

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
}

// ─────────────────────────────────────────
// 내 장바구니 데이터
// ─────────────────────────────────────────

export const personalCarts: PersonalCart[] = [
	{
		id: 1,
		name: "겨울 옷 쇼핑 목록",
		items: [
			{
				id: 1,
				productId: 101,
				name: "울 혼방 롱 코트",
				price: 128000,
				quantity: 1,
				thumbnail:
					"https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=200&q=80",
			},
			{
				id: 2,
				productId: 102,
				name: "캐시미어 터틀넥 니트",
				price: 56000,
				quantity: 2,
				thumbnail:
					"https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=200&q=80",
			},
			{
				id: 3,
				productId: 103,
				name: "퀼팅 패딩 조끼",
				price: 45000,
				quantity: 1,
				thumbnail:
					"https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&q=80",
			},
		],
	},
];

export const sharedCarts: SharedCart[] = [
	{
		id: 1,
		name: "Wisoft 겨울 워크숍",
		items: [
			{
				id: 4,
				productId: 201,
				name: "사무용 볼펜 세트 12P",
				price: 8900,
				quantity: 5,
				thumbnail:
					"https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=200&q=80",
			},
			{
				id: 5,
				productId: 202,
				name: "A4 복사용지 500매",
				price: 12000,
				quantity: 3,
				thumbnail:
					"https://images.unsplash.com/photo-1568667256549-094345857637?w=200&q=80",
			},
		],
	},
];

// ─────────────────────────────────────────
// 다른 사람들의 공개(public) 장바구니 데이터
// → 메인 페이지 "가장 인기있는 장바구니" 섹션에서 사용
// ─────────────────────────────────────────

export const publicCarts: PublicCart[] = [
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
				quantity: 1,
				thumbnail:
					"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
			},
			{
				id: 11,
				productId: 302,
				name: "실리콘 주걱 세트 3P",
				price: 8500,
				quantity: 2,
				thumbnail:
					"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
			},
			{
				id: 12,
				productId: 303,
				name: "대나무 도마",
				price: 15000,
				quantity: 1,
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
				quantity: 2,
				thumbnail:
					"https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=400&q=80",
			},
			{
				id: 14,
				productId: 402,
				name: "샤워기 헤드 교체용",
				price: 19800,
				quantity: 1,
				thumbnail:
					"https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=400&q=80",
			},
			{
				id: 15,
				productId: 403,
				name: "행거 수납봉 2P",
				price: 6500,
				quantity: 1,
				thumbnail:
					"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
			},
		],
	},
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
				quantity: 8,
				thumbnail:
					"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80",
			},
			{
				id: 17,
				productId: 502,
				name: "포스트잇 6색 6패드",
				price: 7900,
				quantity: 10,
				thumbnail:
					"https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&q=80",
			},
			{
				id: 18,
				productId: 503,
				name: "A4 복사용지 80g 500매",
				price: 5900,
				quantity: 5,
				thumbnail:
					"https://images.unsplash.com/photo-1568702846914-96b305d2ead1?w=400&q=80",
			},
		],
	},
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
				quantity: 1,
				thumbnail:
					"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&q=80",
			},
			{
				id: 20,
				productId: 602,
				name: "캠핑용 폴딩 체어 세트 (2P)",
				price: 29800,
				quantity: 1,
				thumbnail:
					"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400&q=80",
			},
		],
	},
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
				quantity: 20,
				thumbnail:
					"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&q=80",
			},
			{
				id: 22,
				productId: 702,
				name: "햇반 210g×12개",
				price: 14900,
				quantity: 5,
				thumbnail:
					"https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&q=80",
			},
			{
				id: 23,
				productId: 703,
				name: "참치 135g×4캔",
				price: 8900,
				quantity: 10,
				thumbnail:
					"https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=400&q=80",
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
				quantity: 2,
				thumbnail:
					"https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&q=80",
			},
			{
				id: 25,
				productId: 802,
				name: "형광펜 6색 세트",
				price: 3900,
				quantity: 3,
				thumbnail:
					"https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&q=80",
			},
			{
				id: 26,
				productId: 803,
				name: "USB 메모리 64GB",
				price: 12900,
				quantity: 1,
				thumbnail:
					"https://images.unsplash.com/photo-1618410320928-25228d811631?w=400&q=80",
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
				quantity: 1,
				thumbnail:
					"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
			},
			{
				id: 28,
				productId: 902,
				name: "스테인리스 텀블러 500ml",
				price: 22000,
				quantity: 2,
				thumbnail:
					"https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80",
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
				quantity: 3,
				thumbnail:
					"https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&q=80",
			},
			{
				id: 30,
				productId: 1002,
				name: "로제파스타 소스 200g",
				price: 4500,
				quantity: 5,
				thumbnail:
					"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80",
			},
		],
	},
];
