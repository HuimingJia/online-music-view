<template lang="html">
  <div id="play-bar">
    <div id="volume-bar">
        <input class="my-auto"v-model="volume">
    </div>

    <div id="play-progress-bar">
      <div class="progress my-auto" :style="{width: progress +'%'}">
        <v-icon name="disc"></v-icon>
      </div>
    </div>

    <div class="play-progress-clock my-auto">
        <span>{{progress}} /</span>
        <span>{{duration}}</span>
    </div>
    <audio id="audio"
    :src="musicSrc"
    @timeupdate="updateTime()"
    @ended="playContinue"
    autoplay></audio>
    <div class="play-control-button-group">
      <div class="play-list-btn play-last my-auto" @click="playLastSong()"><v-icon name="arrow-left"></v-icon></div>
      <div v-if="isPlaying" class="play-list-btn play-status play-status-play my-auto" @click="pauseMusic()">
          <v-icon name="play-circle"></v-icon>
      </div>
      <div v-else class="play-list-btn play-status play-status-pause my-auto" @click="playMusic()">
          <v-icon name="pause-circle"></v-icon>
      </div>
      <div class="play-list-btn play-next my-auto" @click="playNextSong()"><v-icon name="arrow-right"></v-icon></div>
    </div>
    <div class="toggle-playing-list" @click="togglePlayingList()"><v-icon name="menu" class="my-auto"></v-icon></div>
  </div>
</template>

<script>
import {mapMutations, mapState, mapGetters} from 'vuex'
export default {
  data() {
    return {
      volume: 0.5
    }
  },
  computed: {
    ...mapGetters([
      'progress', 'duration','curcAlbumImg'
    ]),
    ...mapState({
      musicSrc: state => 'https://dl.stream.qqmusic.qq.com/C100' + state.PlayStore.curSong.mid + '.m4a?fromtag=46',
      progress: state => state.PlayStore.progress / state.PlayStore.duration * 100,
      isPlaying: state => state.PlayStore.playing,
      song: state => state.PlayStore.curSong
    })
  },
  methods: {
    playMusic() {
      document.getElementById('audio').play()
      this.play()
    },
    pauseMusic() {
      document.getElementById('audio').pause()
      this.pause()
    },
    updateTime() {
      console.log("update")
      this.$store.commit('updateTime', parseInt(document.getElementById('audio').progress), parseInt(document.getElementById('audio').duration))
    },
    togglePlayingList() {
      this.$store.commit('togglePlayingList')
    },
    showPlayList: function () {
      this.$store.commit('showPlayingList')
    },
    ...mapMutations([
      'play', 'pause', 'playLast', 'playNext', 'playContinue'
    ]),
    setVolume: function(volume) {
      alert(volume)
      document.getElementById('audio').volume = volume
    }
  },
  watch: {
      volume: function(val){
        document.getElementById('audio').volume = val
      }
  }
}
</script>

<style lang="css" scoped>
#play-bar {
  height: 75px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: rgb(219,219,219);
  border-color: grey;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-style: solid;
  padding-right: 15px;
  padding-left: 15px;
}

#volume-bar {
  width: 200px;
  /* background-color: rgb(255, 255, 255, 0.5); */
}

#play-progress-bar {
  display: flex;
  flex-direction: row;
  flex: 1;

}

.play-progress-clock {
  margin-left: 15px;
  margin-right: 15px;
}

.progress {
  background-color: rgb(0, 0, 0, 0.5);
  border-radius: 5px;
  height: 10px;
  color: black;
}

.play-control-button-group{
  display: flex;
  flex-direction: row;
  height: 70px;
}

.play-list-btn {
  margin-left: 5px;
  margin-right: 5px;
}

.icon {
  height: 100%;
  font-size: 24px;
}

.play-last {
  height: 60%;
  background-color: rgb(0, 0, 0, 1);
  padding: 5px;
  color: white;
  border-radius: 50%;
}

.play-status {
  height: 80%;
  background-color: rgb(0, 0, 0, 1);
  color: white;
  padding: 5px;
  border-radius: 50%;
}

.play-status-play {
 /* animation: blinker 2s linear infinite; */
}

.play-status-pause {

}
/*
@keyframes blinker {
  50% {
    background-color: rgb(0, 0, 0, 0.5);
    color: grey;
  }
} */

.play-next {
  height: 60%;
  background-color: rgb(0, 0, 0, 1);
  color: white;
  padding: 5px;
  border-radius: 50%;
}

.toggle-playing-list {
  margin-left: 15px;
  width: 30px;
  color: black;
  height: 100%;
}

.toggle-playing-list .icon{
  width: 30px;
}
</style>
