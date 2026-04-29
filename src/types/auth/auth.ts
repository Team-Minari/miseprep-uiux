// ── 공통 응답 래퍼 ──
export interface ApiResponse<T> {
	data: T;
	message: string;
}

// ── 인증 ──
export interface AuthTokens {
	access_token: string;
	refresh_token: string;
}

export interface TokenRefreshRequest {
	refresh_token: string;
}

// ── 테스트 로그인 ──
export interface TestLoginRequest {
	email: string;
	username: string;
	profile_image_url?: string;
}

// ── 회원 ──
export interface Member {
	id: number;
	email: string;
	username: string;
	profile_image_url: string | null;
}

// ── 에러 ──
export interface ErrorDetail {
	field: string;
	message: string;
}

export interface ErrorResponse {
	code: string;
	message: string;
	details: ErrorDetail[] | null;
}
