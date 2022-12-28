<template>
  <div>
    <DesktopNavbar />
    <nuxt />
  </div>
</template>

<script>
import DesktopNavbar from '@/components/DesktopNavbar.vue'

export default {
  name: 'DefaultLayout',

  components: {
    DesktopNavbar,
  },
}
</script>

<style></style>
