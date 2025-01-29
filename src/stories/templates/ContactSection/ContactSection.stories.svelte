
<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ContactSection from './ContactSection.svelte';

	/**
	 *  	The full contact section for the page
	 */

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Templates/Contact Section',
		component: ContactSection,
		layout: 'fullscreen',
		tags: ['autodocs'],
		argTypes: {}
	});
</script>

<Story name="Default" args={{}} />
