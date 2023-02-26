const { fontFamily } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

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
      primary: '#F2183D',
      primaryAlpha: {
        50: '#F00E0E',
        40: '#f00e0ecc',
        30: '#f00e0e8f',
        20: '#f00e0e52',
        10: '#f00e0e29',
      },
      primaryShade: {
        50: '#F00E0E',
        30: '#F67878',
        10: '#FFDBDB',
      },
      secondary: '#FFE768',
      tertiary: '#1E78FF',
      tertiaryAlpha: {
        50: '#1E78FF',
        40: '#1E78FFcc',
        30: '#1E78FF8f',
        20: '#1E78FF52',
        10: '#1E78FF29',
      },
      info: '#3870FF',
      blueShade: {
        50: '#1E78FF',
        30: '#81B3FF',
        10: '#DBE9FF',
      },
      success: '#00B41E',
      greenShade: {
        50: '#2E8F00',
        30: '#78C253',
        10: '#DFF3D6',
      },
      alert: '#FF8F0B',
      orangeShade: {
        50: '#F68403',
        30: '#FCBC73',
        10: '#FEEBD6',
      },
      dark: '#141414',
      darkAlpha: {
        50: '#141414',
        40: '#141414b8',
        30: '#141414a3',
        20: '#1414147a',
        10: '#1414143d',
        7: '#14141429',
        5: '#14141414',
        1: '#1414140A',
      },
      darkShade: {
        50: '#141414',
        40: '#555555',
        30: '#696969',
        20: '#8F8F8F',
        10: '#C7C7C7',
        7: '#D9D9D9',
        5: '#EDEDED',
        1: '#F5F5F5',
      },
      light: '#EBEDF0',
      white: '#FFFFFF',
      whiteAlpha: {
        50: '#ffffff',
        45: '#ffffffb8',
        40: '#ffffffb8',
        30: '#ffffffa3',
        20: '#ffffff7a',
        10: '#ffffff3d',
        5: '#ffffff14',
      },
      premiumGradient: {
        1: 'rgba(255, 212, 161, 1)',
        2: 'rgba(255, 214, 109, 1)',
        3: 'rgba(255, 214, 0, 1)',
      },
    },
    boxShadow: {
      default: '0px 1px 4px 0px rgba(20, 20, 20, 0.16)',
      active: '0px 6px 24px 0px rgba(20, 20, 20, 0.16)',
      top: '0px 6px 24px 0px rgba(20, 20, 20, 0.08)',
      bottom: '0px -3px 24px 0px rgba(20, 20, 20, 0.08)',
      validate: '0px 4px 16px 0px rgba(240, 14, 14, 0.16)',
    },
    fontFamily: {
      inter: ['var(--font-inter)', ...fontFamily.sans],
      poppins: ['var(--font-poppins)', ...fontFamily.sans],
    },
    fontSize: {
      'heading-xl': [
        '2.5rem',
        {
          lineHeight: '120%',
          letterSpacing: '-0.015em',
        },
      ],
      'heading-lg': [
        '2rem',
        {
          lineHeight: '120%',
          letterSpacing: '-0.01em',
        },
      ],
      'heading-md': [
        '1.5rem',
        {
          lineHeight: '130%',
          letterSpacing: '-0.01em',
        },
      ],
      'heading-sm': [
        '1.25rem',
        {
          lineHeight: '130%',
          letterSpacing: '-0.005em',
        },
      ],
      'heading-smaller': [
        '1.125rem',
        {
          lineHeight: '130%',
          letterSpacing: '-0.002em',
        },
      ],
      'heading-xs': [
        '1rem',
        {
          lineHeight: '140%',
        },
      ],
      'heading-micro': [
        '0.875rem',
        {
          lineHeight: '140%',
          letterSpacing: '0.0063rem',
        },
      ],
      'subHeading-xl': [
        '1.125rem',
        {
          lineHeight: '140%',
          letterSpacing: '-0.005em',
        },
      ],
      'subHeading-lg': [
        '1rem',
        {
          lineHeight: '140%',
          letterSpacing: '-0.002em',
        },
      ],
      'subHeading-md': [
        '0.875rem',
        {
          lineHeight: '140%',
        },
      ],
      'subHeading-sm': [
        '0.75rem',
        {
          lineHeight: '140%',
        },
      ],
      'body-lg': [
        '1rem',
        {
          lineHeight: '150%',
          letterSpacing: '0.0063rem',
        },
      ],
      'body-md': [
        '0.875rem',
        {
          lineHeight: '150%',
          letterSpacing: '0.0063rem',
        },
      ],
      'body-sm': [
        '0.75rem',
        {
          lineHeight: '150%',
          letterSpacing: '0.0063rem',
        },
      ],
      'body-xs': [
        '0.625rem',
        {
          lineHeight: '150%',
          letterSpacing: '0.0063rem',
        },
      ],
      'label-xl': [
        '1.125rem',
        {
          lineHeight: '140%',
          letterSpacing: '0.025rem',
        },
      ],
      'label-lg': [
        '1rem',
        {
          lineHeight: '140%',
          letterSpacing: '0.013rem',
        },
      ],
      'label-md': [
        '0.875rem',
        {
          lineHeight: '140%',
          letterSpacing: '0.013rem',
        },
      ],
      'label-sm': [
        '0.75rem',
        {
          lineHeight: '140%',
          letterSpacing: '0.0063rem',
        },
      ],
      'caption-lg': [
        '0.875rem',
        {
          lineHeight: '120%',
          letterSpacing: '0.013rem',
        },
      ],
      'caption-md': [
        '0.75rem',
        {
          lineHeight: '120%',
          letterSpacing: '0.013rem',
        },
      ],
      'caption-sm': [
        '0.625rem',
        {
          lineHeight: '120%',
          letterSpacing: '0.0063rem',
        },
      ],
    },
    spacing: {
      0: '0',
      1: '0.125rem',
      2: '0.25rem',
      3: '0.5rem',
      4: '0.75rem',
      5: '1rem',
      6: '1.25rem',
      7: '1.5rem',
      8: '2rem',
      9: '3rem',
      10: '4rem',
      11: '6rem',
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.icon-12': {
          '@apply w-4 h-4': {},
        },
        '.icon-16': {
          '@apply w-5 h-5': {},
        },
        '.icon-20': {
          '@apply w-6 h-6': {},
        },
        '.icon-24': {
          '@apply w-7 h-7': {},
        },
        '.icon-32': {
          '@apply w-8 h-8': {},
        },
        '.icon-40': {
          '@apply w-[2.5rem] h-[2.5rem]': {},
        },
        '.premium-badge-bg': {
          background:
            'linear-gradient(120deg, rgba(255, 255, 255, 0) 16.37%, rgba(255, 255, 255, 0.48) 34.7%, rgba(255, 255, 255, 0) 51.62%, rgba(255, 255, 255, 0.24) 64.31%, rgba(255, 255, 255, 0) 70.42%), #FFD66D',
        },
      })
    }),
  ],
}
