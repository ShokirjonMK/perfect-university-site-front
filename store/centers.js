export const state = () => ({
  center: [],
  centerSingle: [],
  councils: [],
  councilSingle: []
})
export const mutations = {
  setCenter(state, center) {
    state.center = center
  },

  setCenterSingle(state, centerSingle) {
    state.centerSingle = centerSingle
  },

  setCouncils(state, councils) {
    state.councils = councils
  },

  setCouncilSingle(state, councilSingle) {
    state.councilSingle = councilSingle
  }
}


export const actions = {
  async fetchCenter({commit}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get('centers/',
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setCenter', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },

  async fetchCenterSingle({commit}, slug) {
    return await new Promise((resolve, reject) => {
      this.$axios.get(`centers/${slug}/`,
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setCenterSingle', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },

  async fetchCouncils({commit}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get('council/',
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setCouncils', res.data.results)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },

  async fetchCouncilSingle({commit}, slug) {
     return await new Promise((resolve, reject) => {
      this.$axios.get(`council/${slug}`,
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setCouncilSingle', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  }

}




