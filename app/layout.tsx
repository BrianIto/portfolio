import type { Metadata } from "next";
import { Atkinson_Hyperlegible_Next, Halant } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const atkinsonHyperlegible = Atkinson_Hyperlegible_Next({
	variable: "--font-atkinson",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

const halant = Halant({
	variable: "--font-halant",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

const title = "Brian Ito - Portfolio";
const description =
	"Full-stack developer portfolio. Creating websites and web apps that stand out. React, Next.js, Tailwind CSS, Web3, Node.js, Golang, AWS and more. Let's build something amazing together.";
const images = [{ url: "https://brianito.com/logo_og.avif" }];

export const metadata: Metadata = {
	title,
	description,
	icons: "/Logo.svg",
	openGraph: {
		title,
		description,
		url: "https://brianito.com",
		siteName: title,
		images,
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
		images,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<GoogleAnalytics gaId="G-2PBLVVRXGK" />
			<body
				className={`flex flex-col items-center ${atkinsonHyperlegible.variable} ${halant.variable} antialiased bg-background`}
			>
				{children}
			</body>
		</html>
	);
}
