/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Figtree', 'ui-sans-serif', 'sans-serif'],
				serif: ['"Source Serif 4"', 'serif']
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
			}
		}
	},

	plugins: [require('tailwind-scrollbar')({ nocompatible: true })]
};
