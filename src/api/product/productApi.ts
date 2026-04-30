import { apiClient } from "../client";
import type { ApiResponse } from "../../types/auth/auth";
import type { Product } from "../../types/product";

const BASE = "/api/products";

/** 상품 목록 조회 (카테고리 / 키워드 필터) */
export const getProducts = (params?: { category?: string; keyword?: string }) =>
	apiClient
		.get<ApiResponse<Product[]>>(BASE, { params })
		.then((res) => res.data.data);

/** 단일 상품 조회 */
export const getProduct = (productId: number) =>
	apiClient
		.get<ApiResponse<Product>>(`${BASE}/${productId}`)
		.then((res) => res.data.data);
