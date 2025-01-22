<script>
	let { ...props } = $props();
</script>

<h2 class="font-bold uppercase text-white text-2xl">{@render props.children()}</h2>
