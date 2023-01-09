<template>
  <div>
    <DesktopNavbar :translations="translations"/>
    <MobileHeader />
    <nuxt />
    <DesktopFooter :translations="translations"/>
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
      translations: [],
    }
  },

  async mounted(){
    const translations = await translationsApi.getTranslations(this.$axios);

    this.translations = await translations.data

    console.log(this.translations);
  }
}
</script>

<style></style>
