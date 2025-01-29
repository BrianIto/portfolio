<script>
	import { javascript } from 'svelte-highlight/languages';
	import Heading2 from '../../../stories/atoms/Typography/Heading2/Heading2.svelte';
	import D3 from '$lib/icons/D3.svelte';
	import Title from '../../../stories/atoms/Typography/Title/Title.svelte';
	import BlockCode from '../../../stories/molecules/BlockCode/BlockCode.svelte';
	import React from '../../../stories/assets/react.webp';
	import Angular from '../../../stories/assets/angular.svg';
	import Svelte from '../../../stories/assets/svelte.webp';
	import Storybook from '../../../stories/assets/storybook.webp';
	import NodeChart from '../../../stories/molecules/NodeChart/NodeChart/NodeChart.svelte';

	let title = 'Data Visualization';
</script>

<svelte:head>
	<title>{title} - Brian Portfolio</title>
</svelte:head>
<Title id="main" side="center" {title}></Title>
<p class="!mt-16 px-6">
	<b class="font-bold">Data visualization is about turning complex data into simpler views.</b> People
	must not bee n an expert to see a chart and extract relevant insights from it. Well distributed and
	well drawn data graphs makes this process simple to intuitive. I craft these Data Visualizations for
	the Web using a tool called D3.js and SVG (Scalable Vector Graphics).
</p>
<p class="px-6">
	I often don't use (except if needed or asked) prebuilt JS chart libraries like Chart.js or
	Highcharts.
</p>
<Heading2 id="d3" class="mx-auto w-full max-w-5xl px-6 py-4 pt-8"
	>TO D3, IMAGINATION IS THE LIMIT</Heading2
>
<div class="mx-auto grid max-w-5xl px-6 md:grid-cols-6">
	<div class="col-span-4">
		<p>
			D3 is an ”acronymn” to Data-Driven Development. It grabs the data and can plot anything in the
			screen. It can use native HTML elements, Canvas draw, and SVG.
		</p>
		<p>
			Next.js came to fix those flaws. It does something called SSR (Server-Side Rendering) which
			populates the HTML file directly using the frontend server.
		</p>
		<p>
			I can develop with both with ease. All code I make is documented and Type-defined using
			TypeScript and JSDoc. Most of the cases my components will be something like that:
		</p>
	</div>
	<div class="col-span-2"><D3 /></div>
</div>
<div class="my-6 hidden gap-6 md:grid">
	<BlockCode
		filename="App.ts"
		hasHeader
		size="xs"
		number
		language={javascript}
		code={`import * as d3 from "d3";
import dataset from "./dataset.json";

let svg = d3.createElement("svg").attr("width", 400).attr("height", 400);
let group = svg
	.data(dataset)
	.append('rect')
	.attr('height', d => d.value)
	.attr('width', 20);

// Here is where the magic happens. Based on the dataset D3 can append, remove, 
// scales and add transitions based purely on data `}
	></BlockCode>
</div>
<div class="px-44">
	<NodeChart />
</div>
<Heading2 id="interactions" class="mx-auto w-full max-w-5xl px-6 py-4 pt-8"
	>Interactions for better visualization</Heading2
>
<div class="mx-auto grid w-full max-w-5xl items-center px-6">
	<p>
		Events are the main core of advantages of D3. As it explores TypeScript and Javascript main
		features, mostly of them are events. The ability to hover data, give it focus, change, reorder,
		split, filter using mouse, etc. makes D3 more intuitive and powerful than other chart libraries,
		specially Python ones, that are focused on plotting math charts like matplotlib without
		user-interaction.
	</p>

	<p>
		Most of the interaction of D3 can be scaled down to ”See the full data, and then see a specific
		detail” without needing two charts to it.
	</p>
</div>

<Heading2 id="considerations" class="mx-auto my-4 w-full max-w-5xl px-6">Considerations</Heading2>
<p class="my-12 px-6 pb-28">
	<b class="font-bold">I learned data visualization from many people.</b> It's not a science where there
	are books everywhere, in fact, it's more like art: To study it, it's easier to go to a museum. In data
	visualization often the museum are editorials and magazines. Those people can do wonders to show data
	in a creative way. Take a look at Diana Estafinia Rubio Portfolio too to check more about this art.
</p>

<style>
	p {
		max-width: 64rem;
		width: 100%;
		margin: 0 auto 1.25rem auto;
	}

	:global(.two-code-blocks code) {
		font-size: 0.75rem !important;
	}
</style>
