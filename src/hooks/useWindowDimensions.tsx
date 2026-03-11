import { useEffect, useState } from "react";

interface WindowDimensions {
	width: number;
	height: number;
	isMobile: boolean;
}

const MOBILE_BREAKPOINT = 768;

export function useWindowDimensions(): WindowDimensions {
	const [dimensions, setDimensions] = useState<WindowDimensions>({
		width: 0,
		height: 0,
		isMobile: false,
	});

	useEffect(() => {
		function handleResize() {
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
				isMobile: window.innerWidth < MOBILE_BREAKPOINT,
			});
		}

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return dimensions;
}
