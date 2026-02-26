"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const ASSET_BASE = "/figma/parallax-scroll";

export function ParallaxBackground() {
	const { scrollY } = useScroll();

	const slow = useTransform(scrollY, [0, 2000], [0, 300]);
	const medium = useTransform(scrollY, [0, 2000], [0, 150]);
	const reverse = useTransform(scrollY, [0, 2000], [0, -200]);

	return (
		<div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
			<div
				className='absolute inset-0 opacity-[0.04]'
				style={{
					backgroundImage: `url(${ASSET_BASE}/group-20468-2014-4444.svg)`,
					backgroundRepeat: "repeat",
					backgroundSize: "140px 140px",
				}}
			/>

			<motion.div
				style={{ y: slow }}
				className='absolute left-[-15%] top-[10%] w-[40vw] max-w-175 opacity-40 blur-2xl'
			>
				<Image
					src={`${ASSET_BASE}/triangle.png`}
					alt=''
					width={700}
					height={700}
					className='w-full h-auto'
				/>
			</motion.div>

			<motion.div
				style={{ y: medium }}
				className='absolute right-[-1%] top-[5%] w-[25vw] max-w-100 opacity-70'
			>
				<Image
					src={`${ASSET_BASE}/main-ball.png`}
					alt=''
					width={400}
					height={400}
					className='w-full h-auto'
				/>
			</motion.div>

			<motion.div
				style={{ y: reverse }}
				className='absolute right-[5%] top-[70%] w-[35vw] max-w-150 opacity-40 blur-2xl'
			>
				<Image
					src={`${ASSET_BASE}/main-ball.png`}
					alt=''
					width={600}
					height={600}
					className='w-full h-auto'
				/>
			</motion.div>
		</div>
	);
}
