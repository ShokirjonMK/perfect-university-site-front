export const state = () => ({
  newsSingle: [],
})
export const mutations = {
  setNewsSingle(state, newsSingle) {
    state.newsSingle = newsSingle
  },
}


export const actions = {
  async fetchNewsSingle({commit}, slug) {
    return await new Promise((resolve, reject) => {
      this.$axios.get(`/news/${slug}/`,
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          // console.log('inside vuex//////',res)
          commit('setNewsSingle', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
}
