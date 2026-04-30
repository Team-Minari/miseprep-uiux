import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { CartResponse } from "../types/cart";
import { useAuthStore } from "./auth/useAuthStore";
import {
	useMyCarts,
	useMyCartsCount as useMyCartsCountQuery,
} from "../hooks/cart/useCart";

/**
 * 장바구니 클라이언트 상태 (모달 연동 등에서 사용)
 * 조회 데이터는 React Query 훅(hooks/cart/useCart)에서 관리
 * 뮤테이션은 Commit 3에서 API 연동 예정
 */
export const useCartStore = create(
	immer(
		combine(
			{
				// placeholder — Commit 3에서 mutation 로직 추가 시 사용
				_placeholder: null as null,
			},
			(_set) => ({
				// Commit 3: updateCart, deleteCart, leaveSharedCart 등 mutation 액션 추가 예정
			})
		)
	)
);

// ── React Query 기반 셀렉터 (기존 인터페이스 유지) ──

/** 내 개인 장바구니 목록 */
export const usePersonalCarts = (): CartResponse[] => {
	const userId = useAuthStore((s) => s.user?.id);
	const { data: carts = [] } = useMyCarts();
	return carts.filter((c) => c.owner_id === userId);
};

/** 내 공유 장바구니 목록 */
export const useSharedCarts = (): CartResponse[] => {
	const userId = useAuthStore((s) => s.user?.id);
	const { data: carts = [] } = useMyCarts();
	return carts.filter((c) => c.owner_id !== userId);
};

/** 전체 장바구니 수 */
export const useAllCartsCount = (): number => {
	return useMyCartsCountQuery();
};
