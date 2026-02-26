"use client";

import {
	CaseStudies,
	ClientsStrip,
	Contact,
	Features,
	Footer,
	Header,
	Hero,
	ParallaxBackground,
	Services,
	Technology,
	Testimonials,
} from "@/components";

export default function Home() {
	return (
		<div className='relative min-h-screen w-full overflow-x-hidden text-white'>
			<div className='pointer-events-none fixed inset-0 -z-20'>
				<div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(9,93,255,0.25),transparent_40%)]' />
				<div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(191,9,255,0.2),transparent_45%)]' />
			</div>

			<ParallaxBackground />

			<Header />

			<main className='relative z-10'>
				<Hero />
				<ClientsStrip />
				<Services />
				<Testimonials />
				<CaseStudies />
				<Technology />
				<Features />
				<Contact />
			</main>

			<Footer />
		</div>
	);
}
