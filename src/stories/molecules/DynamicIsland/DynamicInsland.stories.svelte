<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import DynamicIsland from './DynamicIsland.svelte';
	import { within, userEvent, expect, fn } from '@storybook/test';

	/**
	 * Dynamic Island Element made for a custom navigation
	 */

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Molecules/Dynamic Island',
		component: DynamicIsland,
		// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
		tags: ['autodocs'],
		argTypes: { percentage: { control: 'range' } }
	});
</script>

<Story
	name="Dynamic Closed"
	args={{ percentage: 35, title: 'Index', onopen: fn() }}
	play={async ({ canvasElement }) => {
		let button = await within(canvasElement).findByTestId('dynamic-island');
		await userEvent.click(button);
		let menu = await within(canvasElement).findByTestId('menu-dynamic-island');
		let wait = (time = 1000) => new Promise((res) => setTimeout(() => res(), time));
		await wait(500);
		await expect(menu).toBeVisible();
		await userEvent.click(button);
		await wait(1000);
		await expect(menu).not.toBeVisible();
	}}
/>
