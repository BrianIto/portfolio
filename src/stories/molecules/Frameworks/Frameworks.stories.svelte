<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Frameworks from './Frameworks.svelte';

	/**
	 * Dynamic Island Element made for a custom navigation
	 */

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Molecules/Frameworks',
		component: Frameworks,
		tags: ['autodocs'],
		argTypes: { percentage: { control: 'range' } }
	});
</script>

<Story name="Default" />
