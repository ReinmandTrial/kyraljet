<template>
  <div class="flex min-h-[100dvh] flex-col">
    <div class="flex flex-auto flex-col">
      <CommonHeader />
      <slot class="flex-auto" />
    </div>
    <CommonFooter />
  </div>
  <AuthLayout />
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
