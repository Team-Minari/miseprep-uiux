import MainCarousel from "../components/layout/MainCarousel";
import ProductSection from "../components/products/ProductSection";
import Footer from "../components/layout/Footer";

export default function MainPage() {
	return (
		<main className="flex-1 bg-white">
			<MainCarousel />
			<ProductSection title="세일 중인 상품" />
			<ProductSection title="가장 인기있는 상품" />
			<Footer />
		</main>
	);
}
