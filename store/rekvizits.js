export const state = () => ({
  rekvizits: undefined
})
export const mutations = {
  setRekvizits(state, rekvizits) {
    state.rekvizits = rekvizits
  },
}


export const actions = {
  async fetchRekvizits({commit}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get('rekvizit/',
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setRekvizits', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
}


