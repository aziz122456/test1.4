import Vue from 'vue'
import VueRouter from 'vue-router'
import Add from '../views/AddView.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/Add',

        name: 'Add_user',
        component: Add
    },
    {
        path: '/Login',
        name: '/login_user',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/LoginView.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router