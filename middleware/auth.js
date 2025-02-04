export default defineNuxtRouteMiddleware(() => {
  const access = useCookie('client_access', { readonly: true })
  const refresh = useCookie('client_refresh', { readonly: true })

  const auth = access.value && refresh.value

  if (!auth) {
    return navigateTo({ path: '/', query: { sign_in: true } })
  }
})
