// ── 백엔드 ProductResponse 매핑 ──
export interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	imageUrl: string;
	category: string;
}

// ── 카테고리 ──
export interface Category {
	id: string;
	label: string;
}

export const categories: Category[] = [
	{ id: "best", label: "베스트" },
	{ id: "living", label: "생활용품" },
	{ id: "ingredients", label: "식재료" },
	{ id: "office", label: "사무용품" },
	{ id: "camping", label: "캠핑용품" },
];

const categoryMap = new Map(categories.map((c) => [c.id, c.label]));

export const getCategoryLabel = (categoryId: string): string =>
	categoryMap.get(categoryId) ?? categoryId;
