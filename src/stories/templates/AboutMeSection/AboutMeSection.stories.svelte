<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import AboutMeSection from './AboutMeSection.svelte';

	/**
	 *  	The full hero section for the page
	 */

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Templates/About Me Section',
		component: AboutMeSection,
		layout: 'fullscreen',
		tags: ['autodocs'],
		argTypes: {}
	});
</script>

<Story name="Default" args={{}} />
