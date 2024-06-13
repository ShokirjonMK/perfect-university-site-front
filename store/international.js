export const state = () => ({
  perPage: null,
  total: null,
  currentPage: 1,
  internationalGrant: null,
  singleGrant: null,
  internationalRelations: null,
  scholarships: undefined,
  internationalConferences: null,
  internationalConferencesSlug: null,
})

export const mutations = {
  setPerPage(state, perPage) {
    state.perPage = perPage;
  },
  setTotal(state, total) {
    state.total = total;
  },
  setCurrentPage(state, currentPage) {
    state.currentPage = currentPage;
  },

  setInternationalGrant(state, internationalGrant) {
    state.internationalGrant = internationalGrant
  },
  setSingleGrant(state, singleGrant) {
    state.singleGrant = singleGrant
  },

  setInternationalRelations(state, internationalRelations) {
    state.internationalRelations = internationalRelations
  },

  setScholarships(state, scholarships) {
    state.scholarships = scholarships;
  },
  setInternationalConferences(state, internationalConferences) {
    state.internationalConferences = internationalConferences;
  },
  setInternationalConferencesSlug(state, internationalConferencesSlug) {
    state.internationalConferencesSlug = internationalConferencesSlug;
  }
}

export const actions = {
  async fetchInternationalGrant({commit}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get('international-grant/', {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setInternationalGrant', res.data.results)

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
  async fetchSingleGrant({commit},slug) {
    return await new Promise((resolve, reject) => {
      this.$axios.get(`international-grant/${slug}`, {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setSingleGrant', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },

  async fetchInternationalRelations({commit}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get(`international-relations/`, {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setInternationalRelations', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
  async fetchScholarships({commit}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get(`international-scholarship/`,
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        },
      )
        .then(res => {
          commit('setScholarships', res.data)

          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
  async fetchInternationalConferences({commit}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get(`international-conferences/`,
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        },
      )
        .then(res => {
          commit('setInternationalConferences', res.data)

          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
  async fetchInternationalConferencesSlug({commit}, slug) {
    return await new Promise((resolve, reject) => {
      this.$axios.get(`international-conferences/${slug}`,
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        },
      )
        .then(res => {
          commit('setInternationalConferencesSlug', res.data)

          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  }

}
