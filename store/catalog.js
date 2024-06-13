export const state = () => ({
  catalog: [],
  catalogSingle: [],
})
export const mutations = {
  setCatalog(state, catalog) {
    state.catalog = catalog
  },

  setCatalogSingle(state, catalogSingle) {
    state.catalogSingle = catalogSingle
  },
}

export const actions = {
  async fetchCatalog({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get('course-entrant-page/', {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setCatalog', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
  async fetchCatalogSingle({ commit }, slug) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`course-entrant-page/${slug}`, {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setCatalogSingle', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
}
