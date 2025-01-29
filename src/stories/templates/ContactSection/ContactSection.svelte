<script>
	import Title from '../../atoms/Typography/Title/Title.svelte';
	import Heading2 from '../../atoms/Typography/Heading2/Heading2.svelte';
	import ContactForm from '../../organisms/ContactForm/ContactForm.svelte';
	import X from '$lib/icons/X.svelte';
	import Instagram from '$lib/icons/Instagram.svelte';

	let { el = $bindable() } = $props();
</script>

<main bind:this={el} class="py-20">
	<Title title="How to reach you?" side="left" />
	<article class="mx-6 my-16 grid gap-16 lg:mx-16 lg:grid-cols-2">
		<section>
			<Heading2 class="mb-6 lg:mr-24">
				WANT TO TURN IDEAS INTO CODE, SOLVE A BIG PROBLEM OR BUILD THE ALL-STARS TEAM? I GOT YOUR
				BACK.
			</Heading2>
			<p class="mt-3">
				Your time is precious so I will answer fast. It doesn't matter if you are just looking
				around, or know exactly what to do with your idea, or is a HR looking for a Developer for
				your team, or a dev colleage who wants to connect, I am eager to have a conversation.
			</p>
			<p class="mt-3">
				<b>I love opinions and critics.</b> They make me grow so don't be shy if you think what you
				got to say something that is <i>not nice.</i>
			</p>
			<p class="mt-3">
				You already know a lot about me and filling form on the right you will allow me to know a
				little about you. If you want to know more about me and my work, please connect through my
				social media too.
			</p>
			<div class="mt-10 flex cursor-pointer justify-center gap-8 lg:justify-start">
				<a href="https://x.com/Droga_EhOBrian" target="_blank">
					<X class="h-8 w-8 text-white opacity-50 duration-300 hover:opacity-100" />
				</a>
				<a href="https://instagram.com/ito.brian" target="_blank">
					<Instagram class="h-8 w-8 text-white opacity-50 duration-300 hover:opacity-100" />
				</a>
			</div>
		</section>
		<section>
			<div class="relative z-20 rounded-3xl bg-[#282828] px-8 py-5 text-white">
				<ContactForm onSubmit={() => {}} />
			</div>
		</section>
	</article>
</main>
