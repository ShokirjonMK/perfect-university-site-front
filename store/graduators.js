import graduatorsSlider from '~/components/sections/graduatorsSlider'

export const state = () => ({
  graduators: [],
  graduatorsPage: [],
  graduatorSliderSlug: [],
  photo: [],
  graduatorList: [],
})
export const mutations = {
  setGraduators(state, graduators) {
    state.graduators = graduators
  },

  setGraduatorList(state, graduatorList) {
    state.graduatorList = graduatorList
  },

  setGraduatorsPage(state, graduatorsPage) {
    state.graduatorsPage = graduatorsPage
  },

  setGraduatorSliderSlug(state, graduatorSliderSlug) {
    state.graduatorSliderSlug = graduatorSliderSlug
  },

  setPhoto(state, photo) {
    state.photo = photo
  },
}

export const actions = {
  async fetchGraduators({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get('famous-graduate-index/', {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setGraduators', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },

  async fetchGraduatorList({ commit }, { page }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`famous-graduate/?page=${page}`, {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setGraduatorList', res.data)

          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },

  async fetchGraduatorSliderSlug({ commit }, slug) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`famous-graduate-index/${slug}`, {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setGraduatorSliderSlug', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },

  async fetchGraduatorsPage({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`famous-graduate`, {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setGraduatorsPage', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },

  async fetchPhoto({ commit }, slug) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`famous-graduate/${slug}/gallery`, {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setPhoto', res.data.results)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
}
