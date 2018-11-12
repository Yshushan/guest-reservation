import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import addCar from '@/views/guests/addCar'
import addGuest from '@/views/guests/addGuest'
import searchEmployee from '@/views/guests/searchEmployee'
import addMaterial from '@/views/guests/addMaterial'
import reservation from '@/views/guests/reservation'
import addArea from '@/views/guests/addArea'
import addSubArea from '@/views/guests/addSubArea'
import recordDetail from '@/views/guests/recordDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/reservation/guestRegister',
      name: 'guestRegister',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "guestRegister" */ './views/guests/guestRegister.vue')
    },
    {
      path: '/reservation',
      name: 'reservation',
      component: reservation
    },
    {
      path: '/reservation/guestRegister/searchEmployee',
      name: 'searchEmployee',
      component: searchEmployee
    },
    {
      path: '/reservation/guestRegister/addGuest',
      name: 'addGuest',
      component: addGuest
    },
    {
      path: '/reservation/guestRegister/addMaterial',
      name: 'addMaterial',
      component: addMaterial
    },
    {
      path: '/reservation/guestRegister/addArea',
      name: 'addArea',
      component: addArea
    },
    {
      path: '/reservation/guestRegister/addArea/:areaId',
      props: true,
      name: 'addSubArea',
      component: addSubArea
    },
    {
      path: '/reservation/visitRecords',
      name: 'visitRecords',
      component: () => import(/* webpackChunkName: "visitRecords" */ './views/guests/visitRecords.vue')
    },
    {
      path: '/reservation/visitRecords/:recordId',
      name: 'recordDetail',
      props: true,
      component: recordDetail
    },
    {
      path: '/reservation/guestRegister/addCar',
      name: 'addCar',
      component: addCar
    }
  ]
})
