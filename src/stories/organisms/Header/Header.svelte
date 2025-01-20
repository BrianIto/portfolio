<script>
	import DynamicIsland from '../../molecules/DynamicIsland/DynamicIsland.svelte';
	import { fly } from 'svelte/transition';

	let open = $state(false);
</script>

<div class="fixed z-50 w-full flex justify-center p-8">
	<DynamicIsland bind:open title={'Index'} percentage={10} />
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
