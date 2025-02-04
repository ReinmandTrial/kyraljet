<template>
  <div class="relative hidden lg:block">
    <div class="grid w-full grid-cols-[1fr_14rem_11.375rem] rounded-lg bg-white">
      <label class="relative block overflow-hidden rounded-l-lg">
        <IconSearch class="absolute left-6 top-1/2 !h-5 !w-5 -translate-y-1/2 text-gray-300" />
        <input
          v-model="text"
          class="w-full p-4 pl-12 text-p outline-none placeholder:text-gray-300"
          type="text"
          placeholder="Поиск по названию"
          @input="onInput"
        />
      </label>
      <button
        class="relative flex items-center gap-2 p-4 text-left before:absolute before:left-0 before:top-1/2 before:h-3 before:w-px before:-translate-y-1/2 before:bg-gray-200 before:content-['']"
        @click="city.open = !city.open"
      >
        <IconMark class="!h-5 !w-5 text-gray-300" />
        <span class="text-p text-gray-300">Выберите город</span>
        <IconTriangleDown class="ml-auto !h-5 !w-5 text-orange" />
      </button>
      <UiButton class="items-center justify-center">Поиск</UiButton>
    </div>

    <div
      v-if="city.open"
      class="absolute right-[11.375rem] top-[calc(100%+0.5rem)] max-h-[19rem] w-[14rem] overflow-y-auto rounded-lg bg-white py-2 shadow"
    >
      <button class="block px-4 py-2 text-right text-p text-gray" @click="city.open = false">
        Войти
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      city: {
        open: false,
        value: null,
      },
    }
  },
  mounted() {
    if (window.innerWidth >= 1024) {
      this.getCities()
    }
  },
  methods: {
    onInput() {
      $fetch('https://kuraljet.pp.ua/tools/search', {
        params: {
          text: text,
        },
      })
        .then(({ data }) => {
          console.log('🚀 ~ data:', data)
        })
        .catch(() => {})
    },
    getCities() {
      $fetch('https://kuraljet.pp.ua/locations/cities')
        .then(({ data }) => {
          console.log('🚀 ~ data:', data)
        })
        .catch(() => {})
    },
  },
}
</script>

<style lang="scss" scoped></style>
