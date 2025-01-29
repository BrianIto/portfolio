<script>
	import Button from '../../../atoms/Button/Button.svelte';
	import Heading2 from '../../../atoms/Typography/Heading2/Heading2.svelte';
	import Redis from '../../../assets/redis.svg';
	import Golang from '../../../assets/go.svg';
	import Nest from '../../../assets/nest.svg';
	import Mysql from '../../../assets/mysql.svg';
	import Typescript from '../../../assets/typescript.webp';
	import Label from '../../../atoms/Label/Label.svelte';
</script>

<article class=" flex flex-col gap-9">
	<Heading2>HEAVY-DUTY, FAST AND LIGHTWEIGHT<br /> APPLICATIONS NEEDS TO BACKED.</Heading2>
	<div class="grid lg:grid-cols-2">
		<section class="flex flex-col items-start justify-start gap-5">
			<p>
				A beautiful web app or website should work properly. In this case, <b>properly</b> means:
			</p>
			<ul>
				<li>
					<b>Fast</b>: the waiting time for doing anything should never exceed 2s. To achieve this
					in large queries I use strong cache technologies like dragonflyDB, Redis, In-memory
					caching, etc. alongside market-validated relational databases like MySQL and PostgreSQL.
				</li>
				<li>
					<b>Error-free</b>: Errors happens, but they should not destroy your application. I always
					prefer strongly-typed and compiled languages that handles errors by default, like Golang,
					but I can do that in other script-made languages like JavaScript/Typescript and Python.
				</li>
			</ul>
			<div>
				<Button disabled class="my-5 opacity-50 mb-2 px-12" label="See more"></Button>
				<Label class="!m-0 !text-sm opacity-60">*Work in Progress. Coming soon!</Label>
			</div>
		</section>

		<section class="relative lg:-top-20 flex w-full flex-col items-start justify-start lg:pl-16">
			<img src={Mysql} alt="MySQL Database Logo" />
			<img src={Redis} alt="Redis logo" class="relative left-64 top-32 z-10 w-80 scale-105" />
			<img
				class="relative -right-36 -top-56 z-[2] -mt-36 w-96 -rotate-12"
				src={Golang}
				alt="Golang logo"
			/>
			<img src={Nest} alt="NestJS logo" class="relative -left-8 -top-32 -mt-96 w-96" />
			<img src={Typescript} alt="Typescript logo" class="-mt-64 -top-12 relative left-72" />
		</section>
	</div>
</article>
