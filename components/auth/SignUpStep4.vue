<template>
  <UiPopup max-width="43rem" @close="onClose">
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
        <div class="flex flex-auto flex-col justify-between">
          <div class="flex flex-col items-center py-16 text-center">
            <div class="mb-5">
              <IconCheck2 class="!h-12 !w-12 text-orange" />
            </div>
            <h2 class="font-jost text-h4">Вы успешно зарегистрировались</h2>
          </div>
          <div class="mt-5">
            <UiButton href="/" class="w-full justify-center">Перейти на главную</UiButton>
          </div>
        </div>
      </div>
    </div>
  </UiPopup>
</template>

<script>
export default {
  emits: ['back', 'close'],
  methods: {
    onClose() {
      window.location.href = '/'
    },
  },
}
</script>

<style lang="scss" scoped>
:deep(.popup__content) {
  @apply flex flex-col p-0;
}
</style>
