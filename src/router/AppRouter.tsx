import { Routes, Route } from "react-router-dom";
import GlobalLayout from "../components/layout/GlobalLayout";
import MainPage from "../pages/main/MainPage.tsx";
import LoginPage from "../pages/login/LoginPage.tsx";
import ProductDetailPage from "../pages/products/ProductDetailPage.tsx";

export default function AppRouter() {
	return (
		<Routes>
			<Route path="/login" element={<LoginPage />} />

			<Route element={<GlobalLayout />}>
				<Route path="/" element={<MainPage />} />
				<Route path="/product/:id" element={<ProductDetailPage />} />
			</Route>
		</Routes>
	);
}
