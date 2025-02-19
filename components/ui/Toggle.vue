<template>
  <label>
    <input
      type="checkbox"
      class="peer sr-only"
      :checked="modelValue"
      :disabled="disabled"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <span
      class="peer relative block h-7 w-[3.25rem] rounded-full border border-gray-200 bg-white after:absolute after:left-[1px] after:top-[1px] after:h-6 after:w-6 after:rounded-full after:bg-gray-200 after:transition-all after:content-[''] peer-checked:border-orange peer-checked:bg-orange peer-checked:after:left-[25px] peer-checked:after:bg-white peer-focus:outline-none peer-disabled:!border-gray-200 peer-disabled:bg-gray-200 peer-disabled:after:bg-gray-300"
    >
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
