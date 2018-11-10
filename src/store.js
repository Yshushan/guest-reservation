import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    employeesInfo: [],
    guestsInfo: [],
    materialsInfo: [],
    subArea: null,
    mainArea: null
  },
  mutations: {
    addEmployee (state, employee) {
      state.employeesInfo.push(employee)
    },
    addGuest (state, guest) {
      state.guestsInfo.push(guest)
    },
    addMaterial (state, material) {
      state.materialsInfo.push(material)
    },
    deleteEmployee (state, id) {
      state.employeesInfo = state.employeesInfo.filter(e => e.id !== id)
    },
    deleteGuest (state, id) {
      state.guestsInfo = state.guestsInfo.filter(e => e.id !== id)
    },
    deleteMaterial (state, id) {
      state.materialsInfo = state.materialsInfo.filter(e => e.id !== id)
    },
    updateMainArea (state, mainArea) {
      state.mainArea = mainArea
    },
    updateSubArea(state, subArea){
      state.subArea = subArea
    }
  },
  actions: {

  }
})
