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
import { useCallback, useRef, useState } from "react";
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

export default function Home() {
	const { height, isMobile } = useWindowDimensions();

	const { isEnabled, toggleCursor } = useToggleableCursor();

	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

	const scrollSmootherRef = useRef<ScrollSmoother>(null);

	const [gridHeight, setGridHeight] = useState(0);
	const [currentSection, setCurrentSection] = useState<SectionInfo | null>({
		name: "Homepage",
		icon: RiHome2Line,
	});

	useGSAP(() => {
		scrollSmootherRef.current = ScrollSmoother.create({
			smooth: 0.8,
			effects: true,
			smoothTouch: 0.1,
			onUpdate: (self) => setGridHeight(self.scrollTop() + height),
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
				onEnter: () => setCurrentSection({ name: section.name, icon: section.icon }),
				onEnterBack: () =>
					setCurrentSection({ name: section.name, icon: section.icon }),
			});
		});
	}, [height]);

	const onClickPrimary = useCallback(() => {
		scrollSmootherRef.current?.scrollTo("#contact-section", true, "top 100px");
	}, [scrollSmootherRef.current]);

	const onClickSecondary = useCallback(() => {
		scrollSmootherRef.current?.scrollTo("#stack-section", true, "top 100px");
	}, [scrollSmootherRef.current]);

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
