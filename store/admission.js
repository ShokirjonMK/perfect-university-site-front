export const state = () => ({
  admissionTasks: null
})
export const mutations = {
  setAdmissionTasks(state, admissionTasks) {
    state.admissionTasks = admissionTasks
  }
}
export const actions = {
  async fetchAdmisssionTasks({
    commit
  }) {
    return await new Promise((resolve, reject) => {
      this.$axios.get('international-admission-page/', {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        })
        .then(res => {
          commit('setAdmissionTasks', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  }
}
