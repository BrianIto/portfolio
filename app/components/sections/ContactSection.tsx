import { useGSAP } from "@gsap/react";
import {
	RiBlueskyLine,
	RiInstagramLine,
	RiLinkedinFill,
	RiMailLine,
	RiTwitterXLine,
	RiWhatsappLine,
} from "@remixicon/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useCallback, useRef } from "react";
import ContainerWithTooltip from "../ContainerWithTooltip";
import GlowingTag from "../GlowingTag";

const ContactSection: React.FC = () => {
	const socials = [
		{
			icon: RiInstagramLine,
			url: "https://www.instagram.com/ito.brian",
			name: "Instagram",
		},
		{
			icon: RiTwitterXLine,
			url: "https://twitter.com/BrianIto_",
			name: "Twitter/X",
		},
		{
			icon: RiBlueskyLine,
			url: "https://bsky.app/profile/brianito.com",
			name: "Bluesky",
		},
		{
			icon: RiLinkedinFill,
			url: "https://www.linkedin.com/in/brian-ito",
			name: "LinkedIn",
		},
		{
			icon: RiWhatsappLine,
			url: "https://wa.me/+5592984374357",
			name: "WhatsApp",
		},
		{
			icon: RiMailLine,
			url: "mailto:brian.oliveira100@gmail.com",
			name: "Email",
		},
	];

	gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

	const container = useRef<HTMLDivElement>(null);

	const title = useRef<HTMLHeadingElement>(null);

	useGSAP(
		() => {
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

	const handleScheduleCall = useCallback(() => {
		// Track event in GA4
		if (typeof window !== "undefined" && (window as any).gtag) {
			(window as any).gtag("event", "schedule_call_click", {
				event_category: "engagement",
				event_label: "contact_section",
			});
		}
		window.open(
			"https://calendly.com/brian-ito/reuniao-para-discussao-de-aplicativo",
			"_blank",
		);
	}, []);

	return (
		<div id="contact-section" className="my-20">
			<h1
				ref={title}
				className="w-full my-4 font-display tracking-tighter text-[40px] md:text-[44px] lg:text-[62px] text-center "
			>
				Contact me
			</h1>
			<div className="min-w-[320px] max-w-[500px] border border-white/20 flex flex-col gap-10 items-center bg-background rounded-lg py-[44px] px-[24px] md:px-[56px]">
				<p className="font-sans text-[24px]">Let's book a call</p>
				<div className="w-full ">
					<GlowingTag
						onClick={handleScheduleCall}
						className="w-full justify-center"
						size="lg"
					>
						schedule 30 min
					</GlowingTag>
				</div>
				<p className="font-sans text-[24px] ">socials</p>
				<div className="grid justify-center grid-cols-3 gap-6 md:flex md:justify-between w-full">
					{socials.map(({ icon: Icon, url }, index) => (
						<ContainerWithTooltip
							tooltipLabel={socials[index].name}
							position={"bottom"}
							tooltipClass="!text-white/70"
							key={index}
						>
							<a
								key={index}
								href={url}
								target="_blank"
								className="flex justify-center items-center"
								rel="noopener noreferrer"
								onClick={() => {
									// Track social media clicks in GA4
									if (typeof window !== "undefined" && (window as any).gtag) {
										const platform = url.includes("instagram")
											? "instagram"
											: url.includes("twitter")
												? "twitter"
												: url.includes("bsky")
													? "bluesky"
													: url.includes("linkedin")
														? "linkedin"
														: url.includes("wa.me")
															? "whatsapp"
															: "email";
										(window as any).gtag("event", "social_click", {
											event_category: "engagement",
											event_label: platform,
										});
									}
								}}
							>
								<Icon className=" hover:text-white duration-300  size-10 text-white/40" />
							</a>
						</ContainerWithTooltip>
					))}
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
