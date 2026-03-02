import { Outlet } from "react-router-dom";
import SubHeader from "./SubHeader";
import Sidebar from "./Sidebar.tsx";
import MainHeader from "./MainHeader";
import Footer from "./Footer.tsx";

export default function GlobalLayout() {
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

			<Footer />
		</div>
	);
}
