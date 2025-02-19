<template>
  <CommonContainer max-width="1440px" class="pb-32 pt-8">
    <!-- <div class="flex items-center gap-4 pb-8">
      <NuxtLink to="/" class="flex items-center gap-1 rounded px-1 py-0.5 text-p text-gray-300">
        <IconHouse class="!h-5 !w-5" />
        Главная
      </NuxtLink>
      <NuxtLink
        to="/"
        class="flex items-center gap-1 rounded bg-gray-100 px-1 py-0.5 text-p text-gray-300"
      >
        Дрели
      </NuxtLink>
      <span class="flex items-center gap-1 rounded px-1 py-0.5 text-p text-gray-300">
        Дрель Makita
      </span>
    </div> -->

    <div class="grid-cols-2 gap-4 lg:grid">
      <div
        v-if="tool.photos.length"
        class="mb-4 grid grid-cols-2 gap-x-5 gap-y-2 lg:mb-0 lg:grid-cols-3"
      >
        <div
          class="relative row-start-1 row-end-3 overflow-hidden rounded-lg bg-gray-100 lg:col-start-1 lg:col-end-4 lg:row-start-auto lg:row-end-auto lg:h-0 lg:pb-[81%]"
          :class="{
            'col-start-1 col-end-3': tool.photos.length === 1,
          }"
        >
          <img
            class="h-full w-full object-cover lg:absolute lg:inset-0"
            :src="tool.photos[0].photo"
            alt=""
          />
        </div>
        <div
          v-if="tool.photos[1]"
          class="relative h-0 overflow-hidden rounded-lg bg-gray-100 pb-[54%] lg:pb-[57%]"
        >
          <img
            class="absolute inset-0 h-full w-full object-cover"
            :src="tool.photos[1]?.photo"
            alt=""
          />
        </div>
        <div
          v-if="tool.photos[2]"
          class="relative h-0 overflow-hidden rounded-lg bg-gray-100 pb-[54%] lg:block lg:pb-[57%]"
          :class="{ 'hidden lg:block': !show_all_photos }"
        >
          <img
            class="absolute inset-0 h-full w-full object-cover"
            :src="tool.photos[2]?.photo"
            alt=""
          />
        </div>
        <template v-if="show_all_photos">
          <div
            v-for="photo in morePhotoArray"
            class="relative h-0 overflow-hidden rounded-lg bg-gray-100 pb-[54%] lg:pb-[57%]"
          >
            <img class="absolute inset-0 h-full w-full object-cover" :src="photo.photo" alt="" />
          </div>
        </template>
        <div
          v-if="tool.photos[3] && !show_all_photos"
          class="relative h-0 overflow-hidden rounded-lg bg-gray-100 pb-[54%] lg:pb-[57%]"
        >
          <img
            class="absolute inset-0 h-full w-full object-cover"
            :src="tool.photos[3]?.photo"
            alt=""
          />
          <button
            v-if="tool.photos.length > 3"
            class="absolute inset-0 z-10 flex items-center justify-center bg-[rgba(0,0,0,0.4)] text-center font-jost text-h4 text-white"
            @click="show_all_photos = true"
          >
            {{ morePhoto }}
          </button>
        </div>
      </div>

      <div class="lg:pl-28">
        <p class="mb-4 flex items-center gap-4 font-jost text-h5 lg:mb-1">
          <span class="text-green">{{ tool.in_stock ? 'В наличии' : 'Не в наличии' }} </span>
          <span class="text-gray-300">Code {{ tool.id }} </span>
        </p>
        <h1 class="mb-4 font-jost text-h4">{{ tool.name }}</h1>
        <div class="mb-4 flex items-center gap-2">
          <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100">
            <img class="h-full w-full object-cover" :src="tool.toollessor.photo.photo" alt="" />
          </div>
          <dl class="">
            <dt class="mb-1 font-jost text-h5 uppercase text-gray-300">Владелец инструмента</dt>
            <dd class="text-p2">{{ tool.toollessor.name }}</dd>
          </dl>
        </div>
        <p class="mb-12 text-gray">
          {{ tool.description }}
        </p>
        <div class="mb-8">
          <dl class="mb-1">
            <dt class="mb-1 font-jost text-h5 uppercase text-gray-300">Адрес инструмента</dt>
            <dd class="text-p2">{{ address }}</dd>
          </dl>
          <GMapMap
            class="h-[10.375rem] overflow-hidden rounded-lg"
            :center="map.center"
            :zoom="12"
            :options="map.options"
          >
            <GMapMarker :position="{ lat: tool.latitude, lng: tool.longitude }"> </GMapMarker>
          </GMapMap>
        </div>
        <div
          class="sticky bottom-0 -mx-4 flex flex-col gap-2 bg-white px-4 py-1.5 lg:static lg:flex-row lg:items-center lg:justify-between"
        >
          <div class="flex flex-wrap items-center gap-x-4">
            <span class="text-s text-gray-300 lg:font-jost lg:text-h5 lg:text-gray">
              <span class="text-p2 text-orange lg:text-h4">{{ tool.price }} ₸</span> /сутки
            </span>
            <span class="text-s text-gray-300 lg:font-jost lg:text-h5 lg:text-gray">
              <span class="text-p2 text-orange lg:text-h4">{{ tool.price * 7 }} ₸</span> /неделя
            </span>
          </div>
          <UiButton
            :to="{ name: 'product-id-booking', params: { id: tool.id } }"
            class="w-full items-center justify-center gap-2 lg:max-w-[21rem]"
          >
            <!-- <IconCart class="!h-5 !w-5" /> -->
            Забронировать
          </UiButton>
        </div>
      </div>
    </div>
  </CommonContainer>
</template>

<script>
import TOOLS from '@/mocks/tools'

export default {
  data() {
    return {
      show_all_photos: false,
      tool: TOOLS.find(t => t.id === Number(this.$route.params.id)),
      address: '',
      map: {
        center: { lat: 0, lng: 0 },
        options: {
          zoomControl: false,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          gestureHandling: 'greedy',
          disableDoubleClickZoom: true,
        },
      },
    }
  },
  computed: {
    morePhoto() {
      if (import.meta.client && window.innerWidth < 1024) {
        return `+${this.tool.photos.length - 3}`
      }
      return `+${this.tool.photos.length - 4}`
    },
    morePhotoArray() {
      if (import.meta.client && window.innerWidth < 1024) {
        return this.tool.photos.slice(3)
      }
      return this.tool.photos.slice(4)
    },
  },
  created() {
    useHead({ title: this.tool.name })
    this.map.center = { lat: this.tool.latitude, lng: this.tool.longitude }
  },
  async mounted() {
    this.address = await $fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.tool.latitude},${this.tool.longitude}&key=${'AIzaSyAws20Ca3pW11AIWQP2WxH7GsricJjK7IA'}`,
      {
        method: 'GET',
      },
    ).then(response => response.results[0].formatted_address)
  },
}
</script>

<style lang="scss" scoped></style>
