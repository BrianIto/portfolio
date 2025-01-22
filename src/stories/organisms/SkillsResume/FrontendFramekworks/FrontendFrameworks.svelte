<script>
	import Button from '../../../atoms/Button/Button.svelte';
	import Heading2 from '../../../atoms/Typography/Heading2/Heading2.svelte';
	import Frameworks from '../../../molecules/Frameworks/Frameworks.svelte';
</script>

<article class="flex flex-col gap-9">
	<Heading2>One Dev to Rule Them All*:<br /> I Got you Covered</Heading2>
	<div class="grid grid-cols-2">
		<section class="flex flex-col items-start justify-start gap-5">
			<p>
				From plain HTML, CSS and Vanilla Javascript to Next.JS SSR and SvelteKit Powered-Apps with
				Rust. I got you covered. I craft well-written, useful and documented components in any
				JavaScript Frontend Framework. But don't believe my words, <b>believe my code:</b>
			</p>
			<ul>
				<li>Check this website Storybook for a view of the components and docs I made.</li>
				<li>Check this website GitHub Repository to check if the code is well-written.</li>
			</ul>
			<Button class="my-5 px-12" label="See more"></Button>
			<p class="text-sm font-light opacity-70">
				* This is a Lord of the Rings reference to the One Ring: ”One Ring to rule them all, One
				Ring to find them, One Ring to bring them all and in the darkness bind them.” by J. R. R.
				Tolkien
			</p>
		</section>

		<section class="relative -top-16 flex flex-col items-start justify-start pl-32">
			<div class="mx-auto">
				<Frameworks />
			</div>
		</section>
	</div>
</article>
