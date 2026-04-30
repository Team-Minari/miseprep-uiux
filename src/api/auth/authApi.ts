import { apiClient } from "../client";
import { useAuthStore } from "../../store/auth/useAuthStore";
import type {
	ApiResponse,
	AuthTokens,
	Member,
	TestLoginRequest,
	TokenRefreshRequest,
} from "../../types/auth/auth";

const AUTH_BASE = "/api/auth";
const MEMBER_BASE = "/api/members";

const getRedirectUri = () => `${window.location.origin}/oauth/kakao/callback`;

/** 카카오 OAuth 인가 URL 반환 */
export const getKakaoAuthorizeUrl = () =>
	`${apiClient.defaults.baseURL}${AUTH_BASE}/oauth/kakao/authorize?redirect_uri=${encodeURIComponent(getRedirectUri())}`;

/** 카카오 콜백 코드로 토큰 교환 */
export const kakaoCallback = (code: string) =>
	apiClient
		.get<ApiResponse<AuthTokens>>(`${AUTH_BASE}/oauth/kakao/callback`, {
			params: { code, redirect_uri: getRedirectUri() },
		})
		.then((res) => res.data.data);

/** 토큰 갱신 */
export const refreshToken = (refreshToken: string) =>
	apiClient
		.post<ApiResponse<AuthTokens>>(`${AUTH_BASE}/refresh`, {
			refresh_token: refreshToken,
		} satisfies TokenRefreshRequest)
		.then((res) => res.data.data);

/** 로그아웃 */
export const logout = () =>
	apiClient.post(`${AUTH_BASE}/logout`, null, {
		headers: {
			"Refresh-Token": useAuthStore.getState().refreshToken ?? "",
		},
	});

/** 테스트 로그인 */
export const testLogin = (body: TestLoginRequest) =>
	apiClient
		.post<ApiResponse<AuthTokens>>("/api/test/login", body)
		.then((res) => res.data.data);

/** 내 정보 조회 */
export const getMe = () =>
	apiClient
		.get<ApiResponse<Member>>(`${MEMBER_BASE}/me`)
		.then((res) => res.data.data);
