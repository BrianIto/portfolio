<script>
	/** @typedef {object} Props
	 *@property { string} title - The title to be shown
	 * @property { string=} id - the id of the title
	 * @property { ("right" | "left" | 'center') = } side - the side of the element. Could be fixed to the `left` or to the `right`
	 */

	/** @type {Props} */
	const { title, side = 'left', id  } = $props();
</script>

<div
	{id}
	class={[
		'flex w-full text-center w-full lg:w-1/2 flex-col',
		{ 'w-1/2 items-end': side === 'left' },
		{ 'lg:ml-[50%] items-center lg:items-start': side === 'right' },
	{"mx-auto lg:w-auto": side === "center"}
	]}
>
	<h1 class={['lg:w-1/2 w-full text-center px-12 lg:px-0 text-3xl lg:text-5xl font-bold uppercase text-white', 
		{ 'lg:text-right': side === 'left', 'text-center lg:w-auto lg:px-8': side === "center" }]}>
		{title}
	</h1>
	<div class="relative mt-4 h-1.5 w-full bg-[#16bf78]"></div>
	<div class="relative h-12 w-full bg-gradient-to-b from-[#16bf7846] to-[#16bf7800]"></div>
</div>
