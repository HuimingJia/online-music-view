import * as vars from '@/global/vars'

export default {
  state: {
    index: 0,
    playing: false,
    progress: 0,
    duration: 0,
    playMode: vars.SEQUENTIAL,
    curSong: {
      id: null,
      mid: null,
      albummid: null,
      name: vars.DEFAULT_SONG_NAME,
      singer: vars.DEFAULT_SINGER_NAME,
      albumname: vars.DEFAULT_ALBUM_NAME,
    },
    playList: [],
  },
  getters: {
    progress: state => parseInt(state.progress / 60) + ':' + (Array(2).join(0) + (state.progress % 60)).slice(-2),
    duration: state => parseInt(state.duration / 60) + ':' + (Array(2).join(0) + (state.duration % 60)).slice(-2),

    curSongname: state => state.curSong.name,
    curSingernames: state => state.curSong.singer.map((singer) => {return singer.name}).join("/"),
    curAlbumname: state => state.curSong.albumname,
    curcAlbumImg: state => state.curSong.mid == null? vars.DEFAULT_ALBUM_IMG: "https://y.gtimg.cn/music/photo_new/T002R500x500M000"+state.curSong.albummid+".jpg",

  },
  mutations: {
    play (state) {
      state.playing = true
    },
    pause (state) {
      state.playing = false
    },
    playLast (state) {
      state.index = (state.index - 1 + state.playList.length) % state.playList.length
      state.curSong = state.playList[state.index]
    },
    playNext (state) {
      state.index = (state.index + 1) % state.playList.length
      state.curSong = state.playList[state.index]
    },
    playSong (state) {
      state.playing = true
      state.index = 0
      state.curSong = state.playList[state.index]
    },
    clearPlayingList (state) {
      state.playList = [];
    },
    updateTime (state, progress, duration) {
      state.progress = progress
      state.duration = duration
    },
    changePlayMode (state) {
      state.playMode = (state.playMode + 1) % 3
    },
    playIndex (state, index) {
      state.index = index
      state.curSong = state.playList[index]
    },
    insertToPlayList(state, song) {
      for (var key in state.playList) {
        if (state.playList[key].mid == song.mid) {
          state.playList.splice(key, 1)
        }
      }
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
          state.curSong = {
            name: vars.DEFAULT_SONG_NAME,
            singer: ''
          }
          state.curcAlbumImg = vars.DEFAULT_ALBUM_IMG
        } else {
          state.curSong = state.playList[state.index + 1]
        }
      } else if (index < state.index) {
        state.index--
      }
      state.playList.splice(index, 1)
    },
    playContinue (state) {
      switch (state.playMode) {
        case vars.SINGLE:
          break
        case vars.SEQUENTIAL:
          state.index = (state.index + 1) % state.playList.length
          state.curSong = state.playList[state.index]
          break
        case vars.RANDOM:
          state.index = Math.floor(Math.random() * state.playList.length)
          state.curSong = state.playList[state.index]
          break
      }
    },
  }
}
