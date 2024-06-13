export const state = () => ({
  realatedNews: [],
})
export const mutations = {
  setRealatedNews(state, realatedNews) {
    state.realatedNews = realatedNews
  },
}


export const actions = {
  async fetchRealatedNews({commit}, slug) {
    return await new Promise((resolve, reject) => {
      this.$axios.get(`news/${slug}/`,
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setRealatedNews', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
}
