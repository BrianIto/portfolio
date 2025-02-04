<script>
	/** @typedef { object} Props
	 * @property { import("svelte").Snippet } children - the children of the element
	 * @property { import("svelte/elements").MouseEventHandler<HTMLButtonElement> =} onmouseenter - the event function for mouseup
	 * @property { boolean } selected - if the element is selected
	 */

	/** @type {Props} */
	const { children, onmouseenter, selected } = $props();
</script>

<button
	{onmouseenter}
	class={["inline duration-200 w-auto rounded-full bg-white px-5 py-1.5 text-center font-serif text-xs font-semibold text-zinc-900 opacity-50 hover:opacity-100", { "!opacity-100": selected}]}
>
	{@render children()}
</button>
