import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useIsAuthenticated } from "../../store/auth/useAuthStore";

/**
 * 인증이 필요한 액션을 감싸는 훅.
 * 미인증 시 로그인 페이지로 이동하며, 인증 상태면 콜백을 실행한다.
 */
export const useRequireAuth = () => {
	const isAuthenticated = useIsAuthenticated();
	const navigate = useNavigate();

	const requireAuth = useCallback(
		<T extends unknown[]>(action: (...args: T) => void) =>
			(...args: T) => {
				if (!isAuthenticated) {
					const confirmed = window.confirm(
						"로그인이 필요합니다. 로그인 페이지로 이동하시겠습니까?"
					);
					if (confirmed) {
						navigate("/login");
					}
					return;
				}
				action(...args);
			},
		[isAuthenticated, navigate]
	);

	return { isAuthenticated, requireAuth };
};
