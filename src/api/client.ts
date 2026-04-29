import axios from "axios";
import type {
	ApiResponse,
	AuthTokens,
	TokenRefreshRequest,
} from "../types/auth/auth";

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

export const apiClient = axios.create({
	baseURL: BASE_URL,
	headers: { "Content-Type": "application/json" },
});

// ── 토큰 헬퍼 ──
const TOKEN_KEY = "access_token";
const REFRESH_KEY = "refresh_token";

export const tokenStorage = {
	getAccess: () => localStorage.getItem(TOKEN_KEY),
	getRefresh: () => localStorage.getItem(REFRESH_KEY),
	set: (tokens: AuthTokens) => {
		localStorage.setItem(TOKEN_KEY, tokens.access_token);
		localStorage.setItem(REFRESH_KEY, tokens.refresh_token);
	},
	clear: () => {
		localStorage.removeItem(TOKEN_KEY);
		localStorage.removeItem(REFRESH_KEY);
	},
};

// ── 요청 인터셉터: Authorization 헤더 주입 ──
apiClient.interceptors.request.use((config) => {
	const token = tokenStorage.getAccess();
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

		if (error.response?.status !== 401 || original._retry) {
			return Promise.reject(error);
		}

		const refreshToken = tokenStorage.getRefresh();
		if (!refreshToken) {
			tokenStorage.clear();
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
					} satisfies TokenRefreshRequest)
					.then((res) => res.data.data)
					.finally(() => {
						refreshPromise = null;
					});
			}

			const tokens = await refreshPromise;
			tokenStorage.set(tokens);
			original.headers.Authorization = `Bearer ${tokens.access_token}`;
			return apiClient(original);
		} catch {
			tokenStorage.clear();
			window.location.href = "/login";
			return Promise.reject(error);
		}
	}
);
