import { create } from "zustand";
import { combine, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { AuthTokens, Member } from "../../types/auth/auth";
import { tokenStorage } from "../../api/client";

export const useAuthStore = create(
	persist(
		immer(
			combine(
				{
					accessToken: null as string | null,
					refreshToken: null as string | null,
					user: null as Member | null,
					isAuthenticated: false,
				},
				(set) => ({
					setTokens: (tokens: AuthTokens) => {
						tokenStorage.set(tokens);
						set((state) => {
							state.accessToken = tokens.access_token;
							state.refreshToken = tokens.refresh_token;
							state.isAuthenticated = true;
						});
					},

					setUser: (user: Member) =>
						set((state) => {
							state.user = user;
						}),

					clear: () => {
						tokenStorage.clear();
						set((state) => {
							state.accessToken = null;
							state.refreshToken = null;
							state.user = null;
							state.isAuthenticated = false;
						});
					},
				})
			)
		),
		{
			name: "auth-storage",
			partialize: (state) => ({
				accessToken: state.accessToken,
				refreshToken: state.refreshToken,
				user: state.user,
				isAuthenticated: state.isAuthenticated,
			}),
		}
	)
);

// ── 리렌더링 방지용 셀렉터 훅 ──
export const useIsAuthenticated = () => useAuthStore((s) => s.isAuthenticated);
export const useCurrentUser = () => useAuthStore((s) => s.user);
export const useAccessToken = () => useAuthStore((s) => s.accessToken);
export const useSetTokens = () => useAuthStore((s) => s.setTokens);
export const useSetUser = () => useAuthStore((s) => s.setUser);
export const useAuthClear = () => useAuthStore((s) => s.clear);
