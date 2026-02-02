import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchModal from "../modals/SearchModal";
import CreateCartModal from "../modals/CreateCartModal";
import {
    useIsSearchModalOpen,
    useIsCreateCartModalOpen,
    useIsCreateSharedCartModalOpen,
} from "../../store/useModalStore";

export default function GlobalLayout() {
    // store에서 모달 상태 가져옴
    const isSearchModalOpen = useIsSearchModalOpen();
    const isCreateCartModalOpen = useIsCreateCartModalOpen();
    const isCreateSharedCartModalOpen = useIsCreateSharedCartModalOpen();

    return (
        <div className="h-screen flex flex-col overflow-hidden bg-white">
            {/* 헤더 - 상단 고정 네비게이션 */}
            <Header />

            <div className="flex flex-1 overflow-hidden">
                {/* 사이드바 - 좌측 네비게이션 */}
                <Sidebar />

                {/* 메인 콘텐츠 영역 */}
                <main className="flex-1 overflow-auto">
                    <Outlet />
                </main>
            </div>

            {/* 모달 컴포넌트들은 store의 상태에 따라 조건부 렌더링 */}
            {isSearchModalOpen && <SearchModal />}

            {(isCreateCartModalOpen || isCreateSharedCartModalOpen) && (
                <CreateCartModal />
            )}
        </div>
    );
}
