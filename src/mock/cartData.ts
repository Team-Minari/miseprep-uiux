interface PersonalCart {
	id: number;
	name: string;
}

interface SharedCart {
	id: number;
	name: string;
}

export const personalCarts: PersonalCart[] = [
	{ id: 1, name: "겨울 옷 쇼핑 목록" },
];

export const sharedCarts: SharedCart[] = [
	{ id: 1, name: "Wisoft 겨울 워크숍" },
];
