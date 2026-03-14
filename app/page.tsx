"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useRef, useState } from "react";
import useCustomCursor from "@/hooks/useCustomCursor";
import useToggleableCursor from "@/hooks/useToggleableCursor";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import DisableCursor from "./components/DisableCursor";
import DynamicIsland from "./components/DynamicIsland";
import Grid from "./components/Grid";
import ContactSection from "./components/sections/ContactSection";
import HeroSection from "./components/sections/HeroSection";
import PricingSection from "./components/sections/PricingSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import StackSection from "./components/sections/StackSection";
import { ScrollContext } from "./context/ScrollContext";
export default function Home() {
	const { height, isMobile } = useWindowDimensions();

	const { isEnabled, toggleCursor } = useToggleableCursor();

	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

	const scrollSmootherRef = useRef<ScrollSmoother>(null);

	const [gridHeight, setGridHeight] = useState(0);
	useGSAP(() => {
		scrollSmootherRef.current = ScrollSmoother.create({
			smooth: 0.8,
			effects: true,
			smoothTouch: 0.1,
			onUpdate: (self) => setGridHeight(self.scrollTop() + height),
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
			<ScrollContext.Provider value={{ scrollSmootherRef }}>
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
							<PricingSection />
							<ContactSection />
						</div>
					</div>
				</div>
			</ScrollContext.Provider>
			{!isMobile && (
				<DisableCursor enabled={isEnabled} onToggle={toggleCursor} />
			)}
		</>
	);
}
