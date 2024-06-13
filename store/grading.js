export const state = () => ({
  grading: [],
})
export const mutations = {
  setGrading(state, grading) {
    state.grading = grading
  },
}


export const actions = {
  async fetchGrading({commit}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get('course-rating-system/',
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setGrading', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
}


