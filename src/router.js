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
      props:{
        headParams:{
          title: '添加被访人',
          back: 'guestRegister'
        }
      },
      component: () => import(/* webpackChunkName: "searchEmployee" */ './views/guests/searchEmployee.vue')
    },
    {
      path: '/reservation/guestRegister/addGuest',
      name: 'addGuest',
      props:{
        headParams:{
          title: '添加来访人员',
          back: 'guestRegister'
        }
      },
      component: () => import(/* webpackChunkName: "addGuest" */ './views/guests/addGuest.vue')
    },
    {
      path: '/reservation/guestRegister/addMaterial',
      name: 'addMaterial',
      props:{
        headParams:{
          title: '添加携带物品',
          back: 'guestRegister'
        }
      },
      component: () => import(/* webpackChunkName: "addMaterial" */ './views/guests/addMaterial.vue')
    },
    {
      path: '/reservation/guestRegister/addArea',
      name: 'addArea',
      props:{
        headParams:{
          title: '选择到访区域',
          back: 'guestRegister'
        }
      },
      component: () => import(/* webpackChunkName: "addArea" */ './views/guests/addArea.vue')
    },
    {
      path: '/reservation/guestRegister/addArea/addSubArea',
      props: {
        headParams:{
          title: '选择到访区域',
          back: 'addArea'
        }
      },
      name: 'addSubArea',
      component: () => import(/* webpackChunkName: "addSubArea" */ './views/guests/addSubArea.vue')
    },
    {
      path: '/reservation/visitRecords',
      name: 'visitRecords',
      props:{
        headParams:{
          title: '到访记录',
          back: 'reservation'
        }
      },
      component: () => import(/* webpackChunkName: "addArea" */ './views/guests/visitRecords.vue')
    },
    {
      path: '/reservation/visitRecords/recordDetail/:id',
      name: 'recordDetail',
      props: true,
      component: () => import(/* webpackChunkName: "addArea" */ './views/guests/recordDetail.vue')
    }
  ]
})
