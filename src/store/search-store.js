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
      if (key == null || key.trim() == '') return
      if (state.history.indexOf(key.trim()) == -1)
        state.history.push(key.trim())
    }
  }
}
