import type { ClassValue } from "clsx";
import type { PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

interface Props {
	size?: "sm" | "lg";
	onClick?: () => void;
	className?: ClassValue;
}
const GlowingTag: React.FC<PropsWithChildren<Props>> = ({
	children,
	size = "sm",
	onClick = () => {},
	className,
}) => {
	return (
		<button
			onClick={onClick}
			className={cn(
				"glow-border rounded-full [.lg]:hover:scale-[1.05] flex justify-center [.lg]:hover:shadow-xl shadow-black/30 p-0.25 [.lg]:p-0.5 duration-300",
				{
					sm: size === "sm",
					lg: size === "lg",
				},
				className,
			)}
		>
			<div
				className={cn(
					"rounded-full bg-[#333] backdrop-blur-sm font-display w-full tracking-tight pt-0.5 flex items-center [.sm]:text-[16px] px-[12px] relative [.sm]:h-[28px] [.lg]:h-[44px] [.lg]:text-[20px] [.lg]:px-[29px] [.lg]:font-sans flex justify-center",
					{
						sm: size === "sm",
						lg: size === "lg",
					},
				)}
			>
				{children}
			</div>
		</button>
	);
};

export default GlowingTag;
