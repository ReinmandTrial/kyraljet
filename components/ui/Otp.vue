<template>
  <VOtpInput
    class="otp"
    :value="value"
    type="number"
    :error="error"
    @input="val => $emit('input:value', val)"
    @finish="$emit('finish')"
  ></VOtpInput>
</template>

<script>
export default {
  props: {
    length: {
      type: Number,
      default: 6,
    },
    value: {
      default: '',
    },
    error: {},
  },
}
</script>

<style lang="scss" scoped>
.otp {
  flex: none;
  flex-wrap: nowrap;
  gap: 12px;
  margin: 0;
  justify-content: space-between;
  @media (max-width: 575.98px) {
    gap: 5px;
  }
  :deep(*) {
    border: none !important;
    outline: none !important;
  }
  :deep(.v-input) {
    flex: 0 0 44px;
    height: 44px;
    padding: 0;
    border-radius: 8px;
    background: var(--white);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.09);
    @media (max-width: 575.98px) {
      flex: 0 0 35px;
      height: 35px;
    }
  }
  :deep(.v-input.error--text) {
    box-shadow: 0px 0px 5px 0px rgba(255, 0, 0, 0.4);
  }

  :deep(.v-input--is-focused) {
    box-shadow: 0px 0px 5px 0px rgba(250, 174, 43, 0.4) !important;
  }

  :deep(.v-input__control) {
    height: 100%;
  }
  :deep(.v-input__slot) {
    height: 100%;
    min-height: auto;
    margin: 0;
  }
  :deep(.v-text-field__slot) {
    height: 100%;
  }

  :deep(.v-input input) {
    max-height: none;
    height: 100%;
    color: var(--black1);
    font-family: 'Lato';
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.25px;
  }
}
</style>
