export const state = () => ({
  correspondence: [],
})
export const mutations = {
  setCorrespondence(state, correspondence) {
    state.correspondence = correspondence
  },
}


export const actions = {
  async fetchCorrespondence({commit}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get('night-program/',
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setCorrespondence', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },



}


