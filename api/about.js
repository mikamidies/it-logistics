/* eslint-disable */

export default {
  async getAbout(axios) {
    try {
      let res

      if (axios) {
        res = await axios.get('/site-info')
      } else {
        res = await $nuxt.$axios.get('/site-info')
      }
      return res.data.data
    } catch (e) {
      console.log(e)
    }
  },
}
