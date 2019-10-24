import Vue from 'vue'
import VueRouter from 'vue-router'
// Components
import CompanyData from "./components/CompanyData.vue"
import CompanyPage from "./components/CompanyPage.vue"

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            name: 'COMPANY DATA',
            path: '/',
            component: CompanyData
        },
        {
            name: 'COMPANY PAGE',
            path: '/company',
            component: CompanyPage
        }
    ],
    mode: 'history'
})

export default router
