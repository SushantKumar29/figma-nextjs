"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ASSET_BASE = "/figma/parallax-scroll";

export function CaseStudies() {
	const cards = [
		{
			title: "FinConnect",
			subtitle: "Customer Relationship Management (CRM)",
			image: `${ASSET_BASE}/rectangle-3157.png`,
		},
		{
			title: "HealthSync",
			subtitle: "Health Tracking App for Patients and Doctors",
			image: `${ASSET_BASE}/rectangle-3157-2.png`,
		},

		{
			title: "Commerce360",
			subtitle: "Online Store, Multivendor Marketplace & E-commerce Apps",
			image: `${ASSET_BASE}/rectangle-3157-3.png`,
		},
		{
			title: "PrintwithAI",
			subtitle:
				"Web-to-Print Software / Online Design Tool / Product Designer Tool",
			image: `${ASSET_BASE}/rectangle-3157-4.png`,
		},
		{
			title: "PM Insights",
			subtitle: "Project Management Tool (SaaS & Hosted)",
			image: `${ASSET_BASE}/rectangle-3157-5.png`,
		},
	];

	const CardComponent = ({
		card,
		large = true,
	}: {
		card: { title: string; subtitle: string; image: string };
		large?: boolean;
	}) => (
		<div className='overflow-hidden rounded-[20px] bg-white/5 border border-white/10 backdrop-blur-sm'>
			<div
				className='relative w-full'
				style={{ height: large ? "304px" : "200px" }}
			>
				<Image
					src={card.image}
					alt={card.title}
					fill
					className='object-cover'
					sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px'
				/>

				<div className='absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5'>
					<span className='text-[11px] font-semibold text-gray-800 leading-none'>
						Success Stories
					</span>
				</div>

				<button className='absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white hover:bg-black/60 transition-colors'>
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

			<div className='relative -mt-19 mr-4 bg-white rounded-tr-[20px] px-4 pt-4 pb-4 shadow-[0_-8px_20px_rgba(0,0,0,0.15)]'>
				<div className='text-[18px] font-bold text-gray-900 leading-tight'>
					{card.title}
				</div>
				<div className='mt-1 text-[12px] leading-[1.4] text-gray-500 whitespace-nowrap overflow-x-auto scrollbar-none'>
					{card.subtitle}
				</div>
			</div>
		</div>
	);

	return (
		<motion.section
			id='case-studies'
			initial={{ opacity: 0, y: 22 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className='w-full px-4 sm:px-6 md:px-10 py-10 md:py-16'
		>
			<div className='mx-auto w-full max-w-7xl'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-5 items-start'>
					<div className='flex flex-col justify-center py-4'>
						<h2 className='text-[36px] sm:text-[42px] md:text-[48px] font-black text-white leading-tight tracking-tight'>
							SUCCESS
							<br />
							STORIES
						</h2>
						<p className='mt-4 text-[14px] leading-[1.7] text-white/60 max-w-xs md:max-w-70'>
							Dummy ipsum dolor sit amet, consectetur adipiscing elit. Nunc
							vulputate libero et velit interdum, ac aliquet odio mattis.
						</p>
					</div>

					<div className='grid grid-cols-1 sm:grid-cols-2 gap-5 md:contents'>
						{cards.map((card) => (
							<CardComponent key={card.title} card={card} large />
						))}
					</div>
				</div>
			</div>
		</motion.section>
	);
}
