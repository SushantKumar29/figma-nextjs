"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ASSET_BASE = "/figma/parallax-scroll";

export function Hero() {
	return (
		<section id='home' className='relative w-full px-20 pt-43.5 pb-0'>
			<div className='relative mx-auto w-full'>
				<div className='absolute left-[407.12px] top-[268.9px] h-[507.2px] opacity-60 blur-[50px]'>
					<Image
						src={`${ASSET_BASE}/image-16-1-79c606.png`}
						alt=''
						width={725}
						height={507}
						className='h-full w-full'
						priority
					/>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className='mx-auto flex max-w-205 flex-col items-center gap-12 text-center'
				>
					<div className='inline-flex items-center gap-2 rounded-[999px] px-4 py-2.5'>
						<img
							src={`${ASSET_BASE}/mdi-magic-2014-4457.svg`}
							alt=''
							className='h-4 w-4'
						/>
						<span className="font-['Inter'] text-[16px] font-medium">
							Introducing AI Automation
						</span>
					</div>

					<h1 className='text-[64px] font-semibold leading-[1.05] tracking-[-0.02em] text-white'>
						<span className='block'>
							from <span className='text-[#11DEFF]'>CONCEPT</span>
						</span>
						<span className='block'>
							to <span className='text-[#4380FF]'>REALITY</span>
						</span>
					</h1>

					<div className='text-[24px] font-normal leading-[1.35] text-[#CDE8D7]'>
						We Engineer your Software Success &amp; Digital Transformation.
					</div>

					<p className='max-w-190 text-[16px] leading-[1.7] text-white/80'>
						At Chromezy, we translate your ideas into market-ready solutions
						quickly and precisely. Leveraging the power of technology and
						prioritizing user needs, we deliver products that are both
						cutting-edge and user-centric.
					</p>

					<div className='grid w-full grid-cols-4 gap-4.5'>
						{[
							{ value: "200%", label: "Revenue Growth" },
							{ value: "4X", label: "Speed to Market" },
							{ value: "73%", label: "New Orders" },
							{ value: "10K+", label: "Active Users" },
						].map((s) => (
							<div
								key={s.label}
								className='flex flex-col items-center justify-center gap-1.5 rounded-[18px] px-3 py-3.5'
							>
								<div className='text-[32px] font-semibold leading-none bg-linear-to-r from-[#3C6BFE] to-[#9D84F2] bg-clip-text text-transparent'>
									{s.value}
								</div>
								<div className='text-[14px] font-medium text-white/85'>
									{s.label}
								</div>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
