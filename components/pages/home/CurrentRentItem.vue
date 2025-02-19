<template>
  <div class="rounded-[0.625rem] bg-gray-100 px-4 py-5">
    <h2 class="mb-2 font-jost text-h4 lg:hidden">Текущая аренда</h2>
    <p class="mb-4 text-gray">{{ order.tool.name }}</p>
    <ul class="">
      <li class="mb-2 flex min-h-20 gap-2 last:mb-0">
        <div class="flex w-[3.25rem] flex-col items-center">
          <div
            class="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-300"
          >
            <IconCalendar class="!h-6 !w-6" />
          </div>
          <div class="mx-auto mt-2 w-0 flex-auto border-l border-dashed border-gray-300"></div>
        </div>
        <div class="pt-2">
          <h3 class="mb-2 text-p2 text-gray">{{ order.date_start.slice(0, 5) }}</h3>
          <label class="flex items-center gap-3 text-gray">
            <UiToggle :modelValue="order.i_took" @update:modelValue="v => $emit('on-i-took', v)" />
            Инструмент забрал
          </label>
        </div>
      </li>
      <li class="mb-2 flex min-h-20 gap-2 last:mb-0">
        <div class="flex w-[3.25rem] flex-col items-center">
          <div
            class="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-orange-300 text-orange"
          >
            <IconKey class="!h-6 !w-6" />
          </div>
          <div class="mx-auto mt-2 w-0 flex-auto border-l border-dashed border-gray-300"></div>
        </div>
        <div class="pt-4">
          <h3 class="mb-2 text-p2 text-gray">Время аренды</h3>
        </div>
      </li>
      <li class="mb-2 flex gap-2 last:mb-0">
        <div class="flex w-[3.25rem] flex-col items-center">
          <div
            class="flex h-9 w-9 items-center justify-center rounded-full bg-orange-300 text-orange"
          >
            <IconCalendar class="!h-6 !w-6" />
          </div>
        </div>
        <div class="pt-2">
          <h3 class="mb-2 text-p2 text-gray">{{ dateEnd.slice(0, 5) }}</h3>
          <label class="flex items-center gap-3 text-gray">
            <UiToggle :modelValue="order.i_gave" @update:modelValue="v => $emit('on-i-gave', v)" />
            Инструмент отдал
          </label>
        </div>
      </li>
    </ul>
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
      const end = addDays(start, this.order.amount)
      return format(end, 'dd/MM/yyyy')
    },
  },
}
</script>

<style lang="scss" scoped></style>
