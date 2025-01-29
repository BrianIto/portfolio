<script>
	import ChevronDown from '$lib/icons/ChevronDown.svelte';
	import { clickOutsideAction, normalizedCountries } from 'svelte-tel-input';
	import { fly } from 'svelte/transition';
	/**
	 * @typedef {Object} Option
	 * @property {*} value - The value of the option.
	 * @property {string} label - The label of the option.
	 * @property {string=} icon - The icon name for the option (optional).
	 */

	/** @typedef { object} Props
	 * @property {Option[]} options - The list of options for the select component.
	 * @property {*} selectedValue - The selected value
	 * @property {import('svelte').Snippet<[Option]>} optionSnippet - the option snippet
	 * @property {import('svelte').Snippet<[Option]>} valueSnippet - the selected option snippet
	 * @property {string} label - The label for the select component.
	 * @property {string=} id - the unique identifier of the select
	 * @property {string=} testId - the unique identifier for testing of the select
	 * @property {(option: Option) => void} onchange - the on change fn
	 * @property { boolean=} searchable - if the user can search in the input
	 * @property {string=} containerClass - the container classes;
	 */

	/** @type {Props}  */
	let {
		options = [],
		selectedValue = $bindable(''),
		id = 'select',
		testId = 'select',
		containerClass = '',
		searchable,
		onchange = selectOption,
		optionSnippet,
		valueSnippet
	} = $props();

	// State for dropdown visibility
	let isOpen = $state(false);
	// The string for the search
	let searchValue = $state('');
	let filteredOptions = $derived(
		options.filter((opt) => opt.label.toLowerCase().includes(searchValue.toLowerCase()))
	);
	let selectedOption = $derived(options.find((i) => i.value === selectedValue) ?? options[0]);
	/**
	 * Handles option selection.
	 * @param {Option} option - The selected option.
	 */
	function selectOption(option) {
		selectedValue = option.value;
		isOpen = false;
		onchange(option);
	}

	/**
	 * Handles keyboard navigation.
	 * @param {KeyboardEvent} event - The keyboard event.
	 */
	function handleKeydown(event) {
		if (event.key === 'Escape') {
			isOpen = false;
		} else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
			event.preventDefault();
			const currentIndex = options.findIndex((opt) => opt.value === selectedValue);
			let nextIndex = currentIndex;

			if (event.key === 'ArrowDown') {
				nextIndex = (currentIndex + 1) % options.length;
			} else if (event.key === 'ArrowUp') {
				nextIndex = (currentIndex - 1 + options.length) % options.length;
			}

			selectOption(options[nextIndex]);
		}
	}

	$effect(() => {
		if (!isOpen) searchValue = '';
	});
</script>

<div class={['group relative', { open: isOpen }, containerClass]}>
	<button
		{id}
		type="button"
		class="relative flex w-full items-center justify-between rounded-md bg-zinc-700 px-1.5 py-1 text-left text-base shadow-sm outline-none"
		onclick={() => (isOpen = !isOpen)}
		onkeydown={handleKeydown}
		data-testid={testId}
		aria-haspopup="listbox"
		aria-expanded={isOpen}
		aria-labelledby={`${id}-label`}
	>
		<div class="flex items-center gap-2">
			{#if valueSnippet}
				{@render valueSnippet?.(selectedOption)}
			{:else if optionSnippet}
				{@render optionSnippet?.(selectedOption)}
			{:else}
				<div class="flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-white">
					{selectedOption.label}
				</div>
			{/if}
		</div>
		<div class="absolute right-1">
			<ChevronDown class={'h-5 w-5 text-white duration-300 group-[.open]:rotate-180'} />
		</div>
	</button>
	<!-- Custom Dropdown -->
	{#if isOpen}
		<div
			transition:fly={{ y: -8 }}
			use:clickOutsideAction={() => (isOpen = false)}
			data-testid={testId + '-dropdown'}
			class="absolute z-10 mt-2 flex max-h-64 w-full lg:min-w-80 min-w-56 flex-col overflow-y-auto rounded-md bg-zinc-700 py-2 shadow-lg scrollbar scrollbar-thumb-[#222121AA] scrollbar-thumb-rounded-lg scrollbar-w-1"
			role="listbox"
			aria-labelledby={`${id}-label`}
		>
			{#if searchable}
				<input
					bind:value={searchValue}
					class="mx-3 mb-2 border-b bg-transparent px-2 py-1.5 text-sm text-white opacity-50 outline-none focus:opacity-100"
					placeholder="Search"
					type="text"
				/>
			{/if}
			{#each filteredOptions as option, i}
				<button
					role="option"
					aria-selected={option.value === selectedValue}
					data-testid={testId + '-option-' + (i + 1)}
					class="border-box mx-2 cursor-pointer rounded duration-200 hover:bg-zinc-800"
					onclick={() => selectOption(option)}
					onkeydown={(e) => e.key === 'Enter' && selectOption(option)}
				>
					{#if optionSnippet}
						{@render optionSnippet?.(option)}
					{:else}
						<span class="flex cursor-pointer items-center gap-2 px-3 py-2 text-white"
							>{option.label}</span
						>
					{/if}
				</button>
			{/each}
		</div>
	{/if}
</div>
