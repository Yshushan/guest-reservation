import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    guests: [],
    materials: [],
    cars: [],
    employee: null,
    visitArea: null,
    visitDate: null,
    visitType: null
  },
  mutations: {
    addEmployee(state, employee) {
      state.employee = employee
    },
    addGuest(state, guest) {
      state.guests.push(guest)
    },
    addMaterial(state, material) {
      state.materials.push(material)
    },
    addCar(state, car) {
      state.cars.push(car)
    },
    deleteCar(state, car) {
      state.cars = state.cars.filter(c => c !== car)
    },
    deleteGuest(state, phone) {
      state.guests = state.guests.filter(g => g.guestTelphone !== phone)
    },
    deleteMaterial(state, name) {
      state.materials = state.materials.filter(m => m.name !== name)
    },
    updateVisitArea(state, value) {
      state.visitArea = value
    },
    updateVisitDate(state, value) {
      state.visitDate = value
    },
    updateVisitType(state, value) {
      state.visitType = value
    },
    clearAll(state) {
      Object.keys(state).forEach(key => state[key] = Array.isArray(state[key]) ? [] : null)
    },
    updateToken(state, token) {
      state.token = token
    }
  },
  actions: {
    updateToken({ commit }, token) {
      commit('updateToken', token)
    }
  }
})
