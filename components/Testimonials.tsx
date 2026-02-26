"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { QuoteIcon } from "@/components/icons/QuoteIcon";
import { useMemo } from "react";
import { ClientLogo } from "./icons/ClientLogo";
import Image from "next/image";
const ASSET_BASE = "/figma/parallax-scroll";

export function Testimonials() {
	const testimonials = [
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
				src: `${ASSET_BASE}/frame-34993-2014-4539.svg`,
				width: 80,
				height: 80,
			},
		},
	];

	return (
		<motion.section
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.9 }}
			className='relative py-40 px-6'
		>
			<div className='mx-auto max-w-7xl'>
				<div className='flex items-end justify-between'>
					<div>
						<h2 className='text-[56px] font-semibold tracking-[-0.02em] text-white'>
							OUR HAPPY CLIENTS
						</h2>
						<p className='mt-4 text-[18px] text-white/70'>
							Dummy ipsum dolor sit amet, consectetur adipiscing elit
						</p>
					</div>

					<div className='hidden md:flex items-center gap-3'>
						<button className='flex h-12 w-12 items-center justify-center rounded-full bg-[#2A2F3A] text-white'>
							<ArrowRightIcon className='h-5 w-5 rotate-180' />
						</button>
						<button className='flex h-12 w-12 items-center justify-center rounded-full bg-[#2A2F3A] text-white'>
							<ArrowRightIcon className='h-5 w-5' />
						</button>
					</div>
				</div>

				<div className='mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
					{testimonials.map((t, idx) => (
						<div
							key={idx}
							className='relative flex min-h-110 flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-linear-to-br from-white/10 to-white/3 p-10 backdrop-blur-2xl'
						>
							<QuoteIcon className='h-12 w-12 text-[#1DE9B6]' />

							<p className='mt-6 text-[17px] leading-[1.75] text-white/85'>
								{t.quote}
							</p>

							<div className='mt-10 ms-auto'>
								<div className='text-[15px] font-semibold tracking-wide text-white'>
									{t.name}
								</div>
								<div className='mt-1 text-[13px] text-white/60'>{t.role}</div>
							</div>

							<div className='my-6 h-px w-full bg-white/10' />

							<div className='flex items-start justify-between text-[12px] text-white/60'>
								<div className='space-y-1'>
									<div>Star Rating – {t.rating}</div>
									<div>Project – {t.project}</div>
									<div>Country – {t.country}</div>
								</div>

								<div className='text-white/40 text-sm font-semibold'>
									<Image
										width={t.logo.width}
										height={t.logo.height}
										src={t.logo.src}
										alt={`Client logo ${t.name}`}
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</motion.section>
	);
}
