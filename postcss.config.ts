module.exports = {
	plugins: {
		'tailwindcss/nesting': {},
		tailwindcss: {},
		autoprefixer: {},
		'postcss-preset-env': {
			features: {
				'nesting-rules': true,
				'custom-properties': true,
				'custom-media-queries': true,
				'media-query-ranges': true,
				'color-mix': true,
				'color-function': true,
			},
			stage: 3,
		},
		'postcss-import': {},
		'postcss-custom-media': {},
		'postcss-custom-properties': {
			preserve: false,
		},
	},
};
