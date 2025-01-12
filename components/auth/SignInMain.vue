<template>
  <UiPopup
    max-width="43rem"
    close-btn-mobile
    close-btn-desktop
    @close="
      $router.push({
        params: { ...$route.params },
        query: { ...$route.query, sign_in: undefined },
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
        <div class="mt-auto">
          <div class="mb-5">
            <UiButton
              :to="{
                params: { ...$route.params },
                query: { ...$route.query, sign_in: undefined, sign_in_email: true },
              }"
              class="w-full justify-center"
              >Войти с помощью Email</UiButton
            >
          </div>
          <p class="text-center text-s text-gray-300">
            Регистрируясь, вы принимаете <span class="text-gray-400">условия сервиса</span>.
          </p>
        </div>
      </div>
    </div>
  </UiPopup>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
:deep(.popup__content) {
  @apply flex flex-col p-0;
}
</style>
