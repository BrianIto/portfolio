<script>
	import gsap from "gsap";
	import { onMount } from "svelte";


	onMount(() => {
		gsap.to('.rotate', {
			rotation: 360,
			transformOrigin: '50% 50%',
			duration: 30,
			repeat: -1,
			ease: 'linear'
		});

		gsap.to('.translate', {
			rotation: 360,
			transformOrigin: '5px 260px',
			duration: 30,
			repeat: -1,
			ease: 'linear'
		});
		gsap.to('.cosin', {
			y: 500,
			duration: 15,
			ease: 'power1.inOut',
			yoyo: true,
			repeat: -1
		});
	});
</script>
<svg class="absolute left-0 top-0 -z-10 h-[100vh] w-[100vw]">
	<line
		class="cosin"
		stroke-width="1"
		stroke="#ffffff55"
		x1="0"
		x2="2400"
		y1="200"
		y2="200px"
		stroke-dasharray="4 4"
	/>
	<line
		stroke-width="1"
		stroke="#ffffff55"
		x1="100"
		x2="100"
		y1="0"
		y2="2000px"
		stroke-dasharray="4 4"
	/>

	<line
		stroke-width="1"
		stroke="#ffffff55"
		x1="0"
		x2="2500"
		y1="100"
		y2="100"
		stroke-dasharray="4 4"
	/>

	<line
		stroke-width="1"
		stroke="#ffffff33"
		x1="1200"
		x2="1200"
		y1="0"
		y2="2000px"
		stroke-dasharray="4 4"
	/>
	<circle class="translate" cx="200" cy="200" r="10" fill="#ffffff33" stroke="#ffffff33" />
	<circle
		class="rotate"
		stroke-dasharray="4 4"
		cx="200"
		cy="450"
		r="50"
		fill="none"
		stroke="#ffffff55"
	/>
	<circle
		class="rotate"
		stroke-dasharray="4 4"
		cx="200"
		cy="450"
		r="250"
		fill="none"
		stroke="#ffffff55"
	/>
	<circle cx="200" cy="450" r="270" fill="none" stroke="#ffffff33">
		<line
			stroke-width="1px"
			stroke="#ffffff55"
			x1="0"
			x2="2400px"
			y1="100"
			y2="100px"
			stroke-dasharray="4 4"
		/>
	</circle></svg
>
