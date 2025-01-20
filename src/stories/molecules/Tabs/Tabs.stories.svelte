<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Tabs from './Tabs.svelte';
	import { fn, within, expect, userEvent } from '@storybook/test';
	/**
	 * Tabs to filter between interests of the user. Fold multiple pages
	 * is important for big same template content doesn't be everywhere.
	 */
	const { Story } = defineMeta({
		title: 'Molecules/Tabs',
		component: Tabs,
		tags: ['autodocs']
	});
</script>

<Story
	name="Default"
	args={{
		options: ['Frontend Frameworks', 'Data Visualization', 'Interaction Design'],
		onchange: fn()
	}}
	play={async ({ canvasElement, args }) => {
		let canvas = within(canvasElement);
		let tab0 = await canvas.findByTestId('tab-0');
		let tab1 = await canvas.findByTestId('tab-1');
		let tab2 = await canvas.findByTestId('tab-2');
		await userEvent.click(tab1);
		expect(args.onchange).toBeCalled();
		await userEvent.click(tab2);
		await userEvent.click(tab0);
	}}
/>
