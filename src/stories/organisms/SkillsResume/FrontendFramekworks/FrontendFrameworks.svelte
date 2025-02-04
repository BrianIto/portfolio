<script>
	import MagicWand from '$lib/icons/MagicWand.svelte';
	import Badge from '../../../atoms/Badge/Badge.svelte';
	import Button from '../../../atoms/Button/Button.svelte';
	import Heading2 from '../../../atoms/Typography/Heading2/Heading2.svelte';
	import Frameworks from '../../../molecules/Frameworks/Frameworks.svelte';
	import { BentoBadges } from './FrontendFramework.svelte.js';

	let selectedBento = $state(BentoBadges[0]);
</script>

<article class="flex flex-col gap-9">
	<Heading2 class="px-6 lg:px-0">One Dev to Rule Them All*:<br /> I Got you Covered</Heading2>
	<div class="grid lg:grid-cols-12">
		<section class="col-span-7 flex flex-col items-start justify-start gap-5 px-6 lg:px-0">
			<p>
				From plain HTML, CSS and Vanilla Javascript to Next.JS SSR and SvelteKit Powered-Apps with
				Rust. I got you covered. I craft well-written, useful and documented components in any
				JavaScript Frontend Framework. But don't believe my words, <b>believe my code:</b>
			</p>
			<ul>
				<li>Check this website Storybook for a view of the components and docs I made.</li>
				<li>Check this website GitHub Repository to check if the code is well-written.</li>
			</ul>
			<div class="flex flex-col gap-4 lg:grid lg:grid-cols-2">
				<div class="rounded-xl border border-zinc-600 p-5">
					<p class="mb-4 flex gap-3 !font-sans !font-bold uppercase !text-white">
						<MagicWand class="inline h-6 w-6" /> Skills
					</p>
					<div class="flex flex-wrap gap-2.5">
						{#each BentoBadges as badge}
							<Badge
								selected={badge.title === selectedBento.title}
								onmouseenter={() => (selectedBento = badge)}>{badge?.title}</Badge
							>
						{/each}
					</div>
				</div>

				<div class="rounded-xl border border-zinc-600 p-4">
					<h2 class="mb-3 font-sans font-bold uppercase text-white">{selectedBento.title}</h2>
					<ul class="space-y-3 !text-base">
						<li>{selectedBento.li1}</li>
						<li>{selectedBento.li2}</li>
						<li>{selectedBento.li3}</li>
					</ul>
				</div>
			</div>
			<a href="/posts/frontend"><Button class="my-5 px-12" label="See more"></Button></a>
			<p class="!text-sm font-light opacity-70">
				* This is a Lord of the Rings reference to the One Ring: ”One Ring to rule them all, One
				Ring to find them, One Ring to bring them all and in the darkness bind them.” by J. R. R.
				Tolkien
			</p>
		</section>

		<section
			class="relative top-6 col-span-5 flex w-screen flex-col items-start justify-start overflow-hidden lg:-top-16 lg:w-auto lg:overflow-visible lg:pl-2"
		>
			<div class="mx-auto">
				<Frameworks />
			</div>
		</section>
	</div>
</article>
