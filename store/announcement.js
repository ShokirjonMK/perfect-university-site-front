export const state = () => ({
  announcement: [],
})
export const mutations = {
  setAnnouncement(state, announcement) {
    state.announcement = announcement
  },
}


export const actions = {
  async fetchAnnouncement ({commit}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get('announcement/',
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setAnnouncement', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
}


