import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
	kakaoCallback,
	logout as logoutApi,
	getMe,
} from "../../api/auth/authApi";
import { useAuthStore } from "../../store/auth/useAuthStore";

const AUTH_KEYS = {
	me: ["auth", "me"] as const,
};

/** 카카오 콜백 코드 → 토큰 교환 + 유저 정보 조회 */
export const useKakaoLogin = () => {
	const navigate = useNavigate();
	const setTokens = useAuthStore((s) => s.setTokens);
	const setUser = useAuthStore((s) => s.setUser);
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (code: string) => kakaoCallback(code),
		onSuccess: async (tokens) => {
			setTokens(tokens);
			const user = await getMe();
			setUser(user);
			queryClient.setQueryData(AUTH_KEYS.me, user);
			navigate("/", { replace: true });
		},
		onError: () => {
			alert("로그인에 실패했습니다. 다시 시도해주세요.");
			navigate("/login", { replace: true });
		},
	});
};

/** 로그아웃 */
export const useLogout = () => {
	const clear = useAuthStore((s) => s.clear);
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: () => logoutApi(),
		onSettled: () => {
			clear();
			queryClient.removeQueries({ queryKey: AUTH_KEYS.me });
			navigate("/login", { replace: true });
		},
	});
};

/** 현재 유저 정보 조회 (인증 상태일 때만) */
export const useMe = () => {
	const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
	const setUser = useAuthStore((s) => s.setUser);

	return useQuery({
		queryKey: AUTH_KEYS.me,
		queryFn: async () => {
			const user = await getMe();
			setUser(user);
			return user;
		},
		enabled: isAuthenticated,
		staleTime: 5 * 60 * 1000,
	});
};
