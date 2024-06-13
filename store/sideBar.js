export const state = () => ({
  sideBar: null,
  sideAppeal: []
})

export const mutations = {
  setSideBar(state, sideBar) {
    state.sideBar = sideBar;
  },

  setSideAppeal(state, sideAppeal) {
    state.sideAppeal = sideAppeal;
  },

}

export const actions = {
  async fetchSideBar({commit},slug) {
    return await new Promise((resolve, reject) => {
      this.$axios.get(`menu/${slug}/`, {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setSideBar', res.data)

          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
  async fetchSideAppeal({commit},) {
    return await new Promise((resolve, reject) => {
      this.$axios.get('sidebar/', {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setSideAppeal', res.data.results)

          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },

}
