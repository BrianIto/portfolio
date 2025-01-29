<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import { useInteractPixels } from './InteractPixels.svelte.js';

	onMount(() => {
		gsap.from('.dot', {
			scale: 0.3,
			stagger: {
				amount: 1,
				grid: 'auto',
				from: 'center'
			}
		});
	});

	$effect(() => {
		if (isFinished()) {
			gsap.to('.legend-finished', {
				scale: 1.1,
				y: 2,
				x: -25,
			});
		}
	});
const { matrix, onHoverLetter, isLetterHovered, isFinished } = useInteractPixels();
</script>

<div class={['grid', 'grid-cols-[repeat(' + matrix[0].length + ',_1fr)]', 'gap-0.5']}>
	{#each matrix as row, i}
		{#each row, j}
			<button
				onmouseenter={() => {
					onHoverLetter([i, j]);
				}}
				class={[
					'dot relative lg:h-3 lg:w-3 w-2 h-2 rounded-sm',
					{
						'!bg-green-300': isLetterHovered([i, j]),
						'bg-zinc-700 hover:bg-zinc-400': !isLetterHovered([i, j]) && !isFinished(),
						'bg-zinc-600 duration-100': isFinished()
					}
				]}
			></button>
		{/each}
	{/each}

	<span
		class={[
			'mt-1 text-right font-serif text-sm font-light text-white opacity-60',
			{ 'legend-finished !opacity-100': isFinished() }
		]}
		style="grid-column: 1 / span 36"
	>
		{isFinished() ? 'Woohoo! You did it! 🥳' : 'Hover my squares!'}
	</span>
</div>
