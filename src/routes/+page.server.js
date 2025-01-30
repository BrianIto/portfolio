import { HUBSPOT_API_KEY } from '$env/static/private';
import { fail } from '@sveltejs/kit';

export const actions = {
	contact: async ({ request }) => {
		const data = await request.formData();
		if (HUBSPOT_API_KEY) {
			let request = {
				properties: {
					firstname: data.get('preferredName'),
					lastname: data.get('lastName'),
					email: data.get('email'),
					phone: data.get('phone'),
					message: data.get('message')
				}
			};
			try {
				let response = await fetch('https://api.hubspot.com/crm/v3/objects/contacts', {
					method: 'POST',
					body: JSON.stringify(request),
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer ' + HUBSPOT_API_KEY
					}
				});

				if (!response.ok) {
					const errorData = await response.json();
					return {
						status: 'error',
						message: errorData.message || 'Failed to create/update contact.'
					};
				}
				return { success: true };
			} catch (e) {
				console.log(e);
				return fail(400, { error: 'Something went wrong' });
			}
		} else {
			return fail(403, { incorrect: 'Hubspot API Key not set' });
		}
	}
};
