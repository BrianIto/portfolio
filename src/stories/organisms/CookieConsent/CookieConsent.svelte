<script>
	import { fly } from 'svelte/transition';

	/** @typedef { object }Props
	 * @property {boolean} answered - If the usered answered something
	 * @property {() => void} onAccept - Event for the user accepted
	 * @property {() => void} onReject - Event that triggers when the user rejects cookies
	 */

	/** @type {Props} */
	let { answered, onAccept, onReject } = $props();
</script>

{#if !answered}
	<dialog
		transition:fly={{ x: -50 }}
		open
		class="bottom-8 -translate-x-2/3 rounded-lg bg-white p-4 pb-3 z-50"
	>
		<div class="flex gap-2">
			<div class="flex max-w-md flex-1 flex-col justify-center">
				<h2 class="-mt-1 mb-2 font-serif font-semibold">🍪 This page uses some cookies</h2>
				<p class="font-serif text-sm">
					They're completely safe and only collect anonymous data to help improve this portfolio. Do
					you authorize their use?
				</p>
			</div>
			<div class="flex flex-col items-center justify-center gap-1.5">
				<button
					onclick={onAccept}
					class="w-full rounded bg-zinc-800 py-2 text-white duration-200 hover:bg-zinc-700"
					>I authorize</button
				>
				<button onclick={onReject} class="rounded px-2 py-2 hover:bg-zinc-100"
					>I don't want cookies</button
				>
			</div>
		</div>
	</dialog>
{/if}
