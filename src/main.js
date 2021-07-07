import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

import Tooltip from 'vue-directive-tooltip';
import 'vue-directive-tooltip/dist/vueDirectiveTooltip.css';

Vue.use(Tooltip);