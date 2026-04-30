import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
	createCart,
	updateCartSettings,
	deleteCart,
	leaveCart,
} from "../../api/cart/cartApi";
import { CART_KEYS } from "./useCart";
import type { CreateCartRequest, UpdateCartSettingRequest } from "../../types/cart";

/** 장바구니 생성 */
export const useCreateCart = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (body: CreateCartRequest) => createCart(body),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: CART_KEYS.myList() });
		},
	});
};

/** 장바구니 설정 수정 */
export const useUpdateCartSettings = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: ({
			cartId,
			body,
		}: {
			cartId: number;
			body: UpdateCartSettingRequest;
		}) => updateCartSettings(cartId, body),
		onSuccess: (_data, variables) => {
			queryClient.invalidateQueries({ queryKey: CART_KEYS.myList() });
			queryClient.invalidateQueries({
				queryKey: CART_KEYS.detail(variables.cartId),
			});
		},
	});
};

/** 장바구니 삭제 */
export const useDeleteCart = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (cartId: number) => deleteCart(cartId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: CART_KEYS.myList() });
		},
	});
};

/** 장바구니 나가기 */
export const useLeaveCart = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (cartId: number) => leaveCart(cartId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: CART_KEYS.myList() });
		},
	});
};
