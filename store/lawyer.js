export const state = () => ({
  lawyer: [],
})
export const mutations = {
  setLawyer(state, lawyer) {
    state.lawyer = lawyer
  },
}


export const actions = {
  async fetchLawyer({commit}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get('lawyer/',
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setLawyer', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
}


