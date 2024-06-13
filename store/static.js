export const state = () => ({
  staticPages: null,
  staticSinglePage: null,
  staticSingleMenu: null,
})
export const mutations = {
  setStaticPages(state, staticPages) {
    state.staticPages = staticPages
  },

  setStaticSinglePage(state, staticSinglePage) {
    state.staticSinglePage = staticSinglePage
  },
  setStaticSingleMenu(state, staticSingleMenu) {
    state.staticSingleMenu = staticSingleMenu
  },
}

export const actions = {
  async fetchStaticPages({ commit }, slug = '') {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`/static/${slug}`, {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setStaticPages', res.data)

          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },

  async fetchStaticSingle({ commit }, slug) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`static/${slug}`)
        .then((res) => {
          commit('setStaticSinglePage', res.data.page)
          commit('setStaticSingleMenu', res.data.menu)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
}
