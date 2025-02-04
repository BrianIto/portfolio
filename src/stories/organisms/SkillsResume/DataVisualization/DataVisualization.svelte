<script>
	import Button from '../../../atoms/Button/Button.svelte';
	import Heading2 from '../../../atoms/Typography/Heading2/Heading2.svelte';
	import NodeChart from '../../../molecules/NodeChart/NodeChart/NodeChart.svelte';
</script>

<article class=" flex flex-col gap-9">
	<Heading2>Complex Data doesn't <br /> need to be complicated</Heading2>
	<div class="grid lg:grid-cols-2">
		<section class="flex flex-col items-start justify-start gap-5">
			<p>
				Showing data in a readable manner and proper to insights is more than displaying a Bar Chart
				on Excel, it needs expertize and knowledge in Data Visualization. I love statistics, they
				give us a vision of the world in a understandable way, and there's nothing worst than a
				chart that doesn't mean nothing.*
			</p>
			<p>
				Having great interactive charts, displayed with simple and creative way are my passion.
				Making them not simply an SVG or PNG on a screen but to transmit information and be
				filtered, interacted and meaninful.
			</p>
			<a href="/posts/dataviz"><Button class="my-5 px-12" label="See more"></Button></a>

			<p class="!text-sm font-light opacity-70">
				* To see bad charts that means nothing (or worst, that lies), take a look <a
					href="https://viz.wtf"
					target="_blank">clicking here.</a
				>
			</p>
		</section>

		<section
			class="relative top-6 flex w-full flex-col items-start justify-start lg:-top-16 lg:pl-16"
		>
			<NodeChart />
			<p class="mt-3 w-full text-center !text-sm font-light">
				Try dragging a node to check interaction and <a href="/data.json">see the dataset</a>
			</p>
		</section>
	</div>
</article>
