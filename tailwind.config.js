module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			Height: {
				'600px': '600px',
				'700px': '700px',
			},
			Spacing: {
				'65%': '65%',
				'70%': '70%',
			},
			backdropBlur: {
				xs: '.1px',
			},
			gridTemplateRows: {
				'8': 'repeat(8, minmax(0, 1fr))',
				'9': 'repeat(9, minmax(0, 1fr))',
				'10': 'repeat(10, minmax(0, 1fr))',
				'11': 'repeat(11, minmax(0, 1fr))',
				'12': 'repeat(12, minmax(0, 1fr))',
			},
			colors: {
				'floating-yellow': '#FCB64D',
		},
		},
	},
	plugins: [],
};
