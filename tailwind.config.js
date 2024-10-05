/** @type {import('tailwindcss').Config} */
export default {
  content: [
    `${srcDir}/components/**/*.{vue,js,ts}`,
    `${srcDir}/layouts/**/*.vue`,
    `${srcDir}/pages/**/*.vue`,
    `${srcDir}/composables/**/*.{js,ts}`,
    `${srcDir}/plugins/**/*.{js,ts}`,
    `${srcDir}/utils/**/*.{js,ts}`,
    `${srcDir}/App.{js,ts,vue}`,
    `${srcDir}/app.{js,ts,vue}`,
    `${srcDir}/Error.{js,ts,vue}`,
    `${srcDir}/error.{js,ts,vue}`,
    `${srcDir}/app.config.{js,ts}`,
  ],
  theme: {
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#212429',
      white: {
        DEFAULT: '#ffffff',
      },
      gray: {
        DEFAULT: '#495057',
        100: '#F8F9FA',
        200: '#DDE2E5',
        300: '#ACB5BD',
        400: '#495057',
      },
      green: {
        DEFAULT: '#228B22',
      },
      brown: {
        DEFAULT: '#8B4513',
      },
      orange: {
        DEFAULT: '#DAA520',
        200: '#FBEECDB2',
        300: '#FBEECD',
      },
      red: {
        default: '#F03D3E',
        200: '#FF3B30',
        300: '',
        600: '',
        700: '#D84910',
      },
      blue: {
        DEFAULT: '#374FC7',
        300: '',
      },
    }),
    letterSpacing: {
      normal: '0em',
      8: '0.08',
    },
    fontSize: {
      h1: ['3.125rem', { letterSpacing: '0em' }],
      h2: ['2.375rem', { letterSpacing: '0em' }],
      h3: ['1.75rem', { letterSpacing: '0em' }],
      h4: ['1.3125rem', { letterSpacing: '0em' }],
      h5: ['0.75rem', { letterSpacing: '0.08' }],
      p: ['1rem', { letterSpacing: '0em' }],
      s: ['0.75rem', { letterSpacing: '0em' }],
      p2: ['0.875rem', { letterSpacing: '0em' }],
      b: ['0.9375rem', { letterSpacing: '0.08' }],
    },
    extend: {
      fontFamily: {
        nunito: ['"Nunito"'],
        jost: ['"Jost"'],
      },
    },
  },
  plugins: [],
}
