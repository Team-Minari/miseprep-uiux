import { motion } from "motion/react";
import { Star } from "lucide-react";
import { useCurrentProduct } from "../../store/useProductStore";

interface ReviewSectionProps {
	sectionRef: React.Ref<HTMLDivElement>;
}

export default function ReviewSection({ sectionRef }: ReviewSectionProps) {
	const product = useCurrentProduct();

	return (
		<div ref={sectionRef} className="py-12">
			<div className="max-w-4xl mx-auto">
				{/* 리뷰 요약 */}
				<div className="mb-8">
					<h2 className="text-2xl font-bold text-gray-900 mb-4">고객 리뷰</h2>
					<div className="flex items-center gap-6 bg-gray-50 rounded-xl p-6">
						<div className="text-center">
							<div className="text-5xl font-bold text-gray-900 mb-2">
								{product.rating}
							</div>
							<div className="flex items-center gap-1 mb-1">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className={`w-5 h-5 ${
											i < Math.floor(product.rating)
												? "fill-yellow-400 text-yellow-400"
												: "fill-gray-200 text-gray-200"
										}`}
									/>
								))}
							</div>
							<div className="text-sm text-gray-600">
								{product.reviewCount.toLocaleString()}개 리뷰
							</div>
						</div>
						<div className="flex-1">
							<div className="space-y-2">
								{[5, 4, 3, 2, 1].map((star) => (
									<div key={star} className="flex items-center gap-3">
										<span className="text-sm text-gray-600 w-8">{star}점</span>
										<div className="flex-1 bg-gray-200 rounded-full h-2">
											<div
												className="bg-yellow-400 h-2 rounded-full"
												style={{
													width: `${star === 5 ? 75 : star === 4 ? 20 : star === 3 ? 3 : star === 2 ? 1 : 1}%`,
												}}
											/>
										</div>
										<span className="text-sm text-gray-600 w-12">
											{star === 5
												? "75%"
												: star === 4
													? "20%"
													: star === 3
														? "3%"
														: "1%"}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* 리뷰 목록 */}
				<div className="space-y-6">
					{product.reviews.map((review) => (
						<motion.div
							key={review.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="border border-gray-200 rounded-xl p-6">
							<div className="flex items-start justify-between mb-3">
								<div>
									<div className="flex items-center gap-2 mb-2">
										<span className="font-semibold text-gray-900">
											{review.author}
										</span>
										<div className="flex items-center gap-1">
											{[...Array(5)].map((_, i) => (
												<Star
													key={i}
													className={`w-4 h-4 ${
														i < review.rating
															? "fill-yellow-400 text-yellow-400"
															: "fill-gray-200 text-gray-200"
													}`}
												/>
											))}
										</div>
									</div>
									<div className="text-sm text-gray-500">{review.date}</div>
								</div>
							</div>

							{review.image && (
								<div className="mb-4">
									<img
										src={review.image}
										alt="리뷰 이미지"
										className="w-32 h-32 rounded-lg object-cover"
									/>
								</div>
							)}

							<p className="text-gray-700 mb-4">{review.content}</p>

							<button className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1">
								도움돼요 {review.helpful}
							</button>
						</motion.div>
					))}
				</div>

				{/* 리뷰 더보기 */}
				<div className="text-center mt-8">
					<button className="px-8 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
						리뷰 더보기
					</button>
				</div>
			</div>
		</div>
	);
}
