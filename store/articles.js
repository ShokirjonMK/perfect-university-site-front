export const state = () => ({
  articles: [],
  articlesSingle: [],
})
export const mutations = {
  setArticles(state, articles) {
    state.articles = articles
  },
  setArticlesSingle(state, articlesSingle) {
    state.articlesSingle = articlesSingle
  },
}

export const actions = {
  async fetchArticles({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get('mono-article/', {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setArticles', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },

  async fetchArticlesSingle({ commit }, slug) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`mono-article/${slug}`, {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setArticlesSingle', res.data)

          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
}
