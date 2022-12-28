<template>
  <div>
    <HomeHome />
    <HomeAccordion />
  </div>
</template>

<script>
import HomeHome from '~/components/Home/HomeHome.vue'
import HomeAccordion from '@/components/Home/HomeAccordion.vue'

export default {
  name: 'IndexPage',

  components: {
    HomeHome,
    HomeAccordion,
  },
}
</script>
