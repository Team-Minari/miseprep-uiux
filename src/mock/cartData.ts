// 장바구니 상품 아이템 타입
export interface CartItem {
	id: number;
	productId: number;
	name: string;
	price: number;
	quantity: number;
	thumbnail: string;
}

// 개인 장바구니 타입
export interface PersonalCart {
	id: number;
	name: string;
	items: CartItem[];
}

// 공유 장바구니 타입
export interface SharedCart {
	id: number;
	name: string;
	items: CartItem[];
}

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
