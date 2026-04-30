import { apiClient } from "../client";
import type { ApiResponse } from "../../types/auth/auth";
import type {
	CartResponse,
	CartDetailResponse,
	CartItemResponse,
	ParticipantResponse,
	CreateCartRequest,
	UpdateCartSettingRequest,
	AddCartItemRequest,
	UpdateCartItemRequest,
} from "../../types/cart";

const BASE = "/api/carts";

/** 내 장바구니 목록 조회 */
export const getMyCarts = () =>
	apiClient
		.get<ApiResponse<CartResponse[]>>(`${BASE}/me`)
		.then((res) => res.data.data);

/** 장바구니 상세 조회 */
export const getCartDetail = (cartId: number) =>
	apiClient
		.get<ApiResponse<CartDetailResponse>>(`${BASE}/${cartId}`)
		.then((res) => res.data.data);

/** 장바구니 아이템 목록 조회 */
export const getCartItems = (cartId: number) =>
	apiClient
		.get<ApiResponse<CartItemResponse[]>>(`${BASE}/${cartId}/items`)
		.then((res) => res.data.data);

/** 장바구니 참여자 목록 조회 */
export const getCartParticipants = (cartId: number) =>
	apiClient
		.get<ApiResponse<ParticipantResponse[]>>(`${BASE}/${cartId}/participants`)
		.then((res) => res.data.data);

// ── Mutation ──

/** 장바구니 생성 */
export const createCart = (body: CreateCartRequest) =>
	apiClient
		.post<ApiResponse<CartResponse>>(BASE, body)
		.then((res) => res.data.data);

/** 장바구니 설정 수정 (소유자 전용) */
export const updateCartSettings = (
	cartId: number,
	body: UpdateCartSettingRequest
) =>
	apiClient
		.patch<ApiResponse<CartResponse>>(`${BASE}/${cartId}/settings`, body)
		.then((res) => res.data.data);

/** 장바구니 삭제 (소유자 전용) */
export const deleteCart = (cartId: number) =>
	apiClient.delete(`${BASE}/${cartId}`);

/** 장바구니 나가기 (소유자 외) */
export const leaveCart = (cartId: number) =>
	apiClient.delete(`${BASE}/${cartId}/leave`);

// ── 아이템 Mutation ──

/** 아이템 추가 */
export const addCartItem = (cartId: number, body: AddCartItemRequest) =>
	apiClient
		.post<ApiResponse<CartItemResponse>>(`${BASE}/${cartId}/items`, body)
		.then((res) => res.data.data);

/** 아이템 수량 수정 */
export const updateCartItem = (
	cartId: number,
	itemId: number,
	body: UpdateCartItemRequest
) =>
	apiClient
		.patch<
			ApiResponse<CartItemResponse>
		>(`${BASE}/${cartId}/items/${itemId}`, body)
		.then((res) => res.data.data);

/** 아이템 삭제 */
export const deleteCartItem = (cartId: number, itemId: number) =>
	apiClient.delete(`${BASE}/${cartId}/items/${itemId}`);

/** 전체 아이템 삭제 */
export const deleteAllCartItems = (cartId: number) =>
	apiClient.delete(`${BASE}/${cartId}/items`);

/** 아이템 체크 */
export const checkCartItem = (cartId: number, itemId: number) =>
	apiClient.post(`${BASE}/${cartId}/items/${itemId}/check`);

/** 아이템 체크 해제 */
export const uncheckCartItem = (cartId: number, itemId: number) =>
	apiClient.delete(`${BASE}/${cartId}/items/${itemId}/check`);
