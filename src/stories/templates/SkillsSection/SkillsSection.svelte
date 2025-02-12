<script>
	import Title from '../../atoms/Typography/Title/Title.svelte';
	import Tabs from '../../molecules/Tabs/Tabs.svelte';
	import BackendTechnology from '../../organisms/SkillsResume/BackendTechnology/BackendTechnology.svelte';
	import DataVisualization from '../../organisms/SkillsResume/DataVisualization/DataVisualization.svelte';
	import FrontendFrameworks from '../../organisms/SkillsResume/FrontendFramekworks/FrontendFrameworks.svelte';
	import InteractionDesign from '../../organisms/SkillsResume/InteractionDesign/InteractionDesign.svelte';
	import WebArchitecture from '../../organisms/SkillsResume/WebArchitecture/WebArchitecture.svelte';

	let indexSelected = $state(0);

	let { el = $bindable(), ...props } = $props();
</script>
<main bind:this={el} class="pt-16">
	<Title title="What do I know?" side="left" />
	<section id="skills" class="my-16 flex w-full flex-col items-center">
		<div>
			<Tabs
				options={[
					'Frontend Frameworks',
					'Data Visualization',
					'Interaction Design',
					'Web Architecture',
					'Backend Technologies'
				]}
				bind:indexSelected
			/>
		</div>
		<main class="mx-6 mt-16 lg:mx-20">
			{#if indexSelected === 0}
				<FrontendFrameworks />
			{:else if indexSelected === 1}
				<DataVisualization />
			{:else if indexSelected === 2}
				<InteractionDesign />
			{:else if indexSelected === 3}
				<WebArchitecture />
			{:else if indexSelected === 4}
				<BackendTechnology />
			{/if}
		</main>
	</section>
</main>
