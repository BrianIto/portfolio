<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Component from './TextArea.svelte';
	import Email from '$lib/icons/Email.svelte';

	const { Story } = defineMeta({
		title: 'Atoms/TextArea',
		component: Component,
		tags: ['autodocs']
	});
</script>

<Story
	name="Default"
	args={{
		label: 'Message',
		icon: Email,
		placeholder:
			'Spammers are everywhere. Unfortunetaly we need to protect e-mails with these kind of forms to prevent spammers and hijackers.'
	}}
/>
