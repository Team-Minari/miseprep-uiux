import { apiClient } from "../client";
import type { ApiResponse } from "../../types/auth/auth";
import type {
	CartResponse,
	CartDetailResponse,
	CartItemResponse,
	ParticipantResponse,
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
