<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Component from '././Footer.svelte';

	const { Story } = defineMeta({
		title: 'Organisms/Footer',
		component: Component,
		tags: ['autodocs']
	});
</script>

<Story name="Default" />
