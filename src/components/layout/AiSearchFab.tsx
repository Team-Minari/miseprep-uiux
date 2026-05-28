import { Sparkles, ShoppingCart, User, Users, X, ArrowUp } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchCarts } from "../../hooks/cart/useCart";
import { CART_CATEGORIES } from "../../types/cart";

const categoryLabel = (value: string) =>
	CART_CATEGORIES.find((c) => c.value === value)?.label ?? value;

const SUGGESTIONS = [
	"주말 캠핑가서 쓸 것들 추천해줘",
	"자취생 한 달 식재료 장바구니",
	"사무실에서 쓸 사무용품 모음",
];

const MIN_LOADING_MS = 3000;

// 한 글자씩 타이핑되는 텍스트 (LLM 응답 느낌)
function TypeText({
	text,
	speed = 28,
	className,
}: {
	text: string;
	speed?: number;
	className?: string;
}) {
	const [displayed, setDisplayed] = useState("");

	useEffect(() => {
		setDisplayed("");
		let i = 0;
		const timer = window.setInterval(() => {
			i++;
			setDisplayed(text.slice(0, i));
			if (i >= text.length) window.clearInterval(timer);
		}, speed);
		return () => window.clearInterval(timer);
	}, [text, speed]);

	const done = displayed.length >= text.length;
	return (
		<span className={className}>
			{displayed}
			{!done && (
				<span className="ml-0.5 inline-block h-[1em] w-[2px] -translate-y-[1px] animate-pulse bg-current align-middle" />
			)}
		</span>
	);
}

