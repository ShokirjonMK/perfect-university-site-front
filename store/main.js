export const state = () => ({
  main: [],
  slider: [],
})
export const mutations = {
  setMain(state, main) {
    state.main = main
  },
  setSlider(state, slider) {
    state.slider = slider
  },
}

export const actions = {
  async fetchMain({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get('MainPageData/', {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setMain', res.data)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  fetchSlider({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get('slider/', {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setSlider', res.data)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}
