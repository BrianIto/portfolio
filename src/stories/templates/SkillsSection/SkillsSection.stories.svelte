<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import SkillsSection from './SkillsSection.svelte';
	import { fn } from '@storybook/test';

	/**
	 *  	The full hero section for the page
	 */

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Templates/Skills Section',
		component: SkillsSection,
		layout: 'fullscreen',
		tags: ['autodocs'],
		argTypes: {}
	});
</script>

<Story name="Default" args={{}} />
