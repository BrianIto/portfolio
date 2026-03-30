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
import IntegraLogo from "../../components/icons/IntegraLogo";
import { JustifiedText } from "../../components/JustifiedText";
import { ScrollContext } from "../../context/ScrollContext";

const IntegraPage: React.FC = () => {
	useToggleableCursor();
	const initialNodes = [
		{
			id: "mongodb",
			position: { x: 0, y: 0 },
			data: { label: "MongoDB" },
		},
		{
			id: "go",
			position: { x: 0, y: 80 },
			data: { label: "Go server" },
		},
		{
			id: "rest-api",
			position: { x: -100, y: 180 },
			data: { label: "REST API" },
		},
		{
			id: "websocket",
			position: { x: 100, y: 180 },
			data: { label: "Websocket" },
		},

		{
			id: "svelte",
			position: { x: 0, y: 280 },
			data: { label: "Svelte" },
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
		<ScrollContext.Provider value={{ scrollSmootherRef }}>
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
									<IntegraLogo className="w-36" />
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
								<JustifiedText
									className="font-sans"
									text="Integra is an hourly rental clinic for healthcare professionals, helping them save time and money managing rooms. Their scheduling was mostly manual in spreadsheets, which worked for a single space but broke down across multiple locations and booking states (paid, executed, cancelled, etc.). They needed to avoid human mistakes, double-bookings, and time wasted in back-and-forth communication with professionals and backoffice."
								/>
							</div>

							<div className="mt-8 section opacity-0">
								<h1 className="font-display tracking-tighter mb-2 text-[44px]">
									The Proposal
								</h1>
								<p className="font-sans">
									<JustifiedText>
										An integrated web app to manage scheduling, payments,
										professional registers and space availability through two
										main views:
									</JustifiedText>
									<div className="mt-4 flex md:flex-row flex-col items-center lg:items-start gap-4 md:gap-12 justify-center py-2 ">
										<div className="flex-1 max-w-[380px]">
											<JustifiedText>
												<b>Backoffice (Recepcionists) vision</b> → shows all
												spaces and their schedules, letting staff create, edit,
												cancel, and mark executions and payments, as well as
												manage professionals in the database.{" "}
											</JustifiedText>
										</div>

										<div className="flex-1 max-w-[380px]">
											<JustifiedText>
												<b>Healthcare Professional Vision</b> → shows available
												time slots across spaces without exposing other
												professionals’ details, allowing users to book, cancel,
												reschedule, and review their payments and past
												appointments.
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
									this project needs to be fast and with good UX because{" "}
									<b>
										the professionals need to focus in their patients and not in
										managing a scheduling software.
									</b>{" "}
									Based on that we decide to opt for the following technologies:
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
											<b>MongoDB</b> was the choice for databases for
											fast-schema flexibility and faster queries for time based
											data, with aggregation pipelines to solve{" "}
											<code>join</code> situations.
										</JustifiedText>
										<JustifiedText>
											<b>Golang</b> was the choice for the backend for being a
											solid, time-proof language with good performance and
											retrocompatible updates, unlike Node.js distributions.
										</JustifiedText>
										<JustifiedText>
											<b>Not only REST but WebSockets was needed</b> so users
											can schedule and see data in realtime — this prevents
											race-conditions and gives a better experience as they can
											see available slots in realtime in the current panel.
										</JustifiedText>
										<JustifiedText>
											<b>Svelte</b> was the choice for frontend for being a
											reactive framework that is very fast, good DX, performant
											and very good to integrate with realtime applications,
											mostly chosen for fast-delivery (less boilerplate)
											frontends.
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
											One view for everything.
										</h2>
										<JustifiedText className="font-sans">
											Users can manage appointments, payments, and schedules in
											a single view, avoiding page switching and cognitive
											overhead, preventing lines and communication with
											professionals without <i>loading</i> breaks.
										</JustifiedText>
										<p className="mt-3">The technique for making this is:</p>
										<ul className="mt-3 list-disc pl-4 flex flex-col gap-1">
											<li>Drag and Drops to prevent cognitive overhead</li>
											<li>
												All the interactions except payment can be done by mouse
											</li>
											<li>Right-click menu to solve edge cases easily</li>
											<li>Three-clicks to anything.</li>
										</ul>
									</div>
									<div>
										<motion.img
											whileHover={{
												scale: 1.02,
												filter: "grayscale(0)",
											}}
											src="/integra_scheduling_view.avif"
											className="rounded-lg grayscale border border-white/20 "
										/>
									</div>
								</div>
								<h2 className="font-display tracking-tighter font-medium text-[28px] mt-12">
									Performance: 400ms to populate the whole system.
								</h2>

								<JustifiedText
									className="mt-3 font-sans"
									text="The system is made to prevent as much as possible all the loading screens. I did that by making requests in parallel on the client, with Goroutines and fasthttp in Go. Insert and Update operations can take 200-300ms. Everything can be processed in less than 1s. thanks to Golang performance and MongoDB fast list, insert & update operations that performs in nanosseconds to 1ms, all the time took is just download, unzip (from gzip) and read the data."
								/>

								<div className="flex flex-col md:grid mt-6 md:grid-cols-[1fr_1.1fr] gap-8 items-center mt-12">
									<div className="">
										<h2 className="font-display tracking-tighter font-medium text-[28px] ">
											Maintenance Heaven
										</h2>
										<JustifiedText
											className="mt-3 font-sans"
											text="Everything is documented. Storybook for components and OAS (OpenAPI Specification) alongside with Stoplight Elements for managing and retrieving all the API Documentation, with edge-cases to provide top-notch documentation for an amazing and future-proof DX."
										/>
										<JustifiedText
											className="mt-3 font-sans"
											text="One of the most important things for this project is to be maintainable because as an ERP, companies changes all the time, from simple features from strategic decisions, every decision can also be changed in the software."
										/>
									</div>
									<motion.img
										src="/integra_docs.avif"
										whileHover={{
											scale: 1.05,
											filter: "grayscale(0)",
										}}
										className="rounded-lg grayscale duration-200 border border-white/20 "
									/>
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
											No lines, no chaos.
										</h3>
										<ul className="space-y-1.5 list-disc pl-5 mt-4">
											<li>
												Eliminated waiting lines caused by scheduling errors and
												delays.
											</li>
											<li>
												Removed front-desk bottlenecks by enabling instant
												scheduling and updates.
											</li>
											<li>
												Cut unnecessary back-and-forth communication to near
												zero.
											</li>
										</ul>
									</div>

									<div>
										<h3 className="font-display items-center flex leading-[5px] gap-2 text-[22px] font-semibold tracking-tighter">
											<RiCheckboxCircleFill className="size-[20px]" />
											Bulletproof Scheduling
										</h3>
										<ul className="space-y-1.5 list-disc pl-5 mt-4">
											<li>Zero double-bookings, even during peak usage.</li>
											<li>
												Real-time availability guarantees every visible slot is
												valid and bookable.
											</li>
											<li>
												Clear and enforced booking states eliminated operational
												and financial inconsistencies.
											</li>
										</ul>
									</div>

									<div>
										<h3 className="font-display items-center flex leading-[5px] gap-2 text-[22px] font-semibold tracking-tighter">
											<RiCheckboxCircleFill className="size-[20px]" />
											From Minutes to Seconds
										</h3>
										<ul className="space-y-1.5 list-disc pl-5 mt-4">
											<li>Zero double-bookings, even during peak usage.</li>
											<li>
												Real-time availability guarantees every visible slot is
												valid and bookable.
											</li>
											<li>
												Clear and enforced booking states eliminated operational
												and financial inconsistencies.
											</li>
										</ul>
									</div>

									<div>
										<h3 className="font-display items-center flex leading-[5px] gap-2 text-[22px] font-semibold tracking-tighter">
											<RiCheckboxCircleFill className="size-[20px]" />
											Real Impact on the Ground
										</h3>
										<ul className="space-y-1.5 list-disc pl-5 mt-4">
											<li>
												Professionals no longer depend on reception, they
												control their own schedules.
											</li>
											<li>
												Patients move through the clinic faster, with fewer
												delays and friction.
											</li>
											<li>
												The clinic operates with a predictable, continuous flow
												instead of interruptions and queues.
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
												Professional Experience Upgrade (Improves UX)
											</h3>
											<JustifiedText text="Transform the product into a tool professionals rely on daily, not just occasionally." />
											<ul className="space-y-1.5 list-disc pl-5 mt-4">
												<li>
													Personal analytics dashboard with revenue
													(weekly/monthly) and occupancy rate
												</li>
												<li>One-click rebooking of past schedules</li>
												<li>Calendar sync (Google Calendar, iCal)</li>
												<li>Mobile-first experience / PWA</li>
											</ul>
											<JustifiedText
												className="mt-3"
												text="The goal is to increase engagement and make the platform part of the professional's daily workflow."
											/>
										</div>
										<div>
											<h3 className="font-display tracking-tighter text-[22px] font-semibold mt-3">
												Intelligent Scheduling Layer (AI Integration)
											</h3>
											<JustifiedText text="Move beyond traditional interfaces by introducing intent-based interactions and automation." />

											<ul className="space-y-1.5 list-disc pl-5 mt-4">
												<li>
													<strong>AI-Assistant for Receptionists</strong>: A
													real-time assistant to executing actions and answer
													questions
												</li>
												<li>
													Categorization & Auto-tagging of patterns in
													appointments.{" "}
												</li>
												<li>Automate Dashboard creation charts with AI.</li>
												<li>AI/Statistic chance of no-show or cancelling.</li>
											</ul>

											<JustifiedText
												className="mt-3"
												text="The goal is to reduce manual work to use AI to automate tasks and provide insights."
											/>
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
