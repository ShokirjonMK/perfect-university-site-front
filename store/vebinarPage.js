export const state = () => ({
  vebinarPage: [],
})
export const mutations = {
  setVebinarPage(state, vebinarPage) {
    state.vebinarPage = vebinarPage
  },
}


export const actions = {
  async fetchVebinarPage({commit}, {page}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get(`vebinar/?page=${page}`,
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setVebinarPage', res.data)

          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
}


