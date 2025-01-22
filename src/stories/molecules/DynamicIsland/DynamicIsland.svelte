<script>
	import ChevronDown from '$lib/icons/ChevronDown.svelte';
	import DonutChart from '../../atoms/DonutChart.svelte';
	import { fly, slide } from 'svelte/transition';
	import { Tween } from 'svelte/motion';

	/** @typedef {object} Props
	 * @property {number} percentage - the percentage to be shown
	 * @property {string} title - The title to be shown in the dynamic island
	 * @property { boolean= } open - **Bindable!** The open controller
	 * @property {string=} testId - The data TestID of the element for Testing Library
	 * @property {string=} menuTestId - The data TestID of the Menu element for Testing Library
	 * @property {((open: boolean) => void)=} onopen - On open Event Handler
	 */

	/**@type {Props} */
	let {
		percentage = 15,
		title = 'Dynamic Island',
		testId = 'dynamic-island',
		open = $bindable(false),
		menuTestId = 'menu-dynamic-island',
		onopen = () => {}
	} = $props();

	let menuOptions = $state([
		{ title: 'option 1' },
		{ title: 'option 2' },
		{ title: 'option 3' },
		{ title: 'option 1' },
		{ title: 'option 2' },
		{ title: 'option 3' }
	]);

	// Create a tweened store for the width of the header
	let headerWidth = new Tween(200, {
		duration: 90
	});

	$effect(() => {
		headerWidth.set(open ? 300 : 200);
	});
</script>

<button
	data-testid={testId}
	style="width: {headerWidth.current}px;"
	onclick={() => {
		open = !open;
		onopen(open);
	}}
	class={[
		'rounded-3xl bg-[#242424] py-2 text-white shadow-md outline-none duration-300 hover:shadow-lg',
		!open ? 'hover:scale-105 ' : ''
	]}
>
	<div class="flex items-center gap-12 pl-5 pr-2.5">
		<p
			class="m-0 line-clamp-1 flex w-full flex-1 items-center gap-2 text-left font-sans text-base duration-300"
		>
			{title}<ChevronDown class={['h-4 w-4 duration-300', open ? 'rotate-180' : '']} />
		</p>
		<div class="flex items-center gap-2 duration-300">
			<p class="w-auto font-sans text-xs opacity-40">{percentage}%</p>
			<DonutChart color="#FC0" {percentage} max={100} />
		</div>
	</div>

	{#if open}
		<div transition:slide data-testid={menuTestId} class="mt-2 w-72 rounded-lg p-2 ">
			<ul class="px-2">
				{#each menuOptions as menuOption, i}
					<li
						transition:fly|global={{ x: 5, delay: 100 * i }}
						class="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 font-sans text-sm opacity-50 duration-300 hover:opacity-100"
					>
						{menuOption.title}
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</button>
