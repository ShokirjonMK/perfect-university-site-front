export const state = () => ({
  studentsActivities: [],
  studentsActivitiesSlug: [],
})
export const mutations = {
  setStudentsActivities(state, studentsActivities) {
    state.studentsActivities = studentsActivities
  },
  setStudentsActivitiesSlug(state, studentsActivitiesSlug) {
    state.studentsActivitiesSlug = studentsActivitiesSlug
  },
}

export const actions = {
  async fetchStudentsActivities({ commit }, limit) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get('student-activities/', {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
          params: {
            limit: limit.limit,
          },
        })
        .then((res) => {
          commit('setStudentsActivities', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
  async fetchStudentsActivitiesSlug({ commit }, slug) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`student-activities/${slug}`, {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setStudentsActivitiesSlug', res.data)

          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
}
