import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
import './assets/css/animate.css';
import './assets/css/animate.css';
import './assets/css/swiper.min.css';
import './assets/css/style.css';

import GeminiScrollbar from 'vue-gemini-scrollbar' //滚动条优化
import service from '@/utils/fetch'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.use(GeminiScrollbar)

Vue.prototype.service = service; //注册全局service

Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  store,
  template:'<App/>',
  components: {
    App
  }
});


