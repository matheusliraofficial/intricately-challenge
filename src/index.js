import Vue from 'vue'
import App from 'Components/App.vue'
import router from 'Router'

new Vue({
  router: router,
  render: createElement => createElement(App),
  el: '#app'
});
