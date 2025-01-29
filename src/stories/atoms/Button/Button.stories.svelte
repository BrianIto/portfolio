<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';
	import { within, expect, fn, userEvent } from '@storybook/test';
	/**
	 * Button is a main component that perform actions. Use it carefully they call a lot of attention.
	 *
	 */

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Atoms/Button',
		component: Button,
		tags: ['autodocs']
	});
</script>

<Story
	name="Default"
	args={{ label: 'A plain button', onclick: fn() }}
	play={async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);
		let button = await canvas.findByRole('button');
		userEvent.click(button);
	}}
/>
