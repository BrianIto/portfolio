<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Component from '././ContactForm.svelte';

	const { Story } = defineMeta({
		title: 'Organisms/ContactForm',
		component: Component,
		tags: ['autodocs']
	});
</script>

<Story name="Default" />
