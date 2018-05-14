// import Rx from 'rxjs/Rx'

export default {
  state: {
    isShowPlayingList: false,
    isShowPlayCardLg: false,
    // isShowSearchList: false,
    isFocusSearchInput: false,
    isFocusSearchList: false,
    actionSheet: {
      show: false,
      menus: {},
      subject: null
    },
  },
  getters: {
    isShowSearchList: state => state.isFocusSearchInput || state.isFocusSearchList
  },
  mutations: {
    hidePlayingList (state) {
      state.isShowPlayingList = false;
    },
    togglePlayingList (state) {
      state.isShowPlayingList = !state.isShowPlayingList;
    },
    showPlayingList (state) {
      state.isShowPlayingList = true;
    },

    hidePlayCardLg (state) {
      state.isShowPlayCardLg = false;
    },
    togglePlayCardLg (state) {
      state.isShowPlayCardLg = !state.isShowPlayCardLg;
    },
    showPlayCardLg (state) {
      state.isShowPlayCardLg = true;
    },

    focusSearchInput(state) {
      state.isFocusSearchInput = true;
    },
    unfocusSearchInput(state) {
      // state.isFocusSearchInput = false;
    },
    focusSearchList(state) {
      state.isFocusSearchList = true;
    },
    unfocusSearchList(state) {
      // state.isFocusSearchList = false;
    },

    hideSearchList (state) {
      state.isShowSearchList = false;
    },
    toggleSearchList (state) {
      state.isShowSearchList = !state.isShowSearchList;
    },
    showSearchList (state) {
      state.isShowSearchList = true;
    },
  }
}
