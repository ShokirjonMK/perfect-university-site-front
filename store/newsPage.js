export const state = () => ({
  perPage: null,
  total: null,
  currentPage: 1,

  newsPage: [],
})
export const mutations = {
  setPerPage(state, perPage) {
    state.perPage = perPage
  },
  setTotal(state, total) {
    state.total = total
  },
  setCurrentPage(state, currentPage) {
    state.currentPage = currentPage
  },

  setNewsPage(state, newsPage) {
    state.newsPage = newsPage
  },
}

export const actions = {
  async fetchNews({ commit }, { category, hashtag }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(
          `/news/?category__slug=${category}&hashtag__slug=${hashtag}&per_page=3`
        )
        .then((res) => {
          commit('setNewsPage', res.data.results)
          commit('setPerPage', res.data.per_page)
          commit('setTotal', res.data.total)
          commit('setCurrentPage', res.data.current_page)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },

  async fetchNewsPage({ commit }, { page, categorySlug }) {
    console.log('page', page, categorySlug)
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`/news`, {
          params: {
            page,
            category__slug: categorySlug,
          },
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setNewsPage', res.data.results)
          commit('setPerPage', res.data.per_page)
          commit('setTotal', res.data.total)
          commit('setCurrentPage', res.data.current_page)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
}
