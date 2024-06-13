export const state = () => ({
  signUpData: null,
  user: null,
  resetPasswordEmail: null,
  resetPasswordSession: null,
  resetPasswordCode: null,
  resetNewPassword: null,
})
export const mutations = {
  setSignUpData(state, payload) {
    state.signUpData = payload
  },
  setProfile(state, payload) {
    state.user = payload
  },
  setResetPasswordEmail(state, payload) {
    state.resetPasswordEmail = payload
  },
  setResetPasswordSession(state, payload) {
    state.resetPasswordSession = payload
  },
  setResetPasswordCode(state, payload) {
    state.resetPasswordCode = payload
  },
  setResetNewPassword(state, payload) {
    state.resetNewPassword = payload
  },
}

export const actions = {
  getSignUpData({ commit }, payload) {
    commit('setSignUpData', payload)
  },
  login({ commit }, params) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('auth/login/', params)
        .then((res) => {
          this.$axios.defaults.headers.common.Authorization =
            'Bearer ' + res?.data?.access
          localStorage.setItem('access', res?.data?.access)
          localStorage.setItem('refresh', res?.data?.refresh)
          resolve(res)
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
  fetchProfile({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get('auth/profile/', {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setProfile', res.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
  getTokens() {
    if (process.client) {
      const token = localStorage.getItem('access')
      const refresh = localStorage.getItem('refresh')
      if (token) {
        this.$axios.defaults.headers.common.Authorization = 'Bearer ' + token
      } else {
        delete this.$axios.defaults.headers.common.Authorization
      }
      return { token, refresh }
    }
  },
}
