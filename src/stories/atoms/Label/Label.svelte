<script>
	/**@typedef {object} Props
	 * @property {("small" | "normal")=} size - the size of the label
	 * @property { string= } class - the class of the element to be added
	 * @property {import("svelte").Snippet=} children - the children of the label
	 */

	/**@type {Props} */
	let { size = 'normal', children, ...props } = $props();
</script>

<p
	class={[{ '!text-lg': size === 'normal' }, ' max-w-72 font-serif text-zinc-200 duration-300 label', props.class]}
>
	{@render children()}
</p>
