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
    }
  ]
})
