<script>
	import Highlight, { LineNumbers } from 'svelte-highlight';
	import Github from 'svelte-highlight/styles/github-dark-dimmed';
	import typescript from 'svelte-highlight/languages/typescript';
	/**
	 * @typedef { object } Props
	 * @property { import('svelte-highlight/languages').LanguageType<string> } language - the language to be used. Example: typescript, markdown, etc.
	 * <br><br>
	 * Should be imported from ```svelte-highlight/languages```
	 * <br><br>
	 * @property { string } code - the code to be highlighted
	 * @property { string= } filename - the filename (only if the header is on!)
	 * @property { boolean= } hasHeader - if the Header should be shown
	 * @property { boolean= } number - if the numbers should be shown
	 * @property { "xs" | "sm" | "md" } size - the size of the font
	 */

	/** @type { Props } */
	const {
		language = typescript,
		code,
		hasHeader = false,
		number = false,
		filename,
		size = 'md'
	} = $props();
</script>

<svelte:head>
	{@html Github}
</svelte:head>

<div class={['rounded-lg bg-[#22272e] p-1 scale-90 md:scale-100']}>
	{#if hasHeader}
		<div class="flex items-center gap-3 p-3">
			<div class="relative h-3 w-3 rounded-full bg-[#FC4E4C]"></div>
			<div class="relative h-3 w-3 rounded-full bg-[#FEB53D]"></div>
			<div class="relative h-3 w-3 rounded-full bg-[#35C144]"></div>
			{#if filename}
				<p class="ml-4 border-x border-blue-400 px-4 !font-sans !text-base text-blue-300 opacity-50">
					{filename}
				</p>
			{/if}
		</div>
	{/if}
	{#if number}
		<Highlight {language} {code} let:highlighted style="text-size: 0.75rem">
			<LineNumbers
				{highlighted}
				--line-number-color="rgba(255, 255, 255, 0.3)"
				--border-color="rgba(255, 255, 255, 0)"
			/>
		</Highlight>
	{:else}
		<Highlight {language} {code} />
	{/if}
</div>
