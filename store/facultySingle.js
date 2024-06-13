export const state = () => ({
  facultySingle: undefined,
  kafedraSingle: undefined,
})
export const mutations = {
  setFacultySingle(state, facultySingle) {
    state.facultySingle = facultySingle
  },
  setKafedraSingle(state, kafedraSingle) {
    state.kafedraSingle = kafedraSingle
  },
}

export const actions = {
  async fetchFacultySingle({ commit }, slug) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`faculty/${slug}/`, {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setFacultySingle', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
  async fetchKafedraSingle({ commit }, slug) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`kafedra/${slug}/`, {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setKafedraSingle', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
}
