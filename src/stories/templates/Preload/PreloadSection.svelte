<script>
	import FullLogo from '$lib/icons/FullLogo.svelte';
	import { onMount } from 'svelte';
	import { fly} from "svelte/transition"
	/** @typedef {object} Props
	 * @property { () => void} onfinish - On Finish Event
	 */

	/** @type {Props} */
	let { onfinish } = $props();
	let done = $state(false);
	onMount(() => {
		setTimeout(() => {
			done = true;
		}, 1800);
	});

	$effect(() => {
		if (done) setTimeout(() => onfinish(), 1000);
	});
</script>

{#if !done}
	<main transition:fly={{delay: 1000, duration: 800}} class="flex fixed top-0 left-0 z-[1000] bg-[#222121] min-h-[100vh] min-w-[100vw] items-center justify-center">
		<section><FullLogo class="w-64 xl:w-96" animated animationDuration={1000} /></section>
	</main>
{/if}
