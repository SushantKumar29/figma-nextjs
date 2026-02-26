import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
	variable: "--font-sora",
	subsets: ["latin"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Parallax Scroll Landing",
	description: "Parallax scroll landing page built from Figma.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				suppressHydrationWarning
				className={`${sora.variable} ${inter.variable} antialiased bg-[#151A2C] text-white`}
			>
				{children}
			</body>
		</html>
	);
}
