import { useMyCartsCount as useMyCartsCountQuery } from "../hooks/cart/useCart";

/** 전체 장바구니 수 */
export const useAllCartsCount = (): number => {
	return useMyCartsCountQuery();
};
