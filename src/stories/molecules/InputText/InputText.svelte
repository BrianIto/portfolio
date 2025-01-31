<script>
	import Label from '../../atoms/Label/Label.svelte';
	import { slide } from 'svelte/transition';
	import { normalizedCountries } from 'svelte-tel-input';
	import 'svelte-tel-input/styles/flags.css';
	import Select from '../../atoms/Select/Select.svelte';
	import { formatIncompletePhoneNumber } from 'libphonenumber-js';

	/**@typedef {object} Props
	 * @property { string } value - the value of the input.
	 * @property { string= } label - the label of the input.
	 * @property { boolean } required - if the input is required.
	 * @property { string= } placeholder - the input placeholder.
	 * @property { string= } hint  - the input hint below the element.
	 * @property {import('svelte').Snippet=} icon - the form icon element.
	 * @property { string= } error - the error to be shown. Updates the state of the element to have error too.
	 * @property { boolean= } disabled - the disabled state of the element.
	 * @property { string= } testId - the TestID for this component
	 * @property { boolean=} phone - If the input is phone type.
	 * @property {import('libphonenumber-js').CountryCode=} phoneRegion - Gets or inserts the phone region for input **bindable**
	 * @property { boolean=} showErrorWhenDirty - Show errors only when the component is dirty
	 * @property { import('svelte').Component} icon - The icon Svelte element. *Must be a Svelte Snippet*.
	 */

	/** @type {Props & import('svelte/elements').HTMLInputAttributes} */
	let {
		label,
		value = $bindable(''),
		required,
		placeholder = '',
		error,
		hint,
		phone,
		phoneRegion = $bindable('BR'),
		icon,
		testId,
		showErrorWhenDirty,
		...props
	} = $props();

	let dirty = $state(false);
	let shouldShowError = $derived(((showErrorWhenDirty && dirty) || !showErrorWhenDirty) && error);
</script>

{#snippet errorSnippet(msg, isError)}
	{#if shouldShowError || hint}
		{#if msg != ''}
			<div transition:slide|global>
				<p
					class={[
						'hint py-1 font-serif text-sm  first-letter:capitalize',
						{ 'text-red-400': !!isError && shouldShowError },
						{ 'text-zinc-500': !isError || !shouldShowError }
					]}
				>
					{msg}
				</p>
			</div>
		{/if}{/if}
{/snippet}

<div
	class={[
		'group flex w-full flex-col-reverse',
		{ error: shouldShowError, icon: !!icon, phone: phone, 'mt-3': phone }
	]}
>
	{@render errorSnippet(shouldShowError ? error : hint, shouldShowError)}

	{#if props.icon}
		<props.icon
			class="relative -top-2 -mt-6 ml-1 h-6 w-6 text-zinc-400 group-[.error]:text-red-400"
		/>
	{/if}
	<input
		data-testid={testId}
		bind:value
		onblur={() => (dirty = true)}
		class={[
			'peer w-full border-b bg-transparent px-1 py-1 font-serif text-lg text-zinc-300 outline-none duration-200 placeholder:text-transparent group-[.error]:border-red-400 group-[.phone]:pl-36 group-[.error]:text-red-400 placeholder:focus:text-zinc-500 disabled:opacity-50',
			{ 'pl-9': !!icon }
		]}
		oninput={(v) => {
			if (phone) {
				value = formatIncompletePhoneNumber(v.target.value, phoneRegion)
					.replace(/[\(\)]/g, ' ')
					.replace(/\s+/g, ' ')
					.trim();
			}
		}}
		{required}
		{placeholder}
		{...props}
	/>
	{#snippet valueSnippet(option)}
		<div class="flex items-center gap-1.5 text-sm !text-white">
			<span class={'flag flag-' + option.value.toLowerCase()}></span>{option.label.split(' - ')[0]}
		</div>
	{/snippet}
	{#snippet optionSnippet(option)}
		<div class="flex items-center gap-1.5 px-1.5 py-2 text-left text-sm !text-white">
			<span class={'flag flag-' + option.value.toLowerCase() + ' !h-3 !w-5'}></span><span
				>{option.label.split(' - ')[0]}</span
			>
			-
			<span class="opacity-50">{option.label.split(' - ')[1]}</span>
		</div>
	{/snippet}
	{#if phone}
		<div class="relative left-8 top-8 -mt-10 w-24">
			<Select
				bind:selectedValue={phoneRegion}
				searchable
				options={normalizedCountries.map((country) => ({
					label: '+' + country.dialCode + ' - ' + country.name,
					value: country.id
				}))}
				{valueSnippet}
				{optionSnippet}
			/>
		</div>
	{/if}
	{#if label}
		<Label
			class={[
				'relative -bottom-8 -z-10 w-fit !max-w-auto origin-top-left group-[.phone]:-bottom-5 group-[.phone]:left-24 group-[.error]:text-red-400 peer-focus:bottom-0 peer-focus:translate-y-3 peer-focus:scale-75 group-[.phone]:peer-focus:bottom-3 group-[.phone]:peer-focus:left-0 peer-disabled:opacity-50',
				{
					'!bottom-0 !translate-y-3 !scale-75 group-[.phone]:!bottom-3 group-[.phone]:!left-0 group-[.icon]:-translate-x-8 ':
						!!value
				},
				{ 'pl-10 peer-focus:-translate-x-8': !!icon }
			]}
			>{label}
			{#if required}<span class="text-red-400">*</span>{/if}</Label
		>
	{/if}
</div>
