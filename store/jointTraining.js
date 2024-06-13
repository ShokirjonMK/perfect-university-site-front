export const state = () => ({
  jointTraining: [],
  jointTrainingSingle: []
})
export const mutations = {
  setJointTraining(state, jointTraining) {
    state.jointTraining = jointTraining
  },

  setJointTrainingSingle(state, jointTrainingSingle) {
    state.jointTrainingSingle = jointTrainingSingle
  },
}


export const actions = {
  async fetchJointTraining({commit}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get('extra-programs/',
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setJointTraining', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
  async fetchJointTrainingSingle({commit}, id) {
    return await new Promise((resolve, reject) => {
      this.$axios.get(`extra-programs/${id}`,
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setJointTrainingSingle', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
}




