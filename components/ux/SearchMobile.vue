<template>
  <div class="lg:hidden">
    <div class="rounded-lg bg-white p-1">
      <label class="relative w-full overflow-hidden block">
        <SvgIcon
          class="absolute left-4 top-1/2 !h-5 !w-5 -translate-y-1/2 text-gray-300"
          name="search"
        />
        <input
          class="p-4 pl-10 text-p outline-none placeholder:text-gray-300 w-full"
          type="text"
          placeholder="Поиск по названию"
        />
      </label>
      <button
        class="relative flex w-full items-center gap-1 p-4 text-left before:absolute before:top-0 before:left-1/2 before:h-px before:w-[calc(100%-2rem)] before:-translate-x-1/2 before:bg-gray-200 before:content-['']"
      >
        <SvgIcon class="!h-5 !w-5 text-gray-300" name="mark" />
        <span class="text-p text-gray-300">Выберите город</span>
        <SvgIcon class="ml-auto !h-5 !w-5 text-orange" name="triangle-down" />
      </button>
      <UiButton class="items-center justify-center w-full">Поиск</UiButton>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
