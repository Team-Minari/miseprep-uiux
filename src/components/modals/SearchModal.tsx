import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useCloseSearchModal } from "../../store/useModalStore";

export default function SearchModal() {
	// 검색어 상태
	const [searchQuery, setSearchQuery] = useState("");

	// store에서 모달 닫기 액션 가져오기
	const closeSearchModal = useCloseSearchModal();

	const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
	};

	const handleStopPropagation = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	// ESC 키로 모달 닫기
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				closeSearchModal();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [closeSearchModal]);

	return (
		<div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
			{/* 배경 오버레이 */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="absolute inset-0 bg-black/40"
				onClick={closeSearchModal}
			/>

			{/* 모달 본체 */}
			<motion.div
				initial={{ opacity: 0, scale: 0.95, y: -20 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				exit={{ opacity: 0, scale: 0.95, y: -20 }}
				transition={{ type: "spring", damping: 25, stiffness: 300 }}
				className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 overflow-hidden"
				onClick={handleStopPropagation}>
				{/* 검색 입력 영역 */}
				<div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200">
					<Search className="w-5 h-5 text-gray-400" />
					<input
						type="text"
						value={searchQuery}
						onChange={handleSearchQueryChange}
						placeholder="검색..."
						autoFocus
						className="flex-1 text-base outline-none"
					/>
					<button
						onClick={closeSearchModal}
						className="p-1 hover:bg-gray-100 rounded transition-colors">
						<X className="w-5 h-5 text-gray-500" />
					</button>
				</div>

				{/* 검색 결과 영역 */}
				<div className="px-4 py-6 min-h-50">
					{searchQuery ? (
						<p className="text-sm text-gray-500 text-center">
							"{searchQuery}"에 대한 검색 결과가 없습니다.
						</p>
					) : (
						<p className="text-sm text-gray-400 text-center">
							검색어를 입력하세요
						</p>
					)}
				</div>
			</motion.div>
		</div>
	);
}
