<template>
  <div class="">
    <h2 class="mb-6 font-jost text-h3">Оборудование</h2>
    <ul class="grid grid-cols-3 gap-5">
      <!-- <li class="flex flex-col items-center rounded-lg bg-orange-200 p-3 text-center">
        <div>
          <img src="/images/categories/household.svg" alt="asd" />
        </div>
        <h3 class="font-jost text-h4 text-gray">Бытовое</h3>
      </li>
      <li class="flex flex-col items-center rounded-lg bg-orange-200 p-3 text-center">
        <div>
          <img src="/images/categories/agricultural.svg" alt="" />
        </div>
        <h3 class="font-jost text-h4 text-gray">Аграрное</h3>
      </li> -->
      <li
        class="flex flex-col items-center rounded-lg bg-orange-200 p-3 text-center"
        @click="$router.push({ name: 'search' })"
      >
        <div>
          <img src="/images/categories/construction.svg" alt="" />
        </div>
        <h3 class="font-jost text-h4 text-gray">Строительное</h3>
      </li>
    </ul>
  </div>
</template>

<script>
import { useCategoriesStore } from '@/stores/categories'

export default {
  data() {
    return {
      categories: useCategoriesStore().categories,
    }
  },
}
</script>

<style lang="scss" scoped></style>
