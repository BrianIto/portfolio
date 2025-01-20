<script>
	import { onMount } from 'svelte';

	let mouseX = $state(0);
	let mouseY = $state(0);

	/** @type { HTMLDivElement | undefined} */
	let element = $state();

	onMount(() => {
		window.addEventListener('mousemove', (e) => {
			mouseX = e.x;
			mouseY = e.y;
		});
	});

	function getHalfOfSize() {
		if (element) {
			return element.offsetWidth / 2;
		}
		return 0;
	}
</script>

<div
	bind:this={element}
	class="to-amber-0 fixed -z-10 h-[40vw] w-[40vw] bg-gradient-radial from-amber-400 to-65% opacity-10"
	style={'left: ' + (mouseX - getHalfOfSize()) + 'px; top: ' + (mouseY - getHalfOfSize()) + 'px'}
></div>
