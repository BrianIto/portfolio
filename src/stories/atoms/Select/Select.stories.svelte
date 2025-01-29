<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Component from '././Select.svelte';
	import { within, userEvent, expect, fn, waitFor } from '@storybook/test';
	import { createRawSnippet } from 'svelte';
	import { normalizedCountries } from 'svelte-tel-input';
	const { Story } = defineMeta({
		title: 'Atoms/Select',
		component: Component,
		tags: ['autodocs']
	});
</script>

<Story
	name="Default"
	args={{
		options: [
			{ label: 'AF', value: 'AF' },
			{ label: 'BR', value: 'BR' }
		],
		onchange: fn()
	}}
	play={async ({ canvasElement }) => {
		let canvas = within(canvasElement);
		let selectButton = await canvas.findByTestId('select');
		await userEvent.click(selectButton);
		let selectDropdown = await canvas.findByTestId('select-dropdown');
		await waitFor(async () => {
			expect(selectDropdown).toBeVisible();
		});
		let option1 = await canvas.findByTestId('select-option-1');
		userEvent.click(option1);
		await waitFor(() => {
			expect(selectDropdown).not.toBeVisible();
		});
		await userEvent.click(selectButton);
		let option2 = await canvas.findByTestId('select-option-2');
		userEvent.click(option2);
		await waitFor(() => {
			expect(selectDropdown).not.toBeVisible();
		});
	}}
/>

<Story
	name="With Snippet"
	args={{
		options: normalizedCountries.map((country) => ({
			label: '+'+country.dialCode + ' - ' + country.name,
			value: country.id
		})),
		onchange: fn(),
		optionSnippet: createRawSnippet((option) => ({
			render: () => {
				return `<div class="text-sm w-full text-left text-white px-3 py-2">
					${option().label}
				</div>`;
			}
		})),

		valueSnippet: createRawSnippet((option) => ({
			render: () => {
				let code = option().label.split(" - ")[0];
				return `<div class="text-sm text-left text-white px-0">
					${code}
				</div>`;
			}
		}))
	}}
/>
