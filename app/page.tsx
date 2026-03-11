"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useState } from "react";
import useCustomCursor from "@/hooks/useCustomCursor";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import Grid from "./components/Grid";
import ContactSection from "./components/sections/ContactSection";
import HeroSection from "./components/sections/HeroSection";
import PricingSection from "./components/sections/PricingSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import StackSection from "./components/sections/StackSection";

export default function Home() {
	const { height } = useWindowDimensions();

	useCustomCursor();

	const onClickPrimary = useCallback(() => {}, []);

	const onClickSecondary = useCallback(() => {}, []);

	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

	const [gridHeight, setGridHeight] = useState(0);
	useGSAP(() => {
		ScrollSmoother.create({
			smooth: 0.8,
			effects: true,
			smoothTouch: 0.1,
			onUpdate: (self) => setGridHeight(self.scrollTop() + height),
		});
	}, [height]);

	return (
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
	);
}
