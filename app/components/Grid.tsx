"use client";

import { motion } from "motion/react";
import { useMemo } from "react";

interface Props {
	height: number;
}

const Grid: React.FC<Props> = ({ height }) => {
	const SQUARE_SIZE = useMemo(() => 56, []);

	return (
		<div>
			{/** Left Side */}
			<motion.div
				className="w-0.25 bg-white/10 absolute"
				initial={{ height: 0, left: 32 }}
				animate={{ height }}
				transition={{
					duration: 0.9,
					ease: "easeOut",
				}}
				style={{ height }}
			></motion.div>
			<motion.div
				className="w-0.25  bg-white/10 absolute"
				initial={{ height: 0, left: 32 + SQUARE_SIZE }}
				animate={{ height }}
				transition={{
					duration: 0.9,
					ease: "easeOut",
				}}
				style={{ height }}
			></motion.div>
			{new Array(Math.floor(height / SQUARE_SIZE)).fill(0).map((_, i) => (
				<motion.div
					key={i}
					className="w-44 left-0 top-8 h-0.25 absolute bg-white/10"
					initial={{ width: 0 }}
					animate={{
						width: i % 2 ? 144 : 176,
					}}
					transition={{
						delay: 0.01 + i * 0.03,
						duration: 0.3,
						ease: "easeOut",
					}}
					style={{
						top: 8 * 4 + SQUARE_SIZE * i,
					}}
				></motion.div>
			))}

			{/** Right Side */}

			<motion.div
				className="w-0.25 bg-white/10 absolute"
				initial={{ height: 0, right: 32 }}
				animate={{ height }}
				transition={{
					duration: 0.9,
					ease: "easeOut",
				}}
				style={{ height }}
			></motion.div>
			<motion.div
				className="w-0.25  bg-white/10 absolute"
				initial={{ height: 0, right: 32 + SQUARE_SIZE }}
				animate={{ height }}
				transition={{
					duration: 0.9,
					ease: "easeOut",
				}}
				style={{ height }}
			></motion.div>
			{new Array(Math.floor(height / SQUARE_SIZE)).fill(0).map((_, i) => (
				<motion.div
					key={i}
					className="w-44 right-0 top-8 h-0.25 absolute bg-white/10"
					initial={{ width: 0 }}
					animate={{
						width: i % 2 ? 144 : 176,
					}}
					transition={{
						delay: 0.01 + i * 0.03,
						duration: 0.3,
						ease: "easeOut",
					}}
					style={{
						top: 8 * 4 + SQUARE_SIZE * i,
					}}
				></motion.div>
			))}
		</div>
	);
};

export default Grid;
