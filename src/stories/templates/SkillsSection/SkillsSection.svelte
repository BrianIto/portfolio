<script>
	import Title from '../../atoms/Typography/Title/Title.svelte';
	import Tabs from '../../molecules/Tabs/Tabs.svelte';
	import BackendTechnology from '../../organisms/SkillsResume/BackendTechnology/BackendTechnology.svelte';
	import DataVisualization from '../../organisms/SkillsResume/DataVisualization/DataVisualization.svelte';
	import FrontendFrameworks from '../../organisms/SkillsResume/FrontendFramekworks/FrontendFrameworks.svelte';
	import InteractionDesign from '../../organisms/SkillsResume/InteractionDesign/InteractionDesign.svelte';
	import WebArchitecture from '../../organisms/SkillsResume/WebArchitecture/WebArchitecture.svelte';

	let indexSelected = $state(0);

	$inspect(indexSelected);
</script>

<Title title="What do you know?" side="left" />
<section class="my-16 flex flex-col items-center">
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
	<main class="mx-20 mt-16">
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
