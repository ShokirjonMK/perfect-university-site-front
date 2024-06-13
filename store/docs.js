export const state = () => ({
  docs: [],
})
export const mutations = {
  setDocs(state, docs) {
    state.docs = docs
  },
}


export const actions = {
  async fetchDocs({commit}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get('docs/',
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setDocs', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
}


