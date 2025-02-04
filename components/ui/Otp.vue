<template>
  <VOtpInput
    :class="{ error }"
    input-classes="otp-input"
    inputType="numeric"
    :num-inputs="6"
    :should-auto-focus="true"
    :should-focus-order="true"
    :value="value"
    @update:value="v => $emit('update:value', v)"
    @on-complete="v => $emit('on-complete', v)"
  />
</template>

<script>
import VOtpInput from 'vue3-otp-input'

export default {
  components: {
    VOtpInput,
  },
  emits: ['update:value', 'on-complete'],
  props: {
    value: {
      default: '',
    },
    error: {
      type: Boolean,
    },
  },
}
</script>

<style lang="scss" scoped>
.otp-input-container {
  @apply justify-center gap-4;
}
:deep(.otp-input) {
  @apply h-10 w-10 appearance-none rounded border border-gray-200 text-center font-jost text-h4 outline-none;
}
.error :deep(.otp-input) {
  @apply border-red-default;
}
</style>
