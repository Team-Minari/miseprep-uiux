import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// 사이드바 장바구니 모달 상태를 관리하는 전용 store
export const useCartModalStore = create(
	immer(
		combine(
			{
				// 초기 상태
				isSidebarOpen: false,
				isCreateCartModalOpen: false,
				isCreateSharedCartModalOpen: false,
				isAddToCartModalOpen: false,
				isSelectCartModalOpen: false,
			},
			(set) => ({
				// 사이드바 액션
				openSidebar: () =>
					set((state) => {
						state.isSidebarOpen = true;
					}),
				closeSidebar: () =>
					set((state) => {
						state.isSidebarOpen = false;
					}),
				toggleSidebar: () =>
					set((state) => {
						state.isSidebarOpen = !state.isSidebarOpen;
					}),

				// 장바구니 생성 모달 액션
				openCreateCartModal: () =>
					set((state) => {
						state.isCreateCartModalOpen = true;
					}),
				closeCreateCartModal: () =>
					set((state) => {
						state.isCreateCartModalOpen = false;
					}),

				// 공유 장바구니 생성 모달 액션
				openCreateSharedCartModal: () =>
					set((state) => {
						state.isCreateSharedCartModalOpen = true;
					}),
				closeCreateSharedCartModal: () =>
					set((state) => {
						state.isCreateSharedCartModalOpen = false;
					}),

				// 장바구니 추가 모달 액션 (장바구니 데이터 없을 때)
				openAddToCartModal: () =>
					set((state) => {
						state.isAddToCartModalOpen = true;
					}),
				closeAddToCartModal: () =>
					set((state) => {
						state.isAddToCartModalOpen = false;
					}),

				// 장바구니 선택 모달 액션 (장바구니 데이터 있을 때)
				openSelectCartModal: () =>
					set((state) => {
						state.isSelectCartModalOpen = true;
					}),
				closeSelectCartModal: () =>
					set((state) => {
						state.isSelectCartModalOpen = false;
					}),

				// 모든 모달 닫기
				closeAllModals: () =>
					set((state) => {
						state.isCreateCartModalOpen = false;
						state.isCreateSharedCartModalOpen = false;
						state.isAddToCartModalOpen = false;
						state.isSelectCartModalOpen = false;
					}),
			})
		)
	)
);

// 리렌더링 최적화용 커스텀 훅

// 사이드바
export const useIsSidebarOpen = () => {
	return useCartModalStore((state) => state.isSidebarOpen);
};

export const useOpenSidebar = () => {
	return useCartModalStore((state) => state.openSidebar);
};

export const useCloseSidebar = () => {
	return useCartModalStore((state) => state.closeSidebar);
};

export const useToggleSidebar = () => {
	return useCartModalStore((state) => state.toggleSidebar);
};

// 장바구니 생성 모달
export const useIsCreateCartModalOpen = () => {
	return useCartModalStore((state) => state.isCreateCartModalOpen);
};

export const useOpenCreateCartModal = () => {
	return useCartModalStore((state) => state.openCreateCartModal);
};

export const useCloseCreateCartModal = () => {
	return useCartModalStore((state) => state.closeCreateCartModal);
};

// 공유 장바구니 생성 모달
export const useIsCreateSharedCartModalOpen = () => {
	return useCartModalStore((state) => state.isCreateSharedCartModalOpen);
};

export const useOpenCreateSharedCartModal = () => {
	return useCartModalStore((state) => state.openCreateSharedCartModal);
};

export const useCloseCreateSharedCartModal = () => {
	return useCartModalStore((state) => state.closeCreateSharedCartModal);
};

// 모든 모달 닫기
export const useCloseAllModals = () => {
	return useCartModalStore((state) => state.closeAllModals);
};

// 장바구니 추가 모달
export const useIsAddToCartModalOpen = () => {
	return useCartModalStore((state) => state.isAddToCartModalOpen);
};

export const useOpenAddToCartModal = () => {
	return useCartModalStore((state) => state.openAddToCartModal);
};

export const useCloseAddToCartModal = () => {
	return useCartModalStore((state) => state.closeAddToCartModal);
};

// 장바구니 선택 모달
export const useIsSelectCartModalOpen = () => {
	return useCartModalStore((state) => state.isSelectCartModalOpen);
};

export const useOpenSelectCartModal = () => {
	return useCartModalStore((state) => state.openSelectCartModal);
};

export const useCloseSelectCartModal = () => {
	return useCartModalStore((state) => state.closeSelectCartModal);
};
