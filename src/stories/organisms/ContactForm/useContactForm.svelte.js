import * as ContactFormInterface from './ContactForm.interface';
export default class UseContactForm {
	/** @type {ContactFormInterface.ContactFormType} */
	form = $state(ContactFormInterface.contactFormSchema.cast({}));
	#validators = this.getFormValidators(ContactFormInterface.contactFormSchema);
	/** @type { Record<string,string> | null} */
	#errors = $derived.by(() => {
		try {
			ContactFormInterface.contactFormSchema.validateSync(this.form, { abortEarly: false });
			return null;
		} catch (/**@type{import('yup').ValidationError[] | *} */ e) {
			/** @type {import('yup').ValidationError[]} */
			let error = { ...e };
			/** @type {Record<string, string[]>} */
			let obj = {};
			error?.inner?.forEach((i) => {
				if (obj[i.path]) {
					obj[i.path] = [...obj[i.path], i.errors[0]];
				} else {
					obj[i.path] = [i.errors[0]];
				}
			});
			return obj;
		}
	});

	/**
	 * The data constructor
	 * @param {ContactFormInterface.ContactFormType} data - the data to be used
	 */
	constructor(data) {
		this.form = data;
	}

	get validators() {
		return this.#validators;
	}

	get errors() {
		return this.#errors;
	}

	/**
	 * Get the validators from the form
	 * @param { import('yup').ObjectSchema<*>} formSchema - the schema to get the errors
	 **/
	getFormValidators(formSchema) {
		let obj = {};
		Object.keys(formSchema.fields).forEach((i) => {
			obj[i] = formSchema.fields[i].tests.map((t) => t.OPTIONS.name);
		});
		return obj;
	}
}
