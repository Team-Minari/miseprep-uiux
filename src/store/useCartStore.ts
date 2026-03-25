import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import {
	CURRENT_USER_EMAIL,
	personalCarts as initialPersonalCarts,
	sharedCarts as initialSharedCarts,
	type CartParticipant,
	type PersonalCart,
	type SharedCart,
} from "../mock/cartData";

type CartType = "personal" | "shared";

type UpdateCartPayload = {
	name: string;
	isPublic: boolean;
	purpose: string;
	budget?: number;
};

type CartStore = {
	personalCarts: PersonalCart[];
	sharedCarts: SharedCart[];
	currentUserEmail: string;
	updateCart: (
		cartType: CartType,
		cartId: number,
		payload: UpdateCartPayload
	) => void;
	deleteCart: (cartType: CartType, cartId: number) => void;
	leaveSharedCart: (cartId: number) => void;
	transferSharedCartOwnership: (
		cartId: number,
		nextOwnerParticipantId: CartParticipant["id"]
	) => void;
	removeSharedCartParticipant: (
		cartId: number,
		participantId: CartParticipant["id"]
	) => void;
};

const findCartIndex = <T extends { id: number }>(carts: T[], cartId: number) =>
	carts.findIndex((cart) => cart.id === cartId);

export const useCartStore = create<CartStore>()(
	immer(
		combine(
			{
				personalCarts: initialPersonalCarts,
				sharedCarts: initialSharedCarts,
				currentUserEmail: CURRENT_USER_EMAIL,
			},
			(set) => ({
				updateCart: (cartType, cartId, payload) =>
					set((state) => {
						const targetCarts =
							cartType === "personal" ? state.personalCarts : state.sharedCarts;
						const cartIndex = findCartIndex(targetCarts, cartId);

						if (cartIndex === -1) return;

						targetCarts[cartIndex].name = payload.name;
						targetCarts[cartIndex].isPublic = payload.isPublic;
						targetCarts[cartIndex].purpose = payload.purpose || undefined;
						targetCarts[cartIndex].budget = payload.budget;
					}),
				deleteCart: (cartType, cartId) =>
					set((state) => {
						if (cartType === "personal") {
							state.personalCarts = state.personalCarts.filter(
								(cart) => cart.id !== cartId
							);
							return;
						}

						state.sharedCarts = state.sharedCarts.filter(
							(cart) => cart.id !== cartId
						);
					}),
				leaveSharedCart: (cartId) =>
					set((state) => {
						state.sharedCarts = state.sharedCarts.filter(
							(cart) => cart.id !== cartId
						);
					}),
				transferSharedCartOwnership: (cartId, nextOwnerParticipantId) =>
					set((state) => {
						const cart = state.sharedCarts.find((item) => item.id === cartId);

						if (!cart?.participants?.length) return;

						cart.participants = cart.participants.map((participant) => ({
							...participant,
							role:
								participant.id === nextOwnerParticipantId
									? "owner"
									: participant.role === "owner"
										? "member"
										: participant.role,
						}));
					}),
				removeSharedCartParticipant: (cartId, participantId) =>
					set((state) => {
						const cart = state.sharedCarts.find((item) => item.id === cartId);

						if (!cart?.participants?.length) return;

						cart.participants = cart.participants.filter(
							(participant) => participant.id !== participantId
						);
					}),
			})
		)
	)
);

export const usePersonalCarts = () =>
	useCartStore((state) => state.personalCarts);
export const useSharedCarts = () => useCartStore((state) => state.sharedCarts);
export const useAllCartsCount = () =>
	useCartStore(
		(state) => state.personalCarts.length + state.sharedCarts.length
	);
export const useCurrentUserEmail = () =>
	useCartStore((state) => state.currentUserEmail);
export const useUpdateCart = () => useCartStore((state) => state.updateCart);
export const useDeleteCart = () => useCartStore((state) => state.deleteCart);
export const useLeaveSharedCart = () =>
	useCartStore((state) => state.leaveSharedCart);
export const useTransferSharedCartOwnership = () =>
	useCartStore((state) => state.transferSharedCartOwnership);
export const useRemoveSharedCartParticipant = () =>
	useCartStore((state) => state.removeSharedCartParticipant);
