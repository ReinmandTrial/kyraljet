<template>
  <CommonContainer max-width="1440px" class="pb-32 pt-8">
    <div class="flex items-center gap-4 pb-8">
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
    </div>

    <div class="grid-cols-2 gap-4 lg:grid">
      <div class="mb-4 grid grid-cols-2 gap-x-5 gap-y-2 lg:mb-0 lg:grid-cols-3">
        <div
          class="relative row-start-1 row-end-3 overflow-hidden rounded-lg bg-gray-100 lg:col-start-1 lg:col-end-4 lg:row-start-auto lg:row-end-auto lg:h-0 lg:pb-[81%]"
        >
          <img class="h-full w-full object-cover lg:absolute lg:inset-0" src="" alt="" />
        </div>
        <div class="relative h-0 overflow-hidden rounded-lg bg-gray-100 pb-[54%] lg:pb-[57%]">
          <img class="absolute inset-0 h-full w-full object-cover" src="" alt="" />
        </div>
        <div
          class="relative hidden h-0 overflow-hidden rounded-lg bg-gray-100 pb-[54%] lg:block lg:pb-[57%]"
        >
          <img class="absolute inset-0 h-full w-full object-cover" src="" alt="" />
        </div>
        <div class="relative h-0 overflow-hidden rounded-lg bg-gray-100 pb-[54%] lg:pb-[57%]">
          <img class="absolute inset-0 h-full w-full object-cover" src="" alt="" />
          <button
            class="absolute inset-0 z-10 flex items-center justify-center bg-[rgba(0,0,0,0.4)] text-center font-jost text-h4 text-white"
          >
            +9
          </button>
        </div>
      </div>

      <div class="lg:pl-28">
        <p class="mb-4 flex items-center gap-4 font-jost text-h5 lg:mb-1">
          <span class="text-green">В наличии </span>
          <span class="text-gray-300">Code 12345 </span>
        </p>
        <h1 class="mb-4 font-jost text-h4">Дрель “Makita” 1600 оборотов</h1>
        <div class="mb-4 flex items-center gap-2">
          <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100">
            <img class="h-full w-full object-cover" src="" alt="" />
          </div>
          <dl class="">
            <dt class="mb-1 font-jost text-h5 uppercase text-gray-300">Владелец инструмента</dt>
            <dd class="text-p2">ООО “Виртувианский человек”</dd>
          </dl>
        </div>
        <p class="mb-12 text-gray">
          Дрель — это инструмент, предназначенный для сверления отверстий в различных материалах,
          таких как дерево, металл, бетон и пластик. Она может быть ручной или электрической и часто
          используется в строительстве, ремонте и различных производственных процессах. Существуют
          разные типы дрелей, например: Электрическая дрель — работает от сети или аккумулятора,
          подходит для большинства бытовых и профессиональных задач. Ударная дрель — помимо
          вращения, создает ударные движения, что позволяет сверлить твердые материалы, такие как
          бетон.
        </p>
        <div class="mb-8">
          <dl class="mb-1">
            <dt class="mb-1 font-jost text-h5 uppercase text-gray-300">Адрес инструмента</dt>
            <dd class="text-p2">Металургов 35, Астана, Казахстан</dd>
          </dl>
          <GMapMap
            class="h-[10.375rem] overflow-hidden rounded-lg"
            :center="map.center"
            :zoom="12"
            :options="map.options"
          >
            <!-- <GMapMarker
              :key="index"
              :position="{ lat: marker.latitude, lng: marker.longitude }"
              :clickable="true"
            >
            </GMapMarker> -->
          </GMapMap>
        </div>
        <div
          class="sticky bottom-0 -mx-4 flex flex-col gap-2 bg-white px-4 py-1.5 lg:static lg:flex-row lg:justify-between lg:items-center"
        >
          <div class="flex flex-wrap items-center gap-x-4">
            <span class="text-s text-gray-300 lg:font-jost lg:text-h5 lg:text-gray">
              <span class="text-p2 text-orange lg:text-h4">3 874 38748 73 $</span> /сутки
            </span>
            <span class="text-s text-gray-300 lg:font-jost lg:text-h5 lg:text-gray">
              <span class="text-p2 text-orange lg:text-h4">3 874 38748 73 $</span> /неделя
            </span>
          </div>
          <UiButton class="w-full items-center justify-center gap-2 lg:max-w-[21rem]">
            <IconCart class="!h-5 !w-5" />
            Добавить в корзину
          </UiButton>
        </div>
      </div>
    </div>
  </CommonContainer>
</template>

<script>
export default {
  data() {
    return {
      map: {
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
    }
  },
}
</script>

<style lang="scss" scoped></style>
