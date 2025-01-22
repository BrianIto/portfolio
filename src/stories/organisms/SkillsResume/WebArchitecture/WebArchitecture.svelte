<script>
	import { typescript } from 'svelte-highlight/languages';
	import Button from '../../../atoms/Button/Button.svelte';
	import Heading2 from '../../../atoms/Typography/Heading2/Heading2.svelte';
	import BlockCode from '../../../molecules/BlockCode/BlockCode.svelte';
	import Qa from '$lib/icons/QA.svelte';
</script>

<article class="flex flex-col gap-9">
	<Heading2>THE BEST PRACTICES THAT ARE MORE<br /> THAN JUST ACRONYMNS</Heading2>
	<div class="grid grid-cols-2">
		<section class="flex flex-col items-start justify-start gap-5">
			<p>
				MVC, MVVM, AD... Acronymns that developers love to use. But resilient software and web apps
				relies on architecture patterns that makes them:
			</p>
			<ul>
				<li>
					<b>Future-proof:</b> Changes happens all the time and things evolve. But sometimes, some apps
					become legacy and become hard to keep-up. A well structed architecture prevents this to happen.
				</li>
				<li>
					<b>Reliable:</b> Automatic Testing behaviours like BDD and TDD are in the heart of my projects.
					No code is done until it can be assured that it behaves correctly.
				</li>
				<li>
					<b>Reusability</b>:Specially for front-end, I do prefer using
					<a href="https://atomicdesign.bradfrost.com/chapter-2/" target="_blank">Atomic Design</a> and
					create good brand-based design.
				</li>
			</ul>
			<Button class="my-5 px-12" label="See more"></Button>
		</section>

		<section class="relative flex flex-col items-start justify-start pl-16">
			<div class="m-auto">
				<div class="w-full relative -top-16">
					<Qa class="top-3 relative w-1/2" />
					<div class="w-56 h-24 flex items-center justify-center text-white border rounded-lg opacity-50 border-dashed relative -top-3 -z-10 left-60 -mt-24">
						Model / View / Controller	
					</div>
					<BlockCode
						language={typescript}
						hasHeader
						number
						filename="test.spec.ts"
						code={`describe("it should use tdd approach", () => {
	it('should have atomic tests', () => {
		expect(fn).toBeCalledOnce()
	})
})`}
					/>
				</div>
			</div>
		</section>
	</div>
</article>
