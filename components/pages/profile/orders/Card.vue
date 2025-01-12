<template>
  <div class="grid grid-cols-2 gap-3 rounded-lg bg-gray-100 p-3 lg:grid-cols-7 lg:py-4">
    <div class="col-start-1 col-end-3 flex items-center gap-4">
      <div class="h-[4.5rem] w-[4.5rem] flex-none overflow-hidden rounded-full">
        <img src="" alt="" />
      </div>
      <div class="">
        <p class="text-p2 text-gray">Заказ № 224343</p>
        <h4 class="mb-2 text-p">Болгарочка обыкновенная</h4>
        <p class="text-p2 text-gray-300">8000000000$ Оплачено</p>
      </div>
    </div>
    <dl class="col-start-1 col-end-3 lg:col-start-3 lg:col-end-5">
      <dt class="mb-1 font-jost text-h5 uppercase text-gray-300">Компания</dt>
      <dd class="text-p2">“ООО Виртувианский человек</dd>
    </dl>
    <dl class="">
      <dt class="mb-1 font-jost text-h5 uppercase text-gray-300">начало аренды</dt>
      <dd class="text-p2">18/09/2024</dd>
    </dl>
    <dl class="">
      <dt class="mb-1 font-jost text-h5 uppercase text-gray-300">Конец аренды</dt>
      <dd class="text-p2">24/09/2024</dd>
    </dl>
    <div
      class="col-start-1 col-end-3 grid grid-cols-2 gap-3 border-t border-gray-200 pt-3 lg:col-start-auto lg:col-end-auto lg:grid-cols-1 lg:gap-2 lg:border-none lg:pt-0"
    >
      <label class="flex items-center gap-2">
        <UiCheckbox disabled />
        <span class="text-p text-gray-200">Забрал</span>
      </label>
      <label class="flex items-center gap-2">
        <UiCheckbox />
        <span class="text-p">Отдал</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
