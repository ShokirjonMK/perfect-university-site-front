export const state = () => ({
  degrees: null,
  countries: null,
  nationalities: null,
})

export const mutations = {
  setAdmissionDegrees(state, degrees) {
    state.degrees = degrees
  },
  setAdmissionCountries(state, countries) {
    state.countries = countries
  },
  setAdmissionNationalities(state, nationalities) {
    state.nationalities = nationalities
  },
}

export const actions = {
  async fetchAdmission({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get('admission/objects/', {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          commit('setAdmissionDegrees', res.data.degrees)
          commit('setAdmissionCountries', res.data.countries)
          commit('setAdmissionNationalities', res.data.nationalities)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
}
