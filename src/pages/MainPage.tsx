import { useState } from "react";
import Header from "../components/layout/Header.tsx";
import Sidebar from "../components/layout/Sidebar.tsx";
import SearchModal from "../components/modals/SearchModal";
import CreateCartModal from "../components/modals/CreateCartModal";
import { useModalStore } from "../store/useModalStore";

export default function MainPage() {
	// 사이드바 열림/닫힘 상태
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	// store에서 모달 상태 가져옴
	const isSearchModalOpen = useModalStore((state) => state.isSearchModalOpen);
	const isCreateCartModalOpen = useModalStore(
		(state) => state.isCreateCartModalOpen
	);
	const isCreateSharedCartModalOpen = useModalStore(
		(state) => state.isCreateSharedCartModalOpen
	);

	return (
		<div className="h-screen flex flex-col overflow-hidden bg-white">
			{/* 헤더 */}
			<Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

			<div className="flex flex-1 overflow-hidden">
				{/* 사이드바 */}
				<Sidebar isOpen={isSidebarOpen} />

				{/* 메인 콘텐츠 영역 */}
				<main className="flex-1 overflow-auto">
					<div className="max-w-4xl mx-auto px-6 py-16">
						<div className="space-y-8">
							{/* 환영 메시지 */}
							<div>
								<h1 className="text-4xl font-bold text-gray-900 mb-4">
									공유 장바구니 서비스에 오신 것을 환영합니다
								</h1>
								<p className="text-xl text-gray-600">
									함께 쇼핑하고, 함께 관리하세요
								</p>
							</div>

							<div className="space-y-6">
								{/* 서비스 소개 섹션 */}
								<section>
									<h2 className="text-2xl font-semibold text-gray-900 mb-3">
										우리의 서비스
									</h2>
									<p className="text-gray-700 leading-relaxed">
										공유 장바구니는 개인과 팀이 함께 상품을 관리하고 구매할 수
										있는 협업 쇼핑 플랫폼입니다. 가족, 친구, 동료들과 함께
										장바구니를 공유하고 예산을 관리하며, 효율적으로 쇼핑할 수
										있습니다.
									</p>
								</section>

								{/* 주요 기능 섹션 */}
								<section>
									<h2 className="text-2xl font-semibold text-gray-900 mb-3">
										주요 기능
									</h2>
									<ul className="space-y-3 text-gray-700">
										{/* 개인 장바구니 기능 */}
										<li className="flex items-start gap-2">
											<span className="text-blue-500 mt-1">•</span>
											<span>
												<strong>개인 장바구니:</strong> 개인적인 쇼핑 목록을
												체계적으로 관리하세요
											</span>
										</li>

										{/* 공유 장바구니 기능 */}
										<li className="flex items-start gap-2">
											<span className="text-blue-500 mt-1">•</span>
											<span>
												<strong>공유 장바구니:</strong> 팀원들과 실시간으로
												장바구니를 공유하고 협업하세요
											</span>
										</li>

										{/* 예산 관리 기능 */}
										<li className="flex items-start gap-2">
											<span className="text-blue-500 mt-1">•</span>
											<span>
												<strong>예산 관리:</strong> 각 장바구니별로 예산을
												설정하고 지출을 추적하세요
											</span>
										</li>

										{/* 초대 시스템 기능 */}
										<li className="flex items-start gap-2">
											<span className="text-blue-500 mt-1">•</span>
											<span>
												<strong>초대 시스템:</strong> 이메일로 간편하게 멤버를
												초대하고 권한을 관리하세요
											</span>
										</li>
									</ul>
								</section>

								{/* 시작하기 섹션 */}
								<section>
									<h2 className="text-2xl font-semibold text-gray-900 mb-3">
										시작하기
									</h2>
									<p className="text-gray-700 leading-relaxed">
										왼쪽 상단의 메뉴 버튼을 클릭하여 사이드바를 열고, 새로운
										장바구니를 만들어보세요. 개인 장바구니 또는 공유 장바구니를
										선택할 수 있으며, 필요에 따라 예산과 협업 멤버를 설정할 수
										있습니다.
									</p>
								</section>
							</div>
						</div>
					</div>
				</main>
			</div>

			{/* 모달 컴포넌트들은 store의 상태에 따라 조건부 렌더링 */}
			{isSearchModalOpen && <SearchModal />}

			{isCreateCartModalOpen && <CreateCartModal isShared={false} />}

			{isCreateSharedCartModalOpen && <CreateCartModal isShared={true} />}
		</div>
	);
}
