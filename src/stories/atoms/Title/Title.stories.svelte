<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Title from './Title.svelte';

	const { Story } = defineMeta({
		title: 'Atoms/Title',
		component: Title,
		tags: ['autodocs']
	});
</script>

<Story name="Default" args={{ title: 'What do you know?', side: "left" }} />
<Story name="Right Side" args={{ title: 'What do you know?', side: "right" }} />
