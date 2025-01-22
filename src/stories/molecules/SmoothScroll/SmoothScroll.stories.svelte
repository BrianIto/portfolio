<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Component from '././SmoothScroll.svelte';
	import { createRawSnippet } from 'svelte';

	/** ## READ THIS FIRST!
	 *  ### This is a really hard to work with smooth scrolling.
	 * That's because it is not the native `GSAP ScrollSmoother` Plugin. This is the [smooth-scrollbar](https://idiotwu.github.io/smooth-scrollbar/) plugin.
	 *
	 * This plugin uses transformations to make changes on the page and give it the lerps necessary. It makes the process kinda complex and can lead to errors.
	 *
	 * Also, it's not easily integrated with GSAP. But it's free.
	 *
	 * See this [tutorial](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.scrollerProxy()/) to check how to integrate with GSAP SmoothTrigger using scrollerProxy
	 */
	const { Story } = defineMeta({
		title: 'Molecules/SmoothScroll',
		component: Component,
		tags: ['autodocs']
	});
</script>

<script>
	let words = [
		'car',
		'lavatory',
		'realm',
		'person',
		'goes',
		'to',
		'the',
		'mall',
		'today',
		'lets',
		'go'
	];

	/**
	 * Gets a random int. The following interval: [min,max)
	 * @param {number} min - the minimum value, inclusive
	 * @param {number} max - the maximum value, exclusive
	 * @returns {number} a random int between the interval
	 */
	function getRandomInt(min, max) {
		const minCeiled = Math.ceil(min);
		const maxFloored = Math.floor(max);
		return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
	}
</script>

<Story
	name="Default"
	args={{
		children: createRawSnippet(() => ({
			render: () => {
				let reallyBigText = new Array(1200)
					.fill(0)
					.map(() => {
						return words[getRandomInt(0, words.length)];
					})
					.join(' ');

				return `<section style="color: #FFF; opacity: 0.5"><p>${reallyBigText}</p><p>${reallyBigText}</section>`;
			}
		}))
	}}
/>

<Story
	name="With small text"
	args={{
		children: createRawSnippet(() => ({
			render: () => {
				let reallyBigText = new Array(10)
					.fill(0)
					.map(() => {
						return words[getRandomInt(0, words.length)];
					})
					.join(' ');

				return `<section style="color: #FFF; opacity: 0.5"><p>${reallyBigText}</p></section>`;
			}
		}))
	}}
/>
