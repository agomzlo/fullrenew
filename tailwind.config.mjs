/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'logo_slide': 'logo_slide 30s linear infinite',
				'images_slide': 'images_slide 30s linear infinite',
				'images_slide_reverse': 'images_slide 30s linear infinite reverse'
			},
			keyframes: {
				logo_slide: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				images_slide: {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(-100%)' },
				},
			}
		},
	},
	plugins: [],
}
