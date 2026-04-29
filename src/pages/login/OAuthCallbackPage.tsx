import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useKakaoLogin } from "../../hooks/auth/useAuth";

const CALLBACK_HANDLED_KEY = "oauth_code_handled";

export default function OAuthCallbackPage() {
	const [params] = useSearchParams();
	const navigate = useNavigate();
	const { mutate, isPending } = useKakaoLogin();

	useEffect(() => {
		const code = params.get("code");

		if (!code) {
			navigate("/login", { replace: true });
			return;
		}

		// StrictMode 이중 호출 방지: 동일 코드가 이미 처리되었으면 무시
		const handled = sessionStorage.getItem(CALLBACK_HANDLED_KEY);
		if (handled === code) return;
		sessionStorage.setItem(CALLBACK_HANDLED_KEY, code);

		mutate(code, {
			onSettled: () => {
				sessionStorage.removeItem(CALLBACK_HANDLED_KEY);
			},
		});
	}, [params, navigate, mutate]);

	return (
		<div className="h-screen flex items-center justify-center bg-white">
			{isPending && (
				<div className="text-center">
					<div className="w-8 h-8 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto mb-4" />
					<p className="text-gray-600 text-sm">로그인 처리 중...</p>
				</div>
			)}
		</div>
	);
}
