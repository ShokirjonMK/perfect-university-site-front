export const state = () => ({
  fotoGallery: [],
})
export const mutations = {
  setFotoGallery(state, fotoGallery) {
    state.fotoGallery = fotoGallery
  },
}


export const actions = {
  async fetchFotoGallery({commit}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get('photo/',
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setFotoGallery', res.data.results)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
}


