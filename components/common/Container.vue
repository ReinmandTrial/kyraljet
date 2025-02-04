<template>
  <div
    class="lg:px-24 mx-auto w-full px-4 md:px-12"
    :style="{
      maxWidth,
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    maxWidth: {
      type: String,
      default: '1324px',
    },
  },
}
</script>

<style lang="scss" scoped></style>
