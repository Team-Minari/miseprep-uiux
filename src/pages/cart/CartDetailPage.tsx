import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ShoppingBag, Minus, Plus, Trash2 } from "lucide-react";
import { personalCarts, sharedCarts, type CartItem } from "../../mock/cartData";

export default function CartDetailPage() {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();

	const cartId = Number(searchParams.get("id"));
	const cartType = searchParams.get("type") as "personal" | "shared" | null;

	// 해당 장바구니 찾기
	const allCarts = [
		...personalCarts.map((c) => ({ ...c, type: "personal" as const })),
		...sharedCarts.map((c) => ({ ...c, type: "shared" as const })),
	];
	const cart = allCarts.find((c) => c.id === cartId && c.type === cartType);

	// 로컬 상품 목록 상태 (수량 변경 및 삭제용)
	const [items, setItems] = useState<CartItem[]>(cart?.items ?? []);

	// 체크박스 선택 상태 (item.id → boolean)
	const [checkedIds, setCheckedIds] = useState<Set<number>>(
		new Set(cart?.items.map((i) => i.id) ?? [])
	);

	/* ── 체크박스 핸들러 ── */
	const isAllChecked = items.length > 0 && checkedIds.size === items.length;
	const isIndeterminate = checkedIds.size > 0 && checkedIds.size < items.length;

	const handleToggleAll = () => {
		if (isAllChecked) {
			setCheckedIds(new Set());
		} else {
			setCheckedIds(new Set(items.map((i) => i.id)));
		}
	};

	const handleToggleItem = (id: number) => {
		setCheckedIds((prev) => {
			const next = new Set(prev);
			if (next.has(id)) {
				next.delete(id);
			} else {
				next.add(id);
			}
			return next;
		});
	};

	/* ── 수량 핸들러 ── */
	const handleIncrease = (id: number) => {
		setItems((prev) =>
			prev.map((item) =>
				item.id === id ? { ...item, quantity: item.quantity + 1 } : item
			)
		);
	};

	const handleDecrease = (id: number) => {
		setItems((prev) =>
			prev.map((item) =>
				item.id === id && item.quantity > 1
					? { ...item, quantity: item.quantity - 1 }
					: item
			)
		);
	};

	/* ── 삭제 핸들러 ── */
	const handleDelete = (id: number) => {
		setItems((prev) => prev.filter((item) => item.id !== id));
		setCheckedIds((prev) => {
			const next = new Set(prev);
			next.delete(id);
			return next;
		});
	};

	const handleDeleteChecked = () => {
		setItems((prev) => prev.filter((item) => !checkedIds.has(item.id)));
		setCheckedIds(new Set());
	};

	/* ── 주문 요약: 체크된 아이템만 집계 ── */
	const checkedItems = items.filter((item) => checkedIds.has(item.id));
	const totalPrice = checkedItems.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);

	const formatPrice = (price: number) => price.toLocaleString("ko-KR") + "원";

	return (
		<div className="bg-[white]">
			{/* 페이지 헤더 */}
			<div className="bg-white border-b border-[white]">
				<div className="max-w-7xl mx-auto px-6 pt-8 pb-5 flex items-center gap-4">
					<div className="flex items-center gap-2 pl-6">
						<h1 className="text-xl font-semibold text-gray-900">
							{cart?.name ?? "장바구니"}
						</h1>
						{cart?.type === "shared" && (
							<span className="text-m font-medium px-2 py-0.5 bg-[#F7F3E9] border border-[#D9CEBC] text-[#7A6E5A] rounded-full">
								공유
							</span>
						)}
					</div>
				</div>
			</div>

			{/* 컨텐츠 영역 */}
			<div className="max-w-7xl mx-auto px-6 pt-5 pb-4">
				{items.length === 0 ? (
					// 빈 장바구니
					<div className="bg-white rounded-2xl flex flex-col items-center justify-center py-24 gap-5">
						<div className="w-24 h-24 rounded-full bg-[#F7F3E9] flex items-center justify-center">
							<ShoppingBag className="w-12 h-12 text-[#C8BFA8]" />
						</div>
						<div className="text-center space-y-1.5">
							<p className="text-xl font-semibold text-gray-800">
								장바구니가 비어있습니다
							</p>
							<p className="text-sm text-gray-500">원하는 상품을 담아보세요!</p>
						</div>
						<button
							onClick={() => navigate("/")}
							className="mt-2 px-8 py-3 bg-[#F7F3E9] hover:bg-[#F3EEE0] text-gray-900 font-semibold rounded-xl transition-colors text-sm shadow-sm">
							쇼핑 계속하기
						</button>
					</div>
				) : (
					// 상품 존재시
					<div className="flex items-start gap-12">
						{/* 왼쪽: 상품 카드 리스트 */}
						<div className="flex-1 min-w-0">
							{/* 전체 선택 툴바 */}
							<div className="flex items-center justify-between px-6 py-3 mb-1">
								<label className="flex items-center gap-2.5 cursor-pointer select-none">
									<input
										type="checkbox"
										checked={isAllChecked}
										ref={(el) => {
											if (el) el.indeterminate = isIndeterminate;
										}}
										onChange={handleToggleAll}
										className="w-4 h-4 rounded border-gray-300 accent-gray-800 cursor-pointer"
									/>
									<span className="text-sm font-medium text-gray-700">
										전체 선택
										<span className="ml-1 text-gray-400">
											({checkedIds.size}/{items.length})
										</span>
									</span>
								</label>

								{checkedIds.size > 0 && (
									<button
										onClick={handleDeleteChecked}
										className="text-sm text-red-400 hover:text-red-600 transition-colors">
										선택 삭제
									</button>
								)}
							</div>

							{/* 상품 행 목록 */}
							<div className="bg-white rounded-2xl overflow-hidden divide-y divide-[#F0EBE0]">
								{items.map((item) => {
									const isChecked = checkedIds.has(item.id);
									return (
										<div
											key={item.id}
											className={`flex items-center gap-5 px-6 py-5 transition-colors ${
												isChecked ? "bg-white" : "bg-gray-50/60"
											}`}>
											{/* 체크박스 */}
											<input
												type="checkbox"
												checked={isChecked}
												onChange={() => handleToggleItem(item.id)}
												className="w-4 h-4 shrink-0 rounded border-gray-300 accent-gray-800 cursor-pointer"
											/>

											{/* 썸네일 */}
											<div
												className={`w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-[#F7F3E9] transition-opacity ${!isChecked ? "opacity-40" : ""}`}>
												<img
													src={item.thumbnail}
													alt={item.name}
													className="w-full h-full object-cover"
												/>
											</div>

											{/* 상품 정보 */}
											<div
												className={`flex-1 min-w-0 transition-opacity ${!isChecked ? "opacity-40" : ""}`}>
												<p className="text-base font-medium text-gray-900 truncate">
													{item.name}
												</p>
												<p className="mt-1 text-sm font-semibold text-gray-800">
													{formatPrice(item.price)}
												</p>
											</div>

											{/* 수량 컨트롤 */}
											<div className="flex items-center gap-2">
												<button
													onClick={() => handleDecrease(item.id)}
													disabled={item.quantity <= 1}
													className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#D9CEBC] bg-white hover:bg-[#F7F3E9] disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
													<Minus className="w-3.5 h-3.5 text-gray-600" />
												</button>
												<span className="w-8 text-center text-sm font-semibold text-gray-800">
													{item.quantity}
												</span>
												<button
													onClick={() => handleIncrease(item.id)}
													className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#D9CEBC] bg-white hover:bg-[#F7F3E9] transition-colors">
													<Plus className="w-3.5 h-3.5 text-gray-600" />
												</button>
											</div>

											{/* 소계 */}
											<div className="w-24 text-right">
												<p className="text-sm font-bold text-gray-900">
													{formatPrice(item.price * item.quantity)}
												</p>
											</div>

											{/* 삭제 버튼 */}
											<button
												onClick={() => handleDelete(item.id)}
												className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
												<Trash2 className="w-4 h-4" />
											</button>
										</div>
									);
								})}
							</div>
						</div>

						{/* 오른쪽: 주문 요약 패널 (sticky) */}
						<div className="w-72 shrink-0 sticky top-6">
							<div className="bg-white rounded-2xl border border-[#EDE9E0] shadow-sm px-6 py-6 flex flex-col gap-4">
								<h2 className="text-base font-semibold text-gray-900">
									주문 요약
								</h2>

								{/* 체크된 상품별 소계 목록 */}
								<div className="flex flex-col gap-2">
									{checkedItems.length === 0 ? (
										<p className="text-sm text-gray-400 text-center py-2">
											선택된 상품이 없습니다
										</p>
									) : (
										checkedItems.map((item) => (
											<div
												key={item.id}
												className="flex justify-between text-sm text-gray-600">
												<span className="truncate max-w-[140px]">
													{item.name}
												</span>
												<span className="font-medium text-gray-800 shrink-0">
													{formatPrice(item.price * item.quantity)}
												</span>
											</div>
										))
									)}
								</div>

								<div className="border-t border-[#EDE9E0] pt-6 flex flex-col gap-2.5">
									<div className="flex justify-between text-sm text-gray-500">
										<span>선택 상품 수</span>
										<span>{checkedItems.length}개</span>
									</div>
									<div className="flex justify-between items-baseline mt-1">
										<span className="text-sm font-medium text-gray-700">
											합계
										</span>
										<span className="text-xl font-bold text-gray-900">
											{formatPrice(totalPrice)}
										</span>
									</div>
								</div>

								<button
									disabled={checkedItems.length === 0}
									className="w-full py-3.5 bg-[#F7F3E9] hover:bg-[#F3EEE0] disabled:opacity-40 disabled:cursor-not-allowed text-black font-semibold rounded-xl transition-colors text-sm tracking-wide shadow-sm">
									주문하기 ({checkedItems.length})
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
