<template>
  <div class="hidden lg:block">
    <div class="grid w-full grid-cols-[1fr_14rem_11.375rem] rounded-lg bg-white">
      <label class="relative overflow-hidden rounded-l-lg block">
        <SvgIcon
          class="absolute left-6 top-1/2 !h-5 !w-5 -translate-y-1/2 text-gray-300"
          name="search"
        />
        <input
          class="p-4 pl-12 text-p outline-none placeholder:text-gray-300 w-full"
          type="text"
          placeholder="Поиск по названию"
        />
      </label>
      <button
        class="relative flex items-center gap-2 p-4 text-left before:absolute before:left-0 before:top-1/2 before:h-3 before:w-px before:-translate-y-1/2 before:bg-gray-200 before:content-['']"
      >
        <SvgIcon class="!h-5 !w-5 text-gray-300" name="mark" />
        <span class="text-p text-gray-300">Выберите город</span>
        <SvgIcon class="ml-auto !h-5 !w-5 text-orange" name="triangle-down" />
      </button>
      <UiButton class="justify-center items-center">Поиск</UiButton>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
