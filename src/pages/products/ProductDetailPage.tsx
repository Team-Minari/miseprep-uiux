import { useParams } from "react-router";
import { useProductDetail } from "../../hooks/product/useProduct";
import MainSection from "../../components/productsDetail/MainSection.tsx";

export default function ProductDetailPage() {
	const { id } = useParams<{ id: string }>();
	const productId = Number(id) || 0;
	const { data: product, isLoading } = useProductDetail(productId);

	if (isLoading) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-white">
				<p className="text-gray-400">상품 정보를 불러오는 중...</p>
			</div>
		);
	}

	if (!product) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-white">
				<p className="text-gray-400">상품을 찾을 수 없습니다.</p>
			</div>
		);
	}

	return (
		<div className="min-h-screen w-full bg-white">
			<div className="mx-auto mb-6 max-w-7xl px-4 sm:px-6 py-4 sm:py-6 lg:py-8">
				<MainSection product={product} />
			</div>
		</div>
	);
}
