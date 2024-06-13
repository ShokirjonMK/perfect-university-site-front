export const state = () => ({
  conferences: [],
  conferenceYears: [],
  selectedType: "",
  searchvalue: "",
  upcomingConferences: [],
})
export const mutations = {
  setConferences(state, conferences) {
    state.conferences = conferences
  },

  setConferenceYears(state, conferenceYears) {
    state.conferenceYears = conferenceYears
  },

  setUpcomingConferences(state, upcomingConferences) {
    state.upcomingConferences = upcomingConferences
  },
}


export const actions = {
  async fetchConferences({commit},year) {
    return await new Promise((resolve, reject) => {
      this.$axios.get(`conferences/?year=${year}`,
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }

      )
        .then(res => {
          commit('setConferences', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
  async fetchUpcomingConferences({commit},year) {
    return await new Promise((resolve, reject) => {
      this.$axios.get(`conference/list/`,
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          },
          params: {
            year
          },
        }
      )
        .then(res => {
          commit('setUpcomingConferences', res.data.results)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  async fetchConferenceYears ({commit}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get('conferences-year/',
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }

      )
        .then(res => {
          commit("setConferenceYears", res.data)


          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },

}


