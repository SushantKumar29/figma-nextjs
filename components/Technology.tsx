"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";

const ASSET_BASE = "/figma/parallax-scroll";

type Tag = {
	label: string;
	icon?: string;
};

const TECH_CATEGORIES: { n: string; title: string; tags: Tag[] }[] = [
	{
		n: "01",
		title: "Web App Development",
		tags: [
			{ label: "React", icon: "react" },
			{ label: "Node", icon: "nodejs" },
			{ label: "Angular", icon: "angular" },
			{ label: "Vue", icon: "vuejs" },
			{ label: "ExpressJS", icon: "expressjs" },
			{ label: "AdobeXD", icon: "xd" },
			{ label: "Figma", icon: "figma" },
			{ label: "Whimsical" },
		],
	},
	{
		n: "02",
		title: "Mobile App Development",
		tags: [
			{ label: "Flutter", icon: "flutter" },
			{ label: "Kotlin", icon: "kotlin" },
			{ label: "Swift", icon: "swift" },
			{ label: "React Native", icon: "react" },
			{ label: "AdobeXD", icon: "xd" },
			{ label: "Figma", icon: "figma" },
		],
	},
	{
		n: "03",
		title: "E-commerce",
		tags: [
			{ label: "Shopify" },
			{ label: "WooCommerce" },
			{ label: "Prestashop" },
		],
	},
	{
		n: "04",
		title: "Analytics",
		tags: [
			{ label: "Python", icon: "python" },
			{ label: "PowerBI", icon: "analytics" },
			{ label: "Tableau", icon: "graphql" },
			{ label: "Amazon QuickSight" },
			{ label: "Apache Spark", icon: "graphql" },
		],
	},
	{
		n: "05",
		title: "Data & Cloud",
		tags: [
			{ label: "Azure", icon: "azure" },
			{ label: "AWS", icon: "aws" },
			{ label: "Docker", icon: "docker" },
			{ label: "Kubernetes", icon: "kubernetes" },
			{ label: "Google Cloud", icon: "gcloud" },
			{ label: "Ola Krutrim" },
		],
	},
];

function TechTag({ label, icon }: Tag) {
	return (
		<span className='inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/6 px-3 py-1.75'>
			{icon && (
				<span className='h-4 w-4 shrink-0 [&>svg]:h-4 [&>svg]:w-4'>
					<StackIcon name={icon as any} />
				</span>
			)}
			<span className='text-[13px] font-medium leading-none text-white/80 whitespace-nowrap'>
				{label}
			</span>
		</span>
	);
}

export function Technology() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 22 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.15 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className='w-full px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-20'
		>
			<div className='mx-auto w-full max-w-7xl'>
				<div className='grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-6 items-start'>
					<div className='rounded-[28px] bg-white/5 backdrop-blur-md p-8 md:p-10 lg:p-11 flex flex-col'>
						<h2 className='text-[32px] sm:text-[38px] lg:text-[42px] font-black text-white leading-[1.1] uppercase tracking-tight'>
							Innovative
							<br />
							Technologies
							<br />
							Keeping Us
							<br />
							Ahead
						</h2>

						<p className='mt-4 text-[14px] sm:text-[15px] leading-[1.75] text-white/60 max-w-sm'>
							Discover the impact of bespoke digital solutions tailored
							precisely to your business&apos;s distinct requirements.
						</p>

						<div className='mt-8 overflow-hidden rounded-[20px] flex-1 min-h-50'>
							<Image
								src={`${ASSET_BASE}/image-12-1-nobg.png`}
								alt='3D render'
								width={1024}
								height={600}
								className='h-full w-full object-contain min-h-55 sm:min-h-70 lg:min-h-80'
							/>
						</div>
					</div>

					<div className='flex flex-col divide-y divide-white/[0.07]'>
						{TECH_CATEGORIES.map((cat, i) => (
							<motion.div
								key={cat.n}
								initial={{ opacity: 0, y: 12 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.45,
									delay: i * 0.07,
									ease: "easeOut",
								}}
								className='flex gap-5 sm:gap-8 py-7 first:pt-2'
							>
								<span className='text-[28px] sm:text-[32px] font-black text-white/20 leading-none tabular-nums shrink-0 w-10 mt-0.5'>
									{cat.n}
								</span>

								<div className='flex-1 min-w-0'>
									<h3 className='text-[17px] sm:text-[19px] font-bold text-white mb-3 leading-snug'>
										{cat.title}
									</h3>
									<div className='flex flex-wrap gap-2'>
										{cat.tags.map((tag) => (
											<TechTag key={tag.label} {...tag} />
										))}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</motion.section>
	);
}
