<script>
	/** @typedef { object } Props
	 * @property {string[]} options - The options string array
	 * @property {number} indexSelected - **Bindable** the index of the selected option
	 * @property {((index: number) => void)=} onchange - Event for the change of the tab.
	 */

	/** @type { Props} */
	let { options, indexSelected = $bindable(0), onchange = () => {} } = $props();
	$effect(() => {
		onchange(indexSelected);
	});
</script>

<div class="flex flex-col lg:flex-row  lg:w-auto w-full  border-box gap-2 rounded-lg bg-[#393939] p-2 text-white">
	{#each options as option, i}
		<button
			data-testid={'tab-' + i}
			onclick={() => (indexSelected = i)}
			class={[
				'cursor-pointer rounded-lg px-8 lg:px-5 py-2 font-sans text-sm font-bold uppercase duration-200 hover:bg-zinc-600',
				{ '!bg-white text-zinc-800': i === indexSelected }
			]}
		>
			{option}
		</button>
	{/each}
</div>
