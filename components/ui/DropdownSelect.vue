<template>
  <div class="relative">
    <button class="flex items-center gap-2 lg:gap-3" @click="open = !open">
      <span v-if="selected" class="text-p2 text-gray-400 lg:text-p">{{ selected?.label }}</span>
      <span v-else class="text-p2 text-gray-300 lg:text-p">{{ title }}</span>
      <IconTriangleDown class="!h-5 !w-5 text-orange" :class="{ 'rotate-180': open }" />
    </button>
    <div
      v-show="open"
      class="absolute top-[calc(100%+0.5rem)] z-50 w-max overflow-hidden rounded-lg py-1 shadow"
      :class="{
        'right-0': positionXMobile === 'right',
        'left-0': positionXMobile === 'left',
        'lg:left-auto lg:right-0': positionX === 'right',
        'lg:left-0 lg:right-auto': positionX === 'left',
      }"
    >
      <button
        v-for="option in options"
        :key="option.value"
        class="block w-full bg-white px-4 py-2 text-p2 lg:text-p"
        @click="selectOption(option)"
      >
        {{ option.label }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selected: {
      type: Object,
    },
    title: {
      type: String,
    },
    options: {
      type: Array,
      default: function () {
        return []
      },
    },
    positionX: {
      type: String,
      default: 'left',
    },
    positionXMobile: {
      type: String,
      default: 'left',
    },
  },
  emits: ['update:selected'],
  data() {
    return {
      open: false,
    }
  },
  methods: {
    selectOption(option) {
      this.$emit('update:selected', option)
      this.open = false
    },
  },
}
</script>

<style lang="scss" scoped></style>
