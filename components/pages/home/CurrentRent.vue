<template>
  <div v-if="orders.length">
    <h2 class="mb-6 hidden font-jost text-h3 lg:block">Сейчас в аренде</h2>
    <PagesHomeCurrentRentItem
      v-for="order in orders"
      :key="order.id"
      class="mb-2"
      :order="order"
      @on-i-took="v => onITook(order, v)"
      @on-i-gave="v => onIGave(order, v)"
    />
  </div>
</template>

<script>
import { isWithinInterval, addDays } from 'date-fns'

export default {
  data() {
    return {
      orders: [],
      loading: true,
    }
  },
  computed: {
    currentRentOrders() {
      return this.orders.filter(order => {
        const today = new Date()

        const start = new Date(order.date_start.split('/').reverse())
        const end = addDays(start, order.days)

        return isWithinInterval(today, { start: start, end: end })
      })
    },
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
