<template>
  <div class="flex h-full w-fit overflow-hidden rounded-lg border border-gray-200">
    <button
      class="flex h-10 w-10 items-center justify-center border-r border-gray-200"
      :class="{
        'text-orange': modelValue !== min,
      }"
      :disabled="modelValue <= min"
      @click="minus"
    >
      <IconMinus class="!h-6 !w-6" />
    </button>
    <input
      ref="input"
      type="number"
      class="h-10 w-10 appearance-none text-center font-jost text-h4 outline-none"
      :value="modelValue"
      :disabled="true"
      @input="onInput($event)"
    />
    <button
      class="flex h-10 w-10 items-center justify-center border-l border-gray-200"
      :class="{
        'text-orange': modelValue !== max,
      }"
      :disabled="max !== null && modelValue >= max"
      @click="plus"
    >
      <IconPlus class="!h-6 !w-6" />
    </button>
  </div>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    min: {
      default: 0,
    },
    max: {
      default: null,
    },
  },
  data() {
    return {}
  },
  methods: {
    minus() {
      this.$refs.input.value--
      this.$emit('update:modelValue', Number(this.$refs.input.value))
    },
    plus() {
      this.$refs.input.value++
      this.$emit('update:modelValue', Number(this.$refs.input.value))
    },
    onInput() {
      if (Number(this.$refs.input.value) > this.max) {
        this.$refs.input.value = this.max
      }
      this.$emit('update:modelValue', Number(this.$refs.input.value))
    },
  },
}
</script>

<style lang="scss" scoped></style>
