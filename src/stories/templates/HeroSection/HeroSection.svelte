<script>
	import FullLogo from '$lib/icons/FullLogo.svelte';
	import AnimationTranslation from '../../molecules/AnimationTranslation/AnimationTranslation.svelte';
	import HeroImage from '../../assets/hero-image.webp';
	import CookieConsent from '../../organisms/CookieConsent/CookieConsent.svelte';
	import { onMount } from 'svelte';

	import gsap from 'gsap';

	let { el = $bindable(), delay = 3 } = $props();

	onMount(() => {
		gsap.from('.letter', { y: 150, duration: 0.5, delay, stagger: 0.05 });
	});
</script>

<main
	bind:this={el}
	class="relative flex min-h-[100vh] max-w-[100vw] items-center justify-center overflow-x-hidden text-center lg:text-left xl:justify-start"
>
	<section class="flex w-[100vw] flex-col items-center px-12 lg:items-start xl:static xl:pl-36">
		<FullLogo class="w-64 xl:w-80" animated />
		<h1 class="overflow-hidden text-5xl font-extrabold uppercase text-amber-400 xl:text-9xl">
			{#each 'portfolio' as letter}
				<div class="letter inline-block opacity-100">{letter}</div>
			{/each}
		</h1>
		<h2 class="overflow-hidden pt-4 text-2xl font-bold uppercase text-white">
			<span class="letter inline-block whitespace-nowrap">Frontend Dev </span>
			&nbsp; <span class="letter inline-block whitespace-nowrap"> • UI DESIGN &nbsp; • </span>&nbsp;
			<span class="letter inline-block whitespace-nowrap"> Data Visualization</span>
		</h2>
		<p class="letter mt-8 inline-block overflow-hidden text-sm text-zinc-500 md:text-base">
			No AI were harmed or used developing this website. Texts included.
		</p>
		<AnimationTranslation />
		<img
			src={HeroImage}
			alt="Our developer in Rio"
			loading="lazy"
			class="absolute -right-32 top-[10vh] hidden h-[80vh] w-[80vh] overflow-hidden rounded-full object-cover lg:block"
		/>
	</section>
</main>
