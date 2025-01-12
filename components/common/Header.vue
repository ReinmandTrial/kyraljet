<template>
  <header
    class="z-[300] flex items-center justify-between rounded-b-lg rounded-bl-lg bg-orange px-4 py-2.5 text-white lg:p-8"
  >
    <NuxtLink :to="{ name: 'index' }" class="flex items-center gap-2 font-jost text-h4 lg:text-h3">
      <IconLogo class="lg:h-10 lg:w-10" />
      KuralJet
    </NuxtLink>

    <div class="flex items-center gap-4">
      <UiButton color-type="brown" class="hidden px-7 lg:flex">Сдать в аренду</UiButton>
      <div class="relative" v-out="() => (profile_open = false)">
        <button class="flex" @click="profile_open = !profile_open">
          <IconPerson class="!h-6 !w-6 lg:!h-8 lg:!w-8" />
        </button>
        <div
          v-if="profile_open"
          class="absolute right-0 top-[calc(100%+0.5rem)] rounded-lg bg-white py-2 shadow lg:top-[calc(100%+1.5rem)]"
        >
          <NuxtLink
            :to="{ params: { ...$route.params }, query: { ...$route.query, sign_in: true } }"
            class="block px-4 py-2 text-right text-p text-gray"
            @click="profile_open = false"
          >
            Войти
          </NuxtLink>
          <NuxtLink
            :to="{ params: { ...$route.params }, query: { ...$route.query, sign_up: true } }"
            class="block px-4 py-2 text-right text-p text-gray"
            @click="profile_open = false"
          >
            Зарегистрироваться
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      profile_open: false,
    }
  },
}
</script>

<style lang="scss" scoped></style>
