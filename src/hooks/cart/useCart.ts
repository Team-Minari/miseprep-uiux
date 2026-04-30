import { useQuery } from "@tanstack/react-query";
import {
	getMyCarts,
	getCartDetail,
	getCartItems,
	getCartParticipants,
} from "../../api/cart/cartApi";
import { useAuthStore } from "../../store/auth/useAuthStore";
import type { CartResponse } from "../../types/cart";

export const CART_KEYS = {
	all: ["carts"] as const,
	myList: () => ["carts", "my"] as const,
	detail: (cartId: number) => ["carts", "detail", cartId] as const,
	items: (cartId: number) => ["carts", "items", cartId] as const,
	participants: (cartId: number) => ["carts", "participants", cartId] as const,
};

/** 내 장바구니 전체 목록 */
export const useMyCarts = () => {
	const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

	return useQuery({
		queryKey: CART_KEYS.myList(),
		queryFn: getMyCarts,
		enabled: isAuthenticated,
		staleTime: 30 * 1000,
	});
};

/** 내 개인 장바구니 */
export const usePersonalCarts = (): CartResponse[] => {
	const { data: carts = [] } = useMyCarts();
	return carts.filter((c) => c.cart_type === "PERSONAL");
};

/** 내 공유 장바구니 */
export const useSharedCarts = (): CartResponse[] => {
	const { data: carts = [] } = useMyCarts();
	return carts.filter((c) => c.cart_type === "SHARED");
};

/** 내 장바구니 총 개수 */
export const useMyCartsCount = (): number => {
	const { data: carts = [] } = useMyCarts();
	return carts.length;
};

/** 장바구니 상세 (source=public이 아닌 내 장바구니만) */
export const useCartDetail = (cartId: number, enabled = true) =>
	useQuery({
		queryKey: CART_KEYS.detail(cartId),
		queryFn: () => getCartDetail(cartId),
		enabled: cartId > 0 && enabled,
		staleTime: 30 * 1000,
	});

/** 장바구니 아이템 목록 */
export const useCartItems = (cartId: number, enabled = true) =>
	useQuery({
		queryKey: CART_KEYS.items(cartId),
		queryFn: () => getCartItems(cartId),
		enabled: cartId > 0 && enabled,
		staleTime: 30 * 1000,
	});

/** 장바구니 참여자 목록 */
export const useCartParticipants = (cartId: number, enabled = true) =>
	useQuery({
		queryKey: CART_KEYS.participants(cartId),
		queryFn: () => getCartParticipants(cartId),
		enabled: cartId > 0 && enabled,
		staleTime: 30 * 1000,
	});
