<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import BlockCode from './BlockCode.svelte';
	import typescript from 'svelte-highlight/languages/typescript';
	import markdown from 'svelte-highlight/languages/markdown';
	/**
	 * #### This element is a block code. Could be a `<pre></pre>` or `<code></code>`
	 *
	 * It depends on [svelte-highlight.js](https://svhe.onrender.com/). Check it's documentation for more about the usage.
	 */

	const { Story } = defineMeta({
		title: 'Molecules/Code Block',
		component: BlockCode,
		tags: ['autodocs'],
		argTypes: {
			language: { control: false }
		}
	});
</script>

<Story name="Default" args={{ language: typescript, code: "console.log('Hello World')" }} />

<Story
	name="With Number"
	args={{ language: typescript, code: "console.log('Hello World')", number: true }}
/>
<Story
	name="With Header"
	args={{ language: typescript, code: "console.log('Hello World')", number: true, hasHeader: true, filename: "helloworld.js" }}
/>
