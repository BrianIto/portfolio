<script>
	import DynamicIsland from '../../molecules/DynamicIsland/DynamicIsland.svelte';
	import { fly } from 'svelte/transition';
	let open = $state(false);

	/** @typedef {object} Props
	 * @property { number } percentage - the percentage of the scroll
	 * @property {menuOptions: {title: string, href: string}[]} menuOptions - The options for the menu
	 */

	/** @type { Props} */
	let { percentage, menuOptions = [] } = $props();
</script>

<div class="fixed z-50 flex w-full justify-center p-8">
	<DynamicIsland {menuOptions} bind:open title={'Index'} {percentage} />
</div>
{#if open}
	<button
		onclick={() => (open = false)}
		transition:fly
		aria-label="backdrop"
		data-testid="backdrop"
		class="fixed left-0 top-0 z-10 h-[100vh] w-[100vw] cursor-auto bg-black bg-opacity-70 backdrop-blur-md"
	></button>
{/if}
