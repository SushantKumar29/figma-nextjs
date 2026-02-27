// "use client";

import Image from "next/image";

export interface ServiceCardProps {
	title: string;
	description: string;
	cta: string;
	tone: "mvp" | "saas" | "ai" | "commerce";
}

export function ServiceCard({
	title,
	description,
	cta,
	tone,
}: ServiceCardProps) {
	const toneStyles: Record<
		ServiceCardProps["tone"],
		{
			bg: string;
			accent: string;
			image: string;
		}
	> = {
		mvp: {
			bg: "bg-[#3D4DB7]",
			accent: "text-[#BFD6FF]",
			image: "/figma/parallax-scroll/dots.svg",
		},
		saas: {
			bg: "bg-[#8E244B]",
			accent: "text-[#FFC1D6]",
			image: "/figma/parallax-scroll/cubes.svg",
		},
		ai: {
			bg: "bg-[#B07A2E]",
			accent: "text-[#FFE2B3]",
			image: "/figma/parallax-scroll/ai-shape.svg",
		},
		commerce: {
			bg: "bg-[#1F5132]",
			accent: "text-[#B7FFCE]",
			image: "/figma/parallax-scroll/commerce-shape.svg",
		},
	};

	const styles = toneStyles[tone];
	const arrowIcon = "/figma/icons/arrow-top-right.svg";

	return (
		<div
			className={`relative flex min-h-140 flex-col justify-between overflow-hidden rounded-[22px] ${styles.bg} p-5`}
		>
			<div className='absolute left-5 top-5 rounded-full bg-white/15 px-4 py-2 text-[12px] font-medium text-white backdrop-blur'>
				Our Services
			</div>

			<div className='pointer-events-none absolute right-0 top-0 opacity-40'>
				<Image
					src={styles.image}
					alt=''
					width={180}
					height={180}
					className='pt-6 pr-6'
				/>
			</div>

			<div className='relative mt-16'>
				<h3 className='text-[28px] font-semibold text-white'>{title}</h3>

				<p className='mt-4 text-[15px] leading-[1.65] text-white/85'>
					{description}
				</p>
			</div>

			<a
				href='#contact'
				className='mt-8 w-full flex items-center justify-center gap-1 rounded-full bg-black px-6 py-4 text-xs font-semibold text-white transition hover:opacity-90'
			>
				{cta}
				<span className='flex h-8 w-8 items-center justify-center rounded-full ml-2'>
					<Image src={arrowIcon} alt='' width={200} height={200} />
				</span>
			</a>
		</div>
	);
}
