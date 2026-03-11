"use client";

import { RiArrowDownLine, RiHome2Line } from "@remixicon/react";
import { motion } from "motion/react";

const DynamicIsland: React.FC = () => {
	return (
		<motion.button
			whileHover={{
				scale: 1.05,
			}}
			className="dynamic-island fixed z-[9999] flex items-center group hover:scale-105 hover:text-white text-[#AEAEAE] top-4 bg-black py-1 rounded-full w-44 text-[15px] shadow-lg px-1.5 font-medium font-sans "
		>
			<div className="rounded-full duration-300 w-5 flex items-center justify-center h-5 bg-transparent">
				<RiHome2Line className="w-3.5  text-[#AEAEAE]" />
			</div>
			<span className="flex-1">Homepage</span>

			<div className="rounded-full group-hover:bg-[#888] duration-300 w-5 flex items-center justify-center h-5 bg-[#1A1A1A]">
				<RiArrowDownLine className="w-3.5 group-hover:text-black text-[#AEAEAE]" />
			</div>
		</motion.button>
	);
};

export default DynamicIsland;
