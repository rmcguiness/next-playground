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
		},
	},
	plugins: [],
};
