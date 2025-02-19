<template>
  <div class="grid grid-cols-2 gap-3 rounded-lg bg-gray-100 p-3 lg:grid-cols-7 lg:py-4">
    <div class="col-start-1 col-end-3 flex items-center gap-4">
      <div class="h-[4.5rem] w-[4.5rem] flex-none overflow-hidden rounded-full">
        <img :src="order.tool.photos[0].photo" alt="" />
      </div>
      <div class="">
        <p class="text-p2 text-gray">Заказ № {{ order.id }}</p>
        <h4 class="mb-2 text-p">{{ order.tool.name }}</h4>
        <!-- <p class="text-p2 text-gray-300">8000000000$ Оплачено</p> -->
      </div>
    </div>
    <dl class="col-start-1 col-end-3 lg:col-start-3 lg:col-end-5">
      <dt class="mb-1 font-jost text-h5 uppercase text-gray-300">Компания</dt>
      <dd class="text-p2">{{ order.tool.toollessor.name }}</dd>
    </dl>
    <dl class="">
      <dt class="mb-1 font-jost text-h5 uppercase text-gray-300">начало аренды</dt>
      <dd class="text-p2">{{ order.date_start }}</dd>
    </dl>
    <dl class="">
      <dt class="mb-1 font-jost text-h5 uppercase text-gray-300">Конец аренды</dt>
      <dd class="text-p2">{{ dateEnd }}</dd>
    </dl>
    <div
      class="col-start-1 col-end-3 grid grid-cols-2 gap-3 border-t border-gray-200 pt-3 lg:col-start-auto lg:col-end-auto lg:grid-cols-1 lg:gap-2 lg:border-none lg:pt-0"
    >
      <label class="flex items-center gap-2">
        <UiCheckbox :modelValue="order.i_took" @update:modelValue="v => $emit('on-i-took', v)" />
        <span class="text-p">Забрал</span>
      </label>
      <label class="flex items-center gap-2">
        <UiCheckbox :modelValue="order.i_gave" @update:modelValue="v => $emit('on-i-gave', v)" />
        <span class="text-p">Отдал</span>
      </label>
    </div>
  </div>
</template>

<script>
import { format, addDays } from 'date-fns'

export default {
  emits: ['on-i-took', 'on-i-gave'],
  props: {
    order: {},
  },
  data() {
    return {
      d: true,
    }
  },
  computed: {
    dateEnd() {
      const start = new Date(this.order.date_start.split('/').reverse())
      const end = addDays(start, this.order.days)
      return format(end, 'dd/MM/yyyy')
    },
  },
}
</script>

<style lang="scss" scoped></style>
