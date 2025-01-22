<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Component from './InteractPixels.svelte';
	import Decorator from './Decorator.svelte';

	/**
	 * Dynamic Island Element made for a custom navigation
	 */

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Molecules/Interactive Pixels',
		component: Component,
		tags: ['autodocs'],
		decorators: [() => Decorator]
	});
</script>

<Story name="Default" />
