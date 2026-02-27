"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const ASSET_BASE = "/figma/parallax-scroll";

export function ParallaxBackground() {
	const { scrollY } = useScroll();

	// Triangle: large, mostly off-screen left, slowly drifts right + shrinks
	const triangleX = useTransform(scrollY, [0, 3000], [-300, -150]);
	const triangleScale = useTransform(scrollY, [0, 3000], [1, 0.75]);
	const triangleY = useTransform(scrollY, [0, 3000], [0, -100]);

	// Main ball: moves LEFT, fades out
	const ballY = useTransform(scrollY, [0, 1200], [0, 50]);
	const ballX = useTransform(scrollY, [0, 1200], [0, -580]);
	const ballOpacity = useTransform(scrollY, [0, 600, 1000], [1, 1, 1]);
	const ballScale = useTransform(scrollY, [0, 1200], [1, 1.4]);

	// Large blurred ball: rises from bottom-right
	const blurBallX = useTransform(scrollY, [0, 1000], [-400, -400]);
	const blurBallY = useTransform(scrollY, [0, 2000], [110, -1400]);
	const blurBallScale = useTransform(scrollY, [0, 2000], [1, 1.5]);
	const blurBallOpacity = useTransform(scrollY, [200, 700, 2000], [1, 1, 1]);

	// Mid glow
	const midBallY = useTransform(scrollY, [400, 1400], [200, -200]);
	const midBallOpacity = useTransform(scrollY, [300, 700, 1500], [0, 0.35, 0]);

	return (
		<div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
			{/* Grid dot pattern */}
			<div
				className='absolute inset-0 opacity-[0.04]'
				style={{
					backgroundImage: `url(${ASSET_BASE}/group-20468-2014-4444.svg)`,
					backgroundRepeat: "repeat",
					backgroundSize: "140px 140px",
				}}
			/>

			{/* ── Triangle ── */}
			{/* Outer div handles scroll-driven x/y/scale */}
			<motion.div
				style={{
					x: triangleX,
					y: triangleY,
					scale: triangleScale,
					position: "absolute",
					left: "0px",
					top: "80px",
					width: "669px",
					height: "669px",
					opacity: 1,
					zIndex: 0,
					transformOrigin: "left center",
				}}
				className='pointer-events-none'
			>
				{/* Inner div handles the static rotateY flip */}
				<div
					style={{
						width: "100%",
						height: "100%",
						transform: "rotateY(180deg)",
					}}
				>
					<img
						src={`${ASSET_BASE}/triangle.png`}
						alt=''
						style={{
							width: "100%",
							height: "100%",
							objectFit: "contain",
							mixBlendMode: "screen",
							filter: "blur(4px)",
						}}
					/>
				</div>
			</motion.div>

			{/* ── Main ball: moves LEFT, fades out ── */}
			<motion.div
				style={{
					y: ballY,
					x: ballX,
					scale: ballScale,
					opacity: ballOpacity,
					position: "absolute",
					right: "-2%",
					top: "3%",
					width: "clamp(180px, 22vw, 340px)",
					zIndex: 0,
					transformOrigin: "top right",
				}}
				className='pointer-events-none'
			>
				<img
					src={`${ASSET_BASE}/main-ball.png`}
					alt=''
					style={{
						width: "100%",
						height: "auto",
						mixBlendMode: "screen",
					}}
				/>
			</motion.div>

			{/* ── Large blurred ball: rises from bottom-right ── */}
			<motion.div
				style={{
					x: blurBallX,
					y: blurBallY,
					scale: blurBallScale,
					opacity: blurBallOpacity,
					position: "absolute",
					right: "-5%",
					top: "70%",
					width: "clamp(300px, 40vw, 620px)",
					zIndex: 0,
					transformOrigin: "center center",
				}}
				className='pointer-events-none'
			>
				<img
					src={`${ASSET_BASE}/main-ball.png`}
					alt=''
					style={{
						width: "100%",
						height: "auto",
						mixBlendMode: "screen",
						filter: "blur(5px)",
					}}
				/>
			</motion.div>

			{/* ── Mid glow ── */}
			<motion.div
				style={{
					y: midBallY,
					opacity: midBallOpacity,
					position: "absolute",
					right: "8%",
					top: "55%",
					width: "clamp(260px, 35vw, 520px)",
					zIndex: 0,
				}}
				className='pointer-events-none'
			>
				<img
					src={`${ASSET_BASE}/main-ball.png`}
					alt=''
					style={{
						width: "100%",
						height: "auto",
						mixBlendMode: "screen",
						filter: "blur(60px)",
					}}
				/>
			</motion.div>
		</div>
	);
}
