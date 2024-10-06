// https://nuxt.com/docs/api/configuration/nuxt-config
const config = defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Jost: [400, 500],
          Nunito: [400],
        },
      },
    ],
    '@nuxtjs/svg-sprite',
  ],
  plugins: ['~/plugins/click-outside'],
})
export default config
