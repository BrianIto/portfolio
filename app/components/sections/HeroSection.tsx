import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";
import HeroButtons from "../HeroButtons";
import FullLogo from "../icons/FullLogo";
import TagMarquee from "../TagMarquee";

const areas = [
	"Frontend Development",
	"Data visualization",
	"UI/UX Design",
	"Interaction Design",
	"Web3 Development",
	"Scalable Backends",
	"Software Architecture",
];

interface Props {
	onClickPrimary?: () => void;
	onClickSecondary?: () => void;
}

const HeroSection: React.FC<Props> = ({
	onClickPrimary = () => {},
	onClickSecondary = () => {},
}) => {
	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(SplitText);
	gsap.registerPlugin(DrawSVGPlugin);

	useGSAP(() => {
		const split = SplitText.create(".animated-text", {
			type: "chars",
		});

		gsap.from(".dynamic-island", {
			duration: 1,
			y: 4,
			scaleX: 0,
			opacity: 0,
			ease: "elastic.inOut",
		});

		gsap.from(".rotate", {
			duration: 20,
			rotate: 360,
			repeat: -1,
			ease: "none",
		});

		gsap.from(".rotate", {
			duration: 5,
			autoAlpha: 0,
			delay: 0.3,
		});

		const tl = gsap.timeline();

		tl.from(split.chars, {
			duration: 0.2,
			y: 2,
			scale: 0.83,
			autoAlpha: 0,
			stagger: 0.05,
			ease: "circ.out",
		});
		tl.from(
			".button",
			{
				duration: 0.4,
				y: 4,
				autoAlpha: 0,
				stagger: 0.2,
				ease: "power2.in",
			},
			"<0.7",
		);
		tl.from(
			".marquee-container",
			{
				duration: 0.45,
				y: 4,
				autoAlpha: 0,
				ease: "power2.in",
			},
			">-0.1",
		);
		tl.from(
			".logo-path",
			{
				duration: 0.7,
				drawSVG: 0,
				stagger: 0.1,
			},
			">-0.2",
		);
		tl.from(
			".circle-path",
			{
				duration: 0.1,
				scale: 0,
				autoAlpha: 0,
				stagger: 0.1,
			},
			">-0.3",
		);
		tl.from(
			".ai-free",
			{
				duration: 0.3,
				autoAlpha: 0,
			},
			">-0.7",
		);
	});
	return (
		<div className="flex flex-col h-screen items-center relative justify-center gap-3 flex-wrap">
			<div className="w-full flex justify-center -mt-32 mb-2 lg:mb-6">
				<FullLogo width={230} className="mb-4" />
			</div>
			<svg
				className="rotate absolute w-96"
				viewBox="0 0 44 44"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					stroke="rgba(255, 255, 255, 0.2)"
					r="20"
					cx="22"
					cy="22"
					strokeWidth={"0.25"}
					strokeDasharray={"0.8"}
				/>
			</svg>
			<div className="max-w-md md:max-w-lg lg:max-w-3xl ">
				<div className="marquee-container mb-12">
					<TagMarquee areas={areas} />
				</div>

				<div className="text-center">
					<h1 className="animated-text font-display tracking-tighter text-[#8C8C8C] text-[66px] lg:text-[76px] mb-[-37px]">
						Giving life to
					</h1>
					<h1 className="animated-text text-shadow-[0px_12px_88px_rgba(255,255,255,0.25)] font-display tracking-tighter text-[66px] lg:text-[76px]">
						amazing designs.
					</h1>
				</div>
				<HeroButtons
					onClickPrimary={onClickPrimary}
					onClickSecondary={onClickSecondary}
				/>
			</div>
			<div className="ai-free max-w-2xl px-8 text-center absolute bottom-8 text-white/45 text-[14px]">
				this website is completely AI free, not because I don't use, but because
				it showcases what I can do without it. Also, the only libraries used are
				Motion and GSAP.
			</div>
		</div>
	);
};

export default HeroSection;
