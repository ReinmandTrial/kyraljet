<template>
  <component
    :is="defineTag"
    class="flex rounded-lg px-12 py-3 text-center font-jost text-b"
    :class="[
      colorTypeStyles,
      {
        small,
        loading,
        error,
      },
    ]"
    v-bind="bindAttrs"
    @click="$emit('click')"
  >
    <template v-if="loading">
      <span class="loader"></span> {{ awaitLabel || 'Подождите' }}
    </template>
    <slot v-else></slot>
  </component>
</template>

<script>
import { NuxtLink } from '#components'

export default {
  emits: ['click'],
  components: { NuxtLink },
  props: {
    to: {},
    href: {
      type: String,
    },
    error: {},
    replace: {
      type: Boolean,
    },
    awaitLabel: {},
    loading: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    colorType: {
      type: String,
      default: 'orange',
      // brown
      // blank
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    defineTag() {
      if (this.to) {
        return 'NuxtLink'
      } else if (this.href) {
        return 'a'
      }
      return 'button'
    },
    bindAttrs() {
      const obj = {}
      if (this.to) {
        obj.to = this.to
        if (this.replace) {
          obj.replace = true
        }
      } else if (this.href) {
        obj.href = this.href
      } else {
        obj.type = 'button'
      }

      if (this.disabled || this.loading) {
        obj.disabled = 'disabled'
      }

      return obj
    },
    colorTypeStyles() {
      if (this.colorType === 'brown') {
        return 'text-white bg-brown hover:bg-brown-500 hover:bg-brown-500 disabled:bg-brown disabled:opacity-50'
      } else if (this.colorType === 'blank') {
        return 'text-gray bg-white border border-gray-300 hover:text-orange hover:border-orange disabled:border-gray-300 disabled:text-gray disabled:opacity-50'
      }
      return 'text-white bg-orange hover:bg-orange-500 disabled:bg-orange disabled:opacity-50'
    },
  },
}
</script>

<style lang="scss" scoped>
.loader {
  width: 18px;
  height: 18px;
  border: 3px solid var(--main);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
