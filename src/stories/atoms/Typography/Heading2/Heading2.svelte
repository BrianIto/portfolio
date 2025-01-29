<script>
	let { ...props } = $props();
</script>

<h2 {...props} class={["font-bold uppercase text-white text-lg lg:text-2xl", props.class]} >{@render props.children()}</h2>
