// ── 백엔드 응답 DTO ──

/** GET /api/carts/me 목록 아이템 */
export interface CartResponse {
	id: number;
	name: string;
	purpose: string;
	isPublic: boolean;
	budget: number | null;
	ownerId: number;
}

/** GET /api/carts/{cartId} 상세 */
export interface CartDetailResponse extends CartResponse {
	linkToken: string;
}

/** GET /api/carts/{cartId}/items 아이템 */
export interface CartItemResponse {
	id: number;
	productId: number;
	productName: string;
	price: number;
	imageUrl: string;
	quantity: number;
	checked: boolean;
	checkerId: number | null;
}

/** GET /api/carts/{cartId}/participants 참여자 */
export interface ParticipantResponse {
	memberId: number;
	username: string;
	profileImageUrl: string | null;
}
