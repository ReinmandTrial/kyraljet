<template>
  <CommonContainer max-width="1440px" class="pb-32 pt-10">
    <div class="mb-10">
      <h2 class="mb-8 font-jost text-h2">Период аренды</h2>
      <div class="">
        <div
          class="mb-6 flex max-w-[27.875rem] flex-col gap-4 lg:max-w-none lg:flex-row lg:flex-wrap"
        >
          <UiInput label="Дата начала аренды" placeholder="01/12/2025" />
          <UiInput label="Время началы" placeholder="12:00" />
          <UiInput label="Количество суток" placeholder="3" />
        </div>
        <div class="flex flex-col items-center gap-4 lg:flex-row lg:gap-10">
          <div class="flex flex-auto items-center gap-4">
            <div class="h-[6.875rem] w-[6.875rem] overflow-hidden rounded-lg">
              <img class="h-full w-full object-cover" src="" alt="" />
            </div>
            <div class="">
              <p class="mb-2 font-jost text-h5 text-gray-300">Code 12345</p>
              <h4 class="font-jost text-h4 lg:text-h3">Дрель “Makita” 1600 оборотов</h4>
            </div>
          </div>

          <div class="flex flex-col">
            <span class="text-s text-gray lg:font-jost lg:text-h5">
              <span class="text-p2 text-orange lg:text-h4">3 874 38748 73 $</span> /сутки
            </span>
            <span class="text-s text-gray lg:font-jost lg:text-h5">
              <span class="text-p2 text-orange lg:text-h4">3 874 38748 73 $</span> /неделя
            </span>
          </div>

          <UxCounter v-model="amount" :min="1" />
        </div>
      </div>
    </div>
    <client-only>
      <div class="">
        <h2 class="mb-8 font-jost text-h2">Личные данные</h2>

        <div v-if="user" class="max-w-[28rem]">
          <div class="mb-8 flex flex-col gap-4">
            <UiInput class="" label="Имя" v-model="first_name" />
            <UiInput class="" label="Фамилия" v-model="last_name" />
            <UiInput class="" label="Адрес электронной почты" v-model="email" />
            <UiInput class="" label="Номер телефона" v-model="phone" />
          </div>

          <UiButton class="w-full justify-center"> Забронировать </UiButton>
        </div>
        <div v-else class="max-w-[21rem]">
          <h3 class="mb-8 font-jost text-h3 text-gray">Войти в аккаунт</h3>
          <div class="">
            <UiButton
              :to="{
                params: { ...$route.params },
                query: { ...$route.query, sign_in: undefined, sign_in_email: true },
              }"
              class="w-full justify-center"
              color-type="blank"
            >
              Войти с помощью Email
            </UiButton>
          </div>
        </div>
      </div>
    </client-only>
  </CommonContainer>
</template>

<script>
import { useAuthStore } from '@/stores/auth'

export default {
  data() {
    return {
      amount: 1,
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
    }
  },
  mounted() {
    this.first_name = this.user?.profile.first_name || ''
    this.last_name = this.user?.profile.last_name || ''
    this.email = this.user?.email || ''
    this.phone = this.user?.profile.phone || ''
  },
  computed: {
    user() {
      return useAuthStore().user
    },
  },
}
</script>

<style lang="scss" scoped></style>
