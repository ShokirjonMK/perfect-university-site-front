export const state = () => ({
  videos: [],
  videosSingle: [],

})
export const mutations = {
  setVideos(state, videos) {
    state.videos = videos
  },

  setVideosSingle(state, videosSingle) {
    state.videosSingle = videosSingle
  },
}


export const actions = {
  async fetchVideos({commit}, {page}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get(`video/?page=${page}`,
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setVideos', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },

  async fetchVideosSingle({commit}, id) {
    return await new Promise((resolve, reject) => {
      this.$axios.get(`video/${id}/`,
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setVideosSingle', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },

}


