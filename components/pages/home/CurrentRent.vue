<template>
  <div>
    <h2 class="mb-6 hidden font-jost text-h3 lg:block">Сейчас в аренде</h2>
    <div class="rounded-[0.625rem] bg-gray-100 px-4 py-5">
      <h2 class="mb-2 font-jost text-h4 lg:hidden">Текущая аренда</h2>
      <p class="mb-4 text-gray">Болгарка “Макита” А34893904</p>
      <ul class="">
        <li class="mb-2 flex min-h-20 gap-2 last:mb-0">
          <div class="flex w-[3.25rem] flex-col items-center">
            <div
              class="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-300"
            >
              <SvgIcon name="calendar" />
            </div>
            <div class="mx-auto mt-2 w-0 flex-auto border-l border-dashed border-gray-300"></div>
          </div>
          <div class="pt-2">
            <h3 class="mb-2 text-p2 text-gray">27/09</h3>
            <label class="flex items-center gap-3 text-gray">
              <UiToggle disabled checked />
              Инструмент забрал
            </label>
          </div>
        </li>
        <li class="mb-2 flex min-h-20 gap-2 last:mb-0">
          <div class="flex w-[3.25rem] flex-col items-center">
            <div
              class="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-orange-300 text-orange"
            >
              <SvgIcon name="key" />
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
              <SvgIcon name="calendar" />
            </div>
          </div>
          <div class="pt-2">
            <h3 class="mb-2 text-p2 text-gray">27/09</h3>
            <label class="flex items-center gap-3 text-gray">
              <UiToggle />
              Инструмент отдал
            </label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
