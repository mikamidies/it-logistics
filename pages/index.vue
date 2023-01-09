<template>
  <div>
    <HomeHome />
    <HomeAccordion :faq="faq" />
    <HomeBanner />
    <HomeAuthor />
    <HomeMap :about="about" />
    <HomeForm />
  </div>
</template>

<script>
import HomeHome from '~/components/Home/HomeHome.vue'
import HomeAccordion from '@/components/Home/HomeAccordion.vue'
import HomeBanner from '~/components/Home/HomeBanner.vue'
import HomeAuthor from '~/components/Home/HomeAuthor.vue'
import HomeMap from '~/components/Home/HomeMap.vue'
import HomeForm from '~/components/Home/HomeForm.vue'

import faqApi from '@/api/faq.js'
import aboutApi from '@/api/about.js'

export default {
  name: 'IndexPage',

  components: {
    HomeHome,
    HomeAccordion,
    HomeBanner,
    HomeAuthor,
    HomeMap,
    HomeForm,
  },

  async asyncData({ $axios }) {
    const faq = await faqApi.getFaq($axios)
    const about = await aboutApi.getAbout($axios)

    return {
      faq,
      about,
    }
  },

  async mounted(){
    if (!this.$route.params.lang) {
      await this.$router.replace({
          params: {
            lang: 'en',
          },
        });
    }
    this.$store.dispatch("actionLangRu", this.$route.params.lang);
  }
}
</script>
