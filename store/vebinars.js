export const state = () => ({
  vebinars: [],
})
export const mutations = {
  setVebinars(state, vebinars) {
    state.vebinars = vebinars
  },
}


export const actions = {
  async fetchVebinars({commit}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get('top-vebinar/',
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setVebinars', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
}


