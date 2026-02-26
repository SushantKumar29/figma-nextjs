"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ASSET_BASE = "/figma/parallax-scroll";

export function Contact() {
	return (
		<motion.section
			id='contact'
			initial={{ opacity: 0, y: 22 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.15 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className='w-full px-4 sm:px-8 md:px-14 lg:px-20 py-10 md:py-16'
		>
			<div className='mx-auto w-full max-w-7xl'>
				<div
					className='relative rounded-[28px] overflow-hidden'
					style={{
						minHeight: "660px",
						background:
							"linear-gradient(to right, #1660d8 0%, #1660d8 60%, #c8dcf2 60%, #c8dcf2 100%)",
					}}
				>
					<div className='absolute inset-y-0 left-0 w-[60%]'>
						<div
							className='absolute inset-0'
							style={{
								backgroundImage: `url(${ASSET_BASE}/contact-bg.png)`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
						/>
						<div
							className='absolute inset-0'
							style={{ background: "rgb(63 156 242 / 79%);" }}
						/>
					</div>

					<div
						className='relative z-10 flex flex-col items-center justify-end w-full lg:w-[58%] px-10 lg:px-16 pt-10 pb-12'
						style={{ minHeight: "660px" }}
					>
						<div className='relative mb-4' style={{ width: 280, height: 300 }}>
							<Image
								src={`${ASSET_BASE}/contact-logo.png`}
								alt='Contact character'
								fill
								className='object-contain object-bottom'
								sizes='280px'
							/>
						</div>

						<div className='text-center mb-6'>
							<h2 className='text-[48px] font-black text-white uppercase tracking-tight leading-none'>
								Contact Us
							</h2>
							<p className='mt-3 text-[14px] text-white/70 leading-[1.6] max-w-70 mx-auto'>
								Talk with us to know how we can make you a part of a thriving
								digital landscape
							</p>
						</div>

						<div className='w-full max-w-85 flex flex-col gap-px'>
							<div
								className='flex items-center justify-between rounded-t-[14px] px-5 py-3.5'
								style={{ background: "#a0fb8e8c;" }}
							>
								<div className='flex items-center gap-3'>
									<svg width='17' height='17' viewBox='0 0 24 24' fill='none'>
										<path
											d='M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.57 1 1 0 01-.25 1.02l-2.2 2.2z'
											fill='white'
										/>
									</svg>
									<span className='text-[14px] font-medium text-white'>
										Phone
									</span>
								</div>
								<span className='text-[14px] font-bold text-white'>
									+1 315 308 0901
								</span>
							</div>

							<div
								className='flex items-center justify-between rounded-b-[14px] px-5 py-3.5'
								style={{ background: "#a0fb8e8c;" }}
							>
								<div className='flex items-center gap-3'>
									<svg width='17' height='17' viewBox='0 0 24 24' fill='none'>
										<path
											d='M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'
											fill='white'
										/>
									</svg>
									<span className='text-[14px] font-medium text-white'>
										Email
									</span>
								</div>
								<span className='text-[14px] font-bold text-white'>
									sales@chromezy.com
								</span>
							</div>
						</div>
					</div>

					<div
						className='hidden lg:flex flex-col absolute bg-[#e4eef8] shadow-2xl'
						style={{
							top: "36px",
							bottom: "36px",
							right: "100px",
							width: "38%",
							borderRadius: "22px",
							padding: "0",
							overflow: "visible",
						}}
					>
						<div
							className='absolute flex items-center justify-center z-20'
							style={{
								top: "-18px",
								right: "-18px",
								width: "96px",
								height: "76px",
								background: "#b4cce4",
								borderRadius: "22px 22px 0 22px",
								boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
							}}
						>
							<Image
								src={`${ASSET_BASE}/contact-envelop.svg`}
								alt='Contact character'
								fill
								className='object-contain object-bottom'
								sizes='280px'
							/>
						</div>

						<div className='flex flex-col flex-1 px-7 py-7 pt-8 overflow-hidden'>
							<h3 className='text-[28px] font-black text-gray-900 mb-4 pr-20 leading-tight'>
								Let&apos;s Talk!
							</h3>

							<form
								onSubmit={(e) => e.preventDefault()}
								className='flex flex-col flex-1'
							>
								<div className='flex flex-col gap-3 flex-1 overflow-y-auto pr-1 mb-2'>
									{[
										{ label: "What's your name?", type: "text" },
										{ label: "What's your email address?", type: "email" },
										{ label: "What's your phone number?", type: "tel" },
										{ label: "What are you looking for?", type: "text" },
									].map(({ label, type }) => (
										<div key={label}>
											<label className='block text-[12px] font-medium text-gray-500 mb-1'>
												{label}
											</label>
											<input
												type={type}
												className='w-full rounded-[10px] bg-white border border-blue-100 px-3.5 py-2.5 text-[13px] text-gray-800 outline-none focus:ring-2 focus:ring-blue-200 transition'
											/>
										</div>
									))}

									<div>
										<label className='block text-[12px] font-medium text-gray-500 mb-1'>
											How can we help you?
										</label>
										<textarea
											rows={3}
											className='w-full rounded-[10px] bg-white border border-blue-100 px-3.5 py-2.5 text-[13px] text-gray-800 outline-none focus:ring-2 focus:ring-blue-200 transition resize-none'
										/>
									</div>
								</div>

								<button
									type='submit'
									className='w-full rounded-full bg-black text-white text-[14px] font-semibold py-3.5 hover:bg-gray-800 transition-colors mt-2 shrink-0'
								>
									Send Request
								</button>
							</form>
						</div>
					</div>

					<div className='lg:hidden relative z-10 bg-[#e4eef8] mx-4 mb-5 rounded-[20px] px-6 py-8'>
						<h3 className='text-[24px] font-black text-gray-900 mb-5'>
							Let&apos;s Talk!
						</h3>
						<form
							onSubmit={(e) => e.preventDefault()}
							className='flex flex-col gap-3.5'
						>
							{[
								"What's your name?",
								"What's your email address?",
								"What's your phone number?",
								"What are you looking for?",
							].map((label) => (
								<div key={label}>
									<label className='block text-[12px] font-medium text-gray-500 mb-1.5'>
										{label}
									</label>
									<input className='w-full rounded-[10px] bg-white border border-blue-100 px-4 py-3 text-[13px] text-gray-800 outline-none' />
								</div>
							))}
							<div>
								<label className='block text-[12px] font-medium text-gray-500 mb-1.5'>
									How can we help you?
								</label>
								<textarea
									rows={4}
									className='w-full rounded-[10px] bg-white border border-blue-100 px-4 py-3 text-[13px] text-gray-800 outline-none resize-none'
								/>
							</div>
							<button
								type='submit'
								className='w-full rounded-full bg-black text-white text-[15px] font-semibold py-4 mt-2'
							>
								Send Request
							</button>
						</form>
					</div>
				</div>
			</div>
		</motion.section>
	);
}
