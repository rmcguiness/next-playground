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
				foreground: 'var(--color-foreground)',
				primary: {
					light: 'oklch(var(--color-primary-light))',
					dark: 'oklch(var(--color-primary-dark))',
				},
				secondary: {
					light: 'oklch(var(--color-secondary-light))',
					dark: 'oklch(var(--color-secondary-dark))',
				},
				accent: {
					light: 'oklch(var(--color-accent-light))',
					dark: 'oklch(var(--color-accent-dark))',
				},
				destructive: {
					DEFAULT: 'oklch(var(--color-destructive))',
					light: 'oklch(var(--color-destructive-light))',
					dark: 'oklch(var(--color-destructive-dark))',
					transparent: 'var(--color-destructive-transparent)',
				},
			},
			animation: {
				'fade-in': 'fadeIn 0.3s ease-in',
				'fade-out': 'fadeOut 0.3s ease-out',
				'slide-in': 'slideIn 0.3s ease-out',
				'slide-out': 'slideOut 0.3s ease-in',
				'scale-in': 'scaleIn 0.2s ease-out',
				'scale-out': 'scaleOut 0.2s ease-in',
				'bounce-in': 'bounceIn 0.5s cubic-bezier(0.68,-0.55,0.265,1.55)',
			},
			transitionDuration: {
				DEFAULT: '200ms',
			},
			// Container queries support
			containers: {
				xs: '20rem',
				sm: '24rem',
				md: '28rem',
				lg: '32rem',
				xl: '36rem',
				'2xl': '42rem',
				'3xl': '48rem',
			},
		},
	},
	plugins: [],
};
