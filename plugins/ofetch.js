import { ofetch } from 'ofetch'

export default defineNuxtPlugin(_nuxtApp => {
  globalThis.$fetch = ofetch.create({
    onRequest({ options }) {
      let access
      let refresh

      if (import.meta.client) {
        access = useCookie('client_access', { readonly: true })
        refresh = useCookie('client_refresh', { readonly: true })

        if (access.value) {
          options.headers = { Authorization: `Bearer ${access.value}` }
        }
      }
    },
    // onRequestError(error) {
    //   console.log('🚀 ~ ooo error:', error)
    // },
  })
})
