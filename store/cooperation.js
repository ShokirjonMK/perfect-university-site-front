export const state = () => ({
  cooperation: null,
})
export const mutations = {
  setCooperation(state, correspondence) {
    state.cooperation = correspondence
  },
}

export const actions = {
  async fetchCooperation({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get('international-cooperation/', {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setCooperation', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
}
