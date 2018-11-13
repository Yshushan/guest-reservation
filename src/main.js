import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import layout from '@/components/layout'
import addedList from '@/components/addedList'
import yInput from '@/components/yInput'

Vue.component(layout.name, layout)
Vue.component(addedList.name, addedList)
Vue.component(yInput.name, yInput)

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
