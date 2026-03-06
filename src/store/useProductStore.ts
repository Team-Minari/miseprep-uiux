import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import {
	productDetail,
	findProductById,
	type ProductDetail,
} from "../mock/product";

export const useProductStore = create(
	devtools(
		immer(
			combine(
				{
					// 현재 조회 중인 상품 상세 데이터
					currentProduct: productDetail as ProductDetail,

					// 이미지 갤러리 선택 인덱스
					selectedImageIndex: 0,

					// 구매 수량
					quantity: 1,
				},
				(set, get) => ({
					// ── 상품 데이터 액션 ──

					/** URL 파라미터의 ID를 기반으로 상품 데이터를 로드하고 UI 상태를 초기화 */
					loadProduct: (id: number) => {
						const matched = findProductById(id);

						set((state) => {
							if (matched && matched.id === productDetail.id) {
								state.currentProduct = productDetail;
							} else if (matched) {
								state.currentProduct = {
									...productDetail,
									...matched,
									images: [matched.image_url],
									subtitle: matched.description.slice(0, 30) + "...",
								};
							} else {
								state.currentProduct = productDetail;
							}

							// UI 상태 초기화
							state.selectedImageIndex = 0;
							state.quantity = 1;
						});
					},

					/** 상품 데이터를 기본값(productDetail)으로 리셋 */
					resetProduct: () =>
						set((state) => {
							state.currentProduct = productDetail;
							state.selectedImageIndex = 0;
							state.quantity = 1;
						}),

					// ── 이미지 갤러리 액션 ──

					/** 특정 인덱스의 이미지 선택 */
					setSelectedImageIndex: (index: number) =>
						set((state) => {
							state.selectedImageIndex = index;
						}),

					/** 이전 이미지로 이동 */
					prevImage: () =>
						set((state) => {
							const images = state.currentProduct.images;
							state.selectedImageIndex =
								state.selectedImageIndex === 0
									? images.length - 1
									: state.selectedImageIndex - 1;
						}),

					/** 다음 이미지로 이동 */
					nextImage: () =>
						set((state) => {
							const images = state.currentProduct.images;
							state.selectedImageIndex =
								state.selectedImageIndex === images.length - 1
									? 0
									: state.selectedImageIndex + 1;
						}),

					// ── 수량 액션 ──

					/** 수량 증가 */
					increaseQuantity: () =>
						set((state) => {
							state.quantity += 1;
						}),

					/** 수량 감소 (최소 1) */
					decreaseQuantity: () =>
						set((state) => {
							state.quantity = Math.max(1, state.quantity - 1);
						}),

					/** 수량 직접 설정 */
					setQuantity: (qty: number) =>
						set((state) => {
							state.quantity = Math.max(1, qty);
						}),

					// ── 파생 값 (Getter) ──

					/** 총 상품 금액 계산 */
					getTotalPrice: () => {
						const { currentProduct, quantity } = get();
						return currentProduct.price * quantity;
					},
				})
			)
		),
		{ name: "ProductStore" }
	)
);

// ──────────────────────────────────────────────
// 리렌더링 최적화용 커스텀 훅
// ──────────────────────────────────────────────

// 상품 데이터
export const useCurrentProduct = () =>
	useProductStore((state) => state.currentProduct);

export const useLoadProduct = () =>
	useProductStore((state) => state.loadProduct);

export const useResetProduct = () =>
	useProductStore((state) => state.resetProduct);

// 이미지 갤러리
export const useSelectedImageIndex = () =>
	useProductStore((state) => state.selectedImageIndex);

export const useSetSelectedImageIndex = () =>
	useProductStore((state) => state.setSelectedImageIndex);

export const usePrevImage = () => useProductStore((state) => state.prevImage);

export const useNextImage = () => useProductStore((state) => state.nextImage);

// 수량
export const useQuantity = () => useProductStore((state) => state.quantity);

export const useIncreaseQuantity = () =>
	useProductStore((state) => state.increaseQuantity);

export const useDecreaseQuantity = () =>
	useProductStore((state) => state.decreaseQuantity);

export const useSetQuantity = () =>
	useProductStore((state) => state.setQuantity);

// 파생 값
export const useGetTotalPrice = () =>
	useProductStore((state) => state.getTotalPrice);
