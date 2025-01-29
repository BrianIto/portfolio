<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Component from './InputText.svelte';
	import { within, userEvent } from '@storybook/test';
	import Person from '$lib/icons/Person.svelte';
	import WhatsApp from '$lib/icons/WhatsApp.svelte';

	/** To show this error, the component should be **dirty**
	 *
	 * For a component to be dirty, it:
	 * - should never been focused before;
	 * - at first blur, even if not changed;
	 * - blurred after first change;
	 */
	const { Story } = defineMeta({
		title: 'Molecules/InputText',
		component: Component,
		tags: ['autodocs']
	});
</script>

<Story
	name="Default"
	args={{ label: 'Hello World', required: false, placeholder: 'testing', testId: 'input' }}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = await canvas.findByTestId('input');
		await userEvent.click(input);
		await userEvent.type(input, 'Hello World');
	}}
/>

<Story
	name="Required"
	args={{ label: 'Hello World', required: true, placeholder: 'This input is required' }}
/>

<Story
	name="With error"
	args={{
		label: 'Hello World',
		required: true,
		placeholder: 'This input is required',
		error: 'this input is required'
	}}
/>

<Story
	name="With Hint"
	args={{
		label: 'Hello World',
		required: true,
		placeholder: 'This input is required',
		hint: 'this is a hint'
	}}
/>

<Story
	name="With Icon"
	args={{
		label: 'Hello World',
		required: true,
		icon: Person,
		testId: 'input',
		placeholder: 'This input is required',
		hint: 'this is a hint'
	}}
	play={async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);
		const input = await canvas.findByTestId('input');
		await userEvent.click(input);
		await userEvent.type(input, 'Hello World');
		await userEvent.clear(input);
		await userEvent.type(input, 'Hello World 2');
		await userEvent.clear(input);
	}}
/>
<Story
	name="Error only when Dirty"
	args={{
		label: 'Hello World',
		error: 'Field is required.',
		required: true,
		showErrorWhenDirty: true
	}}
/>

<Story
	name="Phone Input"
	args={{
		label: 'Phone',
		icon: WhatsApp,
		phone: true,
		hint: 'Select your country code and then fill with your phone.',
		showErrorWhenDirty: true
	}}
/>
