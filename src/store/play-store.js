import * as vars from '@/global/vars'

export default {
  state: {
    playing: false,
    currentTime: 0,
    duration: 0,
    playMode: vars.SEQUENTIAL,
    index: 0,
    song: { name: vars.DEFAULT_SONG_NAME },
    playList: [],
    isShowPlayingList: true,
  },
  mutations: {
    playSong (state) {
      state.playing = true
      state.index = 0
      state.song = state.playList[state.index]
    },
    changePlayMode (state) {
      state.playMode = (state.playMode + 1) % 3
    },
    playIndex (state, index) {
      state.index = index
      state.song = state.playList[index]
    },
    insertToPlayList(state, song) {
      state.playList.unshift(song)
    },
    addToPlayList (state, item) {
      state.playList.push(item)
    },
    deleteFromPlayList (state, index) {
      if (isNaN(index) || index >= state.playList.length) {
        return false
      }
      if (index === state.index) {
        if (state.index === 0 && state.playList.length === 1) {
          state.song = {
            name: vars.DEFAULT_SONG_NAME,
            singer: ''
          }
          state.coverImgUrl = vars.DEFAULT_IMG
        } else {
          state.song = state.playList[state.index + 1]
        }
      } else if (index < state.index) {
        state.index--
      }
      state.playList.splice(index, 1)
    },
    clearPlayingList (state) {
      state.playList = [];
    },
    hidePlayingList (state) {
      state.isShowPlayingList = false;
    },
    togglePlayingList (state) {
      state.isShowPlayingList = !state.isShowPlayingList;
    },
    showPlayingList (state) {
      state.isShowPlayingList = true;
    },
    updateCurrentTime (state, time) {
      state.currentTime = time
    },
    updateDuration (state, time) {
      state.duration = time
    },
    play (state) {
      state.playing = true
    },
    pause (state) {
      state.playing = false
    },
    playLast (state) {
      state.index = (state.index - 1 + state.playList.length) % state.playList.length
      state.song = state.playList[state.index]
    },
    playNext (state) {
      state.index = (state.index + 1) % state.playList.length
      state.song = state.playList[state.index]
    },
    playContinue (state) {
      switch (state.playMode) {
        case vars.SINGLE:
          break
        case vars.SEQUENTIAL:
          state.index = (state.index + 1) % state.playList.length
          state.song = state.playList[state.index]
          break
        case vars.RANDOM:
          state.index = Math.floor(Math.random() * state.playList.length)
          state.song = state.playList[state.index]
          break
      }
    },
  },
  getters: {
    currentTime: state => parseInt(state.currentTime / 60) + ':' + (Array(2).join(0) + (state.currentTime % 60)).slice(-2),
    duration: state => parseInt(state.duration / 60) + ':' + (Array(2).join(0) + (state.duration % 60)).slice(-2),
    albumname: state => state.playList[state.index].albumname,
    singernames: state => state.playList[state.index].singer.map((singer) => {return singer.name}).join("/"),
    songname: state => state.song.name,
    coverImgUrl:state => {
      if(typeof state.song.albummid === 'undefined')
        return vars.DEFAULT_IMG
      else
        return "https://y.gtimg.cn/music/photo_new/T002R500x500M000"+state.song.albummid+".jpg"
    }
  }
}
