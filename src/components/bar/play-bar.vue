<template lang="html">
  <div id="play-bar">
    <!-- <div class="jp-volume-controls flex-item">
      <button class="jp-mute" role="button" tabindex="0"><v-icon class="mic-off"></v-icon></button>
    </div> -->

    <div id="volume-bar">
      <input class="volume-bar-range" type="range" @change="setVolume(value)"></input>
      <div v-if="isMute" class="my-auto mx-2" @click="unmute()">
        <v-icon  name="mic-off" ></v-icon>
      </div>
      <div v-else class="my-auto mx-2" @click="mute()">
        <v-icon  name="mic" ></v-icon>
      </div>
    </div>

    <div id="play-progress-bar">
      <div class="duration  my-auto">
        <div class="progress" :style="{width: progress +'%'}"></div>
        <div class="bullet"></div>
      </div>
    </div>

    <div class="play-progress-clock my-auto">
      <span>{{curTime}} /</span>
      <span>{{duration}}</span>
    </div>
    <audio id="audio"
    :src="musicSrc"
    @timeupdate="update()"
    @ended="playContinue"
    autoplay></audio>
    <div class="play-control-button-group">
      <div class="play-list-btn play-last my-auto" @click="playLastSong()"><v-icon name="arrow-left"></v-icon></div>
      <div v-if="isPlaying" class="play-list-btn play-status play-status-play my-auto" @click="pauseMusic()">
        <v-icon name="pause-circle"></v-icon>
      </div>
      <div v-else class="play-list-btn play-status play-status-pause my-auto" @click="playMusic()">
        <v-icon name="play-circle"></v-icon>
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
      volume: 0.5,
      isMute: false,
      // musicSrc: require('@/assets/audio/brave-heart.mp3')
    }
  },
  computed: {
    ...mapGetters([
      'curTime', 'duration','curcAlbumImg'
    ]),
    ...mapState({
      musicSrc: state => 'https://dl.stream.qqmusic.qq.com/C100' + state.PlayStore.curSong.mid + '.m4a?fromtag=46',
      progress: state => state.PlayStore.currentTime / state.PlayStore.duration * 100,
      isPlaying: state => state.PlayStore.playing,
      song: state => state.PlayStore.curSong
    })
  },
  methods: {
    playMusic() {
      this.play()
      document.getElementById('audio').play()
    },
    pauseMusic() {
      this.pause()
      document.getElementById('audio').pause()
    },
    update() {
      var updateInfo = {
        currentTime: parseInt(document.getElementById('audio').currentTime),
        duration: parseInt(document.getElementById('audio').duration),
      }
      this.updateTime(updateInfo)
    },
    setVolume: function() {
      document.getElementById('audio').volume = volume
    },
    mute: function() {
      document.getElementById('audio').volume = 0
      this.isMute = true;
    },
    unmute: function() {
      document.getElementById('audio').volume = this.volume
      this.isMute = false;
    },
    ...mapMutations([
      'play', 'pause', 'playLast', 'playNext', 'playContinue', 'updateTime', 'togglePlayingList', 'showPlayingList'
    ]),
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
  /* background-color: rgb(219,219,219, 0); */
  background-color: rgb(255,255,255, 0.8);
  padding-right: 15px;
  padding-left: 15px;
  z-index: 4;
  box-shadow:
  0 2px 4px 0 rgba(0,0,0,0.10);
}

#volume-bar {
  margin-left: 15px;
  margin-right: 30px;
  width: 180px;
  color: black;
  display: flex;
  flex-direction: row;
  margin-right: 15px;
  /* background-color: rgb(255, 255, 255, 0.5); */
}

#volume-bar .icon{
  height: 20px;
  width: 20px;
  /* background-color: rgb(255, 255, 255, 0.5); */
}

.volume-bar-range {
  flex: 1;
}

#play-progress-bar {
  display: flex;
  flex-direction: row;
  flex: 1;
}

.bullet {
  width: 14px;
  height: 14px;
  margin-left: -10px;
  margin-top: -2px;
  background-color: white;
  border: 2px solid;
  border-radius: 7px;
}

.play-progress-clock {
  margin-left: 15px;
  margin-right: 15px;
}

.progress {
  background-color: rgb(0, 0, 0, 0.5);
  border-radius: 5px;
  height: 100%;
  color: black;
}

.duration {
  background-color: rgb(255, 255, 255, 0.5);
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  /* border: 1px solid; */
  height: 10px;
  width: 100%;
  color: black;
  box-shadow:
  0 4px 8px 0 rgba(0,0,0,0.12),
  0 2px 4px 0 rgba(0,0,0,0.08);
}

.play-control-button-group{
  display: flex;
  flex-direction: row;
  height: 70px;
}

.play-list-btn {
  margin-left: 5px;
  margin-right: 5px;
  box-shadow:
  0 4px 8px 0 rgba(0,0,0,0.12),
  0 2px 4px 0 rgba(0,0,0,0.08);
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
  transition: all 0.5s;
}

.toggle-playing-list .icon:hover {
  color: rgb(0,0,0,0.2)
}

.volume-bar-mute .icon{
  height: 24px;
  color: black;
}
</style>
