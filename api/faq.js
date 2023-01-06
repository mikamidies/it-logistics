/* eslint-disable */

export default {
  async getFaq(axios) {
    try {
      let res

      if (axios) {
        res = await axios.get('/faq')
      } else {
        res = await $nuxt.$axios.get('/faq')
      }
      return res.data.data
    } catch (e) {
      console.log(e)
    }
  },
}
