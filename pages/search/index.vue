<template>
  <div class="grid-cols-2 lg:grid lg:h-[80dvh]">
    <div
      class="relative lg:order-2"
      :class="{
        'hidden lg:block': !map.open,
      }"
    >
      <GMapMap
        class="h-[80dvh] flex-auto lg:h-full"
        :center="map.center"
        :zoom="12"
        :options="map.options"
      >
        <GMapMarker
          v-for="(marker, index) in tools"
          :key="index"
          :position="{ lat: marker.latitude, lng: marker.longitude }"
          :clickable="true"
          @click="onClickMarker(marker)"
        >
        </GMapMarker>
      </GMapMap>
      <div
        class="absolute left-1/2 top-4 flex w-max -translate-x-1/2 rounded-full border border-gray-300 bg-white lg:hidden"
      >
        <button
          class="relative flex items-center gap-2 px-4 py-1 font-jost text-h5 uppercase before:absolute before:right-0 before:top-1/2 before:h-[calc(100%-0.75rem)] before:w-px before:-translate-y-1/2 before:bg-gray-300 before:content-['']"
          @click="map.open = false"
        >
          <IconList class="!h-5 !w-5" />
          К списку
        </button>
        <!-- <button class="flex items-center gap-2 px-4 py-1 font-jost text-h5 uppercase">
          <IconFilter class="!h-5 !w-5" />
          Фильтры
        </button> -->
      </div>
    </div>
    <div
      class="flex min-h-[80dvh] flex-auto flex-col lg:order-1 lg:overflow-y-auto"
      :class="{
        'hidden lg:flex': map.open,
      }"
    >
      <div class="relative flex items-center justify-between gap-2 bg-white p-4">
        <h1 class="font-jost text-h5 uppercase tracking-8 text-gray-300 lg:text-h4 lg:normal-case">
          Показано результатов: {{ tools.length }}
        </h1>
        <!-- <UiDropdownSelect
          :selected="sort.value"
          :options="sort.options"
          position-x="right"
          position-x-mobile="right"
          @update:selected="value => (sort.value = value)"
        /> -->
        <span class="bg absolute bottom-0 left-4 right-4 h-px bg-gray-200"></span>
      </div>
      <ul class="flex flex-col gap-4 px-4 pb-8 pt-4 lg:hidden">
        <li v-for="tool in tools" :key="tool.id" class="">
          <CardsToolRow
            :ref="'card_mobile-' + tool.id"
            :tool="tool"
            :class="{
              'rounded-lg border-2 border-gray-300': tool.active,
              'rounded-lg border-2 border-transparent': !tool.active,
            }"
            @click.native="onClickCard(tool)"
          />
        </li>
      </ul>
      <ul class="hidden grid-cols-2 gap-x-4 gap-y-5 px-4 pb-8 pt-4 lg:grid">
        <li v-for="tool in tools" :key="tool.id" class="">
          <CardsToolCol
            :ref="'card_desktop-' + tool.id"
            :tool="tool"
            :class="{
              'rounded-lg border-2 border-gray-300': tool.active,
              'rounded-lg border-2 border-transparent': !tool.active,
            }"
            @click.native="onClickCard(tool)"
          />
        </li>
      </ul>

      <div
        class="sticky bottom-12 mx-auto mb-4 mt-6 flex w-fit rounded-full border border-gray-300 bg-white lg:hidden"
      >
        <!-- <button
          class="relative flex items-center gap-2 px-4 py-1 font-jost text-h5 uppercase before:absolute before:right-0 before:top-1/2 before:h-[calc(100%-0.75rem)] before:w-px before:-translate-y-1/2 before:bg-gray-300 before:content-['']"
        >
          <IconFilter class="!h-5 !w-5" />
          Фильтры
        </button> -->
        <button
          class="flex items-center gap-2 px-4 py-1 font-jost text-h5 uppercase text-orange"
          @click="map.open = true"
        >
          <IconMark class="!h-5 !w-5" />
          На карте
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TOOLS from '@/mocks/tools'

export default {
  data() {
    return {
      map: {
        open: false,
        center: { lat: 43.2408557, lng: 76.8896557 },
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
      tools: TOOLS.map(el => ({ ...el, active: false })),
    }
  },
  created() {
    useHead({ title: 'Поиск' })
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
      // console.log('🚀 ~ data:', data)
    },
    onClickMarker(marker) {
      console.log(marker)
      this.tools.forEach(el => {
        if (el.id === marker.id) {
          el.active = true
        } else {
          el.active = false
        }
      })

      const itemDesktop = this.$refs['card_desktop-' + marker.id][0].$el
      const itemMobile = this.$refs['card_mobile-' + marker.id][0].$el

      if (window.innerWidth < 1024) {
        itemMobile.scrollIntoView({ behavior: 'smooth' })
      } else {
        itemDesktop.scrollIntoView({ behavior: 'smooth' })
      }
    },
    onClickCard(tool) {
      this.tools.forEach(el => {
        if (el.id === tool.id) {
          el.active = true
        } else {
          el.active = false
        }
      })

      this.map.center = { lat: tool.latitude, lng: tool.longitude }
    },
  },
}
</script>

<style lang="scss"></style>
