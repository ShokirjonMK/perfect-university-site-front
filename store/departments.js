export const state = () => ({
    departments: [],
    departmentsSingle: [],
    departmentFilter: []
})
export const mutations = {
    setDepartments(state, departments) {
        state.departments = departments
    },

    setDepartmentsSingle(state, departmentsSingle) {
        state.departmentsSingle = departmentsSingle
    },

    setDepartmentFilter(state, departmentFilter) {
        state.departmentFilter = departmentFilter
    },
}


export const actions = {
    async fetchDepartments({commit}, slug) {
        return await new Promise((resolve, reject) => {
            this.$axios.get('kafedra/',
                {
                    params: {
                        faculty__slug: slug,
                    },
                    headers: {
                        'Accept-Language': this.$i18n.locale
                    }
                }
            )
                .then(res => {
                    commit('setDepartments', res.data)
                    resolve()
                })
                .catch(error => {
                    console.log(error)
                    reject(error)
                })
        })
    },
    async fetchDepartmentsSingle({commit}, slug) {
        return await new Promise((resolve, reject) => {
            this.$axios.get(`kafedra/${slug}`,
                {
                    headers: {
                        'Accept-Language': this.$i18n.locale
                    }
                }
            )
                .then(res => {
                    commit('setDepartmentsSingle', res.data)
                    resolve()
                })
                .catch(error => {
                    console.log(error)
                    reject(error)
                })
        })
    },

    // async fetchDepartmentFilter({commit}, slug) {
    //     return await new Promise((resolve, reject) => {
    //         this.$axios.get(`kafedra`,
    //             {
    //                 headers: {
    //                     'Accept-Language': this.$i18n.locale
    //                 }
    //             }
    //         )
    //             .then(res => {
    //                 commit('setDepartmentFilter', res.data)
    //                 resolve()
    //             })
    //             .catch(error => {
    //                 console.log(error)
    //                 reject(error)
    //             })
    //     })
    // },

}




