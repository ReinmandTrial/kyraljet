import { useAuthStore } from '@/stores/auth'

export default defineNuxtRouteMiddleware(async () => {
  const access = useCookie('client_access', { readonly: true })
  const store = useAuthStore()
  const user = store.user
  
  if (access.value && !user) {
    await $fetch('https://kuraljet.pp.ua/accounts/profile')
      .then(({ data }) => {
        store.setUser(data)
      })
      .catch(() => {
        // console.log('🚀 ~  user-data.global error:', error)
      })
  }
})
