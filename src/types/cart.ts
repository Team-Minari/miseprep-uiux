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

// ── 백엔드 요청 DTO ──

/** POST /api/carts 장바구니 생성 */
export interface CreateCartRequest {
	name: string;
	purpose: string;
	is_public: boolean;
	budget?: number | null;
}

/** PATCH /api/carts/{cartId}/settings 장바구니 설정 수정 */
export interface UpdateCartSettingRequest {
	cartName?: string;
	isPublic?: boolean;
	purpose?: string;
	budget?: number | null;
}

/** POST /api/carts/{cartId}/items 아이템 추가 */
export interface AddCartItemRequest {
	product_id: number;
	quantity: number;
}

/** PATCH /api/carts/{cartId}/items/{itemId} 수량 수정 */
export interface UpdateCartItemRequest {
	quantity: number;
}

/** PATCH /api/carts/{cartId}/owner 소유권 이전 */
export interface OwnerTransferRequest {
	newOwnerId: number;
}

/** 소유권 이전 응답 */
export interface OwnerTransferResponse {
	prevOwnerId: number;
	newOwnerId: number;
	newOwnerName: string;
}
