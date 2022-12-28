<template>
  <div>
    <DesktopNavbar />
    <nuxt />
    <DesktopFooter />
  </div>
</template>

<script>
import DesktopNavbar from '@/components/DesktopNavbar.vue'
import DesktopFooter from '~/components/DesktopFooter.vue'

export default {
  name: 'DefaultLayout',

  components: {
    DesktopNavbar,
    DesktopFooter,
  },
}
</script>

<style></style>
