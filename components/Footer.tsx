// "use client";

const ASSET_BASE = "/figma/parallax-scroll";

const NAV_LEFT = [
	{ label: "Home", href: "#home" },
	{ label: "About Us", href: "#contact" },
	{ label: "Career", href: "#contact" },
	{ label: "Case Study", href: "#case-studies" },
	{ label: "Join the Team", href: "#contact", bold: true },
];

const NAV_RIGHT = [
	{ label: "AI", href: "#products" },
	{ label: "MVP", href: "#products" },
	{ label: "SaaS", href: "#products" },
	{ label: "E-commerce", href: "#products" },
	{ label: "Work with us", href: "#contact", blue: true },
];

export function Footer() {
	return (
		<footer id='footer' className='w-full bg-black px-4 py-12 md:py-20'>
			<div className='mx-auto w-full max-w-8/10'>
				<div className='h-px w-full bg-white/10 mb-10' />

				<div className='flex flex-col lg:flex-row items-start justify-between gap-10'>
					<div className='shrink-0 max-w-[320px]'>
						<div className='flex items-center gap-2.5 mb-4'>
							<img
								src={`${ASSET_BASE}/logo-final.svg`}
								alt='Chromezy logo'
								className='h-10 w-auto'
							/>
						</div>

						<p className='text-[13px] leading-[1.65] text-white/55 mb-5 pl-12'>
							Not just about software &amp; Product development; we&apos;re your
							tech partners, crafting modern digital solutions for next-gen
							excellence!
						</p>

						<div className='flex items-center gap-2 text-[13px] text-white/50 mb-6 pl-12'>
							<a href='#' className='hover:text-white/80 transition-colors'>
								Terms
							</a>
							<span className='text-white/30'>|</span>
							<a href='#' className='hover:text-white/80 transition-colors'>
								Privacy
							</a>
						</div>

						<div className='flex items-center gap-3 mb-3'>
							<div className='flex h-8 w-8 items-center justify-center rounded-full border border-white/15'>
								<svg width='14' height='14' viewBox='0 0 24 24' fill='none'>
									<path
										d='M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.57 1 1 0 01-.25 1.02l-2.2 2.2z'
										fill='#4a9af4'
									/>
								</svg>
							</div>
							<span className='text-[14px] font-semibold text-white'>
								+1 315 308 0901
							</span>
						</div>

						<div className='flex items-center gap-3'>
							<div className='flex h-8 w-8 items-center justify-center rounded-full border border-white/15'>
								<svg width='14' height='14' viewBox='0 0 24 24' fill='none'>
									<path
										d='M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'
										fill='#4a9af4'
									/>
								</svg>
							</div>
							<span className='text-[14px] font-semibold text-white'>
								sales@chromezy.com
							</span>
						</div>
					</div>

					<div className='flex gap-16 lg:gap-24'>
						<div className='flex flex-col gap-0 min-w-40'>
							{NAV_LEFT.map((item, i) => (
								<a
									key={item.label}
									href={item.href}
									className={`
										flex items-center justify-between
										py-4 border-b border-white/10
										text-[15px] transition-colors hover:text-white
										${item.bold ? "font-bold text-white" : "text-white/70"}
										${i === 0 ? "border-t border-white/10" : ""}
									`}
								>
									<span>{item.label}</span>
									<svg
										width='7'
										height='12'
										viewBox='0 0 7 12'
										fill='none'
										className='opacity-40 ml-4'
									>
										<path
											d='M1 1l5 5-5 5'
											stroke='white'
											strokeWidth='1.5'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</a>
							))}
						</div>

						<div className='flex flex-col gap-0 min-w-40'>
							{NAV_RIGHT.map((item, i) => (
								<a
									key={item.label}
									href={item.href}
									className={`
										flex items-center justify-between
										py-4 border-b border-white/10
										text-[15px] transition-colors
										${item.blue ? "font-semibold text-blue-400 hover:text-blue-300" : "text-white/70 hover:text-white"}
										${i === 0 ? "border-t border-white/10" : ""}
									`}
								>
									<span>{item.label}</span>
									<svg
										width='7'
										height='12'
										viewBox='0 0 7 12'
										fill='none'
										className='opacity-40 ml-4'
									>
										<path
											d='M1 1l5 5-5 5'
											stroke={item.blue ? "#60a5fa" : "white"}
											strokeWidth='1.5'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</a>
							))}
						</div>
					</div>
				</div>

				<div className='mt-12 h-px w-full bg-white/10' />
				<div className='mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-white/45'>
					<div className='flex flex-wrap items-center gap-2 text-center sm:text-left'>
						<span>Copyright © 2024</span>
						<span className='text-white/25'>|</span>
						<span>Dbnk Designs, All Rights Reserved</span>
						<span className='text-white/25'>|</span>
						<a
							href='#'
							className='underline underline-offset-2 hover:text-white/70 transition-colors'
						>
							Designed by Debasish Naik
						</a>
					</div>

					<div className='flex items-center gap-4'>
						<span className='text-white/45 text-[13px]'>Connect with us:</span>

						<a
							href='#'
							className='flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors'
						>
							<svg
								width='16'
								height='16'
								viewBox='0 0 24 24'
								fill='currentColor'
							>
								<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' />
							</svg>
						</a>

						<a
							href='#'
							className='flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors'
						>
							<svg
								width='16'
								height='16'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<rect x='2' y='2' width='20' height='20' rx='5' ry='5' />
								<circle cx='12' cy='12' r='4' />
								<circle
									cx='17.5'
									cy='6.5'
									r='1'
									fill='currentColor'
									stroke='none'
								/>
							</svg>
						</a>

						<a
							href='#'
							className='flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors'
						>
							<svg
								width='16'
								height='16'
								viewBox='0 0 24 24'
								fill='currentColor'
							>
								<path d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' />
								<circle cx='4' cy='4' r='2' />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
