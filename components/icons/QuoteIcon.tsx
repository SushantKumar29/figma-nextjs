export function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			aria-hidden='true'
			{...props}
		>
			<path
				d='M10.2 11.6C8.9 12.5 8 13.8 8 16v2H4v-2c0-2.9 1.2-5.2 3.6-6.9L10.2 11.6Z'
				fill='currentColor'
				opacity='0.9'
			/>
			<path
				d='M20.2 11.6C18.9 12.5 18 13.8 18 16v2h-4v-2c0-2.9 1.2-5.2 3.6-6.9l2.6 2.5Z'
				fill='currentColor'
				opacity='0.9'
			/>
		</svg>
	);
}
