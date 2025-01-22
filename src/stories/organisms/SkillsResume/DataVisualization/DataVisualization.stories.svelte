<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import DataVisualization from './DataVisualization.svelte';

	/**
	 *  	The full hero section for the page
	 */

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Organisms/SkillsResume/Data Visualization',
		component: DataVisualization,
		layout: 'fullscreen',
		tags: ['autodocs'],
		argTypes: {}
	});
</script>

<Story name="Default" args={{}} />
