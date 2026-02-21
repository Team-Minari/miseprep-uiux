import {
	Star,
	ChevronLeft,
	ChevronRight,
	ShoppingCart,
	Heart,
	Share2,
} from "lucide-react";
import {
	useCurrentProduct,
	useSelectedImageIndex,
	useSetSelectedImageIndex,
	usePrevImage,
	useNextImage,
	useQuantity,
	useIncreaseQuantity,
	useDecreaseQuantity,
	useSelectedOption,
	useSetSelectedOption,
	useGetTotalPrice,
} from "../../store/useProductStore";

export default function MainSection() {
	// Store 커스텀 훅으로 상태 구독
	const product = useCurrentProduct();
	const selectedImageIndex = useSelectedImageIndex();
	const setSelectedImageIndex = useSetSelectedImageIndex();
	const prevImage = usePrevImage();
	const nextImage = useNextImage();
	const quantity = useQuantity();
	const increaseQuantity = useIncreaseQuantity();
	const decreaseQuantity = useDecreaseQuantity();
	const selectedOption = useSelectedOption();
	const setSelectedOption = useSetSelectedOption();
	const getTotalPrice = useGetTotalPrice();

	const totalPrice = getTotalPrice();

	return (
		<div className="grid grid-cols-2 gap-12 mb-16">
			{/* Left: Image Gallery */}
			<div>
				{/* Main Image */}
				<div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-4">
					<img
						src={product.images[selectedImageIndex]}
						alt={product.name}
						className="w-full h-full object-cover"
					/>
					{/* Navigation Arrows */}
					<button
						onClick={prevImage}
						className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all">
						<ChevronLeft className="w-6 h-6 text-gray-700" />
					</button>
					<button
						onClick={nextImage}
						className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all">
						<ChevronRight className="w-6 h-6 text-gray-700" />
					</button>
				</div>

				{/* Thumbnail Images */}
				<div className="grid grid-cols-4 gap-3">
					{product.images.map((image, index) => (
						<button
							key={index}
							onClick={() => setSelectedImageIndex(index)}
							className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
								selectedImageIndex === index
									? "border-[#FFC107]"
									: "border-gray-200 hover:border-gray-300"
							}`}>
							<img
								src={image}
								alt={`상품 이미지 ${index + 1}`}
								className="w-full h-full object-cover"
							/>
						</button>
					))}
				</div>
			</div>

			{/* Right: Product Info */}
			<div>
				{/* Product Title */}
				<div className="mb-4">
					<h1 className="text-3xl font-bold text-gray-900 mb-2">
						{product.name}
					</h1>
					<p className="text-lg text-gray-600">{product.subtitle}</p>
				</div>

				{/* Rating */}
				<div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200">
					<div className="flex items-center gap-1">
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
					<span className="text-lg font-medium text-gray-900">
						{product.rating}
					</span>
					<span className="text-gray-500">
						리뷰 {product.reviewCount.toLocaleString()}개
					</span>
				</div>

				{/* Price */}
				<div className="mb-6">
					<div className="flex items-baseline gap-3 mb-2">
						<span className="text-3xl font-bold text-red-600">
							{product.discount}%
						</span>
						<span className="text-4xl font-bold text-gray-900">
							{product.price.toLocaleString()}원
						</span>
					</div>
					<div className="text-lg text-gray-400 line-through">
						{product.originalPrice.toLocaleString()}원
					</div>
				</div>

				{/* Stock Info */}
				<div className="mb-6">
					<span
						className={`text-sm font-medium ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}>
						{product.stock > 0 ? `재고 ${product.stock}개` : "품절"}
					</span>
				</div>

				{/* Options */}
				<div className="mb-6">
					<label className="block text-sm font-medium text-gray-900 mb-2">
						옵션 선택
					</label>
					<select
						value={selectedOption}
						onChange={(e) => setSelectedOption(e.target.value)}
						className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107] text-gray-900">
						<option value="">옵션을 선택해주세요</option>
						{product.options.map((opt) => (
							<option key={opt.value} value={opt.value}>
								{opt.label}
							</option>
						))}
					</select>
				</div>

				{/* Quantity */}
				<div className="mb-6">
					<label className="block text-sm font-medium text-gray-900 mb-2">
						수량
					</label>
					<div className="flex items-center gap-3">
						<button
							onClick={decreaseQuantity}
							className="w-12 h-12 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
							-
						</button>
						<span className="w-16 text-center text-lg font-medium">
							{quantity}
						</span>
						<button
							onClick={increaseQuantity}
							className="w-12 h-12 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
							+
						</button>
					</div>
				</div>

				{/* Total Price */}
				<div className="bg-gray-50 rounded-xl p-6 mb-6">
					<div className="flex items-center justify-between">
						<span className="text-lg font-medium text-gray-700">
							총 상품금액
						</span>
						<div className="text-right">
							<span className="text-sm text-gray-500 mr-2">
								총 수량 {quantity}개
							</span>
							<span className="text-3xl font-bold text-gray-900">
								{totalPrice.toLocaleString()}원
							</span>
						</div>
					</div>
				</div>

				{/* Action Buttons */}
				<div className="flex gap-3 mb-6">
					<button className="flex-1 bg-[#F7F3E9] hover:bg-[#F3EEE0] text-gray-900 font-bold py-4 px-6 rounded-xl transition-colors text-lg">
						구매하기
					</button>
					<button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-6 rounded-xl transition-colors text-lg flex items-center justify-center gap-2">
						<ShoppingCart className="w-5 h-5" />
						장바구니
					</button>
				</div>

				{/* Additional Buttons */}
				<div className="flex gap-3">
					<button className="flex-1 border border-gray-300 hover:bg-gray-50 py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
						<Heart className="w-5 h-5" />
						찜하기
					</button>
					<button className="flex-1 border border-gray-300 hover:bg-gray-50 py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
						<Share2 className="w-5 h-5" />
						공유하기
					</button>
				</div>
			</div>
		</div>
	);
}
