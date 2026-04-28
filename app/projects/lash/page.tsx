"use client";

import {
	applyNodeChanges,
	Background,
	type Node,
	type OnNodesChange,
	ReactFlow,
} from "@xyflow/react";
import { useCallback, useRef, useState } from "react";
import "@xyflow/react/dist/style.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { motion } from "motion/react";
import useToggleableCursor from "@/hooks/useToggleableCursor";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import DynamicIsland from "../../components/DynamicIsland";
import Footer from "../../components/Footer";
import Grid from "../../components/Grid";
import LashLogo from "../../components/icons/LashLogo";
import { JustifiedText } from "../../components/JustifiedText";
import { ScrollContext } from "../../context/ScrollContext";

const LashPage: React.FC = () => {
	useToggleableCursor();
	const initialNodes = [
		{
			id: "solana",
			position: { x: 0, y: 0 },
			data: { label: "Solana Blockchain" },
		},
		{
			id: "rpcs",
			position: { x: 0, y: 50 },
			data: { label: "Bare Metal/RPCs" },
		},
		{
			id: "go",
			position: { x: 0, y: 100 },
			data: { label: "Backend" },
		},
		{
			id: "rest-api",
			position: { x: -100, y: 180 },
			data: { label: "Next.js" },
		},
		{
			id: "trading-view",
			position: { x: 90, y: 180 },
			data: { label: "TradingView" },
		},

		{
			id: "d3",
			position: { x: 40, y: 240 },
			data: { label: "D3.js" },
		},
	];

	const initialEdges = [
		{
			id: "e1-1",
			source: "solana",
			target: "rpcs",
		},
		{
			id: "e4-3",
			source: "d3",
			target: "rest-api",
		},
		{
			id: "e1-2",
			source: "rpcs",
			target: "go",
			style: {},
		},

		{
			id: "e1-3",
			source: "go",
			target: "rest-api",
			style: {},
		},
		{
			id: "e2-4",
			source: "go",
			target: "trading-view",
		},
		{
			id: "e2-5",
			source: "trading-view",
			target: "rest-api",
		},
		{
			id: "e3-4",
			source: "websocket",
			target: "rest-api",
		},
	];

	const [nodes, setNodes] = useState<Node[]>(initialNodes);
	const [edges, setEdges] = useState(initialEdges);
	const onNodesChange: OnNodesChange = useCallback(
		(changes) =>
			setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
		[],
	);

	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

	const scrollSmootherRef = useRef<ScrollSmoother>(null);

	const { height, isMobile } = useWindowDimensions();
	const [gridHeight, setGridHeight] = useState(0);

	useGSAP(() => {
		scrollSmootherRef.current = ScrollSmoother.create({
			smooth: 0.8,
			effects: true,
			smoothTouch: 0.1,
			onUpdate: (self) => setGridHeight(self.scrollTop() + height),
		});
	}, [height]);

	useGSAP(() => {
		const split = SplitText.create(".animated-text", {
			type: "chars",
		});

		const masterTimeline = gsap.timeline();

		// First animate the split text
		masterTimeline.from(split.chars, {
			duration: 0.6,
			y: 2,
			scale: 0.9,
			autoAlpha: 0,
			stagger: 0.04,
			ease: "circ.out",
		});

		// Then set up scroll triggers for sections after split text completes
		masterTimeline.add(() => {
			gsap.utils.toArray<HTMLElement>(".section").forEach((section) => {
				gsap.to(section, {
					opacity: 1,
					x: 0,
					duration: 0.7,
					ease: "power2.out",
					scrollTrigger: {
						trigger: section,
						start: "top 80%",
						toggleActions: "play none none reverse",
					},
				});
			});
		}, ">-0.3");
	}, []);

	return (
		<ScrollContext.Provider
			value={{
				scrollSmootherRef,
				currentSection: null,
				setCurrentSection: () => {},
			}}
		>
			<DynamicIsland />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<div className="flex flex-col items-center">
						<Grid height={gridHeight} />
						<div className="mt-24 px-10 lg:px-0 max-w-[940px] w-full">
							<div className="flex flex-col gap-3 items-center mb-6">
								<motion.div
									initial={{
										scale: 0.9,
										opacity: 0,
									}}
									animate={{
										scale: 1,
										opacity: 1,
									}}
									transition={{
										duration: 0.5,
										ease: "backIn",
									}}
								>
									<LashLogo className="w-36" />
								</motion.div>
								<h1 className="animated-text font-display tracking-tighter relative font-medium text-[40px] lg:text-[56px]">
									Project Study Case
								</h1>
								<motion.div
									initial={{
										scaleX: 0,
									}}
									animate={{
										scaleX: 1,
									}}
									transition={{
										delay: 0.3,
									}}
									className="h-px w-36 bg-white/20 my-3"
								></motion.div>
							</div>
							<div className="section opacity-0">
								<h1 className="font-display tracking-tighter text-[44px] mb-2">
									The Problem
								</h1>
								<JustifiedText className="font-sans">
									DEX Platforms in Solana environment are scarse and some tools
									were scattered around the ecosystem (monitors, trading bots,
									wallet trackers, etc.). With Axiom Trade as main competitor.
									Solana DEXs also have overheading UIs with so overwhelming
									information. Lash comes to solve this problem by providing a
									intuitive, data-friendly, without losing any functionality,
									and with a great UX.
								</JustifiedText>
							</div>

							<div className="mt-8 section opacity-0">
								<h1 className="font-display tracking-tighter mb-2 text-[44px]">
									The Proposal
								</h1>
								<p className="font-sans">
									<JustifiedText>
										An complete Solana DEX Platform with all it's core
										functionalities (wallet tracking, trading, monitoring, etc.)
										with a great UX and performance, with a data-friendly
										interface that can be used by both beginners and experts in
										the crypto world.
									</JustifiedText>
									<div className="mt-4 flex md:flex-row flex-col items-center lg:items-start gap-4 md:gap-12 justify-center py-2 ">
										<div className="flex-1 max-w-[380px]">
											<JustifiedText>
												<b>Great UI/UX + Faster Transactions</b> → To overcome
												competitors, it should be a leader in what it already
												does the best: trading experience. One of the most
												important things is about performance and seamless
												usability of the platform.{" "}
											</JustifiedText>
										</div>

										<div className="flex-1 max-w-[380px]">
											<JustifiedText>
												<b>Social Layer</b> → Much traders in Solana DEXes are
												there not just for profit, but also for fun. And its
												even more interesting with friends. Lash can allow users
												to create private and public groups and monetize them if
												they want. Heavily inspired by Discord.
											</JustifiedText>
										</div>
									</div>
								</p>
							</div>

							<div className="mt-8 section opacity-0">
								<h1 className="font-display tracking-tighter mb-2 text-[44px]">
									The Architecture
								</h1>
								<JustifiedText className="font-sans">
									This project needs to have a clean design and be very
									interactible. <b>Next.js was a no-brainer choice</b> for the
									frontend because of it's performance under heavy-loads, good
									DX and great ecosystem for animations/transitions. It's
									Integration and granular response for performance (like SSRC),
									Memoization, easiness to Debug and React Server Components are
									a great fit for this project needs.
								</JustifiedText>
								<div className="flex flex-col mb-6 md:mb-0 md:grid md:grid-cols-2">
									<motion.div
										animate={{
											opacity: 1,
											x: 0,
											scale: 0.98,
										}}
										initial={{
											opacity: 0,
											x: -10,
											scale: 1,
										}}
										transition={{
											delay: 0.25,
										}}
										className=" relative h-[500px] "
									>
										<div className="absolute px-12 top-0 z-[999] shadow-[inset_0_0_2em_3em_var(--color-background)] left-0 w-full h-full flex items-center justify-center pointer-events-none"></div>
										<ReactFlow
											nodes={nodes}
											edges={edges}
											colorMode="dark"
											minZoom={1.125}
											maxZoom={1.125}
											translateExtent={[
												[-200, -200],
												[400, 500],
											]}
											defaultEdgeOptions={{
												animated: true,
											}}
											style={{
												background: "var(--color-background)",
											}}
											className="nowheel"
											onNodesChange={onNodesChange}
											fitView
										>
											<Background bgColor="transparent" color="#FFFFFF22" />
										</ReactFlow>
										<style>{`.react-flow__attribution { display: none !important; }`}</style>
									</motion.div>
									<div className="mt-12 flex flex-col gap-3 font-sans">
										<JustifiedText>
											<b>Next.js</b> as explained before, was a no-brainer
											choice for the frontend because of it's performance under
											heavy-loads, good DX and great ecosystem. We wanted a
											debuggable framework with good performance and granular
											control over rendering and data fetching, and Next.js is
											the best fit for that.
										</JustifiedText>
										<JustifiedText>
											<b>TradingView</b> is the market standard for trading
											charts, with many tools like drawing predictions,
											Fibonacci curves, moving average, and other built-in
											statistic tools. It's a very complete suite with many
											tools and a great performance, so we decided to use it for
											the main view in Trading Section.
										</JustifiedText>
										<JustifiedText>
											<b>D3.js</b> was chosen when TradingView is an overkill.
											We created custom (and performant) charts with D3.js for
											curve previewing, liquidity distribution and other data
											visualizations in Mobile view for simpler interactions.
										</JustifiedText>
									</div>
								</div>
							</div>
							<div className="section opacity-0">
								<h1 className="font-display tracking-tighter text-[44px] mb-2">
									Solution Highlights
								</h1>
								<motion.img
									whileHover={{
										scale: 1.02,
										filter: "grayscale(0)",
									}}
									src="/lash_preview.avif"
									className="rounded-lg  border border-white/20 "
								/>
								<div className="flex flex-col md:grid mt-8 md:grid-cols-[1fr] text-center font-sans gap-8 items-center">
									<div>
										<h2 className="font-display tracking-tighter font-medium text-[28px]">
											Simply beautiful UI with the <i>Wow</i> effect.
										</h2>
										<JustifiedText className="font-sans mt-2">
											No overhead, no chaos, just the information you need, with
											a clean and intuitive design. The UI is designed to be
											data-friendly, with a great UX that can be used by both
											beginners and experts in the crypto world. The realtime
											data updates are designed to be seamless and
											non-intrusive, with and a great performance to provide the
											best experience for users.
										</JustifiedText>
									</div>
									<div></div>
								</div>
								<h2 className="font-display tracking-tighter font-medium text-[28px] mt-8">
									Performance: stable 60 FPS even on heavy-loads and intense
									animations
								</h2>

								<JustifiedText
									className="mt-3 font-sans"
									text="Performance was one of the main focus for this project, and we achieved a stable 60 FPS even on heavy-loads and intense animations. We used Next.js for the frontend because of it's performance under heavy-loads, good DX and great ecosystem. To achieve that we hunted-down re-renders, virtualized lists, moved animations to JS Animation API and used memoization and React performance optimization techniques to make the experience as smooth as possible, even on lower-end devices."
								/>

								<div className="flex flex-col md:grid mt-6 md:grid-cols-[1fr_1.1fr] gap-8 items-center mt-12">
									<div className="w-full lg:w-auto">
										<h2 className="font-display tracking-tighter font-medium text-[28px] ">
											D3.js Charts that are really <i>expressive</i>
										</h2>
										<JustifiedText className="mt-3 font-sans">
											We used D3.js to create custom charts for curve
											previewing, liquidity distribution and other data
											visualizations in Mobile view for simpler interactions.
											These charts are designed to be not just informative, but
											also visually expressive, with smooth animations and
											interactions that make the data come alive and provide
											insights at a glance. The goal was to create charts that
											are not just functional, but also a joy to interact with,
											enhancing the overall user experience on mobile devices.
										</JustifiedText>

										<JustifiedText className="mt-3 font-sans">
											While doing this, we tried simpler libraries like{" "}
											<b>Recharts</b>, but we found that they were not
											performant enough to be rendered in a 100 rows list. We
											virtualized and then went straight to D3.js with SVG
											rendering, achieving peak stable max FPS.
										</JustifiedText>

										<JustifiedText className="mt-3 font-sans">
											These charts are not just simple for visuals, but they
											also can be pretty interactive. Regressions, timestamps,
											tooltips, Dev Buys, and Sells, user Buys and Sells,
											interactions with the chart to create orders, and more.
											All of this with a great performance and a smooth
											experience.
										</JustifiedText>

										<JustifiedText className="mt-3 font-sans">
											Some charts, as the Mobile Trading chart was inspired by
											some of the top-notch data visualization experts in the
											world, to craft unique expressiveness without losing the
											easiness to scan.
										</JustifiedText>
									</div>
									<motion.img
										src="/lash_mobile.webp"
										whileHover={{
											scale: 1.05,
											filter: "grayscale(0)",
										}}
										className="rounded-lg grayscale duration-200 "
									/>
								</div>
							</div>
							<div className="mt-8 section opacity-0">
								<h1 className="font-display tracking-tighter text-[44px] mb-2">
									Future Improvements
								</h1>
								<div className="font-sans">
									<JustifiedText>
										This project is still in development, and there are many
										features that we want to add in the future based on user
										feedback and requests. The launch will be very soon and
										we're eager to see users feedbacks, intenses tradings and
										many interactions between traders/degens. This is not just a
										DEX Platform, it's a place where enthusiasts can gather,
										share their ideas, and have fun trading together.
									</JustifiedText>
									<p className="font-bold my-8">Long live to the Web3!</p>
								</div>
							</div>
						</div>
					</div>
					<Footer />
				</div>
			</div>
		</ScrollContext.Provider>
	);
};

export default LashPage;
