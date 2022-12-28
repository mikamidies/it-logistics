<template>
  <div>
    <HomeHome />
    <HomeAccordion />
    <HomeBanner />
    <HomeAuthor />
  </div>
</template>

<script>
import HomeHome from '~/components/Home/HomeHome.vue'
import HomeAccordion from '@/components/Home/HomeAccordion.vue'
import HomeBanner from '~/components/Home/HomeBanner.vue'
import HomeAuthor from '~/components/Home/HomeAuthor.vue'

export default {
  name: 'IndexPage',

  components: {
    HomeHome,
    HomeAccordion,
    HomeBanner,
    HomeAuthor,
  },
}
</script>
