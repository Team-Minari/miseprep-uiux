import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { motion } from "framer-motion";

interface CarouselSlide {
	id: number;
	bg: string;
	badge?: string;
	title: string;
	subtitle: string;
	desc?: string;
	emoji: string;
	emojiPos: "left" | "right" | "center";
	textColor: string;
}

const slides: CarouselSlide[] = [
	{
		id: 1,
		bg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
		badge: "이달의 혜택",
		title: "공유 장바구니\n플러스",
		subtitle: "함께 담으면 최대 15% 할인",
		desc: "친구와 함께 담을수록 할인율 UP",
		emoji: "🛒",
		emojiPos: "right",
		textColor: "text-white",
	},
	{
		id: 2,
		bg: "linear-gradient(135deg, #e91e63 0%, #c2185b 40%, #9c27b0 100%)",
		badge: "2월 한정",
		title: "최대 9.5만원\n혜택",
		subtitle: "최대 15개월 무이자 할부까지",
		emoji: "💳",
		emojiPos: "right",
		textColor: "text-white",
	},
	{
		id: 3,
		bg: "linear-gradient(135deg, #fff9c4 0%, #fff176 50%, #ffee58 100%)",
		badge: "단 3일",
		title: "배송DAYS",
		subtitle: "장바구니 쿠폰 + 특가상품",
		emoji: "🚚",
		emojiPos: "center",
		textColor: "text-gray-900",
	},
	{
		id: 4,
		bg: "linear-gradient(135deg, #c8f5a8 0%, #a5d6a7 50%, #81c784 100%)",
		badge: "장보기 할 때마다 7% 적립",
		title: "7CLUB",
		subtitle: "지금 바로 무료로 시작하세요",
		emoji: "🌿",
		emojiPos: "left",
		textColor: "text-gray-900",
	},
	{
		id: 5,
		bg: "linear-gradient(135deg, #d7a97d 0%, #c49a6c 50%, #b8895a 100%)",
		badge: "단 3일, 반짝특가",
		title: "삼겹살, 계란\n~40% 할인",
		subtitle: "신선식품 특가 할인 이벤트",
		emoji: "🥩",
		emojiPos: "right",
		textColor: "text-white",
	},
	{
		id: 6,
		bg: "linear-gradient(135deg, #42a5f5 0%, #1976d2 50%, #1565c0 100%)",
		badge: "신규 가입 혜택",
		title: "첫 공유 장바구니\n10% 할인",
		subtitle: "지금 바로 친구를 초대하세요",
		emoji: "🎁",
		emojiPos: "center",
		textColor: "text-white",
	},
	{
		id: 7,
		bg: "linear-gradient(135deg, #ff8f00 0%, #f57c00 50%, #e65100 100%)",
		badge: "오늘만 특가",
		title: "생필품 묶음\n최대 30% OFF",
		subtitle: "공유 장바구니로 더 저렴하게",
		emoji: "🧴",
		emojiPos: "left",
		textColor: "text-white",
	},
	{
		id: 8,
		bg: "linear-gradient(135deg, #26c6da 0%, #00acc1 50%, #00838f 100%)",
		badge: "봄맞이 특가",
		title: "신선식품\n최대 25% OFF",
		subtitle: "지금 바로 장바구니에 담아보세요",
		emoji: "🥦",
		emojiPos: "center",
		textColor: "text-white",
	},
];

const VISIBLE = 4;
const TOTAL = slides.length;

export default function MainCarousel() {
	const [current, setCurrent] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);

	const next = useCallback(() => {
		setCurrent((prev) => (prev + 1) % TOTAL);
	}, []);

	const prev = useCallback(() => {
		setCurrent((prev) => (prev - 1 + TOTAL) % TOTAL);
	}, []);

	useEffect(() => {
		if (!isPlaying) return;
		const timer = setInterval(next, 4000);
		return () => clearInterval(timer);
	}, [isPlaying, next]);

	const visibleIndices = Array.from(
		{ length: VISIBLE },
		(_, i) => (current + i) % TOTAL
	);

	return (
		<div className="w-full bg-white py-6">
			{/* overflow-hidden 래퍼: 외곽 아이템 클립 */}
			<div className="overflow-hidden">
				<div className="flex gap-6 -mx-[1%]">
					{visibleIndices.map((slideIdx, position) => {
						const slide = slides[slideIdx];

						return (
							<motion.div
								key={`${slideIdx}-${current}`}
								initial={{ opacity: 0, x: 30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.35, delay: position * 0.04 }}
								className="relative rounded-xl overflow-hidden cursor-pointer select-none"
								style={{
									background: slide.bg,
									height: "480px",
									flex: position === 0 || position === VISIBLE - 1 ? 0.9 : 1.2,
								}}>
								{/* 배지 */}
								{slide.badge && (
									<div className="absolute top-5 left-5 right-5">
										<span
											className={`text-xs font-semibold ${slide.textColor} opacity-75`}>
											{slide.badge}
										</span>
									</div>
								)}

								{/* 이모지 */}
								<div
									className={`absolute select-none pointer-events-none text-8xl ${
										slide.emojiPos === "right"
											? "right-4 bottom-16"
											: slide.emojiPos === "left"
												? "left-4 bottom-16"
												: "left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
									}`}
									style={{
										filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.15))",
									}}>
									{slide.emoji}
								</div>

								{/* 텍스트 */}
								<div className="absolute bottom-6 left-5 right-5">
									<h3
										className={`text-xl font-bold leading-tight ${slide.textColor} whitespace-pre-line mb-1.5`}>
										{slide.title}
									</h3>
									{slide.subtitle && (
										<p
											className={`text-xs ${slide.textColor} opacity-70 leading-relaxed`}>
											{slide.subtitle}
										</p>
									)}
									{slide.desc && (
										<p
											className={`text-xs ${slide.textColor} opacity-55 mt-0.5`}>
											{slide.desc}
										</p>
									)}
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* 하단 페이지 인디케이터 */}
				<div className="flex items-center justify-center gap-2 mt-6">
					<button
						onClick={prev}
						className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors"
						aria-label="이전">
						<ChevronLeft className="w-3.5 h-3.5" />
					</button>

					<span className="text-xs text-gray-600 font-medium tabular-nums w-12 text-center">
						{String(current + 1).padStart(2, "0")}{" "}
						<span className="text-gray-300">/</span>{" "}
						{String(TOTAL).padStart(2, "0")}
					</span>

					<button
						onClick={next}
						className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors"
						aria-label="다음">
						<ChevronRight className="w-3.5 h-3.5" />
					</button>
				</div>
			</div>
		</div>
	);
}
