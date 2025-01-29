<script>
	import { javascript } from 'svelte-highlight/languages';
	import Heading2 from '../../../stories/atoms/Typography/Heading2/Heading2.svelte';
	import Title from '../../../stories/atoms/Typography/Title/Title.svelte';
	import BlockCode from '../../../stories/molecules/BlockCode/BlockCode.svelte';
	import React from '../../../stories/assets/react.webp';
	import Angular from '../../../stories/assets/angular.svg';
	import Svelte from '../../../stories/assets/svelte.webp';
	import Storybook from '../../../stories/assets/storybook.webp';

	let title = 'Frontend Frameworks';
</script>

<svelte:head>
	<title>{title} - Brian Portfolio</title>
</svelte:head>
<Title id="main" side="center" {title}></Title>
<p class="!mt-16 px-6">
	<b>As my main role, frontend development is a my passion.</b> They can be done using what we call frameworks
	and with native code (HTML, CSS and Javascript). Those frameworks are dominating market because they
	can deliver more, and faster. Most of their advantages are componentization, reactivity and the ability
	fit architectures with ease.
</p>
<p class="px-6">Below I will list each of the frameworks I am proficient with.</p>
<Heading2 id="react" class="mx-auto pt-8 py-4 w-full max-w-5xl px-6">REACT AND NEXT.JS</Heading2>
<div class="mx-auto grid max-w-5xl px-6 md:grid-cols-6">
	<div class="col-span-4">
		<p>
			As the main framework nowdays, React is a common choice in industry apps. React.js uses what
			we call Virtual DOM and populates the whole page based in a JavaScript script (which,
			unfortunely is a flaw).
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
	<div class="col-span-2"><img src={React} class="m-auto p-6" alt="React Logo" /></div>
</div>
<div class="two-code-blocks my-6 hidden gap-6 md:grid xl:grid-cols-2">
	<BlockCode
		filename="App.d.ts"
		hasHeader
		size="xs"
		number
		language={javascript}
		code={`/**
*Adds one number to the counter
*@param counter - The counter state value
*@param setCounter - The dispatcher to update the counter state
*@returns {void}
   */
const addCounter : (counter: React.State<number>,
                    setCounter: React.setDispatchAction<number>);
/**
*The counter component
*/
const Component : React.FC;`}
	></BlockCode>

	<BlockCode
		filename="App.tsx"
		hasHeader
		size="xs"
		number
		language={javascript}
		code={`///<reference-path=”./component.d.ts”>
const addCounter = (counter, setCounter) => () => {
     setCounter(counter + 1);
}
/** @type { React.FC } */
const Component = () => { 
     const [counter, setCounter] = React.useState(0);
     return <div>
           {counter}
           <button onClick={addCounter(counter, setCounter)}>
                Add
            </button> 
         </div> }`}
	></BlockCode>
</div>

<Heading2 id="angular" class="mx-auto pt-8 py-4 w-full max-w-5xl px-6">Angular</Heading2>
<div class="mx-auto grid w-full max-w-5xl items-center px-6 md:grid-cols-6 md:gap-10">
	<div class="col-span-4">
		<p>
			Angular is a Google made framework, because of it, it supports many features and has
			MaterialUI really well-implemented in it. But in most of the time, people tend to create their
			own UIs to it. It's a well typed framework with many built-in features that makes easier to
			work with, like easily creating, validating and handling forms without any external tool
			(opposing React and Svelte in this aspect).
		</p>

		<p>
			It's well organized in Modules, Directives and Components. This framework can be quite slow to
			develop because of it's verbosity.
		</p>
	</div>
	<div>
		<img src={Angular} alt="Angular Logo" class="w-full min-w-44" />
	</div>
</div>

<Heading2 id="svelte" class="mx-auto my-4 w-full max-w-5xl px-6">Svelte + Kit</Heading2>
<div class="mx-auto grid w-full max-w-5xl px-6 md:grid-cols-6 md:gap-10">
	<div class="col-span-4">
		<p>
			<b>The most favorite one of the community and mine too.</b> Svelte is a minimal, but powerful,
			framework. It handles complex tasks like reactivity like no other else.
		</p>

		<p>
			It has built-in listening to changes, events and more using native HTML completely eliminating
			the Virtual DOM. It also supports SSR for rendering elements from a database.
		</p>
		<p>It is one of the only that can create awesome webapps even with Javascript turned off.</p>
		<p>
			This website is made using SvelteKit. Take a look of how a minimal component looks (compare to
			the React one):
		</p>
	</div>
	<div class="flex">
		<img src={Svelte} alt="Svelte logo" class="m-auto w-full" />
	</div>
</div>
<div class="mx-auto w-full max-w-5xl md:my-12">
	<BlockCode
		filename="App.svelte"
		hasHeader
		size="xs"
		number
		language={javascript}
		code={`<script>
  let counter = $state(0);
</script>
<div>
       {counter}     
       <button onclick={counter = counter + 1}>
           Add
       </button>
</div>`}
	></BlockCode>
</div>

<Heading2 id="storybook" class="mx-auto my-4 w-full max-w-5xl px-6">Storybook</Heading2>
<div class="mx-auto grid w-full max-w-5xl items-center px-6 md:grid-cols-6 md:gap-10">
	<div class="col-span-4">
		<p>
			<b>For me documentation is the most important part of the code.</b> Because someone else will read
			my code and I think make de DX better is really important.
		</p>

		<p>
			Storybook is a documentation framework that integrates with many others like React, Svelte and
			Angular. It also can perform Component Testing inside of it to ensure they work properly.
		</p>
	</div>
	<div>
		<img src={Storybook} alt="Storybook Logo" class="w-full min-w-44" />
	</div>
</div>
<Heading2 id="considerations" class="mx-auto my-4 w-full max-w-5xl px-6">Considerations</Heading2>
<p class="my-12 px-6 pb-28">
	I really hope those frontend skills match your company (or yourself) pleased. Don't hesitate to
	contact me through any channel (I will answer). We can work together to build great stuff.
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
