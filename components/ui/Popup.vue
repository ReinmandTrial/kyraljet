<template>
  <div class="popup fixed inset-0 z-[300] h-full w-full overflow-y-auto">
    <div
      class="popup__body flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden overflow-y-auto lg:px-5"
    >
      <div
        class="popup__bg absolute inset-0 z-[1] h-full w-full bg-[rgba(0,0,0,0.3)]"
        @click.stop="$emit('close')"
      ></div>
      <div
        class="popup__content relative z-[2] min-h-[100dvh] w-full overflow-hidden bg-white px-5 pb-5 pt-16 lg:my-10 lg:min-h-0 lg:rounded-lg lg:p-16"
        :style="[`max-width: ${maxWidth}`]"
      >
        <button
          type="button"
          class="popup__close absolute right-4 top-6 z-20"
          :class="[closeBtnMobile ? 'flex' : 'hidden', closeBtnDesktop ? 'lg:flex' : 'lg:hidden']"
          @click.stop="$emit('close')"
        >
          <IconClose />
        </button>

        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  props: {
    maxWidth: {
      type: String,
      default: '29rem',
    },
    closeBtnMobile: {
      type: Boolean,
    },
    closeBtnDesktop: {
      type: Boolean,
    },
  },
  mounted() {
    this.hideOverflowBody()
  },
  beforeUnmount() {
    this.showOverflowBody()
  },
  methods: {
    hideOverflowBody() {
      const padding = window.innerWidth - document.body.offsetWidth + 'px'
      document.documentElement.style.paddingRight = padding
      document.documentElement.style.overflowY = 'hidden'
    },
    showOverflowBody() {
      document.documentElement.style.overflowY = ''
      document.documentElement.style.paddingRight = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
  .popup__content {
    transition: transform 0.1s;
  }
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  .popup__content {
    transform: scale(0.95);
  }
}
</style>
