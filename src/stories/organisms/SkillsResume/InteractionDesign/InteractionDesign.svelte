<script>
	import Button from '../../../atoms/Button/Button.svelte';
	import Heading2 from '../../../atoms/Typography/Heading2/Heading2.svelte';
	import InteractPixels from '../../../molecules/InteractPixels/InteractPixels.svelte';
</script>

<article class="flex flex-col gap-9">
	<Heading2>BEYOND BROWSER SLIDES PRESENTATIONS:<br /> PEOPLE LOVES TO INTERACT</Heading2>
	<div class="grid lg:grid-cols-2">
		<section class="flex flex-col items-start justify-start gap-5">
			<p>
				A website without interaction is a PowerPoint presentation on a browser. We as humans want
				to interact. Unfortunately, this is so poorly-designed on web nowdays that any website with
				a minimal interaction is already considered modern.
			</p>
			<p>
				Interacting with people makes they stay longer on a website because it fires out curiosity.
				Who doesn't love well detailed experiences?
			</p>
			<Button class="my-5 px-12" label="See more"></Button>
		</section>

		<section class="relative lg:-top-16 top-6 flex flex-col items-start justify-start lg:pl-32">
			<div class="m-auto">
				<InteractPixels />
			</div>
		</section>
	</div>
</article>
