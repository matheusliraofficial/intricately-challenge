import Vue from 'vue'
import VueRouter from 'vue-router'
// Components
import CompanyData from "Components/CompanyData.vue"
import CompanyPage from "Components/CompanyPage.vue"

Vue.use(VueRouter)

const index = new VueRouter({
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

export default index
