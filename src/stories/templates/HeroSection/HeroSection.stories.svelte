<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import HeroSection from './HeroSection.svelte';

	/**
	 *  	The full hero section for the page
	 */

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Templates/Hero Section',
		component: HeroSection,
		layout: 'fullscreen',
		tags: ['autodocs'],
		argTypes: {}
	});
</script>

<Story name="Default" args={{ delay: 0.5}} />
