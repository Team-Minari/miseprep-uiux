import {
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
	useGetTotalPrice,
} from "../../store/useProductStore";
import { personalCarts, sharedCarts } from "../../mock/cartData";
import {
	useOpenAddToCartModal,
	useOpenSelectCartModal,
} from "../../store/useCartModalStore.ts";

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
	const getTotalPrice = useGetTotalPrice();
	const openAddToCartModal = useOpenAddToCartModal();
	const openSelectCartModal = useOpenSelectCartModal();

	const totalPrice = getTotalPrice();

	// 장바구니 버튼 클릭 핸들러
	const handleAddToCart = () => {
		const hasCartData = personalCarts.length > 0 || sharedCarts.length > 0;
		if (hasCartData) {
			openSelectCartModal();
		} else {
			openAddToCartModal();
		}
	};

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
			<div className="flex flex-col justify-start">
				{/* Product Title */}
				<div className="mb-6">
					<h1 className="text-[32px] leading-tight font-bold text-gray-900 mb-3">
						{product.name}
					</h1>
					<p className="text-[17px] text-gray-600">{product.subtitle}</p>
				</div>

				{/* Price */}
				<div className="mb-6">
					<span className="text-[36px] font-bold text-[#1F2937] tracking-tight">
						{product.price.toLocaleString()}원
					</span>
				</div>

				{/* Quantity */}
				<div className="mb-[120px]">
					<label className="block text-[15px] font-medium text-gray-900 mb-3">
						수량
					</label>
					<div className="flex items-center gap-3">
						<button
							onClick={decreaseQuantity}
							className="w-12 h-12 border border-gray-200 rounded-xl hover:bg-gray-50 flex items-center justify-center transition-colors text-xl font-medium text-gray-800 pb-0.5">
							-
						</button>
						<span className="w-12 text-center text-lg font-semibold text-gray-900">
							{quantity}
						</span>
						<button
							onClick={increaseQuantity}
							className="w-12 h-12 border border-gray-200 rounded-xl hover:bg-gray-50 flex items-center justify-center transition-colors text-xl font-medium text-gray-800 pb-0.5">
							+
						</button>
					</div>
				</div>

				{/* Total Price */}
				<div className="bg-[#FAF9F7] rounded-xl p-6.5 px-7 py-6 mb-7">
					<div className="flex items-center justify-between">
						<span className="text-[17px] font-semibold text-[#4B5563]">
							총 상품금액
						</span>
						<div className="flex items-baseline gap-3">
							<span className="text-[15px] text-gray-500 font-medium">
								총 수량 {quantity}개
							</span>
							<span className="text-[32px] font-bold text-[#1F2937] tracking-tight">
								{totalPrice.toLocaleString()}원
							</span>
						</div>
					</div>
				</div>

				{/* Action Buttons */}
				<div className="flex flex-col gap-4">
					<button
						onClick={handleAddToCart}
						className="w-full bg-[#FAF6EC] hover:bg-[#F3EFE4] text-gray-900 font-bold py-4 rounded-xl transition-colors text-[17px] flex items-center justify-center gap-2">
						<ShoppingCart className="w-[22px] h-[22px]" />
						장바구니
					</button>

					{/* Additional Buttons */}
					<div className="flex gap-4">
						<button className="flex-1 border border-gray-200 hover:bg-gray-50 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-[16px] font-medium text-gray-900">
							<Heart className="w-5 h-5" />
							찜하기
						</button>
						<button className="flex-1 border border-gray-200 hover:bg-gray-50 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-[16px] font-medium text-gray-900">
							<Share2 className="w-5 h-5" />
							공유하기
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
