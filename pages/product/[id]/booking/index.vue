<template>
  <CommonContainer max-width="1440px" class="pb-32 pt-10">
    <div class="mb-10">
      <h2 class="mb-8 font-jost text-h2">Период аренды</h2>
      <div class="">
        <div
          class="mb-6 flex max-w-[27.875rem] flex-col gap-4 lg:max-w-none lg:flex-row lg:flex-wrap"
        >
          <UiInput
            v-model="date_start"
            label="Дата начала аренды"
            placeholder="22/12/2025"
            mask="##/##/####"
          />
          <UiInput v-model="time_start" label="Время началы" placeholder="12:00" mask="##:##" />
          <UiInput v-model.number="days" label="Количество суток" placeholder="3" />
        </div>
        <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10">
          <div class="flex flex-auto items-center gap-4">
            <div class="h-[6.875rem] w-[6.875rem] overflow-hidden rounded-lg">
              <img class="h-full w-full object-cover" :src="tool.photos[0].photo" alt="" />
            </div>
            <div class="">
              <p class="mb-2 font-jost text-h5 text-gray-300">Code {{ tool.id }}</p>
              <h4 class="font-jost text-h4 lg:text-h3">{{ tool.name }}</h4>
            </div>
          </div>

          <div class="flex flex-col">
            <span class="text-s text-gray lg:font-jost lg:text-h5">
              <span class="text-p2 text-orange lg:text-h4">{{ tool.price }} Т</span> /сутки
            </span>
            <span class="text-s text-gray lg:font-jost lg:text-h5">
              <span class="text-p2 text-orange lg:text-h4">{{ tool.price * 7 }} Т</span> /неделя
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

          <UiButton class="w-full justify-center" @click="onBook"> Забронировать </UiButton>
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
import TOOLS from '@/mocks/tools'
import { useAuthStore } from '@/stores/auth'

export default {
  data() {
    return {
      tool: TOOLS.find(t => t.id === Number(this.$route.params.id)),
      date_start: '',
      time_start: '',
      days: null,
      amount: 1,
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
    }
  },
  computed: {
    user() {
      return useAuthStore().user
    },
  },
  created() {
    useHead({ title: 'Бронирование' })
  },
  mounted() {
    this.first_name = this.user?.profile.first_name || ''
    this.last_name = this.user?.profile.last_name || ''
    this.email = this.user?.email || ''
    this.phone = this.user?.profile.phone || ''
  },
  methods: {
    onBook() {
      const order = {
        date_start: this.date_start,
        time_start: this.time_start,
        days: this.days,
        amount: this.amount,
        tool: this.tool,
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        phone: this.phone,
        i_took: false,
        i_gave: false,
      }

      const storageJson = localStorage.getItem('orders')

      const orders = JSON.parse(storageJson) || []

      order.id = orders.length + 1

      orders.push(order)

      localStorage.setItem('orders', JSON.stringify(orders))

      this.$router.push({ name: 'product-id-booking-success', params: { id: this.tool.id } })
    },
  },
}
</script>

<style lang="scss" scoped></style>
