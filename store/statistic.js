export const state = () => ({
  statistic: [],
})
export const mutations = {
  setStatistic(state, statistic) {
    state.statistic = statistic
  },
}


export const actions = {
  async fetchStatistic({commit}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get('statistic/',
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setStatistic', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
}


