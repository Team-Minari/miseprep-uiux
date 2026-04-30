import { Search, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router";
import { categories } from "../../types/product";

export default function MainHeader() {
	const navigate = useNavigate();

	const handleAllCategory = () => {
		alert("전체 카테고리 메뉴는 현재 구현 예정입니다.");
	};
	const handleCart = () => {
		navigate("/cart");
	};
	const handleSearch = () => {
		alert("검색 기능은 현재 구현 예정입니다.");
	};

	return (
		<header className="bg-[#F7F3E9] border-b border-[#E8E2D0]">
			<div className="max-w-7xl mx-auto px-6 py-10">
				<div className="flex items-center mb-5">
					<div
						className="flex items-center gap-3 cursor-pointer"
						onClick={() => navigate("/")}>
						<ShoppingCart className="w-11 h-11 text-gray-900" />
						<div className="flex items-baseline gap-1.5">
							<span className="text-5xl font-semibold text-gray-900">Mise</span>
							<span className="text-3xl font-normal text-gray-800">Prep</span>
						</div>
					</div>
					<div className="ml-8 w-full max-w-xl">
						<div className="relative">
							<input
								type="text"
								placeholder="상품명을 입력해 주세요"
								className="w-full px-6 py-4 pr-16 rounded-full bg-white border-none focus:outline-none focus:ring-2 focus:ring-gray-900 text-base"
							/>
							<button
								onClick={handleSearch}
								className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-gray-900 p-3 rounded-full hover:bg-gray-800 transition-colors">
								<Search className="w-5 h-5 text-white" />
							</button>
						</div>
					</div>
				</div>

				<nav className="flex items-center gap-9 text-base">
					<button
						onClick={handleAllCategory}
						className="flex items-center gap-1.5 px-5 py-2.5 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors">
						<span className="text-sm">☰</span>
						<span>전체 카테고리</span>
					</button>
					<button
						onClick={handleCart}
						className="px-3 py-1.5 text-gray-800 hover:text-gray-900 hover:bg-gray-100 font-medium rounded transition-colors">
						장바구니
					</button>
					<button
						onClick={() => navigate("/products")}
						className="px-3 py-1.5 text-gray-800 hover:text-gray-900 hover:bg-gray-100 font-medium rounded transition-colors">
						전체
					</button>
					{categories.map((cat) => (
						<button
							key={cat.id}
							onClick={() => navigate(`/products?category=${cat.id}`)}
							className="px-3 py-1.5 text-gray-800 hover:text-gray-900 hover:bg-gray-100 font-medium rounded transition-colors">
							{cat.label}
						</button>
					))}
				</nav>
			</div>
		</header>
	);
}
