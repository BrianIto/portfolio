<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Component from './WebArchitecture.svelte';

	/**
	 *  The full Web Architecture Tab container
	 */

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Organisms/SkillsResume/Web Architecture',
		component: Component,
		layout: 'fullscreen',
		tags: ['autodocs'],
		argTypes: {}
	});
</script>

<Story name="Default" args={{}} />
