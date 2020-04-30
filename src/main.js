import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store'


import vueResource from 'vue-resource'
Vue.use(vueResource)

Vue.config.productionTip = true
Vue.http.options.emulateJSON = true

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
