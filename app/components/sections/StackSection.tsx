import { useGSAP } from "@gsap/react";
import { RiArrowDownLine } from "@remixicon/react";
import gsap from "gsap";
import { motion, useAnimate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import ContainerWithTooltip from "../ContainerWithTooltip";
import Angular from "../icons/Angular";
import NextJSIcon from "../icons/Nextjs";
import OneRing from "../icons/OneRing";
import React from "../icons/React";
import Storybook from "../icons/Storybook";
import Svelte from "../icons/Svelte";
import TailwindCSS from "../icons/Tailwindcss";

const StackSection: React.FC = () => {
	const orbitContainer = useRef<HTMLDivElement>(null);
	const frameworks = [
		{
			icon: Svelte,
			name: "Svelte + SvelteKit",
			definition:
				"is my personal favorite, not so adopted by market right now, but it's very stable, great DX and fast to ship.",
			years: 4,
		},
		{
			name: "Next.js + React",
			icon: NextJSIcon,
			definition:
				"the most adopted framework in the market, with a huge ecosystem and a lot of resources. Plenty of my projects are built with Next.js, including this website and my storybook.",
			years: 6,
		},
		{
			name: "Angular",
			icon: Angular,
			definition:
				"It was many features out of the box, it's a very good choice where opinionated is a good thing, I used it many times in manufacturing web apps.",
			years: 3,
		},
		{
			name: "Storybook",
			icon: Storybook,
			definition:
				"Documentation tool for components, I use it in all my projects to document components and edge cases, and also to test them in isolation.",
			years: 4,
		},
		{
			name: "TailwindCSS",
			icon: TailwindCSS,
			years: 5,
			definition:
				"Utility-first CSS framework, I use it in all my projects to style components, it's very flexible and allows me to create custom designs without writing custom CSS.",
		},
	];

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
			<h1 className="font-display w-fit text-center md:text-left relative tracking-tighter text-[#999] text-[36px] md:text-[44px] lg:text-[60px]">
				Stack for{" "}
				<button className="text-white inline-flex items-center justify-center">
					frontend development &nbsp;{" "}
					<RiArrowDownLine className="size-5 lg:size-9" />
				</button>
				<div className="text-[18px] lg:text-[20px] tracking-tight md:-mt-4 text-white md:absolute right-0">
					Click to change
				</div>
			</h1>

			<div className="w-full bg-background flex flex-col-reverse md:grid border border-white/15 mb-10 mt-20 md:grid-cols-[1.18fr_1fr]">
				<div className=" border-r border-white/15">
					<div className="flex flex-col gap-5 p-8">
						<h2 className="font-display tracking-tight font-medium text-[30px]">
							One dev to{" "}
							<ContainerWithTooltip
								className="inline-flex items-center gap-1"
								tooltipLabel={
									<>
										<p>
											<span className="opacity-70">
												This is a reference for famous quote from Lord of the
												Rings, "One Ring to rule them all, One Ring to find
												them, One Ring to bring them all and in the darkness
												bind them", from J.R.R. Tolkien.
											</span>
										</p>
									</>
								}
							>
								<span className="font-semibold">rule them all</span>
							</ContainerWithTooltip>
						</h2>
						<p className="font-sans">
							I craft well-written, useful and documented components in any
							JavaScript Front-end Framework, from Vanilla Javascript to SSR
							Next.js and SvelteKit. But don't believe my words, believe my code
							by checking this website repository and storybook.
						</p>
					</div>
					{frameworks.map((framework, i) => (
						<motion.div
							key={framework.name}
							initial={{
								opacity: 0,
								y: 5,
								borderLeft: "0px solid #999",
							}}
							whileInView={{
								opacity: 1,
								y: 0,
							}}
							transition={{
								delay: 0.1 + i * 0.05,
							}}
							className="border-t flex border-white/15 py-4 px-8 text-[18px]"
						>
							<ContainerWithTooltip
								margin={8}
								tooltipLabel={
									<div>
										<p className="flex flex-col font-sans font-semibold text-[13px]">
											<span className="flex-1">{framework.name}</span>
											<span className="opacity-70">
												{framework.years}y exp.
											</span>
										</p>
										<p className="mt-1">{framework.definition}</p>
									</div>
								}
								position="right"
								tooltipClass="max-w-[250px]"
							>
								<motion.div className="flex gap-[20px] ">
									<framework.icon /> {framework.name}
								</motion.div>
							</ContainerWithTooltip>
						</motion.div>
					))}
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
