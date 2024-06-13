export const state = () => ({
  header: {},
})
export const mutations = {
  setHeader(state, header) {
    state.header = header
  },
}

export const actions = {
  async fetchHeader({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get('header/', {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setHeader', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
}
