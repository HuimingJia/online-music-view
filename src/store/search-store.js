export default {
  state: {
    key: null,
    history: [],
  },
  mutations: {
    setKey(state, key) {
      state.key = key
      // alert("setkey")
    },
    clearHistory() {
      state.history = key
    },
    addHistory(state, key) {
      alert("addHistory")
            state.history.push(key)
      // if (state.history.indexOf(key) == -1)
      //   state.history.push(key)
    }
  }
}
