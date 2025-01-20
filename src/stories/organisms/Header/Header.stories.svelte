<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Header from './Header.svelte';
	import { within, userEvent, expect } from '@storybook/test';

	/**
	 *  Includes the Dynamic Island and the Backdrop to be shown
	 */

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Organisms/Header',
		component: Header,
		// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
		tags: ['autodocs'],
		argTypes: {}
	});
</script>

<Story
	name="Header With Backdrop"
	args={{}}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		let dynamicIsland = await canvas.findByTestId('dynamic-island');
		let wait = (time = 1000) => new Promise((res) => setTimeout(() => res(true), time));
		userEvent.click(dynamicIsland);

		await wait(500);
		let backdrop = await canvas.findByTestId('backdrop');
		expect(backdrop).toBeVisible();

		userEvent.click(dynamicIsland);
		await wait(500);

		expect(backdrop).not.toBeVisible();

		userEvent.click(dynamicIsland);

		await wait(500);
		await userEvent.click(backdrop);
		await wait(500);
		expect(backdrop).not.toBeVisible();
	}}
/>
