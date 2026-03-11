import type { SVGProps } from "react";

const NextJSIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		{...props}
		xmlns="http://www.w3.org/2000/svg"
	>
		<mask
			id="mask0_2034_273"
			maskUnits="userSpaceOnUse"
			x="0"
			y="0"
			width="24"
			height="24"
		>
			<path
				d="M11.75 23.5C18.2393 23.5 23.5 18.2393 23.5 11.75C23.5 5.26065 18.2393 0 11.75 0C5.26065 0 0 5.26065 0 11.75C0 18.2393 5.26065 23.5 11.75 23.5Z"
				fill="currentColor"
			/>
		</mask>
		<g mask="url(#mask0_2034_273)">
			<path
				d="M11.75 23.5C18.2393 23.5 23.5 18.2393 23.5 11.75C23.5 5.26065 18.2393 0 11.75 0C5.26065 0 0 5.26065 0 11.75C0 18.2393 5.26065 23.5 11.75 23.5Z"
				fill="currentColor"
			/>
			<path
				d="M19.5191 20.5651L9.02692 7.05005H7.05005V16.4461H8.63155V9.05845L18.2777 21.5215C18.713 21.2302 19.1276 20.9105 19.5191 20.5651Z"
				fill="black"
			/>
			<path d="M16.5807 7.05005H15.014V16.45H16.5807V7.05005Z" fill="black" />
		</g>
	</svg>
);
export default NextJSIcon;
