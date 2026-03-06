import { motion, AnimatePresence } from "framer-motion";
import { Plus, Inbox, MoreHorizontal, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { personalCarts, sharedCarts } from "../../mock/cartData.ts";
import {
	useIsSidebarOpen,
	useCloseSidebar,
	useOpenCreateCartModal,
	useOpenCreateSharedCartModal,
} from "../../store/useCartModalStore.ts";

export default function Sidebar() {
	const isSidebarOpen = useIsSidebarOpen();
	const closeSidebar = useCloseSidebar();
	const openCreateCartModal = useOpenCreateCartModal();
	const openCreateSharedCartModal = useOpenCreateSharedCartModal();
	const navigate = useNavigate();

	const handleCartClick = (cartId: number, cartType: "personal" | "shared") => {
		closeSidebar();
		navigate(`/cart?id=${cartId}&type=${cartType}`);
	};

	return (
		<>
			<AnimatePresence>
				{isSidebarOpen && (
					<>
						{/* 배경 오버레이 - 클릭 시 사이드바 닫기 */}
						<motion.div
							key="sidebar-overlay"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="fixed inset-0 z-40 bg-black/20"
							onClick={closeSidebar}
						/>

						{/* 사이드바 본체 */}
						<motion.aside
							key="sidebar-panel"
							initial={{ x: 400 }}
							animate={{ x: 0 }}
							exit={{ x: 400 }}
							transition={{ type: "spring", damping: 25, stiffness: 200 }}
							className="fixed top-14 bottom-8 right-2 w-80 bg-[#FDFBF6] border border-[#EDE9E0] rounded-2xl z-50 flex flex-col shadow-lg overflow-hidden">
							{/* 유저 섹션 */}
							<section className="p-3 border-b border-gray-200">
								<div className="flex items-center justify-between">
									<button className="flex items-center gap-2 p-1.5 hover:bg-gray-200/50 rounded transition-colors">
										<div className="w-6 h-6 bg-linear-to-br from-orange-400 to-pink-400 rounded flex items-center justify-center text-white text-xs font-semibold">
											K
										</div>
										<span className="text-m font-medium text-gray-800">
											장바구니 사용자
										</span>
									</button>
									<button
										onClick={closeSidebar}
										className="p-1 hover:bg-gray-200/50 rounded transition-colors">
										<X className="w-4 h-4 text-gray-500" />
									</button>
								</div>
							</section>

							{/* 메인 네비게이션 */}
							<section className="flex-1 overflow-y-auto py-2">
								{/* 개인 장바구니 섹션 */}
								<section className="mb-4 mt-4">
									<div className="w-full px-3 py-1">
										<span className="text-sm text-gray-500 font-medium">
											개인 장바구니
										</span>
									</div>

									<div className="mt-1">
										{personalCarts.map((cart) => (
											<button
												key={cart.id}
												onClick={() => handleCartClick(cart.id, "personal")}
												className="w-full px-3 pl-6 py-1.5 flex items-center gap-2 text-base text-gray-700 hover:bg-gray-200/50 transition-colors group/item">
												<Inbox className="w-4 h-4" />
												<span className="flex-1 text-left">{cart.name}</span>
												<div className="opacity-0 group-hover/item:opacity-100 transition-opacity">
													<button
														onClick={(e) => e.stopPropagation()}
														className="p-0.5 hover:bg-gray-300/50 rounded">
														<MoreHorizontal className="w-3.5 h-3.5 text-gray-500" />
													</button>
												</div>
											</button>
										))}

										<button
											onClick={openCreateCartModal}
											className="w-full px-3 pl-6 py-1.5 flex items-center gap-2 text-base text-gray-500 hover:bg-gray-200/50 transition-colors">
											<Plus className="w-4 h-4" />
											<span>새 장바구니 추가</span>
										</button>
									</div>
								</section>

								{/* 공유 장바구니 섹션 */}
								<section>
									<div className="w-full px-3 py-1">
										<span className="text-sm text-gray-500 font-medium">
											공유 장바구니
										</span>
									</div>

									<div className="mt-1">
										{sharedCarts.map((cart) => (
											<button
												key={cart.id}
												onClick={() => handleCartClick(cart.id, "shared")}
												className="w-full px-3 pl-6 py-1.5 flex items-center gap-2 text-base text-gray-700 hover:bg-gray-200/50 transition-colors group/item">
												<Inbox className="w-4 h-4" />
												<span className="flex-1 text-left">{cart.name}</span>
												<div className="opacity-0 group-hover/item:opacity-100 transition-opacity">
													<button
														onClick={(e) => e.stopPropagation()}
														className="p-0.5 hover:bg-gray-300/50 rounded">
														<MoreHorizontal className="w-3.5 h-3.5 text-gray-500" />
													</button>
												</div>
											</button>
										))}

										<button
											onClick={openCreateSharedCartModal}
											className="w-full px-3 pl-6 py-1.5 flex items-center gap-2 text-base text-gray-500 hover:bg-gray-200/50 transition-colors">
											<Plus className="w-4 h-4" />
											<span>새 공유 장바구니 추가</span>
										</button>
									</div>
								</section>
							</section>
						</motion.aside>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
