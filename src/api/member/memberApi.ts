import { apiClient } from "../client";
import type {
	ApiResponse,
	Member,
	UpdateMemberRequest,
} from "../../types/auth/auth";

const BASE = "/api/members";

/** 프로필 수정 */
export const updateMe = (body: UpdateMemberRequest) =>
	apiClient
		.patch<ApiResponse<Member>>(`${BASE}/me`, body)
		.then((res) => res.data.data);

/** 회원 탈퇴 */
export const deleteMe = () => apiClient.delete(`${BASE}/me`);
