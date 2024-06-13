export const state = () => ({
  topextra: [],
})
export const mutations = {
  setTopextra(state, topextra) {
    state.topextra = topextra
  },
}


export const actions = {
  async fetchTopextra({commit}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get('top-extra-programs/',
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setTopextra', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },



}


