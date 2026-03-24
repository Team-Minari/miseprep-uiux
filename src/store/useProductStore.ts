import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import {
	productDetail,
	findProductById,
	toProductDetail,
	type ProductSnapshot,
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
				},
				(set) => ({
					// ── 상품 데이터 액션 ──

					/** URL 파라미터의 ID를 기반으로 상품 데이터를 로드하고 UI 상태를 초기화 */
					loadProduct: (id: number, fallbackProduct?: ProductSnapshot) => {
						const matched = findProductById(id);

						set((state) => {
							if (matched) {
								state.currentProduct =
									matched.id === productDetail.id
										? productDetail
										: toProductDetail(matched);
							} else if (fallbackProduct) {
								state.currentProduct = toProductDetail(fallbackProduct);
							} else {
								state.currentProduct = productDetail;
							}

							// UI 상태 초기화
							state.selectedImageIndex = 0;
						});
					},

					/** 상품 데이터를 기본값(productDetail)으로 리셋 */
					resetProduct: () =>
						set((state) => {
							state.currentProduct = productDetail;
							state.selectedImageIndex = 0;
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
