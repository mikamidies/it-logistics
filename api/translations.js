/* eslint-disable */

export default {
    async getTranslations(axios) {
      try {
        let res
  
        if (axios) {
          res = await axios.get('/translations')
        } else {
          res = await $nuxt.$axios.get('/translations')
        }
        console.log(res)

        return res.data.data
      } catch (e) {
        console.log(e)
      }
    },
  }
  