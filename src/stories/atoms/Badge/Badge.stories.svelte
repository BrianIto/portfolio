<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Badge from './Badge.svelte';
	import { within, expect, fn, userEvent } from '@storybook/test';
	import { createRawSnippet } from 'svelte';
	/**
	 * Button is a main component that perform actions. Use it carefully they call a lot of attention.
	 *
	 */

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Atoms/Badge',
		component: Badge,
		tags: ['autodocs'],
		layout: "fullscreen",
	});
</script>

<Story
	name="Default"
	args={{
		children: createRawSnippet(() => {
			return {
				render: () => `badge element`
			};
		})
	}}
	play={async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);
		let button = await canvas.findByTestId('badge');
	}}
/>
