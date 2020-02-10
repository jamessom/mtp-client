import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import makeServer from './__mocks__/server';
import App from './App.vue';
import router from './router';
import store from './store';
import './icons';

Vue.config.productionTip = false;

Vue.component('fa-icon', FontAwesomeIcon);


if (process.env.NODE_ENV === 'development') {
  makeServer();
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
