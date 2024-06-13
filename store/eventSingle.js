export const state = () => ({
  eventSingle: [],
})
export const mutations = {
  setEventSingle(state, eventSingle) {
    state.eventSingle = eventSingle
  },
}

export const actions = {
  async fetchEventSingle({ commit }, id) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`event/${id}/`, {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setEventSingle', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
}
