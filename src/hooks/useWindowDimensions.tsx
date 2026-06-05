import { useEffect, useState } from "react";

interface WindowDimensions {
	width: number;
	height: number;
	isMobile: boolean;
}

const MOBILE_BREAKPOINT = 768;

const getWindowDimensions = (): WindowDimensions => {
	if (typeof window === "undefined") {
		return { width: 0, height: 0, isMobile: false };
	}

	return {
		width: window.innerWidth,
		height: window.innerHeight,
		isMobile: window.innerWidth < MOBILE_BREAKPOINT,
	};
};

export function useWindowDimensions(): WindowDimensions {
	const [dimensions, setDimensions] = useState<WindowDimensions>(() =>
		getWindowDimensions(),
	);

	useEffect(() => {
		let raf = 0;

		function handleResize() {
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(() => {
				const next = getWindowDimensions();
				setDimensions((previous) =>
					previous.width === next.width &&
					previous.height === next.height &&
					previous.isMobile === next.isMobile
						? previous
						: next,
				);
			});
		}

		handleResize();
		window.addEventListener("resize", handleResize, { passive: true });
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return dimensions;
}
