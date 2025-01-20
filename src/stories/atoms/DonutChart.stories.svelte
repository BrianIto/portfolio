<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import DonutChart from './DonutChart.svelte';

	/**
	 * **This is a helper component, and not meant to be used standalone**.
	 *
	 *
	 * Donut Chart to be shown when the user whats some data displayed in an Arc. This should be use carefully for small views. Donuts charts
	 * are no good for dashboards because they often say less than displaying percentages one below each other.
	 *
	 * People don't think in arcs, they
	 * think in lines. So, for dashboards, prefer using bar or line charts.
	 */

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Atoms/Donut Chart',
		component: DonutChart,
		// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
		tags: ['autodocs'],
		argTypes: {
			percentage: { control: 'range' }
		}
	});
</script>

<Story
	name="Donut"
	args={{}}
/>
