<template>
  <div class="block">
    <div class="relative block h-0 w-full overflow-hidden rounded-lg pb-[53%]">
      <img
        class="absolute inset-0 h-full w-full rounded-lg object-cover"
        :src="tool.photos[0].photo"
        alt=""
      />
    </div>
    <div class="flex flex-col px-2 pb-2 pt-1">
      <p class="mb-2 text-s" :class="[tool.in_stock ? 'text-green' : 'text-red']">
        {{ tool.in_stock ? 'В наличии' : 'Не в наличии' }}
      </p>
      <h4 class="mb-4 line-clamp-2 text-p text-gray">
        {{ tool.name }}
      </h4>
      <p class="mb-4 mt-auto flex items-center justify-between gap-2">
        <span class="font-jost text-h5">{{ tool.price }} Т / сутки</span>
        <NuxtLink :to="{ name: 'product-id', params: { id: tool.id } }" class="flex">
          <IconTriangleRight class="!h-5 !w-5 text-orange" />
        </NuxtLink>
      </p>
      <!-- <UiButton class="w-full justify-center gap-1" color-type="blank">
        <IconCart />
        Добавить в корзину
      </UiButton> -->
    </div>
  </div>
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
