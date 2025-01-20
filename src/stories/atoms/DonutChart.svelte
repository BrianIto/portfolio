<script>
	import * as d3 from 'd3';

	/** @typedef {object} Props
	 *@property { number } percentage - The number of the percentage to be shown
	 * @property { number } max - The max value to be shown
	 * @property { string} color - the color of the chart
	 */

	/** @type {Props} */
	let { percentage = 10, max = 100, color = '#000' } = $props();
	let donutElement = $state();

	let scale = $derived(d3.scaleLinear([0, max], [0, Math.PI * 2]));
	let arc = $derived(() => {
		let arc = d3.arc().cornerRadius(20)({
			innerRadius: 5,
			outerRadius: 8,
			startAngle: 0,
			endAngle: scale(percentage)
		});
		return arc;
	});
</script>

<div>
	<svg bind:this={donutElement} height="20px" width="20px">
		<path d={arc()} transform="translate(8,10)" fill={color} />
	</svg>
</div>
