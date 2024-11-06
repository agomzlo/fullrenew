/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'background': '#171717',
				'primary': '#FFFFFF',
				'secondary': '#d4d4d4',
				'whatsapp': '#25D366'
			},
			animation: {
				'logo_slide': 'logo_slide 5s linear infinite',
				'images_slide': 'images_slide 30s linear infinite',
				'images_slide_reverse': 'images_slide 30s linear infinite reverse'
			},
			keyframes: {
				logo_slide: {
					'to': { transform: 'translateX(-384px)' }
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
