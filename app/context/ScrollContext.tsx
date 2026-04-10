"use client";

import type { ScrollSmoother } from "gsap/ScrollSmoother";
import { createContext, useContext, type RefObject } from "react";

export interface SectionInfo {
	name: string;
	icon: React.ComponentType<any>;
}

interface ScrollContextType {
	scrollSmootherRef: RefObject<ScrollSmoother | null>;
	currentSection: SectionInfo | null;
	setCurrentSection: (section: SectionInfo | null) => void;
}

export const ScrollContext = createContext<ScrollContextType | null>(null);

export const useScroll = () => {
	const context = useContext(ScrollContext);
	if (!context) {
		throw new Error("useScroll must be used within ScrollProvider");
	}
	return context;
};
