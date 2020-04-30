import Vue from 'vue'

const mutations = {

    login (state, data) {
        const { token } = JSON.stringify(data.success.token)
        localStorage.setItem('token', token)
        state.token = token
    },
}

export default mutations