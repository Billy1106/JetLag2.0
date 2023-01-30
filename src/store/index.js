import { createStore } from 'vuex'

export default createStore({
  state: {
    baseTime: new Date(),
    timeBoxLists:[],
  },
  mutations: {
    setBaseTime(state, newBaseTime) {
      state.baseTime = newBaseTime
    },
    addTimeBox(state, newTimeBox) {
      state.timeBoxLists.push(newTimeBox)
    }
  },
  actions: {
  },
  getters: {
    getBaseTime (state) {
      return state.baseTime
   }
  }
})