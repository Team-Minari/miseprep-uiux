import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
	sendInvitation,
	getMyInvitations,
	respondInvitation,
	cancelInvitation,
} from "../../api/invitation/invitationApi";
import { CART_KEYS } from "../cart/useCart";
import { useAuthStore } from "../../store/auth/useAuthStore";
import type {
	SendInvitationRequest,
	RespondInvitationRequest,
} from "../../types/invitation";

const INVITATION_KEYS = {
	all: ["invitations"] as const,
	myList: () => ["invitations", "my"] as const,
};

/** 내 초대 목록 조회 */
export const useMyInvitations = () => {
	const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

	return useQuery({
		queryKey: INVITATION_KEYS.myList(),
		queryFn: getMyInvitations,
		enabled: isAuthenticated,
		staleTime: 30 * 1000,
	});
};

/** 초대 보내기 */
export const useSendInvitation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: ({
			cartId,
			body,
		}: {
			cartId: number;
			body: SendInvitationRequest;
		}) => sendInvitation(cartId, body),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: INVITATION_KEYS.myList(),
			});
		},
	});
};

/** 초대 수락/거절 */
export const useRespondInvitation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: ({
			invitationId,
			body,
		}: {
			invitationId: number;
			body: RespondInvitationRequest;
		}) => respondInvitation(invitationId, body),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: INVITATION_KEYS.myList(),
			});
			queryClient.invalidateQueries({ queryKey: CART_KEYS.myList() });
		},
	});
};

/** 초대 취소 */
export const useCancelInvitation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (invitationId: number) => cancelInvitation(invitationId),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: INVITATION_KEYS.myList(),
			});
		},
	});
};
