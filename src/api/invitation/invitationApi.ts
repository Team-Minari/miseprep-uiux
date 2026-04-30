import { apiClient } from "../client";
import type { ApiResponse } from "../../types/auth/auth";
import type {
	InvitationResponse,
	SendInvitationRequest,
	RespondInvitationRequest,
} from "../../types/invitation";

/** 초대 보내기 */
export const sendInvitation = (cartId: number, body: SendInvitationRequest) =>
	apiClient
		.post<
			ApiResponse<InvitationResponse>
		>(`/api/carts/${cartId}/invitations`, body)
		.then((res) => res.data.data);

/** 내 초대 목록 조회 */
export const getMyInvitations = () =>
	apiClient
		.get<ApiResponse<InvitationResponse[]>>("/api/invitations/me")
		.then((res) => res.data.data);

/** 초대 수락/거절 */
export const respondInvitation = (
	invitationId: number,
	body: RespondInvitationRequest
) =>
	apiClient
		.patch<
			ApiResponse<InvitationResponse>
		>(`/api/invitations/${invitationId}`, body)
		.then((res) => res.data.data);

/** 초대 취소 */
export const cancelInvitation = (invitationId: number) =>
	apiClient.delete(`/api/invitations/${invitationId}`);
