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
      //   headers:{
      //     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM4MTk5MzY0LCJpYXQiOjE3Mzc5NDAxNjQsImp0aSI6IjM3Y2I0Y2MyMmYxZTQ0NjQ5NjFjOGQzNTRiZTEyNDE0IiwidXNlcl9pZCI6M30.tzNNHdSzE_cYSVQdtu5VqsYeSH7xRtWJGB7zznbAyjE`
      //   },
      //   body: {
      //     photos: [
      //       {
      //         photo: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QCbRXhpZgAASUkqAAgAAAADAA4BAgBRAAAAMgAAABoBBQABAAAAgwAAABsBBQABAAAAiwAAAAAAAABob21lIGltcHJvdmVtZW50IC0gY29uc3RydWN0aW9uIHRvb2xzIG9uIGJsYWNrIGJhY2tncm91bmQgd2l0aCBjb3B5IHNwYWNlLiBiYW5uZXIsAQAAAQAAACwBAAABAAAA/+EFwGh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+Cgk8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgoJCTxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6SXB0YzR4bXBDb3JlPSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wQ29yZS8xLjAveG1sbnMvIiAgIHhtbG5zOkdldHR5SW1hZ2VzR0lGVD0iaHR0cDovL3htcC5nZXR0eWltYWdlcy5jb20vZ2lmdC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBsdXM9Imh0dHA6Ly9ucy51c2VwbHVzLm9yZy9sZGYveG1wLzEuMC8iICB4bWxuczppcHRjRXh0PSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wRXh0LzIwMDgtMDItMjkvIiB4bWxuczp4bXBSaWdodHM9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9yaWdodHMvIiBwaG90b3Nob3A6Q3JlZGl0PSJHZXR0eSBJbWFnZXMiIEdldHR5SW1hZ2VzR0lGVDpBc3NldElEPSIxMzk2NDY2MjgwIiB4bXBSaWdodHM6V2ViU3RhdGVtZW50PSJodHRwczovL3d3dy5pc3RvY2twaG90by5jb20vbGVnYWwvbGljZW5zZS1hZ3JlZW1lbnQ/dXRtX21lZGl1bT1vcmdhbmljJmFtcDt1dG1fc291cmNlPWdvb2dsZSZhbXA7dXRtX2NhbXBhaWduPWlwdGN1cmwiIHBsdXM6RGF0YU1pbmluZz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi92b2NhYi9ETUktUFJPSElCSVRFRC1FWENFUFRTRUFSQ0hFTkdJTkVJTkRFWElORyIgPgo8ZGM6Y3JlYXRvcj48cmRmOlNlcT48cmRmOmxpPnJvbnN0aWs8L3JkZjpsaT48L3JkZjpTZXE+PC9kYzpjcmVhdG9yPjxkYzpkZXNjcmlwdGlvbj48cmRmOkFsdD48cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPmhvbWUgaW1wcm92ZW1lbnQgLSBjb25zdHJ1Y3Rpb24gdG9vbHMgb24gYmxhY2sgYmFja2dyb3VuZCB3aXRoIGNvcHkgc3BhY2UuIGJhbm5lcjwvcmRmOmxpPjwvcmRmOkFsdD48L2RjOmRlc2NyaXB0aW9uPgo8cGx1czpMaWNlbnNvcj48cmRmOlNlcT48cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz48cGx1czpMaWNlbnNvclVSTD5odHRwczovL3d3dy5pc3RvY2twaG90by5jb20vcGhvdG8vbGljZW5zZS1nbTEzOTY0NjYyODAtP3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsPC9wbHVzOkxpY2Vuc29yVVJMPjwvcmRmOmxpPjwvcmRmOlNlcT48L3BsdXM6TGljZW5zb3I+CgkJPC9yZGY6RGVzY3JpcHRpb24+Cgk8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJ3Ij8+Cv/tAJBQaG90b3Nob3AgMy4wADhCSU0EBAAAAAAAcxwCUAAHcm9uc3RpaxwCeABRaG9tZSBpbXByb3ZlbWVudCAtIGNvbnN0cnVjdGlvbiB0b29scyBvbiBibGFjayBiYWNrZ3JvdW5kIHdpdGggY29weSBzcGFjZS4gYmFubmVyHAJuAAxHZXR0eSBJbWFnZXMA/9sA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',
      //         is_primary: true,
      //       },
      //     ],
      //     name: 'Torcovka',
      //     description: 'Ochen krutaya',
      //     price: 100,
      //     number: 3,
      //   },
      // })
      // console.log('🚀 ~ data:', data)
    },
  },
}
</script>

<style lang="scss"></style>
