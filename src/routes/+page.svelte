<script>
	import Cursor from '../stories/molecules/Cursor/Cursor.svelte';
	import SmoothScroll from '../stories/molecules/SmoothScroll/SmoothScroll.svelte';
	import Footer from '../stories/organisms/Footer/Footer.svelte';
	import Header from '../stories/organisms/Header/Header.svelte';
	import AboutMeSection from '../stories/templates/AboutMeSection/AboutMeSection.svelte';
	import ContactSection from '../stories/templates/ContactSection/ContactSection.svelte';
	import HeroSection from '../stories/templates/HeroSection/HeroSection.svelte';
	import PreloadSection from '../stories/templates/Preload/PreloadSection.svelte';
	import SkillsSection from '../stories/templates/SkillsSection/SkillsSection.svelte';
	import { page } from '$app/state';
	import { scaleLinear } from 'd3';

	let loaded = $state(false);

	let scrollY = $state(0);
	let size = $state(0);
	let scale = $derived(scaleLinear().domain([0, size]).range([1, 100]));
	let percentage = $derived(size > 1500 ? scale(scrollY).toFixed(0) : 1);

	/** @type {Record<string, HTMLElement | null>} } */

	let options = { hero: null, skills: null, about: null, contact: null };

	/** @type { import('smooth-scrollbar').Scrollbar | null} */
	let scrollbar = $state(null);

	$effect(() => {
		let pg = page.url.hash.replace('#', '');
		if (pg) {
			scrollbar.scrollIntoView(options[pg]);
		} else {
			scrollbar.scrollIntoView(options['hero']);
		}
	});
</script>

<PreloadSection
	onfinish={() => {
		loaded = true;
	}}
/>
<Cursor />
<Header
	{percentage}
	menuOptions={[
		{ title: 'Initial Page', href: '#' },
		{ title: 'What do you know?', href: '#skills' },
		{ title: 'Who you are?', href: '#about' },
		{ title: 'How to reach you?', href: '#contact' }
	]}
/>
<SmoothScroll bind:scrollY bind:size bind:scrollbar damping={0.05}>
	<HeroSection bind:el={options['hero']} />
	<SkillsSection bind:el={options['skills']} />
	<AboutMeSection bind:el={options['about']} />
	<ContactSection bind:el={options['contact']} />
	<Footer />
</SmoothScroll>
