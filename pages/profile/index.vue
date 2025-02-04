<template>
  <CommonContainer class="pb-14 pt-5 lg:pb-24 lg:pt-10">
    <h1 class="mb-7 font-jost text-h4 lg:mb-8 lg:text-h3">Мои данные</h1>
    <div class="max-w-[27.875rem]">
      <UiInput class="mb-6" label="Имя" :model-value="user?.profile.first_name" disabled />
      <UiInput class="mb-6" label="Фамилия" :model-value="user?.profile.last_name" disabled />
      <UiInput class="mb-6" label="Почта" :model-value="user?.email" disabled />
      <UiInput class="mb-6" label="Номер телефона" :model-value="user?.profile.phone" disabled />
    </div>
  </CommonContainer>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'

definePageMeta({
  middleware: 'auth',
})

const authStore = useAuthStore()
const user = computed(() => authStore.user)
</script>

<style lang="scss" scoped></style>
