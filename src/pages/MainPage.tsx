import { motion } from 'motion/react';
import { ShoppingCart, Users, Plus, TrendingUp, Star, Check } from 'lucide-react';

export default function MainPage() {
	return (
		<main className="flex-1 overflow-y-auto overflow-x-hidden snap-y snap-mandatory">
			{/* 첫 시작 섹션 */}
			<section className="min-h-screen w-full snap-start flex items-center justify-center bg-white relative py-32">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
					viewport={{ once: true }}
					className="text-center max-w-4xl px-6 z-10"
				>
					<motion.h1
						className="text-6xl md:text-7xl font-bold text-gray-900 mb-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						공유 장바구니 서비스에 오신 것을 환영합니다
					</motion.h1>
					<motion.p
						className="text-2xl text-gray-600 mb-12"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						함께 쇼핑하고, 함께 관리하세요
					</motion.p>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.6 }}
						className="flex flex-col items-center gap-4"
					>
						<p className="text-gray-500">아래로 스크롤하여 시작하기</p>
						<motion.div
							animate={{ y: [0, 10, 0] }}
							transition={{ duration: 1.5, repeat: Infinity }}
						>
							<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
							</svg>
						</motion.div>
					</motion.div>
				</motion.div>
			</section>

			{/* 카트 생성 섹션 */}
			<section className="min-h-screen w-full snap-start flex items-center justify-center bg-white relative py-32">
				<div className="max-w-6xl w-full px-6">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true, amount: 0.3 }}
						className="text-center mb-12"
					>
						<h2 className="text-5xl font-bold text-gray-900 mb-4">
							장바구니를 생성하세요
						</h2>
						<p className="text-xl text-gray-600">
							개인 또는 공유 장바구니를 만들어 쇼핑을 시작하세요
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 gap-8">
						{/* 개인 장바구니 생성 폼 */}
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
							className="bg-white rounded-lg shadow-xl w-full mx-auto border border-gray-200"
						>
							<div className="px-6 py-4 border-b border-gray-200">
								<h3 className="text-lg font-semibold text-gray-900">새 장바구니 만들기</h3>
							</div>

							<div className="px-6 py-4 space-y-4">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										공개/비공개 선택 <span className="text-red-500">*</span>
									</label>
									<div className="flex gap-2">
										<button className="flex-1 px-4 py-2 rounded-lg border-2 border-blue-500 bg-blue-50 text-blue-700 transition-all">
											비공개
										</button>
										<button className="flex-1 px-4 py-2 rounded-lg border-2 border-gray-200 bg-white text-gray-600 hover:bg-gray-50 transition-all">
											공개
										</button>
									</div>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										장바구니 이름 <span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										placeholder="예: 생활용품 구매 목록"
										className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										예산 (선택사항)
									</label>
									<div className="relative">
										<input
											type="text"
											placeholder="0"
											className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										/>
										<span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
											원
										</span>
									</div>
								</div>
							</div>

							<div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-2">
								<button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
									취소
								</button>
								<button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
									생성하기
								</button>
							</div>
						</motion.div>

						{/* 공유 장바구니 생성 폼 */}
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							viewport={{ once: true }}
							className="bg-white rounded-lg shadow-xl w-full mx-auto border border-gray-200"
						>
							<div className="px-6 py-4 border-b border-gray-200">
								<h3 className="text-lg font-semibold text-gray-900">새 공유 장바구니 만들기</h3>
							</div>

							<div className="px-6 py-4 space-y-4">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										공개/비공개 선택 <span className="text-red-500">*</span>
									</label>
									<div className="flex gap-2">
										<button className="flex-1 px-4 py-2 rounded-lg border-2 border-blue-500 bg-blue-50 text-blue-700 transition-all">
											비공개
										</button>
										<button className="flex-1 px-4 py-2 rounded-lg border-2 border-gray-200 bg-white text-gray-600 hover:bg-gray-50 transition-all">
											공개
										</button>
									</div>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										장바구니 이름 <span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										placeholder="예: 생활용품 구매 목록"
										className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										예산 (선택사항)
									</label>
									<div className="relative">
										<input
											type="text"
											placeholder="0"
											className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										/>
										<span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
											원
										</span>
									</div>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										초대할 사람 (선택사항)
									</label>
									<div className="space-y-2">
										<input
											type="email"
											placeholder="example@email.com"
											className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										/>
										<button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium">
											<Plus className="w-4 h-4" />
											이메일 추가
										</button>
									</div>
								</div>
							</div>

							<div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-2">
								<button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
									취소
								</button>
								<button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
									생성하기
								</button>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* 카테고리 선택 섹션 */}
			<section className="min-h-screen w-full snap-start flex items-center justify-center bg-white relative py-32">
				<div className="max-w-6xl w-full px-6">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true, amount: 0.3 }}
						className="text-center mb-16"
					>
						<h2 className="text-5xl font-bold text-gray-900 mb-4">
							카테고리를 선택하세요
						</h2>
						<p className="text-xl text-gray-600">
							원하는 상품 카테고리를 탐색하고 쇼핑을 시작하세요
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
						className="grid grid-cols-2 md:grid-cols-4 gap-4"
					>
						{[
							'전자기기',
							'패션',
							'식품',
							'생활용품',
							'스포츠',
							'뷰티',
							'도서',
							'완구',
						].map((category, index) => (
							<motion.button
								key={category}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.4, delay: index * 0.05 }}
								whileHover={{ scale: 1.02, y: -2 }}
								whileTap={{ scale: 0.98 }}
								className="bg-white border-2 border-gray-200 hover:border-gray-900 rounded-xl py-6 text-center transition-all"
							>
								<div className="font-semibold text-gray-900 text-lg">{category}</div>
							</motion.button>
						))}
					</motion.div>
				</div>
			</section>

			{/* 상품 추가 섹션 */}
			<section className="min-h-screen w-full snap-start flex items-center justify-center bg-white relative py-40">
				<div className="max-w-5xl w-full px-6">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true, amount: 0.3 }}
						className="text-center mb-10"
					>
						<h2 className="text-5xl font-bold text-gray-900 mb-4">
							상품을 장바구니에 추가하세요
						</h2>
						<p className="text-xl text-gray-600">
							마음에 드는 상품을 찾아 장바구니에 담아보세요
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 gap-8">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
						>
							<div className="aspect-video bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
								<span className="text-6xl">🎧</span>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-2">에어팟 맥스</h3>
							<p className="text-gray-600 mb-4">Apple Inc., 애플 / 애플코리아유한회사</p>
							<div className="flex items-center justify-between mb-6">
								<span className="text-3xl font-bold text-gray-900">₩769,000</span>
							</div>
							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
							>
								<ShoppingCart className="w-5 h-5" />
								장바구니에 추가
							</motion.button>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
						>
							<div className="flex items-center justify-between mb-6">
								<h3 className="text-2xl font-bold text-gray-900">생일 선물로 받고 싶은 것들</h3>
								<span className="px-3 py-1 bg-gray-900 text-white rounded-full text-sm font-medium">
									2개 상품
								</span>
							</div>
							<div className="space-y-3 mb-6">
								<div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
									<div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
										💻
									</div>
									<div className="flex-1">
										<div className="font-semibold text-gray-900">맥북 프로 14 M5</div>
										<div className="text-sm text-gray-600">₩2,390,000</div>
									</div>
									<div className="text-gray-500 font-medium">x1</div>
								</div>
								<div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
									<div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
										🎧
									</div>
									<div className="flex-1">
										<div className="font-semibold text-gray-900">에어팟 맥스</div>
										<div className="text-sm text-gray-600">₩769,000</div>
									</div>
									<div className="text-gray-500 font-medium">x2</div>
								</div>
							</div>
							<div className="border-t border-gray-200 pt-4 space-y-2">
								<div className="flex justify-between text-gray-600">
									<span>상품 금액</span>
									<span>₩3,159,000</span>
								</div>
								<div className="flex justify-between text-gray-600">
									<span>배송비</span>
									<span>무료</span>
								</div>
								<div className="flex justify-between text-xl font-bold text-gray-900 pt-2 border-t border-gray-200">
									<span>총 금액</span>
									<span>₩3,159,000</span>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			<section className="min-h-screen w-full snap-start flex items-center justify-center bg-white relative py-48">
				<div className="max-w-5xl w-full px-6">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true, amount: 0.3 }}
						className="text-center"
					>
						<h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
							공유 장바구니로<br />더 스마트한 쇼핑을 경험하세요
						</h2>

						<motion.p
							className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							가족, 친구, 팀원들과 함께 예산을 관리하고<br />
							효율적으로 쇼핑하는 새로운 방법을 만나보세요
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
							className="grid md:grid-cols-3 gap-6 mb-12"
						>
							<div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
								<div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
									<Users className="w-6 h-6 text-white" />
								</div>
								<h3 className="font-bold text-gray-900 mb-2">실시간 관리</h3>
								<p className="text-sm text-gray-600">
									여러명과 동시에 장바구니를 관리하고 의견을 나눠보세요
								</p>
							</div>

							<div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
								<div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
									<TrendingUp className="w-6 h-6 text-white" />
								</div>
								<h3 className="font-bold text-gray-900 mb-2">예산 관리</h3>
								<p className="text-sm text-gray-600">
									예산을 설정하고 지출을 추적하여 계획적인 쇼핑을 하세요
								</p>
							</div>

							<div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
								<div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
									<Check className="w-6 h-6 text-white" />
								</div>
								<h3 className="font-bold text-gray-900 mb-2">간편한 관리</h3>
								<p className="text-sm text-gray-600">
									한눈에 보기쉽고 체계적으로 관리하세요
								</p>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: 0.8 }}
							className="flex justify-center"
						>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-10 py-4 bg-gray-900 text-white font-bold rounded-xl shadow-lg hover:bg-gray-800 transition-all flex items-center gap-2"
							>
								<Star className="w-5 h-5" />
								인기 상품 보러가기
							</motion.button>
						</motion.div>

						<motion.p
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1, delay: 1 }}
							className="text-gray-500 mt-12"
						>
							지금 바로 담아보세요!
						</motion.p>
					</motion.div>
				</div>
			</section>
		</main>
	);
}
