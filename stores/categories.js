export const useCategoriesStore = defineStore('categories', {
  state: () => {
    const categories = ref([])

    $fetch('https://kuraljet.pp.ua/tools/categories')
      .then(({ data }) => {
        console.log('🚀 ~ data:', data)
      })
      .catch(() => {})
    return {
      categories,
    }
  },
})
