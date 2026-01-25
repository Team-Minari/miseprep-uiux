import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useModalStore = create(
	immer(
		combine(
			{
				// 초기 상태
				isSidebarOpen: false,
				isSearchModalOpen: false,
				isCreateCartModalOpen: false,
				isCreateSharedCartModalOpen: false,
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

				// 검색 모달 액션
				openSearchModal: () =>
					set((state) => {
						state.isSearchModalOpen = true;
					}),
				closeSearchModal: () =>
					set((state) => {
						state.isSearchModalOpen = false;
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

				// 모든 모달 닫기
				closeAllModals: () =>
					set((state) => {
						state.isSearchModalOpen = false;
						state.isCreateCartModalOpen = false;
						state.isCreateSharedCartModalOpen = false;
					}),
			})
		)
	)
);

// 리렌더링 최적화용 커스텀 훅

// 사이드바
export const useIsSidebarOpen = () => {
	return useModalStore((state) => state.isSidebarOpen);
};

export const useOpenSidebar = () => {
	return useModalStore((state) => state.openSidebar);
};

export const useCloseSidebar = () => {
	return useModalStore((state) => state.closeSidebar);
};

export const useToggleSidebar = () => {
	return useModalStore((state) => state.toggleSidebar);
};

// 검색 모달
export const useIsSearchModalOpen = () => {
	return useModalStore((state) => state.isSearchModalOpen);
};

export const useOpenSearchModal = () => {
	return useModalStore((state) => state.openSearchModal);
};

export const useCloseSearchModal = () => {
	return useModalStore((state) => state.closeSearchModal);
};

// 장바구니 생성 모달
export const useIsCreateCartModalOpen = () => {
	return useModalStore((state) => state.isCreateCartModalOpen);
};

export const useOpenCreateCartModal = () => {
	return useModalStore((state) => state.openCreateCartModal);
};

export const useCloseCreateCartModal = () => {
	return useModalStore((state) => state.closeCreateCartModal);
};

// 공유 장바구니 생성 모달
export const useIsCreateSharedCartModalOpen = () => {
	return useModalStore((state) => state.isCreateSharedCartModalOpen);
};

export const useOpenCreateSharedCartModal = () => {
	return useModalStore((state) => state.openCreateSharedCartModal);
};

export const useCloseCreateSharedCartModal = () => {
	return useModalStore((state) => state.closeCreateSharedCartModal);
};

// 모든 모달 닫기
export const useCloseAllModals = () => {
	return useModalStore((state) => state.closeAllModals);
};
