import { Facebook, Instagram, ShoppingCart } from "lucide-react";

export default function Footer() {
	return (
		<footer className="w-full bg-white border-t border-[#EAEAEA] mt-16">
			<div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
				<div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
					<div className="space-y-3">
						<div className="flex items-center gap-2">
							<ShoppingCart className="w-5 h-5 text-gray-800" />
							<span className="text-lg font-semibold text-gray-900">
								공유장바구니
							</span>
						</div>
						<p className="text-sm text-gray-600">
							함께 쇼핑하고, 함께 관리하세요
						</p>
					</div>

					<nav className="flex flex-wrap items-center gap-5 text-sm font-medium text-gray-700">
						{["회사소개", "개인정보처리방침", "이용약관"].map((item) => (
							<a
								key={item}
								href="#"
								className="hover:text-gray-900 transition-colors">
								{item}
							</a>
						))}
					</nav>

					<div className="flex items-center gap-5 text-gray-600">
						<a
							href="#"
							aria-label="Facebook"
							className="hover:text-gray-900 transition-colors">
							<Facebook className="w-5 h-5" />
						</a>
						<a
							href="#"
							aria-label="Instagram"
							className="hover:text-gray-900 transition-colors">
							<Instagram className="w-5 h-5" />
						</a>
					</div>
				</div>

				<div className="flex flex-col gap-3 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
					<p>대전광역시 한밭대학교 | ©2026 gongjang-mall</p>
				</div>
			</div>
		</footer>
	);
}
