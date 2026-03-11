import { useGSAP } from "@gsap/react";
import { RiArrowDownLine } from "@remixicon/react";
import gsap from "gsap";
import { motion } from "motion/react";
import { useRef } from "react";
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
		},
		{
			name: "Next.js + React",
			icon: NextJSIcon,
		},
		{
			name: "Angular",
			icon: Angular,
		},
		{
			name: "Storybook",
			icon: Storybook,
		},
		{
			name: "TailwindCSS",
			icon: TailwindCSS,
		},
	];

	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
		gsap.to(".one-ring", {
			scale: 1.06,
			rotate: -12,
			yoyo: true,
			repeat: -1,
			ease: "power2.inOut",
			duration: 1.5,
		});
	});

	return (
		<div className="max-w-[940px] mt-12 flex items-center flex-col">
			<h1 className="font-display w-fit relative tracking-tighter text-[#999] text-[60px]">
				Stack for{" "}
				<button className="text-white inline-flex items-center justify-center">
					frontend development &nbsp; <RiArrowDownLine className="size-9" />
				</button>
				<div className="text-[20px] tracking-tight -mt-4 text-white absolute right-0">
					Click to change
				</div>
			</h1>

			<div className="w-full grid border border-white/15 mb-10 mt-20 grid-cols-[1.18fr_1fr]">
				<div className=" border-r border-white/15">
					<div className="flex flex-col gap-5 p-8">
						<h2 className="font-display tracking-tight font-medium text-[30px]">
							One dev to <span className="font-semibold">rule them all</span>
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
							<motion.div className="flex gap-[20px]">
								<framework.icon /> {framework.name}
							</motion.div>
						</motion.div>
					))}
				</div>
				<div className="h-full flex items-center justify-center w-full relative bg-[linear-gradient(0deg,_#161616_0%,_transparent_100%)]">
					{" "}
					<div className="border flex items-center relative justify-center rounded-full w-102 h-102 shadow-[inset_0px_0px_24px_var(--amber-low-opacity)] border-amber/20 text-amber">
						<div
							ref={orbitContainer}
							className="border flex items-center relative justify-center rounded-full w-72 h-72 shadow-[inset_0px_0px_24px_var(--amber-low-opacity)] border-amber/20 text-amber"
						>
							<motion.div
								className="absolute inset-0"
								animate={{
									rotate: 360,
								}}
								transition={{
									duration: 60,
									repeat: Infinity,
									ease: "linear",
								}}
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
							</motion.div>
							<motion.div className="one-ring">
								<OneRing />
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StackSection;
