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
			transparent: 'transparent',
			// primary
			primary: '#F2183D',
			// primary alpha
			primaryAlpha50: '#F00E0E',
			primaryAlpha40: '#f00e0ecc',
			primaryAlpha30: '#f00e0e8f',
			primaryAlpha20: '#f00e0e52',
			primaryAlpha10: '#f00e0e29',
			// primary shades
			primaryShade50: '#F00E0E',
			primaryShade30: '#F67878',
			primaryShade10: '#FFDBDB',
			// secondary
			secondary: '#FFE768',
			// tertiary
			tertiary: '#1E78FF',
			// tertiary alpha
			tertiaryAlpha50: '#1E78FF',
			tertiaryAlpha40: '#1E78FFcc',
			tertiaryAlpha30: '#1E78FF8f',
			tertiaryAlpha20: '#1E78FF52',
			tertiaryAlpha10: '#1E78FF29',
			// blue shades and info
			info: '#3870FF',
			blueShade50: '#1E78FF',
			blueShade30: '#81B3FF',
			blueShade10: '#DBE9FF',
			// green shades and success
			success: '#00B41E',
			greenShade50: '#2E8F00',
			greenShade30: '#78C253',
			greenShade10: '#DFF3D6',
			// orange shades and alert
			alert: '#FF8F0B',
			orangeShade50: '#F68403',
			orangeShade30: '#FCBC73',
			orangeShade10: '#FEEBD6',
			// dark
			dark: '#141414',
			// dark alpha
			darkAlpha50: '#141414',
			darkAlpha40: '#141414b8',
			darkAlpha30: '#141414a3',
			darkAlpha20: '#1414147a',
			darkAlpha10: '#1414143d',
			darkAlpha7: '#14141429',
			darkAlpha5: '#14141414',
			darkAlpha1: '#1414140A',
			// dark shades
			darkShade50: '#141414',
			darkShade40: '#555555',
			darkShade30: '#696969',
			darkShade20: '#8F8F8F',
			darkShade10: '#C7C7C7',
			darkShade7: '#D9D9D9',
			darkShade5: '#EDEDED',
			darkShade1: '#F5F5F5',
			// light
			light: '#EBEDF0',
			// white
			white: '#FFFFFF',
			// white alpha
			whiteAlpha50: '#ffffff',
			whiteAlpha45: '#ffffffb8',
			whiteAlpha40: '#ffffffb8',
			whiteAlpha30: '#ffffffa3',
			whiteAlpha20: '#ffffff7a',
			whiteAlpha10: '#ffffff3d',
			whiteAlpha5: '#ffffff14',
		},
		fontFamily: {
			base: 'Poppins, sans-serif',
			additional: 'Inter, sans-serif',
		},
		// spacing?
		// typography?
	},
	plugins: [],
}
