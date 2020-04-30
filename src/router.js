import Vue from 'vue'
import Router from 'vue-router'

import HomeComponent from '../src/components/Home'
import App from '../src/App'
import Login from '../src/components/Login'

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        name: 'app',
        component: App,
        children: [
            { path: '/home', component: HomeComponent },
        ],
        beforeEnter: (to, from, next) => {
            let auth = localStorage.getItem('token')

            if (!auth) {
                next('/login')
            } else {
                next()
            }


        }
    },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
});

export default router