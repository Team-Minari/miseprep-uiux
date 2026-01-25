import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, Inbox, MoreHorizontal } from "lucide-react";
import { personalCarts, sharedCarts } from "../../mock/cartData.ts";
import {
	useIsSidebarOpen,
	useOpenSearchModal,
	useOpenCreateCartModal,
	useOpenCreateSharedCartModal,
} from "../../store/useModalStore";

export default function Sidebar() {
	// store에서 상태 및 액션 가져오기
	const isSidebarOpen = useIsSidebarOpen();
	const openSearchModal = useOpenSearchModal();
	const openCreateCartModal = useOpenCreateCartModal();
	const openCreateSharedCartModal = useOpenCreateSharedCartModal();

	return (
		<>
			{/* 사이드바 본체 */}
			<AnimatePresence>
				{isSidebarOpen && (
					<motion.aside
						initial={{ x: -280 }}
						animate={{ x: 0 }}
						exit={{ x: -280 }}
						transition={{ type: "spring", damping: 25, stiffness: 200 }}
						className="fixed top-20 bottom-8 left-3 w-64 bg-[#fbfbfa] border border-gray-200 rounded-2xl z-50 flex flex-col shadow-lg overflow-hidden">
						{/* 유저 섹션 */}
						<section className="p-3 border-b border-gray-200">
							<button className="w-full flex items-center gap-2 p-1.5 hover:bg-gray-200/50 rounded transition-colors">
								{/* 유저 아바타 */}
								<div className="w-6 h-6 bg-linear-to-br from-orange-400 to-pink-400 rounded flex items-center justify-center text-white text-xs font-semibold">
									K
								</div>
								<span className="text-sm font-medium text-gray-800">
									장바구니 사용자
								</span>
							</button>
						</section>

						{/* 메인 네비게이션 */}
						<section className="flex-1 overflow-y-auto py-2">
							{/* 검색 버튼 */}
							<button
								onClick={openSearchModal}
								className="w-full px-3 py-1.5 flex items-center gap-2 text-sm text-gray-600 hover:bg-gray-200/50 transition-colors">
								<Search className="w-4 h-4" />
								<span>검색</span>
							</button>

							{/* 개인 장바구니 섹션 */}
							<section className="mb-4 mt-4">
								{/* 섹션 헤더 */}
								<div className="w-full px-3 py-1">
									<span className="text-xs text-gray-500 font-medium">
										개인 장바구니
									</span>
								</div>

								{/* 개인 장바구니 목록 */}
								<div className="mt-1">
									{personalCarts.map((cart) => (
										<button
											key={cart.id}
											className="w-full px-3 pl-6 py-1.5 flex items-center gap-2 text-sm text-gray-700 hover:bg-gray-200/50 transition-colors group/item">
											<Inbox className="w-4 h-4" />
											<span className="flex-1 text-left">{cart.name}</span>
											<div className="opacity-0 group-hover/item:opacity-100 transition-opacity">
												<button className="p-0.5 hover:bg-gray-300/50 rounded">
													<MoreHorizontal className="w-3.5 h-3.5 text-gray-500" />
												</button>
											</div>
										</button>
									))}

									{/* 새 장바구니 추가 버튼 */}
									<button
										onClick={openCreateCartModal}
										className="w-full px-3 pl-6 py-1.5 flex items-center gap-2 text-sm text-gray-500 hover:bg-gray-200/50 transition-colors">
										<Plus className="w-4 h-4" />
										<span>새 장바구니 추가</span>
									</button>
								</div>
							</section>

							{/* 공유 장바구니 섹션 */}
							<section>
								{/* 섹션 헤더 */}
								<div className="w-full px-3 py-1">
									<span className="text-xs text-gray-500 font-medium">
										공유 장바구니
									</span>
								</div>

								{/* 공유 장바구니 목록 */}
								<div className="mt-1">
									{sharedCarts.map((cart) => (
										<button
											key={cart.id}
											className="w-full px-3 pl-6 py-1.5 flex items-center gap-2 text-sm text-gray-700 hover:bg-gray-200/50 transition-colors group/item">
											<Inbox className="w-4 h-4" />
											<span className="flex-1 text-left">{cart.name}</span>
											<div className="opacity-0 group-hover/item:opacity-100 transition-opacity">
												<button className="p-0.5 hover:bg-gray-300/50 rounded">
													<MoreHorizontal className="w-3.5 h-3.5 text-gray-500" />
												</button>
											</div>
										</button>
									))}

									{/* 새 공유 장바구니 추가 버튼 */}
									<button
										onClick={openCreateSharedCartModal}
										className="w-full px-3 pl-6 py-1.5 flex items-center gap-2 text-sm text-gray-500 hover:bg-gray-200/50 transition-colors">
										<Plus className="w-4 h-4" />
										<span>새 공유 장바구니 추가</span>
									</button>
								</div>
							</section>
						</section>
					</motion.aside>
				)}
			</AnimatePresence>
		</>
	);
}
