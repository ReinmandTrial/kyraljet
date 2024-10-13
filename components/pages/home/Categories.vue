<template>
  <div class="">
    <h2 class="mb-4 lg:mb-6 font-jost text-h3">Категории</h2>
    <ul class="grid lg:grid-cols-3 gap-4 lg:gap-5">
      <li class="flex flex-col items-center rounded-lg bg-orange-200 p-3 text-center">
        <div>
          <img src="@/assets/images/categories/household.svg" alt="" />
        </div>
        <h3 class="font-jost lg:text-h4 text-gray">Бытовое оборудование</h3>
      </li>
      <li class="flex flex-col items-center rounded-lg bg-orange-200 p-3 text-center">
        <div>
          <img src="@/assets/images/categories/agricultural.svg" alt="" />
        </div>
        <h3 class="font-jost lg:text-h4 text-gray">Аграрное оборудование</h3>
      </li>
      <li class="flex flex-col items-center rounded-lg bg-orange-200 p-3 text-center">
        <div>
          <img src="@/assets/images/categories/construction.svg" alt="" />
        </div>
        <h3 class="font-jost lg:text-h4 text-gray">Строительное оборудование</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
