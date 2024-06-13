export const state = () => ({
  event: [],
  courseFile: [],
})
export const mutations = {
  setEvent(state, event) {
    state.event = event
  },
  setCourseFile(state, courseFile) {
    state.courseFile = courseFile
  },
}

export const actions = {
  async fetchEvent({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get('top-event/', {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setEvent', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },

  async fetchCourseFile({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get('catalog-file/', {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setCourseFile', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
}
