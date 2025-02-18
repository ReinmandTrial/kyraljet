<template>
  <NuxtLink :to="{ name: 'product-id', params: { id: tool.id } }" class="flex min-h-[8rem] gap-1">
    <div class="w-[7rem] overflow-hidden rounded-lg">
      <img class="h-full w-full rounded-lg object-cover" :src="tool.photos[0].photo" alt="" />
    </div>
    <div class="flex flex-auto flex-col">
      <h4
        class="mb-0.5 overflow-hidden text-ellipsis whitespace-nowrap text-p2 leading-none text-gray"
      >
        {{ tool.name }}
      </h4>
      <!-- <div
        class="mb-2 flex items-center overflow-hidden text-ellipsis whitespace-nowrap text-s leading-none text-gray-300"
      >
        <IconMark />
        {{ tool.city?.name }}
      </div> -->
      <div class="flex items-center justify-between gap-2">
        <span class="text-h5">{{ tool.price }} Т / сутки</span>
        <IconTriangleRight class="!h-5 !w-5 text-orange" />
      </div>
      <!-- <button
        class="mt-auto flex w-full items-center justify-center gap-1 rounded-lg border border-gray-300 p-1 font-jost text-b text-gray"
      >
        <IconCart />
        Добавить в корзину
      </button> -->
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    tool: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped></style>
