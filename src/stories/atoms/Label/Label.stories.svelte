<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Component from './Label.svelte';
	import { createRawSnippet } from 'svelte';

	const { Story } = defineMeta({
		title: 'Atoms/Label',
		component: Component,
		tags: ['autodocs']
	});
</script>

<Story
	name="Default"
	args={{
		children: createRawSnippet(() => ({
			render: () => `Label de Input`
		}))
	}}
/>
