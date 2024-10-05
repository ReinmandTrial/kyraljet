// https://nuxt.com/docs/api/configuration/nuxt-config
const config = defineNuxtConfig({
  buildModules: ['@nuxtjs/svg-sprite'],
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
  ],
})
export default config
