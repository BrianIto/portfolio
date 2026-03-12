"use client";

import {
	RiArrowDownLine,
	RiComputerLine,
	RiHome2Line,
	RiMoneyDollarCircleLine,
	RiPhoneLine,
	RiStarSmileLine,
} from "@remixicon/react";
import { AnimatePresence, motion, stagger } from "motion/react";
import { useState } from "react";
import { cn } from "@/utils/cn";
import ListItem from "./DynamicIsland.ListItem";

const DynamicIsland: React.FC = () => {
	const [open, setOpen] = useState(false);

	const variants = {
		open: {
			width: "calc(var(--spacing) * 64)",
			minHeight: "calc(var(--spacing) * 12)",
			transition: {
				when: "beforeChildren",
				delayChildren: stagger(0.05),
			},
		},
		closed: {
			width: "calc(var(--spacing) * 50)",
			minHeight: "calc(var(--spacing) * 6)",
			transition: {
				when: "afterChildren",
			},
		},
	};

	const pages = [
		{
			name: "Homepage",
			icon: RiHome2Line,
		},
		{
			name: "Stack for",
			icon: RiComputerLine,
			sub: [
				{
					name: "Frontend Development",
				},
				{
					name: "Data Visualization",
				},
			],
		},
		{
			name: "Featured Projects",
			icon: RiStarSmileLine,
			sub: [
				{ name: "Integra" },
				{ name: "Commitsense" },
				{ name: "DLMR Split Payments" },
			],
		},
		{ name: "Pricing", icon: RiMoneyDollarCircleLine },
		{ name: "Contact", icon: RiPhoneLine },
	];

	const [pageIndex, setPageIndex] = useState(-1);

	return (
		<>
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{
							backdropFilter: "blur(0px)",
						}}
						animate={{
							backdropFilter: "blur(4px)",
						}}
						exit={{
							backdropFilter: "blur(0px)",
						}}
						onClick={() => setOpen(false)}
						className="fixed top-0 left-0 w-screen h-screen z-[999] "
					></motion.div>
				)}
			</AnimatePresence>

			<motion.div
				animate={open ? "open" : "closed"}
				className="fixed z-[9999] top-4 flex flex-col "
			>
				<motion.button
					variants={variants}
					onClick={() => setOpen((prev) => !prev)}
					className={cn(
						"dynamic-island  flex flex-col group  text-[#AEAEAE] bg-black py-1 rounded-[16px] min-w-44 text-[15px] shadow-lg px-1.5 font-medium font-sans ",
						{ "hover:text-white": !open },
						{ "text-white": open },
					)}
				>
					<motion.div className="w-full h-[24px] flex items-center">
						<motion.div className="rounded-full duration-300 w-5 flex items-center justify-center h-5 bg-transparent">
							<RiHome2Line className="w-3.5  text-[#AEAEAE]" />
						</motion.div>
						<motion.div className="flex-1 px-2 flex justify-center">
							Homepage
						</motion.div>

						<div className="flex gap-1">
							<div className="-ml-5 rounded opacity-50 text-[12px] bg-white/5 w-5 border border-white/10">
								/
							</div>
							<div className="rounded-full group-hover:bg-[#888] duration-300 w-5 flex items-center justify-center h-5 bg-[#1A1A1A]">
								<RiArrowDownLine
									className={cn(
										"duration-200 w-3.5 group-hover:text-black text-[#AEAEAE]",
										{
											"rotate-180": open,
										},
									)}
								/>
							</div>
						</div>
					</motion.div>
					<motion.div
						className="w-full"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
					>
						<AnimatePresence>
							{open &&
								pages.map((page, index) => (
									<ListItem
										onToggle={() => {
											setPageIndex((prev) => (prev === index ? -1 : index));
										}}
										isOpen={pageIndex === index}
										page={page}
										index={index}
									/>
								))}
						</AnimatePresence>
					</motion.div>
				</motion.button>
			</motion.div>
		</>
	);
};

export default DynamicIsland;
