import './styles/main.scss'
import Vue from 'vue'
import App from 'Components/App.vue'
import VueRouter from 'vue-router'
// Components
import CompanyData from "./components/CompanyData.vue"
import CompanyPage from "./components/CompanyPage.vue"

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
      { path: '/', component: CompanyData },
      { path: 'company', component: CompanyPage}
  ],
  mode: 'history'
})

new Vue({
  router,
  render: createElement => createElement(App),
  el: '#app'
});
