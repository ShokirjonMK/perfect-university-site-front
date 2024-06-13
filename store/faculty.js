export const state = () => ({
  faculty: [],
  kafedra: [],
})
export const mutations = {
  setFaculty(state, faculty) {
    state.faculty = faculty
  },
  setKafedra(state, kafedra) {
    state.kafedra = kafedra
  },
}

export const actions = {
  async fetchFaculty({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get('faculty/', {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setFaculty', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
  async fetchKafedra({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get('kafedra/', {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setKafedra', res.data.results)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
}
