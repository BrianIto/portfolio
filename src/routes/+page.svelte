<script>
	import Cursor from '../stories/molecules/Cursor/Cursor.svelte';
	import SmoothScroll from '../stories/molecules/SmoothScroll/SmoothScroll.svelte';
	import Header from '../stories/organisms/Header/Header.svelte';
	import HeroSection from '../stories/templates/HeroSection/HeroSection.svelte';
	import PreloadSection from '../stories/templates/Preload/PreloadSection.svelte';
	import SkillsSection from '../stories/templates/SkillsSection/SkillsSection.svelte';

	let loaded = $state(false);
</script>

<PreloadSection
	onfinish={() => {
		loaded = true;
	}}
/>
<Cursor />
<Header />
<SmoothScroll damping={0.05}>
	<HeroSection />
	<SkillsSection />
</SmoothScroll>
