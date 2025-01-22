<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Heading2 from './Heading2.svelte';
	import { createRawSnippet } from 'svelte';

	/**
	 * Heading 2 is just meant to be used below a Heading 1. Respect Hierarchy!
	 *
	 * The typography here is to make **headlines call attention** and be easy to read as possible.
	 */

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Atoms/Typography/Heading 2',
		component: Heading2,
		tags: ['autodocs']
	});
</script>

<Story
	name="Default"
	args={{
		children: createRawSnippet(() => {
			return {
				render: () => `This is a Heading 2`
			};
		})
	}}
/>
