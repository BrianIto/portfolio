<script>
	import FullLogo from '$lib/icons/FullLogo.svelte';
	import AnimationTranslation from '../../molecules/AnimationTranslation/AnimationTranslation.svelte';
	import HeroImage from "../../assets/hero-image.webp";
</script>

<main class="relative flex min-h-[100vh] max-w-[100vw] items-center overflow-x-hidden">
	<section class="w-[100vw] pl-36">
		<FullLogo class="w-80" />
		<h1 class="text-9xl font-extrabold uppercase text-amber-400">Portfolio</h1>
		<h2 class="pt-4 text-2xl font-bold uppercase text-white">
			Frontend Dev &nbsp; • &nbsp; UI DESIGN &nbsp; • &nbsp; Data Visualization
		</h2>
		<p class="mt-8 text-zinc-500">
			No AI were harmed or used developing this website. Texts included.
		</p>
		<AnimationTranslation />
		<img
			src={HeroImage}
			alt="Our developer in Rio"
			class=" absolute -right-32 top-[10vh] h-[80vh] w-[80vh] overflow-hidden rounded-full object-cover"
		/>
	</section>
</main>
