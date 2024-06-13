export const state = () => ({
  perPage: null,
  total: null,
  currentPage: 1,
  report: [],
  scienceCenter: [],
  scienceCenterSlug: [],
  scientificMagazines: [],
  scientificMagazinesSlug: [],
})
export const mutations = {
  setReport(state, report) {
    state.report = report
  },
  setTotal(state, total) {
    state.total = total;
  },
  setCurrentPage(state, currentPage) {
    state.currentPage = currentPage;
  },

  setReportsPage(state, reportsPage) {
    state.reportsPage = reportsPage
  },
  setScienceCenter(state, scienceCenter) {
    state.scienceCenter = scienceCenter
  },
  setScienceCenterSlug(state, scienceCenterSlug) {
    state.scienceCenterSlug = scienceCenterSlug
  },
  setScientificMagazines(state, scientificMagazines) {
    state.scientificMagazines = scientificMagazines
  },
  setScientificMagazinesSlug(state, scientificMagazinesSlug) {
    state.scientificMagazinesSlug = scientificMagazinesSlug
  }
}


export const actions = {
  async fetchReport({
    commit
  }, {
    page = 1
  }) {
    return await new Promise((resolve, reject) => {
      this.$axios.get('report/', {
          params: {
            page: page,
          },
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        })
        .then(res => {
          commit('setReport', res.data.results)
          commit("setPerPage", res.data.per_page);
          commit("setTotal", res.data.total);
          commit("setCurrentPage", res.data.current_page);
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
  async fetchScienceCenter({commit}, { page = '' }) {
    return await new Promise((resolve, reject) => {
      this.$axios.get('science-center/', {
          params: {
            page: page,
          },
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        })
        .then(res => {
          commit('setScienceCenter', res.data.results)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },

  async fetchScienceCenterSlug({commit}, { page = 1 , slug = '' }) {
    return await new Promise((resolve, reject) => {
      this.$axios.get(`science-center/${slug}`, {
          params: {
            page: page,
            slug: slug
          },
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        })
        .then(res => {
          commit('setScienceCenter', res.data)
          resolve(res)
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
  async fetchScientificMagazines({commit}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get('scientific_journal-desc/', {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        })
        .then(res => {
          commit('setScientificMagazines', res.data.results)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
  async fetchScientificMagazinesSlug({commit}, { slug = '' }) {
    return await new Promise((resolve, reject) => {
      this.$axios.get(`scientific_journal-desc/${slug}/`, {

          headers: {
            'Accept-Language': this.$i18n.locale
          }
        })
        .then(res => {
          commit('setScientificMagazinesSlug', res.data)
          resolve(res)
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  }
}
