import { useEffect, useState } from "react";
import { useWindowDimensions } from "./useWindowDimensions";

/**
 * Hook that provides a custom cursor with the ability to toggle it on/off
 * @param initialEnabled - Whether the custom cursor should be enabled by default (default: true)
 * @returns Object with isEnabled state and toggleCursor/enableCursor/disableCursor functions
 */
const useToggleableCursor = (initialEnabled: boolean = true) => {
	const { isMobile } = useWindowDimensions();
	const [isEnabled, setIsEnabled] = useState(initialEnabled);

	useEffect(() => {
		// Don't show custom cursor on mobile or if disabled
		if (isMobile || !isEnabled) return;

		const style = document.createElement("style");
		style.id = "retro-cursor-style";
		style.textContent = `
      * { cursor: none !important; }
      #retro-cursor-outer {
        position: fixed;
        width: 40px; height: 40px;
        border: 1.5px solid rgba(255,255,255,0.55);
        pointer-events: none;
        z-index: 999999;
        left: -100px;
        top: -100px;
        transform: translate(-50%, -50%);
        transition: width 0.18s ease, height 0.18s ease, border-color 0.18s ease, background 0.18s ease;
        will-change: left, top;
      }
      #retro-cursor-outer::before, #retro-cursor-outer::after {
        content: '';
        position: absolute;
        background: rgba(255,255,255,0.4);
      }
      #retro-cursor-outer::before {
        top: 50%; left: -5px;
        width: 4px; height: 1px;
        transform: translateY(-50%);
      }
      #retro-cursor-outer::after {
        left: 50%; top: -5px;
        height: 4px; width: 1px;
        transform: translateX(-50%);
      }
      #retro-cursor-inner {
        position: fixed;
        width: 5px; height: 5px;
        background: rgba(255,255,255,0.9);
        pointer-events: none;
        z-index: 999999;
        left: -100px;
        top: -100px;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 6px rgba(255,255,255,0.5);
        will-change: left, top;
      }
    `;
		document.head.appendChild(style);

		const outer = document.createElement("div");
		outer.id = "retro-cursor-outer";
		const inner = document.createElement("div");
		inner.id = "retro-cursor-inner";
		document.body.appendChild(outer);
		document.body.appendChild(inner);

		let mouseX = -100;
		let mouseY = -100;
		let outerX = -100;
		let outerY = -100;
		let hasPointerPosition = false;
		let isOverInteractive = false;
		let positionDirty = true;

		const applyCursorTheme = (interactive: boolean) => {
			if (interactive === isOverInteractive) return;
			isOverInteractive = interactive;

			if (interactive) {
				outer.style.width = "38px";
				outer.style.height = "38px";
				outer.style.borderColor = "#FFBA5AAA";
				outer.style.background = "#FFBA5A33";
				inner.style.background = "#FFBA5A";
				inner.style.boxShadow = "0 0 6px #FFBA5A66";
			} else {
				outer.style.width = "40px";
				outer.style.height = "40px";
				outer.style.borderColor = "rgba(255,255,255,0.55)";
				outer.style.background = "transparent";
				inner.style.background = "rgba(255,255,255,0.9)";
				inner.style.boxShadow = "0 0 6px rgba(255,255,255,0.5)";
			}
		};

		const onMove = (e: MouseEvent) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
			if (!hasPointerPosition) {
				outerX = mouseX;
				outerY = mouseY;
				hasPointerPosition = true;
			}
			positionDirty = true;

			const target = e.target instanceof Element ? e.target : null;
			applyCursorTheme(
				Boolean(
					target?.closest("a, button, input, textarea, select, [role='button']"),
				),
			);
		};

		let raf: number | undefined;
		const animate = () => {
			if (hasPointerPosition) {
				if (positionDirty) {
					inner.style.left = `${mouseX}px`;
					inner.style.top = `${mouseY}px`;
					positionDirty = false;
				}

				outerX += (mouseX - outerX) * 0.42;
				outerY += (mouseY - outerY) * 0.42;
				outer.style.left = `${outerX}px`;
				outer.style.top = `${outerY}px`;
			}
			raf = requestAnimationFrame(animate);
		};
		window.addEventListener("mousemove", onMove, { passive: true });
		animate();

		return () => {
			window.removeEventListener("mousemove", onMove);
			if (raf !== undefined) cancelAnimationFrame(raf);
			document.getElementById("retro-cursor-style")?.remove();
			document.getElementById("retro-cursor-outer")?.remove();
			document.getElementById("retro-cursor-inner")?.remove();
		};
	}, [isMobile, isEnabled]);

	return {
		isEnabled,
		toggleCursor: () => setIsEnabled((prev) => !prev),
		enableCursor: () => setIsEnabled(true),
		disableCursor: () => setIsEnabled(false),
	};
};

export default useToggleableCursor;
