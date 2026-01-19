import { create } from "zustand";
import { combine } from "zustand/middleware";

// 모달 상태 관리 스토어
export const useModalStore = create(
	combine(
		{
			// 초기 상태
			isSearchModalOpen: false,
			isCreateCartModalOpen: false,
			isCreateSharedCartModalOpen: false,
		},
		(set) => ({
			// 검색 모달 액션
			openSearchModal: () => set({ isSearchModalOpen: true }),
			closeSearchModal: () => set({ isSearchModalOpen: false }),

			// 장바구니 생성 모달 액션
			openCreateCartModal: () => set({ isCreateCartModalOpen: true }),
			closeCreateCartModal: () => set({ isCreateCartModalOpen: false }),

			// 공유 장바구니 생성 모달 액션
			openCreateSharedCartModal: () =>
				set({ isCreateSharedCartModalOpen: true }),
			closeCreateSharedCartModal: () =>
				set({ isCreateSharedCartModalOpen: false }),

			// 모든 모달 닫기
			closeAllModals: () =>
				set({
					isSearchModalOpen: false,
					isCreateCartModalOpen: false,
					isCreateSharedCartModalOpen: false,
				}),
		})
	)
);
