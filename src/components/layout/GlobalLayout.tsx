import { Outlet } from "react-router-dom";
import SubHeader from "./SubHeader";
import Sidebar from "./Sidebar.tsx";

import CreateCartModal from "../modals/CreateCartModal";
import SelectCartModal from "../modals/SelectCartModal";
import AddToCartModal from "../modals/AddToCartModal";
import {
	useIsCreateCartModalOpen,
	useIsCreateSharedCartModalOpen,
	useIsAddToCartModalOpen,
	useIsSelectCartModalOpen,
} from "../../store/useCartModalStore.ts";
import MainHeader from "./MainHeader";
import Footer from "./Footer.tsx";

export default function GlobalLayout() {
	// store에서 모달 상태 가져옴

	const isCreateCartModalOpen = useIsCreateCartModalOpen();
	const isCreateSharedCartModalOpen = useIsCreateSharedCartModalOpen();
	const isAddToCartModalOpen = useIsAddToCartModalOpen();
	const isSelectCartModalOpen = useIsSelectCartModalOpen();

	return (
		<div className="min-h-screen flex flex-col bg-white">
			{/* 헤더 - 상단 네비게이션 */}
			<SubHeader />
			<MainHeader />

			<div className="flex flex-1">
				{/* 사이드바 - 우측 오버레이 */}
				<Sidebar />

				{/* 메인 콘텐츠 영역 */}
				<main className="flex-1">
					<Outlet />
				</main>
			</div>

			{/* 모달 컴포넌트들은 store의 상태에 따라 조건부 렌더링 */}
			{(isCreateCartModalOpen || isCreateSharedCartModalOpen) && (
				<CreateCartModal />
			)}
			{isAddToCartModalOpen && <AddToCartModal />}
			{isSelectCartModalOpen && <SelectCartModal />}
			<Footer />
		</div>
	);
}
