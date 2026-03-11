import type { PropsWithChildren } from "react";
import { cn } from "@/src/utils/cn";

interface Props {
	size?: "sm" | "lg";
	onClick?: () => void;
}
const GlowingTag: React.FC<PropsWithChildren<Props>> = ({
	children,
	size = "sm",
	onClick = () => {},
}) => {
	return (
		<>
			<style>{`
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        @keyframes spin-gradient {
          to { --angle: 360deg; }
        }

        .glow-border {
          background: conic-gradient(
            from var(--angle),
            transparent 0deg,
            #777 90deg,
            transparent 100deg,
            #777 250deg,
            transparent 300deg
          );
          animation: spin-gradient 3s linear infinite;
        }
      `}</style>
			<button
				onClick={onClick}
				className={cn(
					"glow-border rounded-full [.lg]:hover:scale-[1.05] [.lg]:hover:shadow-xl shadow-black/30 p-0.25 [.lg]:p-0.5 duration-300",
					{
						sm: size === "sm",
						lg: size === "lg",
					},
				)}
			>
				<div
					className={cn(
						"rounded-full bg-[#333] backdrop-blur-sm font-display tracking-tight pt-0.5 flex items-center [.sm]:text-[16px] px-[12px] relative [.sm]:h-[28px] [.lg]:h-[44px] [.lg]:text-[20px] [.lg]:px-[29px] [.lg]:font-sans ",
						{
							sm: size === "sm",
							lg: size === "lg",
						},
					)}
				>
					{children}
				</div>
			</button>
		</>
	);
};

export default GlowingTag;
