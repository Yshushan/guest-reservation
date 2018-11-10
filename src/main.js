import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import layout from '@/components/layout'
import addedList from '@/components/addedList'

Vue.component(layout.name, layout)
Vue.component(addedList.name, addedList)


Vue.use(MintUI)

Vue.filter('formatTime', function (value) {
  if (!value) return ''
  return `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
