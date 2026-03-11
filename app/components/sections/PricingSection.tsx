import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { motion } from "motion/react";
import { useRef } from "react";

const PricingSection: React.FC = () => {
	const methods = [
		{
			type: "Daily",
			price: 150,
			title: "for any task.",
			bullets: [
				"corresponding to a 8h journey.",
				"tracked with a 15 min done showcase.",
				"can often do majority of simple tasks and updates.",
				"60% upfront, 40% in the end of the journey.",
				"perfect for listed tasks.",
				"if task finished before 8h, I give the corresponding amount of the money back, max of 35%.",
				"I accept crypto (USDC, USD1) with a 5% discount.",
			],
		},
		{
			type: "Monthly",
			price: 3000,
			title: "to make your project live.",
			bullets: [
				"48h window for any task deliver.",
				"in case of sickness, your corresponding money goes back.",
				"perfect for launching projects.",
				"40% upfront, 60% in the end of the journey.",
				"Can work with teams without any problem.",
				"If nothing is to be done and there's still time left, I give you back the pay for the corresponding time amount, max 35% back.",
				"I accept crypto (USDC, USD1) with a 5% discount.",
			],
		},
	];

	gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

	const title = useRef<HTMLHeadingElement>(null);
	useGSAP(() => {
		const letters = SplitText.create(title.current, {
			type: "chars",
		});

		gsap.from(letters.chars, {
			scrollTrigger: {
				trigger: title.current,
				toggleActions: "restart none none none",
			},
			opacity: 0,
			duration: 0.35,
			stagger: 0.05,
		});

		gsap.from(".pricing-el", {
			scrollTrigger: {
				trigger: title.current,
				toggleActions: "restart none none none",
			},
			opacity: 0,
			duration: 1,
			stagger: 0.45,
		});
	});

	return (
		<div className="w-[950px]">
			<h1
				ref={title}
				className="w-full text-[62px] mt-12 font-display tracking-tighter text-left"
			>
				Pricing
			</h1>
			<div className="w-full gap-[28px] grid mt-8 grid-cols-[1fr_1.25fr]">
				{methods.map((method, index) => (
					<motion.div
						key={index}
						className="pricing-el border flex flex-col gap-3 p-6  justify-center rounded-lg border-white/20"
					>
						<h2 className="font-sans leading-5.5 tracking-tighter text-[19px] font-medium">
							{method.type}
						</h2>

						<p className="font-sans leading-[47px] tracking-tight text-[48px] text-white">
							USD {method.price}
						</p>
						<h2 className="font-sans leading-5.5 tracking-tighter text-[19px] font-medium">
							{method.title}
						</h2>
						<ul className="mt-3 flex flex-col gap-2 text-[#BEBEBE] text-[15px] font-sans">
							{method.bullets.map((bullet, index) => (
								<li key={bullet}>{bullet}</li>
							))}
						</ul>
					</motion.div>
				))}
			</div>
			<div className="mt-8 text-[#CCC] font-display text-[36px] tracking-tighter">
				I am also available{" "}
				<span className="font-medium text-white">for hiring.</span>
			</div>
		</div>
	);
};

export default PricingSection;
