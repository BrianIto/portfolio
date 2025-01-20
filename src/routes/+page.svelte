<script>
	import Cursor from '../stories/molecules/Cursor/Cursor.svelte';
	import Header from '../stories/organisms/Header/Header.svelte';
	import HeroSection from '../stories/templates/HeroSection/HeroSection.svelte';
	import PreloadSection from '../stories/templates/Preload/PreloadSection.svelte';
	let loaded = $state(false);
</script>

<PreloadSection
	onfinish={() => {
		loaded = true;
	}}
/>
	<Cursor />
	<Header />
	<HeroSection />
