export const state = () => ({
  openData: [],
  academicCalendar: [],
})
export const mutations = {
  setOpenData(state, openData) {
    state.openData = openData
  },
  setAcademicCalendar(state, academicCalendar) {
    state.academicCalendar = academicCalendar
  },
}

export const actions = {
  async fetchOpenData({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get('opendata/', {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setOpenData', res.data.results)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
  async fetchAcademicCalendar({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get('academic-calendars/', {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setAcademicCalendar', res.data.results)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
}