export default function AiSearchFab() {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const [query, setQuery] = useState("");
	const [submittedQuery, setSubmittedQuery] = useState("");
	const [isMinLoading, setIsMinLoading] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLTextAreaElement>(null);
	const minLoadingTimer = useRef<number | null>(null);

	const { data: results = [], isFetching } = useSearchCarts(submittedQuery);
	const hasSubmitted = submittedQuery.length > 0;
	const isLoading = isFetching || isMinLoading;

	const submitQuery = (text: string) => {
		const trimmed = text.trim();
		if (!trimmed) return;
		setSubmittedQuery(trimmed);
		setQuery("");
		setIsMinLoading(true);
		if (minLoadingTimer.current) {
			window.clearTimeout(minLoadingTimer.current);
		}
		minLoadingTimer.current = window.setTimeout(() => {
			setIsMinLoading(false);
		}, MIN_LOADING_MS);
	};

	useEffect(() => {
		return () => {
			if (minLoadingTimer.current) window.clearTimeout(minLoadingTimer.current);
		};
	}, []);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		submitQuery(query);
	};

	const handleSuggestionClick = (text: string) => {
		submitQuery(text);
	};

	const handleResultClick = (cartId: number) => {
		setIsOpen(false);
		navigate(`/cart/detail?id=${cartId}&source=public`);
	};

	useEffect(() => {
		if (isOpen) inputRef.current?.focus();
	}, [isOpen]);

	useEffect(() => {
		if (!isOpen) return;
		const handleMouseDown = (event: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};
		const handleKey = (event: KeyboardEvent) => {
			if (event.key === "Escape") setIsOpen(false);
		};
		window.addEventListener("mousedown", handleMouseDown);
		window.addEventListener("keydown", handleKey);
		return () => {
			window.removeEventListener("mousedown", handleMouseDown);
			window.removeEventListener("keydown", handleKey);
		};
	}, [isOpen]);

	return (
		<div ref={containerRef} className="fixed bottom-10 right-10 z-50">
			{/* 채팅 패널 (absolute로 자리 차지 없음) */}
			<div
				aria-hidden={!isOpen}
				className={`absolute bottom-0 right-0 origin-bottom-right transform transition-all duration-200 ease-out ${
					isOpen
						? "pointer-events-auto translate-y-0 scale-100 opacity-100"
						: "pointer-events-none translate-y-3 scale-95 opacity-0"
				}`}>
				<div className="flex h-[720px] w-[540px] flex-col overflow-hidden rounded-2xl border border-[#EDE6D5] bg-[#FDFBF6] shadow-2xl">
					{/* 헤더 */}
					<div className="flex items-center justify-between gap-2 px-6 py-4">
						<p className="px-2 py-1.5 text-base font-semibold text-gray-800">
							AI 장바구니 검색
						</p>
						<button
							onClick={() => setIsOpen(false)}
							aria-label="닫기"
							className="rounded-md p-2 text-gray-500 transition-colors hover:bg-[#F7F3E9] hover:text-gray-700">
							<X className="h-5 w-5" />
						</button>
					</div>

					{/* 본문 */}
					<div className="flex-1 overflow-y-auto px-7 pb-4 pt-3">
						{!hasSubmitted ? (
							<div className="flex flex-col gap-7">
								<div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F7F3E9] shadow-md ring-1 ring-[#E8E2D0]">
									<Sparkles className="h-7 w-7 text-[#7A6E5A]" />
								</div>
								<h2 className="text-2xl font-bold text-gray-900">
									무엇을 찾고 계신가요?
								</h2>
								<ul className="flex flex-col gap-1">
									{SUGGESTIONS.map((s) => (
										<li key={s}>
											<button
												onClick={() => handleSuggestionClick(s)}
												className="flex w-full items-center gap-3 rounded-lg px-3 py-3.5 text-left text-base text-gray-700 transition-colors hover:bg-[#F7F3E9]">
												<Sparkles className="h-5 w-5 shrink-0 text-[#C8A97A]" />
												<span>{s}</span>
											</button>
										</li>
									))}
								</ul>
							</div>
						) : (
							<div key={submittedQuery} className="flex flex-col gap-6">
								{/* 사용자 메시지 버블 */}
								<div className="animate-ai-fade-in flex justify-end">
									<div className="max-w-[85%] rounded-2xl rounded-br-sm bg-[#F7F3E9] px-5 py-3 text-base text-gray-800">
										{submittedQuery}
									</div>
								</div>

								{/* AI 응답 영역 */}
								{isLoading ? (
									<div
										className="animate-ai-fade-in flex items-center gap-2 text-base text-gray-500"
										style={{ animationDelay: "120ms" }}>
										<Sparkles className="h-5 w-5 animate-pulse text-[#C8A97A]" />
										<TypeText text="AI가 분석 중이에요..." speed={50} />
									</div>
								) : results.length === 0 ? (
									<div
										className="animate-ai-fade-in flex items-start gap-2 text-base text-gray-500"
										style={{ animationDelay: "120ms" }}>
										<Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[#C8A97A]" />
										<TypeText text="관련 공개 장바구니를 찾지 못했어요. 다른 키워드로 시도해 보세요." />
									</div>
								) : (
									<div className="flex flex-col gap-4">
										<div
											className="animate-ai-fade-in flex items-center gap-2 text-sm font-semibold text-[#7A6E5A]"
											style={{ animationDelay: "120ms" }}>
											<Sparkles className="h-4 w-4 text-[#C8A97A]" />
											<TypeText
												text={`AI가 찾은 장바구니 ${results.length}개`}
											/>
										</div>
										<ul className="flex flex-col gap-3">
											{results.map((cart, index) => {
												const isShared = cart.cart_type === "SHARED";
												return (
													<li
														key={cart.id}
														onClick={() => handleResultClick(cart.id)}
														style={{
															animationDelay: `${200 + index * 80}ms`,
														}}
														className="animate-ai-fade-in flex cursor-pointer flex-col gap-2.5 rounded-xl border border-[#EDE6D5] bg-white p-4 transition-colors hover:bg-[#F7F3E9]">
														<div className="flex items-center gap-2">
															<ShoppingCart className="h-5 w-5 shrink-0 text-[#C8A97A]" />
															<p className="flex-1 truncate text-base font-semibold text-gray-900">
																{cart.name}
															</p>
															<span
																className={`inline-flex items-center gap-0.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
																	isShared
																		? "bg-[#D4B896] text-white"
																		: "bg-gray-100 text-gray-600"
																}`}>
																{isShared ? (
																	<Users className="h-3.5 w-3.5" />
																) : (
																	<User className="h-3.5 w-3.5" />
																)}
																{isShared ? "공유" : "개인"}
															</span>
														</div>
														<div className="flex flex-wrap items-center gap-2 text-xs">
															<span className="rounded-full bg-[#F6F0E4] px-2.5 py-1 text-[#7A6E5A]">
																{categoryLabel(cart.category)}
															</span>
															{cart.purpose && (
																<span className="rounded-full bg-[#EEF4FF] px-2.5 py-1 text-[#456A9B]">
																	{cart.purpose}
																</span>
															)}
															{cart.budget != null && cart.budget > 0 && (
																<span className="text-gray-500">
																	예산 {cart.budget.toLocaleString()}원
																</span>
															)}
														</div>
													</li>
												);
											})}
										</ul>
									</div>
								)}
							</div>
						)}
					</div>

					{/* 입력 영역 */}
					<form
						onSubmit={handleSubmit}
						className="border-t border-[#EDE6D5] px-5 py-4">
						<div className="rounded-2xl border border-[#E8E2D0] bg-white p-3 focus-within:border-[#C8A97A] focus-within:ring-2 focus-within:ring-[#C8A97A]/30">
							<textarea
								ref={inputRef}
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								onKeyDown={(e) => {
									// 한글 IME 조합 중인 Enter는 무시 (조합 마지막 음절 잘림 방지)
									if (
										e.key === "Enter" &&
										!e.shiftKey &&
										!e.nativeEvent.isComposing
									) {
										e.preventDefault();
										submitQuery(query);
									}
								}}
								placeholder="AI로 장바구니 검색하세요"
								rows={2}
								className="w-full resize-none bg-transparent px-2 py-1.5 text-base text-gray-800 placeholder:text-gray-400 focus:outline-none"
							/>
							<div className="flex items-center justify-end pt-2">
								<button
									type="submit"
									disabled={!query.trim()}
									aria-label="전송"
									className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7A6E5A] text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-30">
									<ArrowUp className="h-5 w-5" />
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>

			{/* FAB 버튼 - 열려 있으면 숨김 (absolute로 자리 차지 없음) */}
			<div
				className={`group absolute bottom-0 right-0 transition-all duration-200 ${
					isOpen
						? "pointer-events-none translate-y-2 scale-90 opacity-0"
						: "pointer-events-auto translate-y-0 scale-100 opacity-100"
				}`}>
				{/* Hover 툴팁 */}
				<span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 translate-x-2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 opacity-0 shadow-md ring-1 ring-[#E8E2D0] transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
					AI로 장바구니 찾기
				</span>
				<button
					onClick={() => setIsOpen(true)}
					aria-label="AI 장바구니 검색 열기"
					className="animate-wiggle-on-hover flex h-20 w-20 items-center justify-center rounded-full bg-[#F7F3E9] text-[#7A6E5A] shadow-xl ring-1 ring-[#E8E2D0] transition-all duration-200 hover:scale-105 hover:bg-[#F3EEE0]">
					<Sparkles className="wiggle-target h-9 w-9" />
				</button>
			</div>
		</div>
	);
}
