export const state = () => ({
  conferenceSingle: undefined,
})
export const mutations = {
  setConferenceSingle(state, conferenceSingle) {
    state.conferenceSingle = conferenceSingle
  },
}


export const actions = {
  async fetchConferenceSingle({commit}, id) {
    return await new Promise((resolve, reject) => {
      this.$axios.get(`conference/${id}/detail/`,
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setConferenceSingle', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
}











