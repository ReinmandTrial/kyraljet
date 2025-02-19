<template>
  <CommonContainer class="pb-14 pt-5 lg:pb-24 lg:pt-10">
    <h1 class="mb-7 font-jost text-h4 lg:mb-8 lg:text-h3">Мои заказы</h1>
    <div v-if="orders.length" class="flex flex-col gap-5">
      <PagesProfileOrdersCard
        v-for="order in orders"
        :key="order.id"
        :order="order"
        @on-i-took="v => onITook(order, v)"
        @on-i-gave="v => onIGave(order, v)"
      />
    </div>
    <div v-else-if="!loading" class="flex min-h-[30dvh] flex-col items-center justify-center">
      <h3 class="text-center font-jost text-h4">Пусто</h3>
    </div>
  </CommonContainer>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
      loading: true,
    }
  },
  created() {
    useHead({ title: 'Заказы' })
  },
  mounted() {
    const storageJson = localStorage.getItem('orders')

    const orders = JSON.parse(storageJson) || []

    this.orders = orders

    this.loading = false
  },
  methods: {
    onITook(order, value) {
      order.i_took = value

      localStorage.setItem('orders', JSON.stringify(this.orders))
    },
    onIGave(order, value) {
      order.i_gave = value

      localStorage.setItem('orders', JSON.stringify(this.orders))
    },
  },
}
</script>

<style lang="scss" scoped></style>
