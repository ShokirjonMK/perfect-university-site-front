export const state = () => ({
  academicCouncil: [],
})
export const mutations = {
  setAcademicCouncil(state, academicCouncil) {
    state.academicCouncil = academicCouncil
  },
}


export const actions = {
  async fetchAcademicCouncil({commit}) {
    return await new Promise((resolve, reject) => {
      this.$axios.get('scientifics/',
        {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        }
      )
        .then(res => {
          commit('setAcademicCouncil', res.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
}


