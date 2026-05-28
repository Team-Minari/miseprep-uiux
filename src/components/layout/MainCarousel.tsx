import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CarouselSlide {
	id: number;
	image: string;
	overlayFrom: string;
	overlayTo: string;
	badge: string;
	badgeColor: string;
	eyebrow: string;
	title: string;
	highlight: string;
	subtitle: string;
	cta: string;
	tag: string;
}

const slides: CarouselSlide[] = [
	{
		id: 1,
		image:
			"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
		overlayFrom: "rgba(10,10,30,0.72)",
		overlayTo: "rgba(10,10,30,0.18)",
		badge: "이달의 혜택",
		badgeColor: "#C8A97A",
		eyebrow: "공장 공유 장바구니",
		title: "함께 담으면",
		highlight: "최대 15% 할인",
		subtitle: "친구와 함께 담을수록 할인율이 올라갑니다",
		cta: "지금 시작하기",
		tag: "NEW",
	},
	{
		id: 2,
		image:
			"https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
		overlayFrom: "rgba(5,30,15,0.75)",
		overlayTo: "rgba(5,30,15,0.15)",
		badge: "신선식품 특가",
		badgeColor: "#4CAF50",
		eyebrow: "오늘만 단 3일",
		title: "삼겹살·계란",
		highlight: "최대 40% OFF",
		subtitle: "매일 아침 직송되는 신선한 식재료를 특가로 만나세요",
		cta: "특가 보러가기",
		tag: "SALE",
	},
	{
		id: 3,
		image:
			"https://images.unsplash.com/photo-1484154218962-a197022b5858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
		overlayFrom: "rgba(60,20,0,0.78)",
		overlayTo: "rgba(60,20,0,0.15)",
		badge: "생활용품 기획전",
		badgeColor: "#FF8C00",
		eyebrow: "오늘만 특가",
		title: "생필품 묶음",
		highlight: "최대 30% OFF",
		subtitle: "공유 장바구니로 이웃과 함께 더 저렴하게",
		cta: "기획전 보기",
		tag: "HOT",
	},
	{
		id: 4,
		image:
			"https://images.unsplash.com/photo-1523381210434-271e8be1f52b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
		overlayFrom: "rgba(0,30,60,0.78)",
		overlayTo: "rgba(0,30,60,0.15)",
		badge: "신규 가입 혜택",
		badgeColor: "#42A5F5",
		eyebrow: "첫 방문 한정",
		title: "공유 장바구니",
		highlight: "첫 주문 10% 할인",
		subtitle: "지금 친구를 초대하고 함께 알뜰하게 쇼핑하세요",
		cta: "친구 초대하기",
		tag: "NEW",
	},
	{
		id: 5,
		image:
			"https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
		overlayFrom: "rgba(40,10,50,0.78)",
		overlayTo: "rgba(40,10,50,0.15)",
		badge: "봄맞이 기획전",
		badgeColor: "#CE93D8",
		eyebrow: "봄맞이 특가",
		title: "신선식품·캠핑",
		highlight: "최대 25% OFF",
		subtitle: "봄 바람처럼 상쾌한 할인 혜택을 경험해보세요",
		cta: "상품 보러가기",
		tag: "SPRING",
	},
	{
		id: 6,
		image:
			"https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
		overlayFrom: "rgba(10,20,40,0.80)",
		overlayTo: "rgba(10,20,40,0.15)",
		badge: "장보기 클럽",
		badgeColor: "#C8A97A",
		eyebrow: "장보기 할 때마다",
		title: "7% 적립",
		highlight: "7 CLUB",
		subtitle: "장볼 때마다 자동으로 쌓이는 포인트, 지금 무료로 시작하세요",
		cta: "클럽 가입하기",
		tag: "FREE",
	},
	{
		id: 7,
		image:
			"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
		overlayFrom: "rgba(0,20,10,0.78)",
		overlayTo: "rgba(0,20,10,0.15)",
		badge: "무이자 할부",
		badgeColor: "#26C6DA",
		eyebrow: "2월 카드 혜택",
		title: "최대 9.5만원",
		highlight: "15개월 무이자",
		subtitle: "전 상품 최대 15개월 무이자 할부 혜택, 지금 확인해보세요",
		cta: "혜택 확인하기",
		tag: "EVENT",
	},
	{
		id: 8,
		image:
			"https://images.unsplash.com/photo-1508193638397-1c4234db14d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
		overlayFrom: "rgba(30,10,0,0.78)",
		overlayTo: "rgba(30,10,0,0.15)",
		badge: "캠핑 특가",
		badgeColor: "#FF7043",
		eyebrow: "아웃도어 시즌",
		title: "캠핑용품",
		highlight: "단독 최저가",
		subtitle: "이번 주말 캠핑, 공장 장바구니로 더 스마트하게 준비하세요",
		cta: "캠핑 상품 보기",
		tag: "BEST",
	},
];

