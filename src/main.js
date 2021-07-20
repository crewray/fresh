import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Vant,{Toast} from 'vant'
import 'vant/lib/index.css'
import '@/assets/css/reset.css'
import '@/assets/css/common.css'



Vue.use(Vant)

// Toast.setDefaultOptions({
//   message: "拼命加载中...",
//   forbidClick: true,
//   duration: 0,
//   overlay:true,
//   closeOnClick:true
// })

Vue.config.productionTip = false
import mixin from '@/mixin/index'
Vue.mixin(mixin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')