<script>
	import * as d3 from 'd3';
	import data from '../../../assets/data.json';
	import { onMount } from 'svelte';

	/** @type {SVGElement=} */
	let svgEl = $state();

	let width = 928;
	let height = 680;

	console.log(data);

	const links = data.links.map((d) => ({ ...d }));
	/** @type { { id: string}[] } */
	const nodes = data.nodes.map((d) => ({ ...d }));

	onMount(() => {
		const simulation = d3
			.forceSimulation(nodes)
			.force(
				'link',
				d3.forceLink(links).id((d) => d.id)
			)
			.force('charge', d3.forceManyBody())
			.force('x', d3.forceX())

			.force('y', d3.forceY());

		const svg = d3.select(svgEl).attr('style', 'max-width: 100%; height: auto;');
		const link = svg
			.append('g')
			.attr('stroke', '#999')
			.attr('stroke-opacity', 0.6)
			.selectAll('line')
			.data(links)
			.join('line')
			.attr('stroke-width', (d) => Math.sqrt(d.value));

		const node = svg
			.append('g')
			.attr('stroke', '#ffffff88')
			.attr('stroke-width', 1.5)
			.selectAll('circle')
			.data(nodes)
			.join('circle')
			.attr('r', 5)
			.attr('fill', (d) => '#666');

		// Reheat the simulation when drag starts, and fix the subject position.
		function dragstarted(event) {
			if (!event.active) simulation.alphaTarget(0.3).restart();
			event.subject.fx = event.subject.x;
			event.subject.fy = event.subject.y;
		}

		// Update the subject (dragged node) position during drag.
		function dragged(event) {
			event.subject.fx = event.x;
			event.subject.fy = event.y;
		}

		// Restore the target alpha so the simulation cools after dragging ends.
		// Unfix the subject position now that it’s no longer being dragged.
		function dragended(event) {
			if (!event.active) simulation.alphaTarget(0);
			event.subject.fx = null;
			event.subject.fy = null;
		}

		// Add a drag behavior.
		node.call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended));

		simulation.on('tick', () => {
			link
				.attr('x1', (d) => d.source.x)
				.attr('y1', (d) => d.source.y)
				.attr('x2', (d) => d.target.x)
				.attr('y2', (d) => d.target.y);

			node.attr('cx', (d) => d.x).attr('cy', (d) => d.y);
		});
	});
</script>

<svg bind:this={svgEl} viewBox={`${-width / 2} ${-height / 2} ${width} ${height}`}></svg>
