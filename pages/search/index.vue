<template>
  <div class="grid-cols-2 lg:grid lg:h-[80dvh]">
    <div
      class="relative lg:order-2"
      :class="{
        'hidden lg:block': !map.open,
      }"
    >
      <GoogleMap
        class="h-[80dvh] flex-auto lg:h-full"
        api-key="AIzaSyAws20Ca3pW11AIWQP2WxH7GsricJjK7IA"
        :center="map.center"
        :zoom="12"
        v-bind="{ ...map.options }"
      >
        <CustomMarker
          v-for="(marker, index) in tools"
          :key="index"
          :options="{
            position: { lat: marker.latitude, lng: marker.longitude },
            anchorPoint: 'CENTER',
            zIndex: marker.open ? 1000 : 10,
          }"
        >
          <div class="relative">
            <!-- @click="onClickMarker(marker)" -->
            <div class="" @click="marker.open = !marker.open">
              <img src="@/assets/images/search/mark.png" class="relative z-10" />
              <img
                :src="marker.photos[0].photo"
                class="absolute left-1/2 top-1/2 h-[45px] w-[30px] -translate-x-1/2 -translate-y-1/2 rounded-lg"
              />
            </div>
            <div
              v-if="marker.open"
              class="absolute left-1/2 top-[calc(100%+0.75rem)] z-[1000000] flex h-[7.5rem] w-[22.1875rem] -translate-x-1/2 overflow-hidden rounded-lg bg-orange-300"
            >
              <div class="flex flex-auto flex-col p-2">
                <h3 class="mb-0.5 line-clamp-1 text-p2">{{ marker.name }}</h3>
                <p class="mb-2 font-jost text-h5">{{ marker.price }} ₸ / сутки</p>
                <UiButton
                  :to="{ name: 'product-id', params: { id: marker.id } }"
                  target="_blank"
                  color-type="blank"
                  class="mt-auto w-full justify-center !bg-transparent !p-1"
                >
                  Подробнее
                </UiButton>
              </div>
              <div class="w-[7rem] flex-none overflow-hidden rounded-lg">
                <img
                  class="h-full w-full rounded-lg object-cover"
                  :src="marker.photos[0].photo"
                  alt=""
                />
              </div>
            </div>
          </div>
        </CustomMarker>
      </GoogleMap>
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
            :tool="tool"
          />
        </li>
      </ul>
      <ul class="hidden grid-cols-2 gap-x-4 gap-y-5 px-4 pb-8 pt-4 lg:grid">
        <li v-for="tool in tools" :key="tool.id" class="">
          <CardsToolCol
            :tool="tool"
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
import { GoogleMap, CustomMarker } from 'vue3-google-map'

import TOOLS from '@/mocks/tools'

export default {
  components: { GoogleMap, CustomMarker },
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
      tools: TOOLS.map(el => ({ ...el, open: false })),
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
  },
}
</script>

<style lang="scss"></style>
