<script>
	/** @typedef {object} Props
	 *@property { string} label - the label inside the button
	 *@property { string= } class - the class of the button to styling with TailwindCSS or plain-CSS
	 *@property {onclick } onclick - click event handler for the button
	 */

	/** @type { Props} */
	let { label, ...props } = $props();
</script>

<button
	{...props}
	class="rounded-full disabled:bg-zinc-600 bg-[#16BF78] p-2.5 px-6 font-semibold uppercase tracking-wide text-white shadow-lg duration-300 enabled:hover:-translate-y-0.5 enabled:hover:shadow-xl {props.class}"
>
	{label}
</button>
