import graduatorsSlider from '~/components/sections/graduatorsSlider'

export const state = () => ({
  team: [],
  teamPage: [],
  teamSliderSlug: [],
  photo: [],
  teamList: [],
})
export const mutations = {
  setTeam(state, team) {
    state.team = team
  },

  setTeamList(state, teamList) {
    state.teamList = teamList
  },

  setTeamPage(state, teamPage) {
    state.teamPage = teamPage
  },

  setTeamSlidersSlug(state, teamSliderSlug) {
    state.teamSliderSlug = teamSliderSlug
  },

  setPhoto(state, photo) {
    state.photo = photo
  },
}

export const actions = {
  async fetchTeamList({ commit }, { page }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`team-members/?page=${page}`, {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setTeamList', res.data)

          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },

  async fetchSliderSlug({ commit }, id) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`team-members/${id}`, {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setTeamSlidersSlug', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },

  async fectchTeamPage({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`famous-graduate`, {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setTeamPage', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },

  async fetchPhoto({ commit }, id) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`famous-graduate/${id}/gallery`, {
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
