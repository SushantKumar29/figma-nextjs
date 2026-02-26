interface ClientLogoProps {
	src: string;
	alt: string;
}

export function ClientLogo({ src, alt }: ClientLogoProps) {
	return <img src={src} alt={alt} />;
}
