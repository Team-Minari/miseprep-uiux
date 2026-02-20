import { Routes, Route } from "react-router-dom";
import GlobalLayout from "../components/layout/GlobalLayout";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";

export default function AppRouter() {
	return (
		<Routes>
			{/* GlobalLayout 밖에서 독립적으로 렌더링 */}
			<Route path="/login" element={<LoginPage />} />

			{/* SubHeader + MainHeader + Sidebar가 포함된 전체 레이아웃 */}
			<Route element={<GlobalLayout />}>
				<Route path="/" element={<MainPage />} />
			</Route>
		</Routes>
	);
}
