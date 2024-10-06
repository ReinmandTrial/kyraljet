import vClickOutside from 'click-outside-vue3'

export default defineNuxtPlugin(async nuxtApp => {
  nuxtApp.vueApp.directive('out', vClickOutside.directive)
})
