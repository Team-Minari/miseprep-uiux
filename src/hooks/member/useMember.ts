import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { updateMe, deleteMe } from "../../api/member/memberApi";
import { useAuthStore } from "../../store/auth/useAuthStore";
import type { UpdateMemberRequest } from "../../types/auth/auth";

/** 프로필 수정 */
export const useUpdateProfile = () => {
	const setUser = useAuthStore((s) => s.setUser);

	return useMutation({
		mutationFn: (body: UpdateMemberRequest) => updateMe(body),
		onSuccess: (updatedUser) => {
			setUser(updatedUser);
		},
	});
};

/** 회원 탈퇴 */
export const useDeleteAccount = () => {
	const clear = useAuthStore((s) => s.clear);
	const navigate = useNavigate();

	return useMutation({
		mutationFn: () => deleteMe(),
		onSuccess: () => {
			clear();
			navigate("/login", { replace: true });
		},
	});
};
