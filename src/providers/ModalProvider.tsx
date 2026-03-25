import { type ReactNode, lazy, Suspense } from "react";
import { createPortal } from "react-dom";
import { useModalOpenState, type ModalKey } from "../store/useCartModalStore";

// lazy 임포트 도입 각 모달은 실제로 open될 때만 번들이 다운로드됨
const CreateCartModal = lazy(
	() => import("../components/modals/CreateCartModal")
);
const AddToCartModal = lazy(
	() => import("../components/modals/AddToCartModal")
);
const SelectCartModal = lazy(
	() => import("../components/modals/SelectCartModal")
);
const CartManageModal = lazy(
	() => import("../components/modals/CartManageModal")
);

const MODAL_MAP: Record<
	ModalKey,
	React.LazyExoticComponent<React.ComponentType>
> = {
	createCart: CreateCartModal,
	createSharedCart: CreateCartModal,
	addToCart: AddToCartModal,
	selectCart: SelectCartModal,
	manageCart: CartManageModal,
};

// 중복 렌더링 방지, createCart와 createSharedCart는 같은 컴포넌트이므로 한 번만 렌더링
const UNIQUE_MODAL_KEYS: ModalKey[] = [
	"createCart",
	"addToCart",
	"selectCart",
	"manageCart",
];

// 단일 모달 키에 대해 open 상태 구독 + Portal 렌더링
function ModalPortal({
	modalKey,
	modalRoot,
}: {
	modalKey: ModalKey;
	modalRoot: Element;
}) {
	const isOpen = useModalOpenState(modalKey);

	// createCart 키에서는 createCart OR createSharedCart 중 하나라도 열리면 렌더링
	const isCreateSharedCartOpen = useModalOpenState("createSharedCart");

	const shouldRender =
		modalKey === "createCart" ? isOpen || isCreateSharedCartOpen : isOpen;

	if (!shouldRender) return null;

	const ModalComponent = MODAL_MAP[modalKey];

	return createPortal(
		<Suspense fallback={null}>
			<ModalComponent />
		</Suspense>,
		modalRoot
	);
}

export default function ModalProvider({ children }: { children: ReactNode }) {
	const modalRoot =
		typeof document !== "undefined"
			? document.getElementById("modal-root")
			: null;

	return (
		<>
			{children}

			{modalRoot &&
				UNIQUE_MODAL_KEYS.map((key) => (
					<ModalPortal key={key} modalKey={key} modalRoot={modalRoot} />
				))}
		</>
	);
}
