<template>
  <div class="flex items-center justify-center gap-5">
    <div>
      <img src="@/assets/images/phone-app.png" alt="" />
    </div>
    <div>
      <h2 class="mb-4 hidden font-jost text-h2 lg:block">Установите наше приложение</h2>
      <h2 class="mb-4 font-jost text-h4 lg:hidden">Приложение для смартфона</h2>
      <div class="gap-5 lg:flex">
        <a
          href="#"
          class="mb-4 flex w-40 items-center gap-2 rounded-lg border border-gray-300 p-2 font-jost text-b lg:mb-0 lg:w-[13.25rem]"
        >
          <div>
            <img src="@/assets/images/app-store-icon.png" alt="" />
          </div>
          App store
        </a>
        <a
          href="#"
          class="flex w-40 items-center gap-2 rounded-lg border border-gray-300 p-2 font-jost text-b lg:w-[13.25rem]"
        >
          <div>
            <img src="@/assets/images/google-play-icon.png" alt="" />
          </div>
          Play Market
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
