<script>
	import Label from '../Label/Label.svelte';

	/** @typedef {object} Props
	 *@property { string= } label
	 * @property { string=} placeholder
	 *@property {string} value - **bindable**
	 */
	let { label, placeholder, value = $bindable(''), ...props } = $props();
</script>

<div class="text-white">
	<Label class="my-1 flex items-center gap-2">
		<props.icon class="relative h-6 w-6 text-zinc-400 group-[.error]:text-red-400" />

		{label}
	</Label>

	<textarea
		bind:value
		{...props}
		class="mt-1 min-h-32 w-full rounded-lg bg-[#353535] px-3 py-1.5 font-serif text-zinc-300 outline-none duration-200 placeholder:text-zinc-500 focus:bg-zinc-700"
		{placeholder}
	></textarea>
</div>
