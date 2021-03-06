import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import layout from '@/components/layout'
import addedList from '@/components/addedList'
import yInput from '@/components/yInput'

import vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import { visitTypeDict, statusDict, genderDict, certificateTypeDict } from '@/testData.js'

Vue.component(layout.name, layout)
Vue.component(addedList.name, addedList)
Vue.component(yInput.name, yInput)

Vue.use(MintUI)
Vue.use(vuetify, {
  iconfont: 'md'
})

Vue.filter('formatTime', function (value) {
  if (!value) return ''
  return `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`
})

Vue.filter('dictTransform', function (value, type) {
  if (!value) return
  if (type === 'visitType')
    return visitTypeDict.find(item => item.value === value).name
  else if (type === 'status')
    return statusDict.find(item => item.value === value).name
  else if (type === 'gender')
    return genderDict.find(item => item.value === value).name
  else if (type === 'certificate')
    return certificateTypeDict.find(item => item.value === value).name
})


// localStorage.removeItem('token')
router.beforeEach((to, from, next) => {
  if(to.name === 'home' || to.name === 'signUp' || to.name === 'login')
    next()
  else {
    if(sessionStorage.getItem('token')) next()
    else next({name: 'login'})
  }
  // if (to.name != 'home' || to.name != 'register' || to.name != 'login') {
  //   if (store.state.token) next()
  //   else next({ name: 'login' })
  // } else next()
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
