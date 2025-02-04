<template>
  <UiPopup max-width="43rem" close-btn-mobile close-btn-desktop @close="$emit('close')">
    <div class="flex flex-auto flex-col lg:min-h-[36.25rem] lg:w-full lg:flex-row">
      <div
        class="flex h-[12.5rem] flex-col items-center justify-center bg-orange lg:h-auto lg:w-[13.5rem] lg:rounded-r-lg"
      >
        <div class="lg:hidden">
          <img src="@/assets/images/auth/logo.png" alt="" />
        </div>
        <IconLogo class="mb-4 hidden !h-20 !w-20 text-gray-100 lg:block" />
        <p class="font-jost text-h3 text-gray-100">KuralJet</p>
      </div>
      <div
        class="relative z-10 -mt-2 flex flex-auto flex-col rounded-t-lg bg-white px-5 pb-10 pt-20 shadow-lg lg:mt-0 lg:rounded-none lg:px-16 lg:pb-14"
      >
        <div class="mb-5">
          <div class="mb-5 flex items-center justify-center gap-2">
            <button class="flex p-1" @click="$emit('back')">
              <IconTriangleLeft class="!h-6 !w-6 text-gray-400" />
            </button>
            <h1 class="text-center font-jost text-h3 lg:text-h4">Шаг 1. Регистрация Email</h1>
          </div>
          <div class="flex items-center justify-center gap-2">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-full bg-orange text-center text-p2 text-white"
            >
              1
            </div>
            <div class="flex items-center gap-2">
              <span class="h-px w-1.5 rounded-full bg-gray-200"></span>
              <span class="h-px w-2.5 rounded-full bg-gray-200"></span>
              <span class="h-px w-1.5 rounded-full bg-gray-200"></span>
            </div>
            <div
              class="flex h-8 w-8 items-center justify-center rounded-full border border-orange text-center text-p2 text-orange"
            >
              2
            </div>
            <div class="flex items-center gap-2">
              <span class="h-px w-1.5 rounded-full bg-gray-200"></span>
              <span class="h-px w-2.5 rounded-full bg-gray-200"></span>
              <span class="h-px w-1.5 rounded-full bg-gray-200"></span>
            </div>
            <div
              class="flex h-8 w-8 items-center justify-center rounded-full border border-orange text-center text-p2 text-orange"
            >
              3
            </div>
          </div>
        </div>
        <form class="flex flex-auto flex-col">
          <div class="my-auto">
            <div class="mb-4">
              <UiInput v-model="first_name" class="mb-4" placeholder="Имя" />
              <UiInput v-model="last_name" class="mb-4" placeholder="Фамилия" />
              <UiInput v-model="email" class="mb-4" type="email" placeholder="Ваш Email" />
              <UiInput v-model="phone" class="mb-4" placeholder="Номер Телефона (опц)" />
            </div>
          </div>
          <div class="mt-5">
            <p v-if="error" class="mb-1 text-p2 text-red-default">{{ error }}</p>
            <UiButton class="w-full justify-center" @click="onSubmit">Далее</UiButton>
          </div>
        </form>
      </div>
    </div>
  </UiPopup>
</template>

<script>
export default {
  emits: ['back', 'next', 'close'],
  data() {
    return {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      error: '',
    }
  },
  methods: {
    async onSubmit() {
      this.error = ''

      if (!this.first_name || !this.last_name || !this.email) {
        return
      }
      await $fetch('https://kuraljet.pp.ua/auth/signup/send_code', {
        method: 'POST',
        body: {
          email: this.email,
        },
      })
        .then(() => {
          this.$emit('next', {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
          })
        })
        .catch(({ data }) => {
          this.error = data.message
        })
    },
  },
}
</script>

<style lang="scss" scoped>
:deep(.popup__content) {
  @apply flex flex-col p-0;
}
</style>
