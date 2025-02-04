<script>
	import Heading2 from '../../atoms/Typography/Heading2/Heading2.svelte';
	import Title from '../../atoms/Typography/Title/Title.svelte';
	import Family from '../../assets/family.webp';
	import AnimationTranslation from '../../molecules/AnimationTranslation/AnimationTranslation.svelte';

	let { el = $bindable() } = $props();
</script>

<article bind:this={el} class="pt-24">
	<div class="relative w-full overflow-hidden lg:top-[60vh] lg:-mt-[80vh] lg:h-[80vh]">
		<AnimationTranslation />
	</div>
	<Title title="Who am I?" side="right" />
	<div class="flex flex-col-reverse px-6 lg:grid lg:grid-cols-2 lg:px-16">
		<div class="relative max-h-[32rem] lg:-top-32 lg:pr-24">
			<img
				src={Family}
				alt="Our developer family"
				class="relative w-full scale-75 overflow-hidden rounded-full object-cover lg:-top-28"
			/>
		</div>
		<div class="mt-10 lg:max-h-[32rem]">
			<Heading2>The person behind the skills</Heading2>
			<p class="mt-6">
				I am Brian, 27 years old, father of Luísa and husband to Kamylla. Situated in Manaus,
				Brazil. I am passionated by tech since I was a kid. I started coding in 2010 in a language
				called Pascal. Since then, I always looked to be better than my old self everyday.
			</p>
			<p class="mt-3">
				Today, I am an avid Neovim-evangelist. I love frontend development and interactions. The
				skills I am pursuing right now are to be a better writter and communicator. In tech the
				skill I am studying right now is Web3 Interactions.
			</p>
		</div>
	</div>
</article>
