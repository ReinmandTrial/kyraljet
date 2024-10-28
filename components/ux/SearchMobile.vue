<template>
  <div class="lg:hidden">
    <div class="rounded-lg bg-white p-1">
      <label class="relative block w-full overflow-hidden">
        <IconSearch class="absolute left-4 top-1/2 !h-5 !w-5 -translate-y-1/2 text-gray-300" />
        <input
          class="w-full p-4 pl-10 text-p outline-none placeholder:text-gray-300"
          type="text"
          placeholder="Поиск по названию"
        />
      </label>
      <button
        class="relative flex w-full items-center gap-1 p-4 text-left before:absolute before:left-1/2 before:top-0 before:h-px before:w-[calc(100%-2rem)] before:-translate-x-1/2 before:bg-gray-200 before:content-['']"
      >
        <IconMark class="!h-5 !w-5 text-gray-300" />
        <span class="text-p text-gray-300">Выберите город</span>
        <IconTriangleDown class="ml-auto !h-5 !w-5 text-orange" />
      </button>
      <UiButton class="w-full items-center justify-center">Поиск</UiButton>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
