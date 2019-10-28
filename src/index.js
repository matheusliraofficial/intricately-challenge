import Vue from 'vue'
import App from 'Components/App.vue'
import router from 'Router'
import store from 'Store'

new Vue({
  router: router,
  store,
  render: createElement => createElement(App),
  el: '#app'
});
