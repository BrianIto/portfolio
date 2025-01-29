<script>
	import React from '../../assets/react.webp';
	import NextJS from '../../assets/nextjs.webp';
	import Svelte from '../../assets/svelte.webp';
	import Angular from '../../assets/angular.svg';
	import Typescript from '../../assets/typescript.webp';
	import Storybook from '../../assets/storybook.webp';
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	/** @type { HTMLImageElement= } - The react icon */ let reactEl = $state();
	/** @type { HTMLImageElement= } - The svelte icon */
	let svelteEl = $state();
	onMount(() => {
		if (reactEl && svelteEl) {
			gsap.to(reactEl, {
				rotation: 25,
				duration: 4,
				repeat: -1,
				yoyo: true,
				ease: 'power1.inOut'
			});
			gsap.to(svelteEl, {
				scale: 0.9,
				duration: 4,
				repeat: -1,
				yoyo: true,
				delay: 2,
				ease: 'back.inOut'
			});
		}
	});
</script>

<div class="xl:w-auto relative max-w-96">
	<img class="relative top-32" bind:this={reactEl} src={React} alt="React logo" />
	<img class="relative -left-12 -top-24 -z-10 -mt-32" src={NextJS} alt="Nextjs logo" />
	<img
		bind:this={svelteEl}
		class="relative -top-36 left-28 -z-20 -mt-40"
		src={Svelte}
		alt="Svelte logo"
	/>

	<img class="relative -top-36 left-52 -z-10 -mt-32" src={Angular} alt="Angular logo" />
	<img class="relative -top-8 left-40 -z-10 -mt-32" src={Typescript} alt="TypeScript logo" />
	<img
		class="relative left-60 -z-10 -mt-32 -translate-y-3 translate-x-4 scale-90"
		src={Storybook}
		alt="Storybook logo"
	/>
</div>
