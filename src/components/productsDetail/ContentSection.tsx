import { useCurrentProduct } from "../../store/useProductStore";

interface ContentSectionProps {
	sectionRef: React.Ref<HTMLDivElement>;
}

export default function ContentSection({ sectionRef }: ContentSectionProps) {
	const product = useCurrentProduct();

	return (
		<div ref={sectionRef} className="py-12">
			<div className="max-w-4xl mx-auto">
				<div className="prose max-w-none">
					<h2 className="text-2xl font-bold text-gray-900 mb-6">
						상품 상세 정보
					</h2>

					{/* 상품 설명 */}
					<div className="bg-gray-50 rounded-xl p-8 mb-8">
						<p className="text-gray-700 leading-relaxed">
							{product.description}
						</p>
					</div>

					{/* 제품 특징 */}
					<div className="bg-gray-50 rounded-xl p-8 mb-8">
						<h3 className="text-xl font-semibold text-gray-900 mb-4">
							제품 특징
						</h3>
						<ul className="space-y-3 text-gray-700">
							{product.features.map((feature, index) => (
								<li key={index} className="flex items-start gap-2">
									<span className="text-[#FFC107] mt-1">•</span>
									<span>{feature.text}</span>
								</li>
							))}
						</ul>
					</div>

					{/* 상품 정보 테이블 */}
					<div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
						<h3 className="text-xl font-semibold text-gray-900 mb-4">
							상품 정보
						</h3>
						<table className="w-full">
							<tbody className="divide-y divide-gray-200">
								{product.specs.map((spec, index) => (
									<tr key={index}>
										<td className="py-3 font-medium text-gray-700 w-1/3">
											{spec.label}
										</td>
										<td className="py-3 text-gray-900">{spec.value}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					{/* 상세 이미지 */}
					<div className="text-center py-8">
						<img
							src={product.images[0]}
							alt="상품 상세 이미지"
							className="w-full rounded-xl mb-4"
						/>
						<p className="text-gray-600 mb-4">
							신선한 한우를 정성스럽게 손질하여 최상의 상태로 배송해드립니다.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
