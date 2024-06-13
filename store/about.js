export const state = () => ({
  about: [],
  charter: [],
})
export const mutations = {
  setAbout(state, about) {
    state.about = about
  },
  setCharter(state, charter) {
    state.charter = charter
  },
}

export const actions = {
  async fetchAbout({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get('about/', {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setAbout', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },

  async fetchCharter({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get('ustav/', {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setCharter', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
}
