<template>
  <div class="">
    <client-only>
      <h5 v-if="label" class="mb-1 font-jost text-h5 uppercase text-gray-300">{{ label }}</h5>
      <label class="relative">
        <input
          class="w-full rounded-2xl border border-gray-200 px-6 py-3.5 outline-none placeholder:text-gray-300 focus:border-orange"
          :class="{
            'border-red-default': error,
          }"
          :type="type"
          :placeholder="placeholder"
          :value="modelValue"
          :disabled="disabled"
          @input="$emit('update:modelValue', $event.target.value)"
        />
      </label>
    </client-only>
  </div>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    type: {
      type: String,
      default: 'text',
    },
    modelValue: {
      type: String,
    },
    error: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
  },
}
</script>

<style lang="scss" scoped></style>
