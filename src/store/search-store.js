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
    clearHistory(state) {
      state.history = []
    },
    addHistory(state, key) {
      if (state.history.indexOf(key) == -1)
        state.history.push(key)
    }
  }
}
