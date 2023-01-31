/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false,
	theme: {
		screens: {
			mobile: '0px',
			tablet: '600px',
			smallDesktop: '960px',
			mediumDesktop: '1200px',
			largeDesktop: '1600px',
		},
		colors: {
			transparent: {
				transparent: 'transparent',
			},
			primary: {
				primary: '#F2183D',

				primaryAlpha50: '#F00E0E',
				primaryAlpha40: '#f00e0ecc',
				primaryAlpha30: '#f00e0e8f',
				primaryAlpha20: '#f00e0e52',
				primaryAlpha10: '#f00e0e29',

				primaryShade50: '#F00E0E',
				primaryShade30: '#F67878',
				primaryShade10: '#FFDBDB',
			},
			secondary: {
				secondary: '#FFE768',
			},
			tertiary: {
				tertiary: '#1E78FF',

				tertiaryAlpha50: '#1E78FF',
				tertiaryAlpha40: '#1E78FFcc',
				tertiaryAlpha30: '#1E78FF8f',
				tertiaryAlpha20: '#1E78FF52',
				tertiaryAlpha10: '#1E78FF29',
			},
			info: {
				info: '#3870FF',
			},
			blue: {
				blueShade50: '#1E78FF',
				blueShade30: '#81B3FF',
				blueShade10: '#DBE9FF',
			},
			success: {
				success: '#00B41E',
			},
			green: {
				greenShade50: '#2E8F00',
				greenShade30: '#78C253',
				greenShade10: '#DFF3D6',
			},
			alert: {
				alert: '#FF8F0B',
			},
			orange: {
				orangeShade50: '#F68403',
				orangeShade30: '#FCBC73',
				orangeShade10: '#FEEBD6',
			},
			dark: {
				dark: '#141414',

				darkAlpha50: '#141414',
				darkAlpha40: '#141414b8',
				darkAlpha30: '#141414a3',
				darkAlpha20: '#1414147a',
				darkAlpha10: '#1414143d',
				darkAlpha7: '#14141429',
				darkAlpha5: '#14141414',
				darkAlpha1: '#1414140A',

				darkShade50: '#141414',
				darkShade40: '#555555',
				darkShade30: '#696969',
				darkShade20: '#8F8F8F',
				darkShade10: '#C7C7C7',
				darkShade7: '#D9D9D9',
				darkShade5: '#EDEDED',
				darkShade1: '#F5F5F5',
			},
			light: {
				light: '#EBEDF0',
			},
			white: {
				white: '#FFFFFF',

				whiteAlpha50: '#ffffff',
				whiteAlpha45: '#ffffffb8',
				whiteAlpha40: '#ffffffb8',
				whiteAlpha30: '#ffffffa3',
				whiteAlpha20: '#ffffff7a',
				whiteAlpha10: '#ffffff3d',
				whiteAlpha5: '#ffffff14',
			},
		},
		boxShadow: {
			global: {
				default: '0px 1px 4px 0px rgba(20, 20, 20, 0.16)',
				active: '0px 6px 24px 0px rgba(20, 20, 20, 0.16)',
			},
			sticky: {
				top: '0px 6px 24px 0px rgba(20, 20, 20, 0.08)',
				bottom: '0px -3px 24px 0px rgba(20, 20, 20, 0.08)',
			},
			other: {
				validate: '0px 4px 16px 0px rgba(240, 14, 14, 0.16)',
			},
		},
		fontFamily: {
			base: 'Poppins, sans-serif',
			additional: 'Inter, sans-serif',
		},
		fontSize: {
			extraLarge: '2.5rem',
			large: '2rem',
			medium: '1.5rem',
			small: '1.25rem',
			smaller: '1.125rem',
			extraSmall: '1rem',
			micro: '0.875rem',
		},
		spacing: {
			margin: {
				spacing1: '0.125rem',
				spacing2: '0.25rem',
				spacing3: '0.5rem',
				spacing4: '0.75rem',
				spacing7: '1.5rem',
				spacing8: '2rem',
				spacing9: '3rem',
				spacing10: '4rem',
				spacing11: '6rem',
			},
			padding: {
				spacing4: '0.75rem',
				spacing5: '1rem',
				spacing6: '1.25rem',
			},
		},
	},
	plugins: [],
}
