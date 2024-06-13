export const state = () => ({
  partners: [],
})
export const mutations = {
  setPartners(state, partners) {
    state.partners = partners
  },
}


export const actions = {
  async fetchPartners({commit}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get('partners/',
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setPartners', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
}


