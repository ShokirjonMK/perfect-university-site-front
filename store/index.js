export const state = () => ({
  slider: [],
  footer: null,
  footerMenu: null,
  postApply: null,
})
export const mutations = {
  setSlider(state, slider) {
    state.slider = slider
  },
  setFooter(state, footer) {
    state.footer = footer
  },
  setFooterMenu(state, footerMenu) {
    state.footerMenu = footerMenu
  },
  setPostApply(state, postApply) {
    state.postApply = postApply
  },
}

export const actions = {
  async fetchPostApply({ commit }, data) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .post('application/', data, {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setPostApply', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },

  async fetchPosts({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get('slider/', {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setSlider', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
  async fetchFooter({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get('footer/', {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setFooter', res.data.footer)
          commit('setFooterMenu', res.data.menu)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
}
