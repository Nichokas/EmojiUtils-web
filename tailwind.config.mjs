/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				apple: {
					blue: '#0066CC',
				},
			},
		},
	},
	plugins: [],
}
