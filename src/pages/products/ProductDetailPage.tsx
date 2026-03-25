import { useEffect } from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
import { useLoadProduct } from "../../store/useProductStore.ts";
import MainSection from "../../components/productsDetail/MainSection.tsx";
import type { ProductSnapshot } from "../../mock/product";

export default function ProductDetailPage() {
	const { id } = useParams<{ id: string }>();
	const location = useLocation();
	const loadProduct = useLoadProduct();
	const fallbackProduct = (
		location.state as { fallbackProduct?: ProductSnapshot } | null
	)?.fallbackProduct;

	// URL 파라미터의 ID가 변경될 때 상품 데이터 로드
	useEffect(() => {
		if (id) {
			loadProduct(Number(id), fallbackProduct);
		}
	}, [fallbackProduct, id, loadProduct]);

	return (
		<div className="min-h-screen w-full bg-white">
			<div className="mx-auto mb-6 max-w-7xl px-4 py-8">
				<MainSection />
			</div>
		</div>
	);
}
