<script module>
</script>

<script>
	import Scrollbar from 'smooth-scrollbar';

	/** @typedef {object} Props
	 * @property { import('svelte').Snippet} children - the children of the element
	 *  @property { number } damping - A number between `0` and `1`. A perfect match should be something between 0.01 and 0.2. Above this almost no difference.
	 *  @property { number } scrollY - The offset difference
	 *  @property { number } size - The total amount of the scroll
	 * @property { Scrollbar | null } scrollbar - the scrollbar element
	 */

	/**@type {Props} */
	let {
		children,
		damping = 0.04,
		scrollY = $bindable(0),
		size = $bindable(0),
		scrollbar = $bindable(null)
	} = $props();

	/**
	 * The div element to be smooth scrolled
	 * @type { HTMLDivElement= }
	 */
	let divElement = $state();

	$effect(() => {
		if (divElement) {
			divElement.style.padding = '0';
			let _scrollbar = Scrollbar.init(divElement, { damping, thumbMinSize: 10 });
			_scrollbar.addListener((e) => {
				scrollY = e.offset.y;
				size = e.limit.y;
			});
			scrollbar = _scrollbar;
		}
	});
</script>

<div style="max-height: 100vh; padding: 12px" bind:this={divElement}>
	{@render children?.()}
</div>

<style>
	:global(div.scrollbar-track) {
		background: rgba(255, 255, 255, 0.05);
		border-radius: 12px;
	}
	:global(div.scrollbar-thumb) {
		background: rgba(255, 255, 255, 0.3);
	}
</style>
