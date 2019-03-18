import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;


// let app = Vue.extend(App);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
// App.go('/goods');
