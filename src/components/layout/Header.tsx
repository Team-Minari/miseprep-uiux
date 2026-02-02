import { Menu } from "lucide-react";
import { useToggleSidebar } from "../../store/useModalStore";

export default function Header() {
	const toggleSidebar = useToggleSidebar();

	// 이벤트 핸들러
	const handleToggleSidebar = () => {
		toggleSidebar();
	};

	return (
		<header className="h-12 bg-white flex items-center px-4 justify-between">
			{/* 왼쪽 섹션 */}
			<section className="flex items-center gap-2">
				<button
					onClick={handleToggleSidebar}
					className="p-1.5 hover:bg-gray-100 rounded transition-colors"
					aria-label="메뉴 열기">
					<Menu className="w-5 h-5 text-gray-600" />
				</button>
			</section>

			{/* 오른쪽 섹션 */}
			<section className="flex items-center gap-1">
				<button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded transition-colors">
					베스트
				</button>
				<button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded transition-colors">
					전체 카테고리
				</button>
				<button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded transition-colors">
					로그인
				</button>
			</section>
		</header>
	);
}
