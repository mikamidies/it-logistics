<template>
  <div>
    <DesktopNavbar />
    <MobileHeader />
    <nuxt />
    <DesktopFooter />
  </div>
</template>

<script>
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
}
</script>

<style></style>
