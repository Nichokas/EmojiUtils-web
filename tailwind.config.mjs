/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				apple: {
					blue: {
						DEFAULT: '#0066CC',
						dark: '#0A84FF'
					}
				}
			},
		},
	},
	plugins: [],
}
