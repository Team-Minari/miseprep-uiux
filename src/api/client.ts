import axios from "axios";
import type { ApiResponse, AuthTokens } from "../types/auth/auth";
import { useAuthStore } from "../store/auth/useAuthStore";

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

export const apiClient = axios.create({
	baseURL: BASE_URL,
	headers: { "Content-Type": "application/json" },
});

// ── 요청 인터셉터: Authorization 헤더 주입 ──
apiClient.interceptors.request.use((config) => {
	const token = useAuthStore.getState().accessToken;
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

// ── 응답 인터셉터: 401 시 토큰 갱신 ──
let refreshPromise: Promise<AuthTokens> | null = null;

apiClient.interceptors.response.use(
	(response) => response,
	async (error) => {
		const original = error.config;
		const status = error.response?.status;

		// 403: 인증 무효 — 토큰 정리 후 로그인 페이지로 이동
		if (status === 403 && !original._authCleared) {
			original._authCleared = true;
			useAuthStore.getState().clear();
			alert("로그인이 필요합니다.");
			window.location.href = "/login";
			return Promise.reject(error);
		}

		if (status !== 401 || original._retry) {
			return Promise.reject(error);
		}

		const refreshToken = useAuthStore.getState().refreshToken;
		if (!refreshToken) {
			useAuthStore.getState().clear();
			window.location.href = "/login";
			return Promise.reject(error);
		}

		original._retry = true;

		try {
			// 동시 요청 시 refresh 중복 방지
			if (!refreshPromise) {
				refreshPromise = axios
					.post<ApiResponse<AuthTokens>>(`${BASE_URL}/api/auth/refresh`, {
						refresh_token: refreshToken,
					})
					.then((res) => res.data.data)
					.finally(() => {
						refreshPromise = null;
					});
			}

			const tokens = await refreshPromise;
			useAuthStore.getState().setTokens(tokens);
			original.headers.Authorization = `Bearer ${tokens.access_token}`;
			return apiClient(original);
		} catch {
			useAuthStore.getState().clear();
			window.location.href = "/login";
			return Promise.reject(error);
		}
	}
);
