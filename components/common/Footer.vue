<template>
  <footer class="rounded-t-lg bg-orange py-8">
    <CommonContainer class="grid gap-6 lg:grid-cols-4 lg:gap-4">
      <div class="lg:col-start-1 lg:col-end-3">
        <NuxtLink
          :to="{ name: 'index' }"
          class="mb-4 font-jost text-h3 font-semibold text-gray-100"
        >
          KuralJet
        </NuxtLink>
        <div class="flex gap-4">
          <div class="mb-4">
            <img src="@/assets/images/app-store.png" alt="" />
          </div>
          <div>
            <img src="@/assets/images/google-play.png" alt="" />
          </div>
        </div>
        <div>
          <img src="@/assets/images/mastercard-visa.png" alt="" />
        </div>
      </div>
      <div>
        <h3 class="mb-4 text-h4 text-gray-100">Контакты</h3>
        <div>
          <a href="mailto:Astana.best@gmail.com" class="mb-2 block text-p text-gray-100 last:mb-0">
            Astana.best@gmail.com
          </a>
          <a href="tel:+380 99 448 94903" class="mb-2 block text-p text-gray-100 last:mb-0">
            +380 99 448 94903
          </a>
          <p class="mb-2 block text-p text-gray-100 last:mb-0">Астана, улица Руставели 911/54</p>
        </div>
      </div>
      <div>
        <h3 class="mb-4 text-h4 text-gray-100">Информация</h3>
        <div>
          <NuxtLink :to="{ path: '/' }" class="mb-2 block text-p text-gray-100 last:mb-0">
            Политика конфиденциальности
          </NuxtLink>
          <NuxtLink :to="{ path: '/' }" class="mb-2 block text-p text-gray-100 last:mb-0">
            Пользовательские соглашения
          </NuxtLink>
        </div>
      </div>
    </CommonContainer>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
