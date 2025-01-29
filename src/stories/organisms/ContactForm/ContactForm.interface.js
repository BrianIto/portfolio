import parsePhoneNumberFromString from 'libphonenumber-js';
import { object, string } from 'yup';

/** @typedef { import('yup').InferType<typeof contactFormSchema>} ContactFormType */

export const contactFormSchema = object({
	preferredName: string()
		.trim()
		.required('This field is required.')
		.min(2, 'Just a single letter?')
		.max(35, 'This name is really big.')
		.default('')
		.test('no-numbers', 'What? a number?', (v) => !/\d/.test(v)),
	lastName: string()
		.trim()
		.required('This field is required.')
		.min(2, 'Just a single letter?')
		.max(35, 'This last name is really big')
		.default('')
		.test(
			'no-numbers',
			'if includes numbers like second, use roman notation.',
			(v) => !/\d/.test(v)
		),
	email: string()
		.email("This e-mail doesn't look legit.")
		.trim()
		.lowercase()
		.required('This field is required.')
		.min(5, 'this e-mail is really short.')
		.max(60, 'this e-mail looks too big...')
		.default(''),
	region: string().trim().default('BR'), phone: string()
		.trim() .default('')
		.test('invalid-phone', 'This phone is not valid', function (v) {
			const { region } = this.parent;
			const phoneNumber = parsePhoneNumberFromString(v, region);
			if (v) {
				return phoneNumber?.isValid();
			}
			return true;
		}),
	message: string().trim().default('')
});
