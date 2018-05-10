// import Rx from 'rxjs/Rx'

export default {
  state: {
    isShowPlayingList: false,
    isShowPlayCardLg: true,
    actionSheet: {
      show: false,
      menus: {},
      subject: null
    },
  },
  actions: {
    notifyActionSheet({commit, state}, options){
      // state.actionSheet.subject = new Rx.AsyncSubject()
      // state.actionSheet.subject.subscribe({
      //   next: (v) => options.handler[v](),
      //   complete: () => commit('closeActionSheet')
      // })
      // commit('showActionSheet', options.menus)
    },
    responceFromActionSheet({state}, menu){
      state.actionSheet.subject.next(menu)
      state.actionSheet.subject.complete()
    }
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

    showActionSheet(state, menus){
      state.actionSheet.menus = menus
      state.actionSheet.show = true
    },
    closeActionSheet(state){
      state.actionSheet.show = false
    },
    showPlayingList(state){
      state.playingList.show=true
    },
    closePlayingList(state){
      state.playingList.show=false
    }
  }
}
