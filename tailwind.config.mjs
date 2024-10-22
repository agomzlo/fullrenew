/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'logo_slide': 'logo_slide 30s linear infinite',
			},
			keyframes: {
				logo_slide: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' },
				}
			}
		},
	},
	plugins: [],
}
