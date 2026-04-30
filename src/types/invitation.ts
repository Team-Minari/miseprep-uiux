// ── 초대 상태 ──
export type InvitationStatus = "PENDING" | "ACCEPTED" | "DECLINED";

// ── 응답 DTO ──

/** GET /api/invitations/me */
export interface InvitationResponse {
	id: number;
	cart_id: number;
	cart_name: string;
	inviter_id: number;
	inviter_name: string;
	status: InvitationStatus;
}

// ── 요청 DTO ──

/** POST /api/carts/{cartId}/invitations */
export interface SendInvitationRequest {
	email: string;
}

/** PATCH /api/invitations/{invitationId} */
export interface RespondInvitationRequest {
	status: InvitationStatus;
}
