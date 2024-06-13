export const state = () => ({
  rector: [],
})
export const mutations = {
  setRector(state, rector) {
    state.rector = rector
  },
}


export const actions = {
  async fetchRector({commit}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get('rector/',
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setRector', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
}


