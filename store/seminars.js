export const state = () => ({
  seminar: [],
  seminarSingle: [],
})
export const mutations = {
  setSeminar(state, seminar) {
    state.seminar = seminar
  },
  setSeminarSingle(state, seminarSingle) {
    state.seminarSingle = seminarSingle
  },
}


export const actions = {
  async fetchSeminar({commit}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get('science-seminar/',
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setSeminar', res.data.results)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
  async fetchSeminarSingle({commit}, slug) {
    return await new Promise((resolve, reject) => {
      this.$axios.get(`science-seminar/${slug}`,
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setSeminarSingle', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },

}


