<template>
  <CommonContainer max-width="1440px" class="pb-32 pt-10">
    <div class="flex min-h-[50dvh] flex-col items-center justify-center">
      <h2 class="mb-10 font-jost text-h2">Вы успешно взяли в аренду инструмент!</h2>
      <UiButton :to="{ name: 'profile-orders' }" class="mb-4 w-full max-w-[20rem] justify-center">
        Мои заказы
      </UiButton>
      <UiButton :to="{ name: 'index' }" class="w-full max-w-[20rem] justify-center">
        На Главную
      </UiButton>
    </div>
  </CommonContainer>
</template>

<script>
export default {
  created() {
    useHead({ title: 'Успешно забронировано' })
  },
}
</script>

<style lang="scss" scoped></style>
