import { useEffect, useRef } from "react";
import { useParams } from "react-router";
import { useLoadProduct } from "../../store/useProductStore.ts";
import MainSection from "../../components/productsDetail/MainSection.tsx";
import ContentSection from "../../components/productsDetail/ContentSection.tsx";

export default function ProductDetailPage() {
	const { id } = useParams<{ id: string }>();
	const loadProduct = useLoadProduct();

	// URL 파라미터의 ID가 변경될 때 상품 데이터 로드
	useEffect(() => {
		if (id) {
			loadProduct(Number(id));
		}
	}, [id, loadProduct]);

	// 스크롤 제어용 Refs
	const detailRef = useRef<HTMLDivElement>(null);

	return (
		<div className="min-h-screen w-full bg-white">
			<div className="max-w-7xl mb-6 mx-auto px-4 py-8">
				{/* 상품 메인 (이미지 갤러리 + 상품 정보) */}
				<MainSection />

				{/* 상품 상세 정보 */}
				<ContentSection sectionRef={detailRef} />
			</div>
		</div>
	);
}
