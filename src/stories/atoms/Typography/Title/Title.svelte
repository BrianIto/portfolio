<script>
	/** @typedef {object} Props
	 *@property { string} title - The title to be shown
	 * @property { ("right" | "left") = } side - the side of the element. Could be fixed to the `left` or to the `right`
	 */

	/** @type {Props} */
	const { title, side = 'left' } = $props();
</script>

<div
	class={[
		'flex w-1/2 flex-col',
		{ 'w-1/2 items-end': side === 'left' },
		{ 'ml-[50%] items-start': side === 'right' }
	]}
>
	<h1 class={['w-1/2 text-5xl font-bold uppercase text-white', { 'text-right': side === 'left' }]}>
		{title}
	</h1>
	<div class="relative mt-4 h-1.5 w-full bg-[#16bf78]"></div>
	<div class="relative h-12 w-full bg-gradient-to-b from-[#16bf7846] to-[#16bf7800]"></div>
</div>
