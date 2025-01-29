<script>
	import InputText from '../../molecules/InputText/InputText.svelte';
	import Person from '$lib/icons/Person.svelte';
	import Email from '$lib/icons/Email.svelte';
	import WhatsApp from '$lib/icons/WhatsApp.svelte';
	import TextArea from '../../atoms/TextArea/TextArea.svelte';
	import Button from '../../atoms/Button/Button.svelte';
	import Form from './useContactForm.svelte.js';
	import * as ContactFormInterface from './ContactForm.interface';
	const form = new Form({
		preferredName: '',
		lastName: '',
		email: '',
		phone: '',
		region: 'BR',
		message: ''
	});

	/** @typedef {object} Props
	 * @property { ContactFormInterface.ContactFormType} data - the preloaded data for casting
	 * @property { (data : ContactFormInterface.ContactFormType) => void } onSubmit - the submit data
	 */

	/** @type { Props } */
	const { onSubmit } = $props();
</script>

<div class="flex flex-col lg:flex-row w-full items-start gap-2">
	<InputText
		required={form.validators['preferredName'].includes('required')}
		label="Preferred Name"
		icon={Person}
		showErrorWhenDirty={true}
		error={form.errors?.['preferredName']?.[0] ?? ''}
		placeholder="How should I address to you?"
		bind:value={form.form.preferredName}
	/>

	<InputText
		required={form.validators['lastName'].includes('required')}
		label="Last Name"
		icon={Person}
		showErrorWhenDirty
		error={form.errors?.['lastName']?.[0] ?? ''}
		placeholder="For specification"
		bind:value={form.form.lastName}
	/>
</div>

<InputText
	required={form.validators['email'].includes('required')}
	label="E-mail"
	icon={Email}
	showErrorWhenDirty
	error={form.errors?.['email']?.[0] ?? ''}
	placeholder="Tell me where I can answer you"
	bind:value={form.form.email}
/>

<InputText
	required={form.validators['phone'].includes('required')}
	label="Phone"
	showErrorWhenDirty
	phone
	bind:phoneRegion={form.form.region}
	hint="Select your country code and then fill the phone."
	icon={WhatsApp}
	error={form.errors?.['phone']?.[0] ?? ''}
	placeholder="Makes it really easier to answer you"
	bind:value={form.form.phone}
/>
<TextArea
	label="Message"
	icon={Email}
	bind:value={form.form.message}
	placeholder="Spammers are everywhere. Unfortunetaly we need to protect e-mails with these kind of forms to prevent spammers and hijackers."
></TextArea>
<div class="my-4 flex gap-3 items-center">
	<p class="flex-1 !text-base  !font-sans text-white opacity-30">
		Robots are not allowed. An human message made by AI is fine.
	</p>
	<Button
		onclick={() => {
			onSubmit(form.form);
		}}
		label="Send it"
	/>
</div>
