/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './utils/**/*.{js,ts}',
    './App.{js,ts,vue}',
    './app.{js,ts,vue}',
    './Error.{js,ts,vue}',
    './error.{js,ts,vue}',
    './app.config.{js,ts}',
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
        500: '#BA8D1E',
      },
      red: {
        default: '#F03D3E',
        200: '#FF3B30',
        300: '',
        500: '#5F3314',
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
      h1: ['3.125rem', { letterSpacing: '0em', fontWeight: 500 }],
      h2: ['2.375rem', { letterSpacing: '0em', fontWeight: 500 }],
      h3: ['1.75rem', { letterSpacing: '0em', fontWeight: 400 }],
      h4: ['1.3125rem', { letterSpacing: '0em', fontWeight: 400 }],
      h5: ['0.75rem', { letterSpacing: '0.08', fontWeight: 500 }],
      p: ['1rem', { letterSpacing: '0em', fontWeight: 400 }],
      s: ['0.75rem', { letterSpacing: '0em', fontWeight: 400 }],
      p2: ['0.875rem', { letterSpacing: '0em', fontWeight: 400 }],
      b: ['0.9375rem', { letterSpacing: '0.08', fontWeight: 500 }],
    },
    extend: {
      fontFamily: {
        nunito: ['"Nunito"'],
        jost: ['"Jost"'],
      },
      boxShadow: {
        DEFAULT:
          '0px 4px 4px -4px rgba(12, 12, 13, 0.05), 0px 16px 16px -8px rgba(12, 12, 13, 0.1)',
      },
    },
  },
  plugins: [],
}
