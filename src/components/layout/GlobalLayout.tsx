import { Outlet } from "react-router-dom";
import SubHeader from "./SubHeader";
import Sidebar from "./Sidebar.tsx";
import MainHeader from "./MainHeader";
import Footer from "./Footer.tsx";
import AiSearchFab from "./AiSearchFab";

export default function GlobalLayout() {
	return (
		<div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
			{/* 헤더 - 상단 네비게이션 */}
			<SubHeader />
			<MainHeader />

			<div className="flex flex-1">
				{/* 사이드바 - 우측 오버레이 */}
				<Sidebar />

				{/* 메인 콘텐츠 영역 */}
				<main className="flex-1 w-full min-w-0 overflow-x-hidden">
					<Outlet />
				</main>
			</div>

			<Footer />

			{/* AI 장바구니 검색 FAB - 전역 노출 */}
			<AiSearchFab />
		</div>
	);
}
