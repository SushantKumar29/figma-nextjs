"use client";

import { SearchIcon } from "@/components/icons/SearchIcon";
import { useState, useEffect } from "react";

const ASSET_BASE = "/figma/parallax-scroll";

export function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1024) {
				setIsMobileMenuOpen(false);
			}
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<>
			<div
				className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-black`}
			>
				<div className='w-full px-4 sm:px-6 lg:px-8 xl:px-20'>
					<div className='mx-auto max-w-7xl'>
						<div className='flex h-14 items-center justify-between md:h-16'>
							<div className='flex items-center gap-2 sm:gap-4'>
								<img
									src={`${ASSET_BASE}/logo-final.svg`}
									alt='Chromezy'
									className='h-5 w-auto opacity-90 sm:h-6 md:h-[26.48px]'
								/>
								<a
									href='#'
									className='hidden items-center gap-2 rounded-[999px] px-3 py-1.5 text-sm font-medium text-white/80 hover:bg-white/10 sm:flex md:px-3.5 md:py-2'
								>
									<SearchIcon className='h-4 w-4 md:h-4.5 md:w-[19.06px]' />
									<span className='hidden md:inline'>Search</span>
								</a>
							</div>

							<div className='hidden lg:block'>
								<nav className='flex items-center gap-1 rounded-[999px] border border-white/10 bg-black/20 px-2 py-1 text-sm font-medium text-white xl:gap-2 xl:px-3'>
									{[
										{ label: "Home", href: "#home" },
										{ label: "Explore AI", href: "#features" },
										{ label: "Services", href: "#services" },
										{ label: "Products", href: "#case-studies" },
										{ label: "Blogs", href: "#footer" },
									].map((item) => (
										<a
											key={item.label}
											href={item.href}
											className='rounded-[999px] px-3 py-2 text-white/90 hover:text-white xl:px-4 xl:py-2.5'
										>
											{item.label}
										</a>
									))}
								</nav>
							</div>

							<div className='flex items-center gap-2 sm:gap-3 md:gap-4'>
								<a
									href='#about'
									className='hidden lg:block rounded-[999px] px-3 py-2 text-sm font-medium text-white/90 hover:text-white xl:px-4 xl:py-2.5'
								>
									About Us
								</a>

								<a
									href='#contact'
									className='rounded-[999px] bg-[#4380FF] px-3 py-1.5 text-xs font-semibold text-white shadow-[0px_22.3363px_17.869px_rgba(0,0,0,0.04),0px_100px_80px_rgba(0,0,0,0.07)] transition-all hover:bg-[#5a92ff] sm:px-4 sm:py-2 sm:text-sm md:px-5 md:py-2.5 lg:px-5.5 lg:py-3'
								>
									<span className='hidden sm:inline'>Contact Us</span>
									<span className='sm:hidden'>Contact</span>
								</a>

								<button
									onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
									className='flex h-8 w-8 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-black/20 p-1.5 hover:bg-white/10 lg:hidden'
									aria-label='Toggle menu'
								>
									<span
										className={`h-0.5 w-5 bg-white transition-all duration-300 ${
											isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
										}`}
									/>
									<span
										className={`h-0.5 w-5 bg-white transition-all duration-300 ${
											isMobileMenuOpen ? "opacity-0" : ""
										}`}
									/>
									<span
										className={`h-0.5 w-5 bg-white transition-all duration-300 ${
											isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
										}`}
									/>
								</button>
							</div>
						</div>
					</div>
				</div>

				<div
					className={`overflow-hidden transition-all duration-300 lg:hidden ${
						isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
					}`}
				>
					<div className='border-t border-white/10 bg-black/95 backdrop-blur-md'>
						<div className='mx-auto max-w-7xl px-4 py-4 sm:px-6'>
							<nav className='flex flex-col space-y-2'>
								<a
									href='#'
									className='flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10 sm:hidden'
								>
									<SearchIcon className='h-4.5 w-[19.06px]' />
									Search
								</a>

								{[
									{ label: "Home", href: "#home" },
									{ label: "Explore AI", href: "#features" },
									{ label: "Services", href: "#services" },
									{ label: "E-commerce", href: "#services" },
									{ label: "Products", href: "#case-studies" },
									{ label: "Blogs", href: "#footer" },
								].map((item) => (
									<a
										key={item.label}
										href={item.href}
										className='rounded-lg px-4 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white'
										onClick={() => setIsMobileMenuOpen(false)}
									>
										{item.label}
									</a>
								))}

								<a
									href='#about'
									className='rounded-lg px-4 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white lg:hidden'
									onClick={() => setIsMobileMenuOpen(false)}
								>
									About Us
								</a>
							</nav>
						</div>
					</div>
				</div>
			</div>

			<div className='h-14 md:h-16' />
		</>
	);
}
