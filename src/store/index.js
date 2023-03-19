import { createStore } from 'vuex'
import { initializeLocalTime } from "../services/time/time-manager.js"

export default createStore({
  state: {
    baseTime: new Date(),
    timeBoxLists: [],
  },
  mutations: {
    setBaseTime(state, newBaseTime) {
      state.baseTime = newBaseTime
    },
    addTimeBox(state, newTimeBox) {
      state.timeBoxLists.push(newTimeBox)
    },
    updateCurrentTimeInTimeBaseList(state) {
      for (let timeBox of state.timeBoxLists) {
        timeBox.time = initializeLocalTime(timeBox.region, state.baseTime)
      }
    },
    updateCurrentTimeOfIndexList(state, index) {
      // eslint-disable-next-line no-debugger
      // debugger
      state.timeBoxLists[index].time = initializeLocalTime(state.timeBoxLists[index].region, state.baseTime)
    }
  },
  actions: {
  },
  getters: {
    getBaseTime(state) {
      return state.baseTime
    },
    getTimeBoxList(state) {
      return state.timeBoxLists
    }
  }
})