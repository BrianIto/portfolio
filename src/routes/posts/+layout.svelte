<script>
	import ChevronDown from '$lib/icons/ChevronDown.svelte';
	import FullLogo from '$lib/icons/FullLogo.svelte';
	import Cursor from '../../stories/molecules/Cursor/Cursor.svelte';
	import SmoothScroll from '../../stories/molecules/SmoothScroll/SmoothScroll.svelte';
	import Footer from '../../stories/organisms/Footer/Footer.svelte';
	import Header from '../../stories/organisms/Header/Header.svelte';
	import { scaleLinear } from 'd3';
	import { page } from '$app/state';

	let scrollY = $state(0);
	let size = $state(0);
	let scale = $derived(scaleLinear().domain([0, size]).range([1, 100]));
	let percentage = $derived(size > 1500 ? scale(scrollY).toFixed(0) : 1);
	/** @type { import('smooth-scrollbar').default | null} */
	let scrollbar = $state(null);

	let menuOptions = {
		frontend: [
			{ title: 'Introduction', href: '#main' },
			{ title: 'React and Next.js', href: '#react' },
			{ title: 'Angular', href: '#angular' },
			{ title: 'Svelte + SvelteKit', href: '#svelte' },
			{ title: 'Storybook', href: '#storybook' },
			{ title: 'Considerations', href: '#considerations' }
		],
		dataviz: [

			{ title: 'Introduction', href: '#main' },
			{ title: 'To D3 Imagination is the Limit', href: '#d3' },
			{ title: 'Interactions for Better Visualization', href: '#interactions' },
			{ title: 'Considerations', href: '#considerations' }
		]
	};

	let options = $derived(menuOptions[page.route.id.replace('/posts/', '')]);

	$effect(() => {
		if (scrollbar && page.url.hash) {
			let element = document.querySelector(page.url.hash);
			scrollbar.scrollIntoView(element);
		}
	});

	let { children } = $props();
</script>

<Cursor />

<div class="sticky top-16 z-10 md:top-0 md:mt-0">
	<Header {percentage} menuOptions={options} />
</div>

<a
	href="/"
	class="absolute right-8 z-10 mx-auto hidden min-w-64 scale-90 cursor-pointer items-center justify-end gap-3 text-lg text-white opacity-50 duration-200 hover:-translate-x-1 hover:text-white hover:opacity-100 md:ml-4 md:flex md:h-20 md:w-auto"
>
	<ChevronDown class="h-8 w-8 rotate-90" /> Back to Home
</a>

<SmoothScroll bind:scrollbar bind:scrollY bind:size damping={0.05}>
	<FullLogo
		animated={true}
		class="absolute top-4 mx-auto hidden h-16 w-full md:ml-4 md:block md:h-20 md:w-auto"
	/>
	<article class="mx-auto mt-24 flex max-w-7xl flex-col justify-around md:mt-36">
		{@render children()}
	</article>
	<Footer />
</SmoothScroll>
