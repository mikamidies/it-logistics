<template>
  <div>
    <HomeHome :translations='translations'/>
    <HomeAccordion :faq="faq" :translations='translations'/>
    <HomeBanner :translations='translations'/>
    <HomeAuthor :translations='translations' />
    <HomeMap :about="about" :translations='translations'/>
    <HomeForm :translations='translations'/>
  </div>
</template>

<script>
import translationsApi from '@/api/translations.js'

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
      translations: [],
    }
  },

  computed: {
    getLang() {
      return this.$store.getters.language;
    },
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

    const translations = await translationsApi.getTranslations(this.$axios);

    this.translations = await translations.data
  },

}
</script>
