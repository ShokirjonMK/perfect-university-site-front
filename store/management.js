export const state = () => ({
  management: [],
})
export const mutations = {
  setManagement(state, management) {
    state.management = management
  },
}


export const actions = {
  async fetchManagement({commit}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get('leader/',
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setManagement', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
}


