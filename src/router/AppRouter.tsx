import { Routes, Route } from "react-router-dom";
import GlobalLayout from "../components/layout/GlobalLayout";
import MainPage from "../pages/MainPage";

export default function AppRouter() {
	return (
		<Routes>
			<Route element={<GlobalLayout />}>
				<Route path="/" element={<MainPage />} />
			</Route>
		</Routes>
	);
}

