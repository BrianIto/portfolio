import { useGSAP } from "@gsap/react";
import { RiArrowDownLine } from "@remixicon/react";
import gsap from "gsap";
import { motion } from "motion/react";
import { useRef } from "react";
import FrontendStack from "../FrontendStack";
import Angular from "../icons/Angular";
import NextJSIcon from "../icons/Nextjs";
import OneRing from "../icons/OneRing";
import React from "../icons/React";
import Storybook from "../icons/Storybook";
import Svelte from "../icons/Svelte";
import TailwindCSS from "../icons/Tailwindcss";

const StackSection: React.FC = () => {
	const orbitContainer = useRef<HTMLDivElement>(null);

	gsap.registerPlugin(useGSAP);

	const tween = useRef<gsap.core.Tween>(null);

	useGSAP(() => {
		gsap.to(".one-ring", {
			scale: 1.06,
			rotate: -12,
			yoyo: true,
			repeat: -1,
			ease: "power2.inOut",
			duration: 1.5,
		});

		tween.current = gsap.to(".rotate-element", {
			rotate: 360,
			duration: 60,
			ease: "linear",
			repeat: -1,
		});
	});

	return (
		<div
			id="stack-section"
			className="md:max-w-[700px] lg:max-w-[940px] mt-12 flex items-center flex-col"
		>
			<h1 className="font-display text-wrap md:w-fit text-center flex gap-x-2 justify-center max-w-[90vw] flex-wrap md:text-left relative tracking-tighter text-[#999] text-[36px] md:text-[44px] lg:text-[60px]">
				Stack for{" "}
				<button className="text-white inline-flex items-center justify-center">
					frontend development &nbsp;{" "}
					<RiArrowDownLine className="size-5 lg:size-9" />
				</button>
				<div className="text-[18px] lg:text-[20px] tracking-tight md:-mt-4 md:-bottom-2.5 text-white md:absolute right-0">
					Click to change
				</div>
			</h1>

			<div className="w-full bg-background flex flex-col-reverse md:grid border border-white/15 mb-10 mt-20 md:grid-cols-[1.18fr_1fr]">
				<div className=" border-r border-white/15">
					<FrontendStack />
				</div>
				<div className="h-full flex border-b md:border-0 border-white/20 py-8 md:py-0 items-center justify-center w-full relative bg-[linear-gradient(0deg,_#161616_0%,_transparent_100%)]">
					{" "}
					<div className="border flex items-center relative justify-center rounded-full size-78 lg:size-102 shadow-[inset_0px_0px_24px_var(--amber-low-opacity)] border-amber/20 text-amber">
						<div
							ref={orbitContainer}
							onMouseEnter={() => {
								tween.current?.timeScale(5);
							}}
							onMouseLeave={() => {
								tween.current?.timeScale(1);
							}}
							className="border flex items-center relative justify-center rounded-full lg:size-72 size-60 shadow-[inset_0px_0px_24px_var(--amber-low-opacity)] border-amber/20 text-amber"
						>
							<div
								className="rotate-element absolute inset-0"
								style={{
									transformOrigin: "center center",
								}}
							>
								<div className="absolute -top-4 left-1/2 -translate-x-1/2">
									<Angular className="size-8" />
								</div>
								<div className="absolute top-15 left-5 -translate-x-1/2">
									<NextJSIcon className="size-8" />
								</div>

								<div className="absolute top-15 -right-2 -translate-x-1/2">
									<Svelte className="size-8" />
								</div>
								<div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
									<Storybook className="size-8" />
								</div>
								<div className="absolute bottom-15 left-5 -translate-x-1/2">
									<TailwindCSS className="size-8" />
								</div>
								<div className="absolute bottom-15 -right-2 -translate-x-1/2">
									<React className="size-8" />
								</div>
							</div>
							<motion.div className="one-ring ">
								<OneRing className="size-56 lg:size-72" />
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StackSection;
