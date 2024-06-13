export const state = () => ({
  courses: [],
  coursesSingle: [],
  more: [],
  coursesSide: [],
  external: [],
  externalSlug: {},
  total: null,
  perPage: null,
})
export const mutations = {
  setCourses(state, courses) {
    state.courses = courses
  },

  setCoursesSingle(state, coursesSingle) {
    state.coursesSingle = coursesSingle
  },

  setTotal(state, total) {
    state.total = total
  },

  setPerPage(state, perPage) {
    state.perPage = perPage
  },

  setMore(state, more) {
    state.more = more
  },

  setCoursesSide(state, coursesSide) {
    state.coursesSide = coursesSide
  },
  setExternal(state, external) {
    state.external = external
  },
  setExternalSlug(state, externalSlug) {
    state.externalSlug = externalSlug
  },
}

export const actions = {
  async fetchCourses({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get('course/', {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setCourses', res.data)

          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
  async fetchCoursesSingle({ commit }, more) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`course/${more}/direction/`, {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setPerPage', res.data.per_page)
          commit('setTotal', res.data.total)
          commit('setCoursesSingle', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },

  async fetchCoursesPage({ commit }, { slug, page }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`course/${slug}/direction/?page=${page}`, {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setPerPage', res.data.per_page)
          commit('setTotal', res.data.total)
          commit('setCoursesSingle', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },

  async fetchMore({ commit }, { slug, more }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`course/${more}/direction/${slug}`, {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setMore', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },

  async fetchCoursesSide({ commit }, { slug, more }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`course/${slug}`, {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setCoursesSide', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
  async fetchExternal({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get('external-section/', {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((response) => {
          console.log(response, 'resr')
          commit('setExternal', response.data.results)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
  async fetchExternalSlug({ commit }, id) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`external-section/${id}`, {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((response) => {
          console.log(response, 'resr')
          commit('setExternalSlug', response.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
}
