<template>
  <div class="">
    <h5 v-if="label" class="mb-1 font-jost text-h5 uppercase text-gray-300">{{ label }}</h5>
    <label class="relative">
      <input
        class="w-full rounded-2xl border border-gray-200 px-6 py-3.5 outline-none placeholder:text-gray-300 focus:border-orange"
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
    </label>
  </div>
</template>

<script>
export default {
  emits: ['input'],
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
    value: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped></style>
