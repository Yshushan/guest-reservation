import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
      component: () => import(/* webpackChunkName: "about" */ './views/guests/guestRegister.vue')
    },
    {
      path: '/reservation',
      name: 'reservation',
      component: () => import(/* webpackChunkName: "reservation" */ './views/guests/Reservation.vue')
    },
    {
      path: '/reservation/guestRegister/searchEmployee',
      name: 'searchEmployee',
      component: () => import(/* webpackChunkName: "searchEmployee" */ './views/guests/searchEmployee.vue')
    },
    {
      path: '/reservation/guestRegister/addGuest',
      name: 'addGuest',
      component: () => import(/* webpackChunkName: "addGuest" */ './views/guests/addGuest.vue')
    },
    {
      path: '/reservation/guestRegister/addMaterial',
      name: 'addMaterial',
      component: () => import(/* webpackChunkName: "addMaterial" */ './views/guests/addMaterial.vue')
    },
    {
      path: '/reservation/guestRegister/addArea',
      name: 'addArea',
      component: () => import(/* webpackChunkName: "addArea" */ './views/guests/addArea.vue')
    },
    {
      path: '/reservation/guestRegister/addArea/addSubArea/:sub',
      props: true,
      name: 'addSubArea',
      component: () => import(/* webpackChunkName: "addSubArea" */ './views/guests/addSubArea.vue')
    },
    {
      path: '/reservation/visitRecords',
      name: 'visitRecords',
      component: () => import(/* webpackChunkName: "addArea" */ './views/guests/visitRecords.vue')
    }
  ]
})
