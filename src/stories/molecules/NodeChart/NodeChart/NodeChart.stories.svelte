<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import NodeChart from './NodeChart.svelte';

	const { Story } = defineMeta({
		title: 'Molecules/Charts/NodeChart',
		component: NodeChart,
		tags: ['autodocs']
	});
</script>

<Story name="Default" />
