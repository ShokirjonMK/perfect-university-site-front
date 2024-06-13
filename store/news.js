export const state = () => ({
  news: [],
  newsTopSingle: [],
  scientificNews: [],
  scientificNewsSingle: [],
  toDownload: [],
  newsCategories: [],
})
export const mutations = {
  setNews(state, news) {
    state.news = news
  },
  setNewsTopSingle(state, newsTopSingle) {
    state.newsTopSingle = newsTopSingle
  },

  setScientificNews(state, scientificNews) {
    state.scientificNews = scientificNews
  },

  setToDownload(state, toDownload) {
    state.toDownload = toDownload
  },

  setScientificNewsSingle(state, scientificNewsSingle) {
    state.scientificNewsSingle = scientificNewsSingle
  },
  setNewsCategories(state, newsCategories) {
    state.newsCategories = newsCategories
  },
}

export const actions = {
  async fetchNewsCategories({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get('news-category/', {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setNewsCategories', res.data.results)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },

  async fetchNews({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`top-news/`, {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setNews', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
  async fetchNewsTopSingle({ commit }, slug) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`top-news/${slug}`)
        .then((res) => {
          commit('setNewsTopSingle', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
  async fetchScientificNews({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get('science-news/', {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setScientificNews', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
  async fetchToDownload({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(
          'science-files/',

          {
            headers: {
              'Accept-Language': this.$i18n.locale,
            },
          }
        )
        .then((res) => {
          commit('setToDownload', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },

  async fetchScientificNewsSingle({ commit }, slug) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`science-news/${slug}`, {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setScientificNewsSingle', res.data)

          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
}
