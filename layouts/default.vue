<template>
  <div>
    <transition name="fade" v-if="loading">
      <div class="loading">
        <div class="spinner lds-dual-ring"></div>
      </div>
    </transition>
    <div v-else>
      <DesktopNavbar :translations="translations" />
      <MobileHeader :translations="translations" />
      <nuxt />
      <DesktopFooter :translations="translations" />
    </div>
  </div>
</template>

<script>
import translationsApi from '@/api/translations.js'

import DesktopNavbar from '@/components/DesktopNavbar.vue'
import DesktopFooter from '~/components/DesktopFooter.vue'
import MobileHeader from '~/components/MobileHeader.vue'

export default {
  name: 'DefaultLayout',

  components: {
    DesktopNavbar,
    DesktopFooter,
    MobileHeader,
  },

  data() {
    return {
      loading: true,
      translations: [],
    }
  },

  async mounted() {
    this.loading = true

    const translations = await translationsApi.getTranslations(this.$axios)

    this.translations = await translations.data

    this.loading = false
  },
}
</script>

<style>
.loading {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: white;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
