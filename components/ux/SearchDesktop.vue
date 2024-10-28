<template>
  <div class="hidden lg:block">
    <div class="grid w-full grid-cols-[1fr_14rem_11.375rem] rounded-lg bg-white">
      <label class="relative block overflow-hidden rounded-l-lg">
        <IconSearch class="absolute left-6 top-1/2 !h-5 !w-5 -translate-y-1/2 text-gray-300" />
        <input
          class="w-full p-4 pl-12 text-p outline-none placeholder:text-gray-300"
          type="text"
          placeholder="Поиск по названию"
        />
      </label>
      <button
        class="relative flex items-center gap-2 p-4 text-left before:absolute before:left-0 before:top-1/2 before:h-3 before:w-px before:-translate-y-1/2 before:bg-gray-200 before:content-['']"
      >
        <IconMark class="!h-5 !w-5 text-gray-300" />
        <span class="text-p text-gray-300">Выберите город</span>
        <IconTriangleDown class="ml-auto !h-5 !w-5 text-orange" />
      </button>
      <UiButton class="items-center justify-center">Поиск</UiButton>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
