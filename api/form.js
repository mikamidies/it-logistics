/* eslint-disable */

export default {
  async sendApplication(formData) {
    try {
      const res = await $nuxt.$axios.post('/feedback', formData)
      return res
    } catch (e) {
      console.log(e)
    }
  },
}
