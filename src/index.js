import './styles/main.scss'
import Vue from 'vue'
import App from 'Components/App.vue'
import router from './router'

new Vue({
  router,
  render: createElement => createElement(App),
  el: '#app'
});
