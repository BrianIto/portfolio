<script>
	import ChevronDown from '$lib/icons/ChevronDown.svelte';
	import FullLogo from '$lib/icons/FullLogo.svelte';
	import Cursor from '../../stories/molecules/Cursor/Cursor.svelte';
	import SmoothScroll from '../../stories/molecules/SmoothScroll/SmoothScroll.svelte';
	import Footer from '../../stories/organisms/Footer/Footer.svelte';
	import Header from '../../stories/organisms/Header/Header.svelte';
	import { scaleLinear } from 'd3';
	let scrollY = $state(0);
	let size = $state(0);
	let scale = $derived(scaleLinear().domain([0, size]).range([1, 100]));
	let percentage = $derived(size > 1500 ? scale(scrollY).toFixed(0) : 1);

	/** @type { import('smooth-scrollbar').Scrollbar | null} */
	let scrollbar = $state(null);

	let { children } = $props();
</script>

<Cursor />

<div class="sticky top-16 z-10 md:top-0 md:mt-0">
	<Header {percentage} menuOptions={[{ title: '', href: '' }]} />
</div>

	<a href="/" class="absolute cursor-pointer hover:text-white md:flex hidden gap-3 opacity-50 scale-90 hover:-translate-x-1 hover:opacity-100 z-10 duration-200 mx-auto text-white text-lg justify-end items-center  right-8 min-w-64 md:ml-4 md:h-20 md:w-auto">
		<ChevronDown class="w-8 h-8 rotate-90" /> Back to Home
	</a>

<SmoothScroll bind:scrollbar bind:scrollY bind:size damping={0.05}>
	<FullLogo animated={true} class="absolute md:block hidden top-4 mx-auto h-16 w-full md:ml-4 md:h-20 md:w-auto" />
	<article class="mx-auto md:mt-36 mt-24 flex max-w-7xl flex-col justify-around">
		{@render children()}
	</article>
	<Footer />
</SmoothScroll>
