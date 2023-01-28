import { createStore } from 'vuex'

export default createStore({
  state: {
    baseTime: new Date(),
    timeBoxLists:[],
  },
  mutations: {
    setNewBaseTime(state, {newBaseTime}) {
      state.baseTime = newBaseTime
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