import { motion, AnimatePresence } from "framer-motion";
import { Plus, ShoppingCart, MoreHorizontal, X, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
	useIsSidebarOpen,
	useCloseSidebar,
	useOpenCreateCartModal,
	useOpenCreateSharedCartModal,
	useOpenManageCartModal,
} from "../../store/useCartModalStore.ts";
import { usePersonalCarts, useSharedCarts } from "../../hooks/cart/useCart";
import { useIsAuthenticated } from "../../store/auth/useAuthStore";

export default function Sidebar() {
	const isSidebarOpen = useIsSidebarOpen();
	const closeSidebar = useCloseSidebar();
	const openCreateCartModal = useOpenCreateCartModal();
	const openCreateSharedCartModal = useOpenCreateSharedCartModal();
	const openManageCartModal = useOpenManageCartModal();
	const isAuthenticated = useIsAuthenticated();
	const personalCarts = usePersonalCarts();
	const sharedCarts = useSharedCarts();
	const navigate = useNavigate();

	const handleCartClick = (cartId: number, cartType: "personal" | "shared") => {
		closeSidebar();
		navigate(`/cart/detail?id=${cartId}&type=${cartType}`);
	};

	const handleLogin = () => {
		closeSidebar();
		navigate("/login");
	};

	return (
		<>
			<AnimatePresence>
				{isSidebarOpen && (
					<>
						<motion.div
							key="sidebar-overlay"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="fixed inset-0 z-40 bg-black/20"
							onClick={closeSidebar}
						/>

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
								{isAuthenticated ? (
									<>
										{/* 개인 장바구니 섹션 */}
										<section className="mb-4 mt-4">
											<div className="w-full px-3 py-1">
												<span className="text-sm text-gray-500 font-medium">
													개인 장바구니
												</span>
											</div>

											<div className="mt-1">
												{personalCarts.map((cart) => (
													<div
														key={cart.id}
														className="group/item flex w-full items-center gap-2 px-3 py-1.5 pl-6 text-base text-gray-700 transition-colors hover:bg-gray-200/50">
														<ShoppingCart className="w-4 h-4" />
														<button
															type="button"
															onClick={() =>
																handleCartClick(cart.id, "personal")
															}
															className="flex-1 text-left">
															{cart.name}
														</button>
														<div className="opacity-0 group-hover/item:opacity-100 transition-opacity">
															<button
																type="button"
																onClick={() =>
																	openManageCartModal({
																		id: cart.id,
																		type: "personal",
																	})
																}
																className="p-0.5 hover:bg-gray-300/50 rounded">
																<MoreHorizontal className="w-3.5 h-3.5 text-gray-500" />
															</button>
														</div>
													</div>
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
													<div
														key={cart.id}
														className="group/item flex w-full items-center gap-2 px-3 py-1.5 pl-6 text-base text-gray-700 transition-colors hover:bg-gray-200/50">
														<ShoppingCart className="w-4 h-4" />
														<button
															type="button"
															onClick={() => handleCartClick(cart.id, "shared")}
															className="flex-1 text-left">
															{cart.name}
														</button>
														<div className="opacity-0 group-hover/item:opacity-100 transition-opacity">
															<button
																type="button"
																onClick={() =>
																	openManageCartModal({
																		id: cart.id,
																		type: "shared",
																	})
																}
																className="p-0.5 hover:bg-gray-300/50 rounded">
																<MoreHorizontal className="w-3.5 h-3.5 text-gray-500" />
															</button>
														</div>
													</div>
												))}

												<button
													onClick={openCreateSharedCartModal}
													className="w-full px-3 pl-6 py-1.5 flex items-center gap-2 text-base text-gray-500 hover:bg-gray-200/50 transition-colors">
													<Plus className="w-4 h-4" />
													<span>새 공유 장바구니 추가</span>
												</button>
											</div>
										</section>
									</>
								) : (
									<div className="flex flex-col items-center justify-center gap-4 py-16 px-6">
										<LogIn className="w-10 h-10 text-gray-300" />
										<p className="text-sm text-gray-500 text-center">
											로그인 후 장바구니를 이용할 수 있습니다.
										</p>
										<button
											onClick={handleLogin}
											className="px-6 py-2.5 text-sm font-semibold text-[#9E8E70] bg-[#FDFBF6] border-2 border-[#D9CEBC] rounded-xl hover:bg-[#F7F3E9] transition-colors">
											로그인하기
										</button>
									</div>
								)}
							</section>
						</motion.aside>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
