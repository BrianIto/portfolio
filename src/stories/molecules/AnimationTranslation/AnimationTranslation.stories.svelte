<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import AnimationTranslation from './AnimationTranslation.svelte';

	/**
	 * A following mouse cursor to be on the background;
	 */

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Molecules/Animation Translation',
		component: AnimationTranslation,
		// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
		tags: ['autodocs'],
		argTypes: {}
	});
</script>

<Story name="Default" args={{}} play={async () => {}} />
