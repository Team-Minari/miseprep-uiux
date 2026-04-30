import { useQuery } from "@tanstack/react-query";
import { getProducts, getProduct } from "../../api/product/productApi";

const PRODUCT_KEYS = {
	all: ["products"] as const,
	list: (params?: { category?: string; keyword?: string }) =>
		["products", "list", params] as const,
	detail: (id: number) => ["products", "detail", id] as const,
};

/** 상품 목록 조회 */
export const useProducts = (params?: {
	category?: string;
	keyword?: string;
}) =>
	useQuery({
		queryKey: PRODUCT_KEYS.list(params),
		queryFn: () => getProducts(params),
		staleTime: 5 * 60 * 1000,
	});

/** 단일 상품 조회 */
export const useProductDetail = (productId: number) =>
	useQuery({
		queryKey: PRODUCT_KEYS.detail(productId),
		queryFn: () => getProduct(productId),
		enabled: productId > 0,
		staleTime: 5 * 60 * 1000,
	});
