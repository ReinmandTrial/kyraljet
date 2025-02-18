// https://nuxt.com/docs/api/configuration/nuxt-config
const config = defineNuxtConfig({
  devtools: { enabled: true },
  build: { transpile: ['@fawmi/vue-google-maps',] },
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Jost: [400, 500, 600],
          Nunito: [400],
        },
      },
    ],
    'nuxt-svgo',
    '@pinia/nuxt',
    '@nuxt/image',
  ],
  svgo: {
    svgo: true,
    autoImportPath: '~/assets/icons/',
    componentPrefix: 'icon',
  },
  plugins: ['~/plugins/click-outside', '~/plugins/google-maps','~/plugins/mask', '~/plugins/ofetch'],
})
export default config
