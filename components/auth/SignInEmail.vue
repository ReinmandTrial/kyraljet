<template>
  <UiPopup
    max-width="43rem"
    close-btn-mobile
    close-btn-desktop
    @close="
      $router.push({
        params: { ...$route.params },
        query: { ...$route.query, sign_in_email: undefined },
      })
    "
  >
    <div class="flex flex-auto flex-col lg:min-h-[36.25rem] lg:w-full lg:flex-row">
      <div
        class="flex h-[12.5rem] flex-col items-center justify-center bg-orange lg:h-auto lg:w-[13.5rem] lg:rounded-r-lg"
      >
        <div class="lg:hidden">
          <img src="@/assets/images/auth/logo.png" alt="" />
        </div>
        <IconLogo class="mb-4 hidden !h-20 !w-20 text-gray-100 lg:block" />
        <p class="font-jost text-h3 text-gray-100">KuralJet</p>
      </div>
      <div
        class="relative z-10 -mt-2 flex flex-auto flex-col rounded-t-lg bg-white px-5 pb-10 pt-20 shadow-lg lg:mt-0 lg:rounded-none lg:px-16 lg:pb-14"
      >
        <h1 class="mb-5 text-center font-jost text-h3 lg:text-h4">Войти в сервис</h1>
        <form class="flex flex-auto flex-col">
          <div class="my-auto">
            <div class="mb-4">
              <UiInput
                v-model="email"
                class="mb-4"
                type="email"
                placeholder="Email"
                :error="email_error"
              />
              <UiInput
                v-model="password"
                type="password"
                placeholder="Password"
                :error="password_error"
              />
            </div>
            <div class="flex justify-between gap-2">
              <NuxtLink
                :to="{
                  params: { ...$route.params },
                  query: { ...$route.query, sign_in_email: undefined, sign_up: true },
                }"
                class="text-s text-gray-400 underline hover:no-underline"
              >
                Регистрация
              </NuxtLink>
              <NuxtLink to="/" class="text-s text-gray-400 underline hover:no-underline">
                Забыли пароль?
              </NuxtLink>
            </div>
          </div>
          <div class="mt-5">
            <p v-if="error" class="mb-1 text-p2 text-red-default">{{ error }}</p>
            <UiButton class="w-full justify-center" @click="onSubmit">Войти</UiButton>
          </div>
        </form>
      </div>
    </div>
  </UiPopup>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      email_error: false,
      password: '',
      password_error: false,
      error: '',
    }
  },
  methods: {
    async onSubmit() {
      this.email_error = false
      this.password_error = false

      if (!this.email) {
        this.email_error = true
        return
      }
      if (!this.password) {
        this.password_error = true
        return
      }

      await $fetch('https://kuraljet.pp.ua/auth/login', {
        method: 'POST',
        body: {
          email: this.email,
          password: this.password,
        },
      })
        .then(({ data }) => {
          const client_access = useCookie('client_access', {
            maxAge: 3 * 24 * 60 * 60,
          })
          const client_refresh = useCookie('client_refresh', {
            maxAge: 3 * 24 * 60 * 60,
          })

          client_access.value = data.token.access
          client_refresh.value = data.token.refresh

          this.$router
            .replace({
              params: {
                ...this.$route.params,
              },
              query: {
                ...this.$route.query,
                sign_in_email: undefined,
              },
            })
            .then(() => {
              window.location.reload()
            })
        })
        .catch(({ data }) => {
          this.error = data?.message
        })
    },
  },
}
</script>

<style lang="scss" scoped>
:deep(.popup__content) {
  @apply flex flex-col p-0;
}
</style>
