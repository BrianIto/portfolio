import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import CommitsenseLogo from "../icons/CommitsenseLogo";
import DLMRLogo from "../icons/DLMRLogo";
import IntegraLogo from "../icons/IntegraLogo";

const projects = [
	{
		icon: IntegraLogo,
		title: "Healthcare Appointments Manager and ERP",
		description:
			"showcases backend, NoSQL DBs, frontend integration, REST and WebSockets.",
		link: "@ integracps.com.br",
	},
	{
		icon: CommitsenseLogo,
		title: "AI Powered perfect commit messages.",
		description:
			"showcases AI Integration, LLMs, CLI creation, Prompt security and attention to detail.",
		link: "Personal Project",
	},

	{
		icon: DLMRLogo,
		title: "Payment Split made easy for Attorneys using DFS",
		description:
			"Showcase good control of algorithms (Depth-First Search), relational databases, finances control and transactional data.",
		link: "Authentication Gated Web App",
	},
];
const ProjectsSection: React.FC = () => {
	gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

	const container = useRef<HTMLDivElement>(null);

	const title = useRef<HTMLHeadingElement>(null);

	useGSAP(
		() => {
			gsap.from(".project-el", {
				scrollTrigger: {
					trigger: ".projects",
					toggleActions: "restart none none none",
				},
				opacity: 0,
				duration: 0.4,
				stagger: 0.15,
			});

			const letters = SplitText.create(title.current, {
				type: "chars",
			});

			gsap.from(letters.chars, {
				scrollTrigger: {
					trigger: title.current,
					toggleActions: "restart none none none",
				},
				opacity: 0,
				duration: 0.35,
				stagger: 0.05,
			});
		},
		{ scope: container },
	);

	return (
		<div
			id="projects-section"
			ref={container}
			className="md:max-w-[700px] lg:max-w-[940px]"
		>
			<h1
				ref={title}
				className="w-full  mt-4 font-display tracking-tighter text-[40px] md:text-[44px] lg:text-[62px] text-center md:text-left"
			>
				Featured Projects
			</h1>
			<div className="projects w-full gap-3 lg:gap-[28px] flex flex-col items-center md:grid mt-8 md:grid-cols-3">
				{projects.map((project, index) => (
					<div
						key={index}
						className="project-el bg-background border flex flex-col gap-3 p-6 max-w-[300px] items-center md:items-start text-center md:text-left h-auto md:h-[290px]  rounded-lg border-white/20"
					>
						<project.icon className="w-44 max-h-[37px] md:w-auto" />
						<h2 className="font-sans leading-5.5 tracking-tighter text-[19px] font-medium">
							{project.title}
						</h2>
						<p className="font-sans tracking-tight text-[14px] text-[#BFBFBF]">
							{project.description}
						</p>
						<p className="font-sans md:text-left md:w-full tracking-tight font-medium">
							{project.link}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProjectsSection;
