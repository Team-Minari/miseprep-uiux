import {
	useActiveTab,
	useSetActiveTab,
	useCurrentProduct,
} from "../../store/useProductStore";

interface TabSectionProps {
	onScrollToSection: (section: "detail" | "review") => void;
}

export default function TabSection({ onScrollToSection }: TabSectionProps) {
	const activeTab = useActiveTab();
	const setActiveTab = useSetActiveTab();
	const product = useCurrentProduct();

	const handleTabChange = (tab: "detail" | "review") => {
		setActiveTab(tab);
		onScrollToSection(tab);
	};

	return (
		<div className="flex border-b border-gray-200 sticky top-0 bg-white z-10">
			<button
				onClick={() => handleTabChange("detail")}
				className={`flex-1 py-4 font-semibold text-lg transition-colors ${
					activeTab === "detail"
						? "text-gray-900 border-b-2 border-gray-900"
						: "text-gray-500 hover:text-gray-700"
				}`}>
				상품상세
			</button>
			<button
				onClick={() => handleTabChange("review")}
				className={`flex-1 py-4 font-semibold text-lg transition-colors ${
					activeTab === "review"
						? "text-gray-900 border-b-2 border-gray-900"
						: "text-gray-500 hover:text-gray-700"
				}`}>
				리뷰 ({product.reviewCount.toLocaleString()})
			</button>
		</div>
	);
}
