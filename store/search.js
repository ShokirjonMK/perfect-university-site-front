export const state = () => ({
  query: '',
  results: {},
})

export const mutations = {
  saveResults(store, results) {
    store.results = results
  },
  setQuery(store, query) {
    store.query = query
  },
}

export const actions = {
  search({ commit }, query) {
    // const data = new FormData()
    // data.append('query', query)
    commit('setQuery', query)

    return this.$axios
      .get(`search/?query=${query}`, {
        headers: {
          'Accept-Language': this.$i18n.locale,
        },
      })
      .then((r) => {
        commit('saveResults', r.data)
      })
  },
}
