export const state = () => ({
  managementSingle: [],
  stuffSingle: [],
})
export const mutations = {
  setManagementSingle(state, managementSingle) {
    state.managementSingle = managementSingle
  },
  setStuffSingle(state, stuffSingle) {
    state.stuffSingle = stuffSingle
  }
}


export const actions = {
  async fetchManagementSingle({commit}, id) {
    return await new Promise((resolve, reject) => {
      this.$axios.get(`/leader/${id}/`,
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setManagementSingle', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },

  async fetchStuffSingle({commit}, id) {
    return await new Promise((resolve, reject) => {
      this.$axios.get(`/staff/${id}`,
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setStuffSingle', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
}


