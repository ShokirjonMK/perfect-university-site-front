export const state = () => ({
  vacancy: [],
  vacancySingle: [],
})
export const mutations = {
  setVacancy(state, vacancy) {
    state.vacancy = vacancy
  },

  setVacancySingle(state, vacancySingle) {
    state.vacancySingle = vacancySingle
  },
}

export const actions = {
  async fetchVacancy({ commit }, page) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`job/?page=${page}`, {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setVacancy', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },

  async fetchVacancySingle({ commit }, id) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`job/${id}`, {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setVacancySingle', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
}
