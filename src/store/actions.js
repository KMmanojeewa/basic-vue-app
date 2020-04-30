import Vue from 'vue'

const actions = {

    login ({ commit }, credential) {
        return new Promise((resolve, reject) => {
            Vue.http.post('http://simpleapi.site/api/login', credential)
                .then(response => response.json())
                .then((result) => {
                    commit('login', result)
                    resolve()
                })
                .catch((error) => {

                })
        })
    }

}

export default actions;