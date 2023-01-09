<template>
  <div>
    <DesktopNavbar />
    <MobileHeader />
    <nuxt />
    <DesktopFooter />
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

  async asyncData({ $axios }) {
    const translations = await translationsApi.getTranslations($axios);

    return {
      translations,
    }
  },

  mounted(){
    console.log(this.translations);
  }
}
</script>

<style></style>
