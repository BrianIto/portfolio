import { useEffect } from "react";
import { useWindowDimensions } from "./useWindowDimensions";

const useCustomCursor = () => {
	const { isMobile } = useWindowDimensions();
	useEffect(() => {
		if (isMobile) return;

		const style = document.createElement("style");
		style.id = "retro-cursor-style";
		style.textContent = `
      * { cursor: none !important; }
      #retro-cursor-outer {
        position: fixed;
        width: 26px; height: 26px;
        border: 1.5px solid rgba(255,255,255,0.55);
        pointer-events: none;
        z-index: 999999;
        transform: translate(-50%, -50%);
        transition: width 0.18s ease, height 0.18s ease, border-color 0.18s ease, background 0.18s ease;
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
        transform: translate(-50%, -50%);
        box-shadow: 0 0 6px rgba(255,255,255,0.5);
      }
    `;
		document.head.appendChild(style);

		const outer = document.createElement("div");
		outer.id = "retro-cursor-outer";
		const inner = document.createElement("div");
		inner.id = "retro-cursor-inner";
		document.body.appendChild(outer);
		document.body.appendChild(inner);

		let mouseX = -100,
			mouseY = -100;
		let outerX = -100,
			outerY = -100;

		const onMove = (e) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
			inner.style.left = mouseX + "px";
			inner.style.top = mouseY + "px";

			const el = document.elementFromPoint(mouseX, mouseY);
			const isInteractive =
				el &&
				(el.closest("a") ||
					el.closest("button") ||
					el.closest("input") ||
					el.closest("textarea"));
			if (isInteractive) {
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

		let raf: number | undefined;
		const animate = () => {
			outerX += (mouseX - outerX) * 0.75;
			outerY += (mouseY - outerY) * 0.13;
			outer.style.left = outerX + "px";
			outer.style.top = outerY + "px";
			raf = requestAnimationFrame(animate);
		};
		window.addEventListener("mousemove", onMove);
		animate();

		return () => {
			window.removeEventListener("mousemove", onMove);
			cancelAnimationFrame(raf);
			document.getElementById("retro-cursor-style")?.remove();
			document.getElementById("retro-cursor-outer")?.remove();
			document.getElementById("retro-cursor-inner")?.remove();
		};
	}, [isMobile]);
};

export default useCustomCursor;
