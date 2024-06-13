export const state = () => ({
  fotoGallerySingle: [],
})
export const mutations = {
  setFotoGallerySingle(state, fotoGallerySingle) {
    state.fotoGallerySingle = fotoGallerySingle
  },
}


export const actions = {
  async fetchFotoGallerySingle({commit}, id) {
    return await new Promise((resolve, reject) => {
      this.$axios.get(`photo/${id}/`,
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setFotoGallerySingle', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
}











