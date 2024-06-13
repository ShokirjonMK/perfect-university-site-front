export const state = () => ({
  services: [],
  serviceList: []
})
export const mutations = {
  setServices(state, services) {
    state.services = services
  },
  setServiceList(state, serviceList) {
    state.serviceList = serviceList
  },
}


export const actions = {
  async fetchServices({commit}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get('service/',
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setServices', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
  async fetchServiceList({commit}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get('service-list/',
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setServiceList', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },

}


