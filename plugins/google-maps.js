import VueGoogleMaps from '@fawmi/vue-google-maps'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyAws20Ca3pW11AIWQP2WxH7GsricJjK7IA',
    },
  })
})
