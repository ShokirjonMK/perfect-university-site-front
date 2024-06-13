export const state = () => ({
  events: [],
})
export const mutations = {
  setEvents(state, events) {
    state.events = events
  },
}

export const actions = {
  async fetchEvents({ commit }, date) {
    return await new Promise((resolve, reject) => {
      console.log(date + 'fetchEvents')
      this.$axios
        .get(`event/`, {
          params: {
            date,
          },
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setEvents', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
}
