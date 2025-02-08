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
	import { enhance } from '$app/forms';
	import { scaleLinear } from 'd3';

	let scrollY = $state(0);

	let size = $state(0);
	let scale = $derived(scaleLinear().domain([0, size]).range([1, 100]));
	let percentage = $derived(size > 1500 ? +scale(scrollY).toFixed(0) : 1);

	/** @type {Record<string, HTMLElement | null>} } */

	let options = { hero: null, skills: null, about: null, contact: null };
	/**@type{import('smooth-scrollbar').default | null} */
	let scrollbar = $state(null);
	$effect(() => {
		let pg = page.url.hash.replace('#', '');
		if (pg && options[pg]) {
			scrollbar?.scrollIntoView(options[pg]);
		} else if (options['hero']) {
			scrollbar?.scrollIntoView(options['hero']);
		}
	});

	$inspect(page.form);

	let loadingContact = $state(false);
</script>

<svelte:head
	><title>Brian Ito - Portfolio</title><meta name="author" content="Brian Ito" />
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-2PBLVVRXGK"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-2PBLVVRXGK');
	</script>
	<meta
		name="description"
		content="Web Developer with 8 years experience based in Manaus, Brazil. Ready to create amazing websites for you."
	/></svelte:head
>
<PreloadSection />
<Cursor />
<Header
	{percentage}
	menuOptions={[
		{ title: 'Initial Page', href: '#' },
		{ title: 'What do I know?', href: '#skills' },
		{ title: 'Who am I?', href: '#about' },
		{ title: 'How to reach me?', href: '#contact' }
	]}
/>

<SmoothScroll bind:scrollY bind:size bind:scrollbar damping={0.05}>
	<HeroSection bind:el={options['hero']} />
	<SkillsSection bind:el={options['skills']} />
	<AboutMeSection bind:el={options['about']} />
	<form
		use:enhance={() => {
			loadingContact = true;
			return ({ update }) => {
				loadingContact = false;
				update();
			};
		}}
		method="POST"
		action="?/contact"
	>
		<ContactSection
			loading={loadingContact}
			success={page.form?.success}
			oncontact={() => {}}
			bind:el={options['contact']}
		/>
	</form>
	<Footer />
</SmoothScroll>
