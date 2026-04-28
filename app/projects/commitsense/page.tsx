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
import { RiCheckboxCircleFill } from "@remixicon/react";
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
import CommitsenseLogo from "../../components/icons/CommitsenseLogo";
import { JustifiedText } from "../../components/JustifiedText";
import { ScrollContext } from "../../context/ScrollContext";

const IntegraPage: React.FC = () => {
	useToggleableCursor();
	const initialNodes = [
		{
			id: "mongodb",
			position: { x: 0, y: 0 },
			data: { label: "git diff --staged" },
		},
		{
			id: "go",
			position: { x: 0, y: 60 },
			data: { label: "AI Analysis" },
		},
		{
			id: "rest-api",
			position: { x: -100, y: 140 },
			data: { label: "Prioritization Resolution" },
		},
		{
			id: "websocket",
			position: { x: 100, y: 130 },
			data: { label: "Commit output confirmation" },
		},

		{
			id: "svelte",
			position: { x: 0, y: 230 },
			data: { label: "Commit files" },
		},
	];

	const initialEdges = [
		{
			id: "e1-1",
			source: "mongodb",
			target: "go",
		},
		{
			id: "e1-2",
			source: "go",
			target: "rest-api",
			style: {},
		},

		{
			id: "e1-3",
			source: "go",
			target: "websocket",
			style: {},
		},
		{
			id: "e2-4",
			source: "rest-api",
			target: "svelte",
		},
		{
			id: "e2-5",
			source: "websocket",
			target: "svelte",
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
									<CommitsenseLogo className="w-68" />
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
									<b>A poor documented code leads to abandoned code.</b> In fast
									paced environment documentation is not very-much a priority,
									this leads to poor written commits and messages, when it
									scales histories become unreadable: a mix of complete{" "}
									<code>fix stuff</code>, <code>wip</code>, and{" "}
									<code>updates</code> that makes <code>git log</code>{" "}
									<i>useless</i> for debugging or reviewing.
								</JustifiedText>

								<JustifiedText className="font-sans mt-4" text="">
									<b>
										Writing good commits manually takes real mental effort and
										context-switching away from the code itself.
									</b>{" "}
									And in team environments, conventions like semantic commits
									and gitmoji are adopted inconsistently, if at all — some
									follow them, some don't, and the history reflects that chaos.
								</JustifiedText>
							</div>

							<div className="mt-8 section opacity-0">
								<h1 className="font-display tracking-tighter mb-2 text-[44px]">
									The Proposal
								</h1>
								<p className="font-sans">
									<JustifiedText>
										A CLI tool that reads your staged diff and does the commit
										thinking for you – generating precise, atomic,
										convention-compliant messages so you can stay in flow and
										keeping the git log expressive.
									</JustifiedText>

									<JustifiedText className="mt-8">
										Commitsense should stages all files if none are staged yet,
										reads the full diff, and returns structured commit messages
										following semantic commit conventions with gitmoji, split
										into multiple atomic commits when the changes logically
										warrant it. It also applies a priority system for
										mixed-intent changes with the order{" "}
										<code>feat → fix → style → refactor.</code>
									</JustifiedText>
								</p>
							</div>

							<div className="mt-8 section opacity-0">
								<h1 className="font-display tracking-tighter mb-2 text-[44px]">
									The Architecture
								</h1>
								<JustifiedText className="font-sans">
									The tool needed to be fast and frictionless — something that
									fits inside the developer's workflow without becoming a
									ritual. Built on Bun and TypeScript, it runs with near-instant
									startup (Bun's biggest advantage over Node.js), has zero heavy
									runtime dependencies, and integrates tightly with git
									internals via shell execution.
								</JustifiedText>

								<JustifiedText className="font-sans mt-8">
									The core pipeline is simple by design:
								</JustifiedText>
								<div className="flex items-center flex-col mb-6 md:mb-0 md:grid md:grid-cols-2">
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
									<div className="mt-0 flex flex-col gap-3 font-sans">
										<JustifiedText>
											<b>Stage Detection</b> checks for staged files,
											auto-stages everything if empty, simply running a command
											as a <code>git add .</code> under the hood, then retrieves
											the full diff for processing.
										</JustifiedText>
										<JustifiedText>
											<b>Diff Extraction</b> runs <code>git diff --staged</code>{" "}
											to capture the exact changeset and format accordingly to
											make it standout and save tokens in the next step, with a
											custom format that makes it easier to parse and understand
											for the LLM, with clear structure.
										</JustifiedText>
										<JustifiedText>
											<b>AI Analysis</b> sends the diff to an LLM with a
											structured prompt enforcing semantic commit format,
											atomicity rules, and priority ordering. Even using cheap
											models it was accurate.
										</JustifiedText>
										<JustifiedText>
											<b>Output</b> returns ready-to-use commit messages,
											optionally executing them directly or letting the user
											review and edit before committing. The user can also
											select which ones to use.
										</JustifiedText>

										<JustifiedText>
											<b>Bun was chosen over Node.js</b> for its single-binary
											distribution, faster cold starts, and native TypeScript
											support without a build step — ideal for a CLI where
											startup latency is felt on every single use.
										</JustifiedText>
									</div>
								</div>
							</div>
							<div className="section opacity-0">
								<h1 className="font-display tracking-tighter text-[44px] mb-2">
									Solution Highlights
								</h1>
								<div className="flex flex-col md:grid mt-4 md:grid-cols-[1fr_1.25fr] font-sans gap-8 items-center">
									<div>
										<h2 className="font-display tracking-tighter font-medium text-[28px]">
											Big Commits? We got you.
										</h2>
										<JustifiedText className="font-sans">
											By analyzing the diff's structure and content, the tool
											cancelling automatically splits large, multi-purpose
											changes into multiple atomic commits. This ensures that
											even complex changes are broken down into manageable,
											reviewable pieces that maintain a clean and informative
											git history.
										</JustifiedText>
										<p className="mt-3">This technique can:</p>
										<ul className="mt-3 list-disc pl-4 flex flex-col gap-1">
											<li>Make Code Reviews much easier to do</li>
											<li>
												Enable bisecting to work properly, making debugging much
												easier
											</li>
											<li>
												Make rollbacks less intensive preventing cherry-picks
											</li>
											<li>
												Allow to easily identify the intent of each change,
												making the git history more readable and informative
											</li>
										</ul>

										<h2 className="font-display tracking-tighter font-medium text-[28px] mt-3">
											Best Practices everywhere
										</h2>

										<JustifiedText
											className="mt-3 font-sans"
											text="Atomic commits, semantic commits, gitmoji, and a priority system for mixed-intent changes are all enforced by the structured prompt, ensuring a clean, consistent, and informative git history without relying on user discipline."
										/>
									</div>
									<div>
										<motion.img
											whileHover={{
												scale: 1.02,
												filter: "grayscale(0)",
											}}
											src="/commitsense.avif"
											className="rounded-lg grayscale border border-white/20 "
										/>
									</div>
								</div>
								<div className="flex flex-col md:grid mt-6 md:grid-cols-[1fr] gap-8 items-center mt-7">
									<div className="w-full lg:w-auto">
										<h2 className="font-display tracking-tighter font-medium text-[28px] ">
											Good Prompt = Cheaper Models
										</h2>
										<JustifiedText
											className="mt-3 font-sans"
											text="The whole project runs on OpenAI GPT-4.1 Models, in low capacity. (the cheapest model at the time) with a very structured prompt that enforces the output format and rules, making it accurate and consistent without needing expensive models or fine-tuning. This makes it accessible and efficient, proving that with the right prompt engineering, you can achieve great results even with limited resources."
										/>
									</div>
								</div>
							</div>
							<div className="mt-8 section opacity-0">
								<h1 className="font-display tracking-tighter text-[44px] mb-2">
									Results
								</h1>
								<div className="md:grid mt-4 font-sans flex flex-col md:grid-cols-2 gap-10">
									<div>
										<h3 className="font-display items-center flex leading-[5px] gap-2 text-[22px] font-semibold tracking-tighter">
											<RiCheckboxCircleFill className="size-[20px]" />
											No More Messy Histories
										</h3>
										<ul className="space-y-1.5 list-disc pl-5 mt-4">
											<li>
												Vague or inconsistent commit messages are reduced to 0
												in projects.
											</li>
											<li>
												Things done that can be forgotten between a commit and
												another doesn't exists anymore.
											</li>
											<li>
												Even large, multi-purpose commits are automatically
												split into atomic, logically-grouped commits.
											</li>
										</ul>
									</div>

									<div>
										<h3 className="font-display items-center flex leading-[5px] gap-2 text-[22px] font-semibold tracking-tighter">
											<RiCheckboxCircleFill className="size-[20px]" />
											Consistent Best Practices
										</h3>
										<ul className="space-y-1.5 list-disc pl-5 mt-4">
											<li>
												Multiple practices in project (gimoji, semantic,
												numbered) are reduced to a single pattern
											</li>
											<li>
												Blaming and bisecting work properly, making debugging
												much easier
											</li>
											<li>Reverting changes is easier and less error-prone.</li>
										</ul>
									</div>

									<div>
										<h3 className="font-display items-center flex leading-[5px] gap-2 text-[22px] font-semibold tracking-tighter">
											<RiCheckboxCircleFill className="size-[20px]" />
											No time waste by waiting
										</h3>
										<ul className="space-y-1.5 list-disc pl-5 mt-4">
											<li>
												Loading the prompt is faster than writing the commit
												message.
											</li>
											<li>
												The loading for the whole process is around 2-3 seconds,
												in large commits.
											</li>
											<li>
												By using the CLI, developers stay in flow and don't have
												to context-switch to write commit messages
											</li>
										</ul>
									</div>

									<div>
										<h3 className="font-display items-center flex leading-[5px] gap-2 text-[22px] font-semibold tracking-tighter">
											<RiCheckboxCircleFill className="size-[20px]" />
											Code Quality and Team Collaboration
										</h3>
										<ul className="space-y-1.5 list-disc pl-5 mt-4">
											<li>
												Code reviews are more effective with clear, atomic
												commits.
											</li>
											<li>
												Teams have a more consistent and informative git
												history, improving the onboarding of new members
											</li>
											<li>
												Overall code quality is improved as the commit history
												becomes a reliable source of information about the
												codebase's evolution.
											</li>{" "}
										</ul>
									</div>
								</div>
							</div>
							<div className="mt-8 section opacity-0">
								<h1 className="font-display tracking-tighter text-[44px] mb-2">
									Future Improvements
								</h1>
								<div className="font-sans">
									<JustifiedText text="The next step is to evolve the platform from a scheduling tool into a daily operating system for professionals - and eventually, an intelligent system that reduces manual work to near zero." />
									<div className="flex flex-col md:grid md:grid-cols-2 gap-10 mt-3">
										<div>
											<h3 className="font-display tracking-tighter text-[22px] font-semibold mt-3">
												Reduce the Bundle Size
											</h3>
											<JustifiedText text="Bun ships the bun runtime alongside the binary making files bigger (csense has ~60mb in Linux). To fastest way of doing so is to move to a compiled language." />
											<ul className="space-y-1.5 list-disc pl-5 mt-4">
												<li>
													<b>Rust</b> ships the same environment with ~2MB
													executable
												</li>
												<li>Reduces bundle-size by 97%</li>
												<li>
													Easier onboarding with <code>apt</code> or{" "}
													<code>homebrew</code>{" "}
												</li>
												<li>
													Rust is easier to maintain, but has a bigger learning
													curve.
												</li>
											</ul>
										</div>
										<div>
											<h3 className="font-display tracking-tighter text-[22px] font-semibold mt-3">
												Local-First AI integration
											</h3>
											<JustifiedText text="With the evolution of local AIs (Kimi, Minimax, etc.) we should consider testing with an local LLM Models." />

											<ul className="space-y-1.5 list-disc pl-5 mt-4">
												<li>
													Kimi, Minimax, Qwen and GLM can read code easily,
													providing even more privacy.{" "}
												</li>
												<li>Responses without latency, pure TPS.</li>
												<li>No trolls = Pure internal processing.</li>
												<li>No skills or black magic for token saving.</li>
											</ul>
										</div>
									</div>
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

export default IntegraPage;
