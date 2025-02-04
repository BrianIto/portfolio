<script>
	import FullLogo from '$lib/icons/FullLogo.svelte';
	import AnimationTranslation from '../../molecules/AnimationTranslation/AnimationTranslation.svelte';
	import HeroImage from '../../assets/hero-image.webp';

	let { el = $bindable() } = $props();
</script>

<main
	bind:this={el}
	class="relative flex min-h-[100vh] max-w-[100vw] items-center justify-center overflow-x-hidden text-center lg:text-left xl:justify-start"
>
	<section class="flex w-[100vw] flex-col items-center px-12 lg:items-start xl:static xl:pl-36">
		<FullLogo class="w-64 xl:w-80" />
		<h1 class="text-5xl font-extrabold uppercase text-amber-400 xl:text-9xl">Portfolio</h1>
		<h2 class="pt-4 text-2xl font-bold uppercase text-white">
			<span class="whitespace-nowrap">Frontend Dev </span>
			&nbsp; <span class="whitespace-nowrap"> • UI DESIGN &nbsp; • </span>&nbsp;
			<span class="whitespace-nowrap"> Data Visualization</span>
		</h2>
		<p class="mt-8 text-sm md:text-base text-zinc-500">
			No AI were harmed or used developing this website. Texts included.
		</p>
		<AnimationTranslation />
		<img
			src={HeroImage}
			alt="Our developer in Rio"
			class="absolute -right-32 top-[10vh] hidden h-[80vh] w-[80vh] overflow-hidden rounded-full object-cover lg:block"
		/>
	</section>
</main>
