"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ASSET_BASE = "/figma/parallax-scroll";

const INSIGHTS = [
	{
		title: "Successful MVP Launches That Changed the Game.",
		desc: "Discover the secrets behind game-changing MVP launches! From lean startups to industry giants, explore how these innovative launches disrupted markets and paved the way for success. Click to uncover the strategies that revolutionized product development.",
		image: `${ASSET_BASE}/insight-1.png`,
	},
	{
		title: "How Our AI Product Development Company is Pioneering Innovation?",
		desc: "Discover how our product development company pioneers innovation. From groundbreaking technologies to creative strategies, we're shaping the future. Click to explore our journey and join us in revolutionizing industries.",
		image: `${ASSET_BASE}/insight-2.png`,
	},
	{
		title:
			"Optimizing E-commerce Sales with AI-Driven Product Recommendations.",
		desc: "Boost your e-commerce sales with AI-powered product recommendations. Learn how smart algorithms can enhance customer experience and drive conversions. Read our blog for actionable insights!",
		image: `${ASSET_BASE}/insight-3.png`,
	},
];

export function Features() {
	return (
		<motion.section
			id='features'
			initial={{ opacity: 0, y: 22 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.15 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className='w-full px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-20'
		>
			<div className='mx-auto w-full max-w-7xl'>
				<h2 className='text-[36px] sm:text-[44px] font-black text-white leading-tight tracking-tight uppercase'>
					Featured Insights
				</h2>
				<p className='mt-3 text-[14px] sm:text-[15px] text-white/60 leading-relaxed'>
					Were you looking to explore a specific topic? You&apos;re in the right
					spot.
				</p>

				<div className='mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
					{INSIGHTS.map((item, i) => (
						<motion.div
							key={item.title}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
							className='group rounded-[20px] bg-black/5 border border-white/10 overflow-hidden flex flex-col cursor-pointer hover:bg-black/8 transition-colors duration-300 p-5'
						>
							<div className='relative w-full h-50 sm:h-52.5 overflow-hidden'>
								<Image
									src={item.image}
									alt={item.title}
									fill
									className='object-cover transition-transform duration-500 group-hover:scale-105'
									sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
								/>
							</div>

							<div className='flex flex-col flex-1 pt-4'>
								<div className='flex items-start justify-between gap-3'>
									<h3 className='text-[16px] sm:text-[17px] font-bold text-white leading-snug flex-1'>
										{item.title}
									</h3>

									<button className='shrink-0 mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-colors'>
										<svg
											width='14'
											height='14'
											viewBox='0 0 14 14'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5'
												stroke='white'
												strokeWidth='1.5'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</button>
								</div>

								<p className='mt-3 text-[13px] leading-[1.65] text-white/55 flex-1'>
									{item.desc}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
}
