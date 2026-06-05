"use client";

import { useGSAP } from "@gsap/react";
import {
	RiComputerLine,
	RiHome2Line,
	RiMoneyDollarCircleLine,
	RiPhoneLine,
	RiStarSmileLine,
} from "@remixicon/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect, useRef, useState } from "react";
import useToggleableCursor from "@/hooks/useToggleableCursor";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import DisableCursor from "./components/DisableCursor";
import DynamicIsland from "./components/DynamicIsland";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import ContactSection from "./components/sections/ContactSection";
import HeroSection from "./components/sections/HeroSection";
import PricingSection from "./components/sections/PricingSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import StackSection from "./components/sections/StackSection";
import { ScrollContext, type SectionInfo } from "./context/ScrollContext";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function Home() {
	const { height, isMobile } = useWindowDimensions();

	const { isEnabled, toggleCursor } = useToggleableCursor();

	const scrollSmootherRef = useRef<ScrollSmoother>(null);

	const [gridHeight, setGridHeight] = useState(0);
	const [currentSection, setCurrentSection] = useState<SectionInfo | null>({
		name: "Homepage",
		icon: RiHome2Line,
	});

	useGSAP(
		() => {
			scrollSmootherRef.current = ScrollSmoother.create({
				smooth: isMobile ? 0 : 0.8,
				effects: !isMobile,
				smoothTouch: 0,
			});

			// Define sections with their info
			const sections = [
				{ id: "#hero-section", name: "Homepage", icon: RiHome2Line },
				{ id: "#stack-section", name: "Stack for", icon: RiComputerLine },
				{
					id: "#projects-section",
					name: "Featured Projects",
					icon: RiStarSmileLine,
				},
				{ id: "#pricing-section", name: "Pricing", icon: RiMoneyDollarCircleLine },
				{ id: "#contact-section", name: "Contact", icon: RiPhoneLine },
			];

			// Create ScrollTrigger for each section
			sections.forEach((section) => {
				ScrollTrigger.create({
					trigger: section.id,
					start: "top 150px",
					end: "bottom 150px",
					onEnter: () =>
						setCurrentSection({ name: section.name, icon: section.icon }),
					onEnterBack: () =>
						setCurrentSection({ name: section.name, icon: section.icon }),
				});
			});

			return () => {
				scrollSmootherRef.current?.kill();
				scrollSmootherRef.current = null;
			};
		},
		{ dependencies: [isMobile] },
	);

	useEffect(() => {
		let raf = 0;
		const content = document.getElementById("smooth-content");

		const updateGridHeight = () => {
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(() => {
				const nextHeight = Math.max(
					content?.scrollHeight ?? 0,
					document.documentElement.scrollHeight,
					height,
				);
				setGridHeight((previous) =>
					Math.abs(previous - nextHeight) > 8 ? nextHeight : previous,
				);
			});
		};

		updateGridHeight();
		const resizeObserver = content ? new ResizeObserver(updateGridHeight) : null;
		if (content) resizeObserver?.observe(content);
		window.addEventListener("resize", updateGridHeight, { passive: true });
		ScrollTrigger.addEventListener("refresh", updateGridHeight);

		return () => {
			cancelAnimationFrame(raf);
			resizeObserver?.disconnect();
			window.removeEventListener("resize", updateGridHeight);
			ScrollTrigger.removeEventListener("refresh", updateGridHeight);
		};
	}, [height]);

	const onClickPrimary = useCallback(() => {
		scrollSmootherRef.current?.scrollTo("#contact-section", true, "top 100px");
	}, []);

	const onClickSecondary = useCallback(() => {
		scrollSmootherRef.current?.scrollTo("#stack-section", true, "top 100px");
	}, []);

	return (
		<>
			<ScrollContext.Provider
				value={{ scrollSmootherRef, currentSection, setCurrentSection }}
			>
				<DynamicIsland />
				<div id="smooth-wrapper">
					<div id="smooth-content">
						<div className="flex flex-col items-center">
							<Grid height={gridHeight} />
							<HeroSection
								onClickPrimary={onClickPrimary}
								onClickSecondary={onClickSecondary}
							/>
							<StackSection />
							<ProjectsSection />
							<PricingSection onClickPrice={onClickPrimary} />
							<ContactSection />
						</div>
						<Footer />
					</div>
				</div>
			</ScrollContext.Provider>
			{!isMobile && (
				<DisableCursor enabled={isEnabled} onToggle={toggleCursor} />
			)}
		</>
	);
}
