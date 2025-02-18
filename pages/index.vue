<template>
  <div
    class="-mt-9 mb-8 flex h-[28.75rem] flex-col items-center justify-center rounded-b-lg bg-[url('@/assets/images/home/banner-mob.jpg')] bg-cover bg-no-repeat lg:-mt-4 lg:mb-[4.375rem] lg:h-[27rem] lg:bg-[url('@/assets/images/home/banner.jpg')]"
  >
    <CommonContainer>
      <div>
        <UxSearchDesktop class="mx-auto max-w-[49rem]" />
        <UxSearchMobile class="" />
      </div>
    </CommonContainer>
  </div>

  <div class="">
    <CommonContainer class="flex flex-col">
      <div class="order-1 mb-[4.375rem] flex lg:gap-6">
        <PagesHomeCurrentRent class="w-[20.5rem]" />
        <PagesHomeCategoriesShort class="hidden flex-auto lg:block" />
      </div>
      <PagesHomeDownloadApp class="order-2 mb-[4.375rem] lg:order-3" />
      <!-- <PagesHomeCategories class="order-3 mb-[4.375rem] lg:order-2 lg:mb-[7.5rem]" /> -->
      <PagesHomePartners class="order-4 mb-[7.5rem]" />
    </CommonContainer>
  </div>
</template>

<script>
export default {
  created() {
    useHead({ title: 'Главная' })
  },
}
</script>

<style lang="scss" scoped></style>
