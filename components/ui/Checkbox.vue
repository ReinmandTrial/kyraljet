<template>
  <label class="relative flex w-fit cursor-pointer items-center">
    <input
      type="checkbox"
      class="peer h-7 w-7 cursor-pointer appearance-none rounded border border-gray-200 transition-all checked:border-orange checked:bg-orange disabled:cursor-default disabled:border-gray-200 disabled:bg-gray-200 disabled:text-gray-200"
      :checked="modelValue"
      :disabled="disabled"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <span
      class="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white opacity-0 peer-checked:opacity-100 peer-disabled:text-gray-200"
    >
      <IconCheck />
    </span>
  </label>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
  },
}
</script>

<style lang="scss" scoped></style>
