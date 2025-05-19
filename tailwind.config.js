/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--color-background)',
				'background-light': 'var(--color-background-light)',
				foreground: 'var(--color-yin)',
				primary: 'var(--color-primary)',
				'primary-light': 'var(--color-primary-light)',
				'primary-dark': 'var(--color-primary-dark)',
				secondary: 'var(--color-secondary)',
				'secondary-light': 'var(--color-secondary-light)',
				'secondary-dark': 'var(--color-secondary-dark)',
				accent: 'var(--color-accent)',
				yang: 'var(--color-yang)',
				yin: 'var(--color-yin)',
				border: 'var(--color-secondary)',
			},
			spacing: {
				xs: 'var(--spacing-xs)',
				sm: 'var(--spacing-sm)',
				md: 'var(--spacing-md)',
				lg: 'var(--spacing-lg)',
				xl: 'var(--spacing-xl)',
			},
			borderRadius: {
				sm: 'var(--radius-sm)',
				md: 'var(--radius-md)',
				lg: 'var(--radius-lg)',
				xl: 'var(--radius-xl)',
				'2xl': 'var(--radius-2xl)',
				full: 'var(--radius-full)',
			},
			transitionDuration: {
				fast: 'var(--duration-fast)',
				default: 'var(--duration-default)',
				slow: 'var(--duration-slow)',
			},
			boxShadow: {
				sm: 'var(--shadow-sm)',
				DEFAULT: 'var(--shadow-default)',
				md: 'var(--shadow-md)',
				lg: 'var(--shadow-lg)',
			},
		},
	},
	plugins: [],
};
