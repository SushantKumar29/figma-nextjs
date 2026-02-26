"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";

export function Services() {
	return (
		<motion.section
			id='services'
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.9 }}
			className='relative py-32 px-6'
		>
			<div className='mx-auto max-w-7xl'>
				<div className='max-w-155'>
					<h2 className='text-[48px] font-semibold leading-[1.05] tracking-[-0.02em] text-white'>
						PRODUCT ENGINEERING
					</h2>

					<p className='mt-5 text-[18px] leading-[1.7] text-white/70'>
						Discover the impact of bespoke digital solutions tailored precisely
						to your business's distinct requirements. Our experienced team of
						professionals ensures you receive outstanding results that
						consistently exceed your expectations.
					</p>
				</div>

				<div className='mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
					<ServiceCard
						title='MVP'
						description='We specialize in custom MVP development, focusing on tailored prototyping services to meet diverse client needs and ensure rapid market launch.'
						cta='Talk to a Product Expert'
						tone='mvp'
					/>

					<ServiceCard
						title='SaaS'
						description="Take your business to new heights with our all-inclusive SaaS development services, delivering seamless digital experiences tailored to your customers' needs."
						cta='Talk to a Product Expert'
						tone='saas'
					/>

					<ServiceCard
						title='AI'
						description='We develop tailored AI solutions leveraging machine learning, NLP, and computer vision to automate and enhance decision-making.'
						cta='Talk to a Product Expert'
						tone='ai'
					/>

					<ServiceCard
						title='B2B & B2C Commerce Transformation'
						description='We elevate commerce platforms including Shopify, Magento, Prestashop, and WooCommerce to boost conversions and engagement.'
						cta='Talk to an Ecommerce Expert'
						tone='commerce'
					/>
				</div>
			</div>
		</motion.section>
	);
}
