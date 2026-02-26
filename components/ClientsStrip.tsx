"use client";

import { useMemo } from "react";
import { ClientLogo } from "@/components/icons/ClientLogo";

const ASSET_BASE = "/figma/parallax-scroll";

export function ClientsStrip() {
	const logos = useMemo(
		() => [
			`${ASSET_BASE}/frame-34991-2014-4519.svg`,
			`${ASSET_BASE}/frame-34991-2014-4523.svg`,
			`${ASSET_BASE}/frame-34992-2014-4526.svg`,
			`${ASSET_BASE}/frame-34991-2014-4529.svg`,
			`${ASSET_BASE}/frame-34991-2014-4532.svg`,
			`${ASSET_BASE}/frame-34991-2014-4535.svg`,
			`${ASSET_BASE}/frame-34993-2014-4538.svg`,
		],
		[],
	);

	return (
		<section className='w-full px-20 py-11'>
			<div className='mx-auto w-full max-w-7xl'>
				<div className='h-px w-full bg-white/10' />
				<div className='flex items-center justify-between gap-4.5 py-6'>
					{logos.map((src, i) => (
						<ClientLogo key={src} src={src} alt={`Client logo ${i + 1}`} />
					))}
				</div>
				<div className='h-px w-full bg-white/10' />
			</div>
		</section>
	);
}
