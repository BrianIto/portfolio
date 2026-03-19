import type { Metadata } from "next";
import { Atkinson_Hyperlegible_Next, Halant } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import DisableCursor from "./components/DisableCursor";
import DynamicIsland from "./components/DynamicIsland";

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

export const metadata: Metadata = {
	title: "Brian Ito - Portfolio",
	description:
		"Full-stack developer portfolio. Creating websites and web apps that stand out. React, Next.js, Tailwind CSS, Web3, Node.js, Golang, AWS and more. Let's build something amazing together.",
	icons: "/Logo.svg",
	openGraph: {
		title: "Brian Ito - Portfolio",
		description:
			"Full-stack developer portfolio. Creating websites and web apps that stand out. React, Next.js, Tailwind CSS, Web3, Node.js, Golang, AWS and more. Let's build something amazing together.",
		url: "https://brianito.com",
		siteName: "Brian Ito - Portfolio",
		images: [
			{
				url: "https://brianito.com/logo_og.avif",
			},
		],
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