const VISIBLE = 4;
const TOTAL = slides.length;

// 슬라이드별 태그 색상
function tagStyle(tag: string) {
	const map: Record<string, string> = {
		NEW: "bg-[#C8A97A] text-white",
		SALE: "bg-red-500 text-white",
		HOT: "bg-orange-500 text-white",
		SPRING: "bg-purple-400 text-white",
		FREE: "bg-emerald-500 text-white",
		EVENT: "bg-cyan-500 text-white",
		BEST: "bg-rose-500 text-white",
	};
	return map[tag] ?? "bg-gray-700 text-white";
}

export default function MainCarousel() {
	const [current, setCurrent] = useState(0);
	const [isPlaying] = useState(true);
	const [visible, setVisible] = useState(VISIBLE);

	useEffect(() => {
		const update = () => {
			if (window.innerWidth >= 1024) setVisible(VISIBLE);
			else if (window.innerWidth >= 640) setVisible(2);
			else setVisible(1);
		};
		update();
		window.addEventListener("resize", update);
		return () => window.removeEventListener("resize", update);
	}, []);

	const next = useCallback(() => {
		setCurrent((prev) => (prev + 1) % TOTAL);
	}, []);

	const prev = useCallback(() => {
		setCurrent((prev) => (prev - 1 + TOTAL) % TOTAL);
	}, []);

	useEffect(() => {
		if (!isPlaying) return;
		const timer = setInterval(next, 4500);
		return () => clearInterval(timer);
	}, [isPlaying, next]);

	const visibleIndices = Array.from(
		{ length: visible },
		(_, i) => (current + i) % TOTAL
	);
	const isDesktop = visible === VISIBLE;

	return (
		<div className="w-full bg-white py-4 sm:py-6">
			<div className="overflow-hidden px-4 sm:px-6 lg:px-0">
				<div className="flex gap-3 sm:gap-4 lg:-mx-[1%]">
					{visibleIndices.map((slideIdx, position) => {
						const slide = slides[slideIdx];
						const isFocused = isDesktop
							? position === 1 || position === 2
							: true;
						const slideHeight = isDesktop
							? isFocused
								? "500px"
								: "460px"
							: visible === 1
								? "360px"
								: "420px";
						const slideFlex = isDesktop
							? position === 0 || position === VISIBLE - 1
								? 0.82
								: 1.18
							: 1;

						return (
							<motion.div
								key={`${slideIdx}-${current}`}
								initial={{ opacity: 0, y: 16 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.4,
									delay: position * 0.06,
									ease: "easeOut",
								}}
								className="relative rounded-2xl overflow-hidden cursor-pointer select-none group min-w-0"
								style={{
									height: slideHeight,
									flex: slideFlex,
									marginTop: isDesktop && !isFocused ? "20px" : 0,
								}}>
								{/* 배경 이미지 */}
								<img
									src={slide.image}
									alt={slide.title}
									className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
									loading="lazy"
								/>

								{/* 그라디언트 오버레이 */}
								<div
									className="absolute inset-0"
									style={{
										background: `linear-gradient(160deg, ${slide.overlayFrom} 0%, ${slide.overlayTo} 100%)`,
									}}
								/>

								{/* 노이즈 텍스처 오버레이 (미세 질감) */}
								<div
									className="absolute inset-0 opacity-[0.04]"
									style={{
										backgroundImage:
											"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
										backgroundSize: "128px 128px",
									}}
								/>

								{/* 상단: 태그 + 뱃지 */}
								<div className="absolute top-5 left-5 right-5 flex items-start justify-between">
									{/* 태그 */}
									<span
										className={`text-[10px] font-black tracking-widest px-2 py-0.5 rounded-full ${tagStyle(slide.tag)}`}>
										{slide.tag}
									</span>
									{/* 뱃지 */}
									<span
										className="text-[11px] font-semibold px-2.5 py-1 rounded-full text-white/90 backdrop-blur-sm"
										style={{
											background: `${slide.badgeColor}55`,
											border: `1px solid ${slide.badgeColor}88`,
										}}>
										{slide.badge}
									</span>
								</div>

								{/* 하단: 텍스트 콘텐츠 */}
								<div className="absolute bottom-0 left-0 right-0 p-6">
									{/* 아이보로 구분선 */}
									<div
										className="w-8 h-0.5 mb-3 rounded-full"
										style={{ background: slide.badgeColor }}
									/>

									{/* eyebrow */}
									<p className="text-xs font-medium text-white/60 mb-1 tracking-wide uppercase">
										{slide.eyebrow}
									</p>

									{/* 메인 타이틀 */}
									<h3 className="text-xl font-bold text-white leading-tight mb-0.5">
										{slide.title}
									</h3>

									{/* 하이라이트 */}
									<AnimatePresence mode="wait">
										<motion.p
											key={slide.id}
											initial={{ opacity: 0, x: -8 }}
											animate={{ opacity: 1, x: 0 }}
											exit={{ opacity: 0 }}
											transition={{ duration: 0.3 }}
											className="text-2xl font-black leading-tight mb-2"
											style={{ color: slide.badgeColor }}>
											{slide.highlight}
										</motion.p>
									</AnimatePresence>

									{/* 서브타이틀 */}
									<p className="text-[11px] text-white/55 leading-relaxed mb-4 line-clamp-2">
										{slide.subtitle}
									</p>

									{/* CTA 버튼 */}
									<button className="flex items-center gap-1.5 text-xs font-semibold text-white/90 hover:text-white transition-colors group/btn">
										<span>{slide.cta}</span>
										<ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" />
									</button>
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* 하단 인디케이터 */}
				<div className="flex items-center justify-center gap-3 mt-6">
					<button
						onClick={prev}
						className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-gray-400 hover:text-gray-700 transition-all"
						aria-label="이전">
						<ChevronLeft className="w-3.5 h-3.5" />
					</button>

					{/* 도트 인디케이터 */}
					<div className="flex items-center gap-1.5">
						{slides.map((_, i) => (
							<button
								key={i}
								onClick={() => setCurrent(i)}
								className="transition-all duration-300"
								aria-label={`슬라이드 ${i + 1}`}>
								<span
									className={`block rounded-full transition-all duration-300 ${
										i === current
											? "w-5 h-1.5 bg-[#C8A97A]"
											: "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
									}`}
								/>
							</button>
						))}
					</div>

					{/* 페이지 카운터 */}
					<span className="text-xs text-gray-400 font-medium tabular-nums w-10 text-center">
						{String(current + 1).padStart(2, "0")}
						<span className="text-gray-200 mx-0.5">/</span>
						{String(TOTAL).padStart(2, "0")}
					</span>

					<button
						onClick={next}
						className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-gray-400 hover:text-gray-700 transition-all"
						aria-label="다음">
						<ChevronRight className="w-3.5 h-3.5" />
					</button>
				</div>
			</div>
		</div>
	);
}
