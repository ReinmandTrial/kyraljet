<template>
  <div v-if="map.open" class="relative">
    <GMapMap class="h-[80dvh] flex-auto" :center="map.center" :zoom="12" :options="map.options">
      <GMapMarker
        v-for="(marker, index) in tools"
        :key="index"
        :position="{ lat: marker.latitude, lng: marker.longitude }"
        :clickable="true"
      >
      </GMapMarker>
    </GMapMap>
    <div
      class="absolute left-1/2 top-4 flex w-max -translate-x-1/2 rounded-full border border-gray-300 bg-white"
    >
      <button
        class="relative flex items-center gap-2 px-4 py-1 font-jost text-h5 uppercase before:absolute before:right-0 before:top-1/2 before:h-[calc(100%-0.75rem)] before:w-px before:-translate-y-1/2 before:bg-gray-300 before:content-['']"
        @click="map.open = false"
      >
        <IconList class="!h-5 !w-5" />
        К списку
      </button>
      <button class="flex items-center gap-2 px-4 py-1 font-jost text-h5 uppercase">
        <IconFilter class="!h-5 !w-5" />
        Фильтры
      </button>
    </div>
  </div>
  <template v-else>
    <div class="flex min-h-[80dvh] flex-auto flex-col">
      <div class="flex items-center justify-between gap-2 bg-white p-4">
        <h1 class="font-jost text-h5 uppercase tracking-8 text-gray-300">
          Показано результатов: {{ tools.length }}
        </h1>
        <UiDropdownSelect
          :selected="sort.value"
          :options="sort.options"
          position-x="right"
          position-x-mobile="right"
          @update:selected="value => (sort.value = value)"
        />
      </div>
      <ul class="flex flex-col gap-4 px-4 pb-8 pt-4">
        <li v-for="tool in tools" :key="tool.id" class="">
          <CardsToolRow :tool="tool" />
        </li>
      </ul>

      <div
        class="sticky bottom-12 mx-auto mb-4 mt-6 flex w-fit rounded-full border border-gray-300 bg-white"
      >
        <button
          class="relative flex items-center gap-2 px-4 py-1 font-jost text-h5 uppercase before:absolute before:right-0 before:top-1/2 before:h-[calc(100%-0.75rem)] before:w-px before:-translate-y-1/2 before:bg-gray-300 before:content-['']"
        >
          <IconFilter class="!h-5 !w-5" />
          Фильтры
        </button>
        <button
          class="flex items-center gap-2 px-4 py-1 font-jost text-h5 uppercase text-orange"
          @click="map.open = true"
        >
          <IconMark class="!h-5 !w-5" />
          На карте
        </button>
      </div>
    </div>
  </template>
</template>

<script>
export default {
  data() {
    return {
      map: {
        open: false,
        center: { lat: 48.8773406, lng: 2.327774 },
        options: {
          zoomControl: false,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          gestureHandling: 'greedy',
          disableDoubleClickZoom: true,
        },
      },
      sort: {
        value: {
          label: 'Сначала новые',
          value: 'new',
        },
        options: [
          {
            label: 'Сначала старые',
            value: 'old',
          },
          {
            label: 'Сначала новые',
            value: 'new',
          },
        ],
      },
      tools: [
        {
          id: 0,
          name: 'torcovka1',
          description: 'ochen klasnaya1',
          subcategory: {
            id: 0,
            name: 'string',
            icon: 'string',
            photo: 'string',
            category: {
              id: 0,
              slug: 'v6SRExuu2d3JXu63Tr0AJxuobGNms3u6jo6p1RL343fX_YsGrV',
              name: 'string',
              icon: 'string',
              photo: 'string',
            },
          },
          primary_photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2UoKyN61H-7pji5xrj1hoH1u4spsrBHCbFA&s',
          owner: {
            id: 'string',
            full_name: 'string',
            email: 'string',
            company: 'string',
          },
          price: 9123123123,
          country: {
            id: 0,
            name: 'string',
            iso2: 'st',
            iso3: 'str',
          },
          city: {
            id: 0,
            name: 'Batumi',
            country: {
              id: 0,
              name: 'string',
              iso2: 'st',
              iso3: 'str',
            },
          },
          latitude: 48.8773406,
          longitude: 2.327774,
        },
        {
          id: 0,
          name: 'torcovka2',
          description: 'ochen klasnaya2',
          subcategory: {
            id: 0,
            name: 'string',
            icon: 'string',
            photo: 'string',
            category: {
              id: 0,
              slug: 'v6SRExuu2d3JXu63Tr0AJxuobGNms3u6jo6p1RL343fX_YsGrV',
              name: 'string',
              icon: 'string',
              photo: 'string',
            },
          },
          primary_photo: 'https://static-cse.canva.com/blob/847064/29.jpg',
          owner: {
            id: 'string',
            full_name: 'string',
            email: 'string',
            company: 'string',
          },
          price: 9123123,
          country: {
            id: 0,
            name: 'string',
            iso2: 'st',
            iso3: 'str',
          },
          city: {
            id: 0,
            name: 'Batumi',
            country: {
              id: 0,
              name: 'string',
              iso2: 'st',
              iso3: 'str',
            },
          },
          latitude: 48.87106,
          longitude: 2.32474,
        },
        {
          id: 0,
          name: 'torcovka3',
          description: 'ochen klasnaya13',
          subcategory: {
            id: 0,
            name: 'string',
            icon: 'string',
            photo: 'string',
            category: {
              id: 0,
              slug: 'v6SRExuu2d3JXu63Tr0AJxuobGNms3u6jo6p1RL343fX_YsGrV',
              name: 'string',
              icon: 'string',
              photo: 'string',
            },
          },
          primary_photo:
            'https://www.interfax.ru/ftproot/photos/photostory/2022/04/29/week/week7_1100.jpg',
          owner: {
            id: 'string',
            full_name: 'string',
            email: 'string',
            company: 'string',
          },
          price: 3123,
          country: {
            id: 0,
            name: 'string',
            iso2: 'st',
            iso3: 'str',
          },
          city: {
            id: 0,
            name: 'Batumi',
            country: {
              id: 0,
              name: 'string',
              iso2: 'st',
              iso3: 'str',
            },
          },
          latitude: 48.85106,
          longitude: 2.364,
        },
      ],
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      // const { data } = $fetch('https://kuraljet.pp.ua/tools/search/map', {
      //   method: 'GET',
      //   params: {
      //     latitude: 0,
      //     longitude: 0,
      //     latitudeDelta: 100,
      //     longitudeDelta: 100,
      //   },
      // })
      // const { data } = $fetch('https://kuraljet.pp.ua/tools/', {
      //   method: 'POST',
      //   body: {
      //     photos: [
      //       {
      //         photo: '',
      //         is_primary: true,
      //       },
      //     ],
      //     details: 'asdasd asd',
      //     name: 'krutaya torcovka',
      //     description: 'ochen krutaya',
      //     price: 999,
      //     number: 999,
      //     collateral: 999,
      //     subcategory: 0,
      //   },
      // })
      // console.log('🚀 ~ data:', data)
    },
  },
}
</script>

<style lang="scss"></style>
