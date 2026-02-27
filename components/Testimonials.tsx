"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { useRef } from "react";
import Image from "next/image";

const ASSET_BASE = "/figma/parallax-scroll";

const testimonials = [
	{
		quote:
			"We are Campion Savings Club based in Zimbabwe, South Africa, UK, USA and Australia. Chromezy is very professional, efficient, and reliable.",
		name: "JEFTA MUGWENI",
		role: "(CEO), Campion Savings Club",
		rating: "5 / 5",
		project: "Custom CRM MVP Development",
		country: "Zimbabwe",
		logo: { src: `${ASSET_BASE}/clients-1.svg`, width: 80, height: 80 },
	},
	{
		quote:
			"Highly responsive with keen attention to detail. Assisted in building my e-commerce platform, mapping transformative areas, resulting in exceptional customer experience.",
		name: "BRANDON LAU",
		role: "(CEO), KIRI Journey",
		rating: "5 / 5",
		project: "E-commerce Development",
		country: "HongKong",
		logo: {
			src: `${ASSET_BASE}/frame-34991-2014-4529.svg`,
			width: 120,
			height: 120,
		},
	},
	{
		quote:
			"They are swift to respond and implement faster. Thanks to Chromezy for providing expert developers and on-time delivery to help scale our Cloud-based ERP SaaS solution.",
		name: "MARC DOLLON",
		role: "CTO, MasterStudy",
		rating: "5 / 5",
		project: "SaaS-Based Cloud ERP",
		country: "United States",
		logo: {
			src: `${ASSET_BASE}/frame-34991-2014-4519.svg`,
			width: 120,
			height: 120,
		},
	},
	{
		quote:
			"I'm thrilled with Chromezy's work. They developed inventory management, AI-powered demand forecasting, and smart route optimization on time and affordably.",
		name: "JEET OBERAI",
		role: "(Entrepreneur), PayLoan",
		rating: "4.8 / 5",
		project: "Product Development",
		country: "Singapore",
		logo: {
			src: `${ASSET_BASE}/clients-3.svg`,
			width: 80,
			height: 80,
		},
	},
];

export function Testimonials() {
	const scrollRef = useRef<HTMLDivElement>(null);

	const scroll = (dir: "left" | "right") => {
		if (!scrollRef.current) return;
		const card = scrollRef.current.querySelector("[data-card]") as HTMLElement;
		const amount = card ? card.offsetWidth + 32 : 380;
		scrollRef.current.scrollBy({
			left: dir === "right" ? amount : -amount,
			behavior: "smooth",
		});
	};

	return (
		<motion.section
			id='testimonials'
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.9 }}
			className='relative px-4 py-12 md:py-20'
		>
			<div className='mx-auto w-full max-w-8/10'>
				{/* Header */}
				<div className='flex items-end justify-between mb-10 md:mb-16'>
					<div>
						<h2 className='text-[36px] sm:text-[44px] md:text-[48px] font-semibold tracking-[-0.02em] text-white uppercase leading-tight'>
							Our Happy Clients
						</h2>
						<p className='mt-4 text-[16px] sm:text-[18px] text-white/70'>
							Dummy ipsum dolor sit amet, consectetur adipiscing elit
						</p>
					</div>

					{/* Nav arrows */}
					<div className='hidden md:flex items-center gap-3 shrink-0 ml-6'>
						<button
							onClick={() => scroll("left")}
							className='flex h-12 w-12 items-center justify-center rounded-full bg-[#2A2F3A] text-white hover:bg-white/20 transition-colors'
						>
							<ArrowRightIcon className='h-5 w-5 rotate-180' />
						</button>
						<button
							onClick={() => scroll("right")}
							className='flex h-12 w-12 items-center justify-center rounded-full bg-[#2A2F3A] text-white hover:bg-white/20 transition-colors'
						>
							<ArrowRightIcon className='h-5 w-5' />
						</button>
					</div>
				</div>

				{/* Horizontal scroll container */}
				<div
					ref={scrollRef}
					className='flex gap-6 overflow-x-auto scroll-smooth pb-4'
					style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
				>
					<style>{`div::-webkit-scrollbar { display: none; }`}</style>

					{testimonials.map((t, idx) => (
						<div
							key={idx}
							data-card
							className='relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-linear-to-br from-white/10 to-white/3 p-8 md:p-5 backdrop-blur-2xl shrink-0'
							style={{ width: "clamp(300px, 80vw, 380px)", minHeight: "440px" }}
						>
							<div>
								<Image
									width={24}
									height={24}
									src={"/figma/icons/bi_quote.svg"}
									alt='quote icon'
								/>
								<p className='mt-3 text-[16px] leading-[1.75] text-white/85 font-semibold'>
									{t.quote}
								</p>
							</div>

							<div>
								<div className='mt-8 ms-auto text-right'>
									<div className='text-[14px] font-bold tracking-wide text-white'>
										{t.name}
									</div>
									<div className='mt-1 text-[13px] text-white/60'>{t.role}</div>
								</div>

								<div className='my-5 h-px w-full bg-white/10' />

								<div className='flex items-start justify-between text-[12px] text-white/55'>
									<div className='space-y-1'>
										<div>Star Rating &ndash; {t.rating}</div>
										<div>Project &ndash; {t.project}</div>
										<div>Country &ndash; {t.country}</div>
									</div>

									<Image
										width={t.logo.width}
										height={t.logo.height}
										src={t.logo.src}
										alt={t.name}
										className='object-contain max-w-22.5 max-h-15'
									/>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Mobile scroll hint dots */}
				<div className='mt-5 flex justify-center gap-1.5 md:hidden'>
					{testimonials.map((_, i) => (
						<div key={i} className='h-1.5 w-1.5 rounded-full bg-white/30' />
					))}
				</div>
			</div>
		</motion.section>
	);
}
