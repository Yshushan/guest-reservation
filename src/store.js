import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: '',
    activeComp: ''
  },
  mutations: {
    switchComp(state, {title,comp}){
      state.title = title
      state.comp = comp
    }

  },
  actions: {

  }
})
