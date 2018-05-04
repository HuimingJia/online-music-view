<template lang="html">
  <div id="play-bar">
    <div id="volume-bar">
      volume-bar
    </div>

    <div id="play-progress-bar">
        <div class="progress" :style="{width: progress+'%'}"></div>
        <v-icon name="disc" :style="{left: progress+'%'}"></v-icon>
    </div>

    <div class="time-indicater">
      <span>{{currentTime}}</span>
      <span>{{duration}}</span>
    </div>

    <div id="play-control-button-group">
      <audio id="music"
       :src="dataUrl"
       @timeupdate="updateTime"
       @ended="playContinue"
       autoplay></audio>

      <div class="music-info">
        <p class="music-name">{{song.name}}</p>
        <p class="music-author">{{song.singer | singernames}}</p>
      </div>
      <div class="music-ctrl">
        <ul>
          <li><img :src="playing?$parent.iconPause:$parent.iconPlay"
            @click="$parent.tapButton"
            @touchend="$parent.tapButton"></li>
        </ul>
      </div>
    </div>
  <div id="play-list-btn">btn</div>
</div>
</template>

<script>
import {mapMutations, mapState, mapGetters} from 'vuex'
export default {
  data () {
    return {
      clientY: 0,
    }
  },
  methods: {
    updateTime() {
      this.$store.commit('updateCurrentTime', parseInt(document.getElementById('music').currentTime))
      this.$store.commit('updateDuration', parseInt(document.getElementById('music').duration))
    },
    movestart: function (event) {
      console.log('start' + event.touches[0].clientY)
    },
    moveend: function (event) {
      if (event.changedTouches[0].clientY - this.clientY > 0) {
        this.hidePlayPage()
      }
    },
    showPlayList: function () {
      this.$store.commit('showPlayingList')
    },
    ...mapMutations([
      'play', 'pause', 'playFront', 'playNext', 'playContinue'
    ])
  },
  computed: {
    ...mapGetters([
      'currentTime', 'duration','coverImgUrl'
    ]),
    ...mapState({
      dataUrl: state => 'https://dl.stream.qqmusic.qq.com/C100' + state.Play.song.mid + '.m4a?fromtag=46',
      progress: state => state.Play.currentTime / state.Play.duration * 100,
      isPlaying: state => state.Play.playing,
      song: state => state.Play.song
    })
  },
  filters: {
    singernames: val => {
      if (typeof val === 'string') {
        return val
      }
      else if (val instanceof Array) {
        let singer = ''
        val.forEach(item => {
          singer = singer + item.name + ' '
        })
        return singer
      }
    }
  }
}
</script>

<style lang="css" scoped>
#play-bar {
  height: 75px;
  width: 100%;
  display: flex;
  background-color: rgb(255, 255, 255, 1);
  flex-direction: row;
}

#volume-bar {
  width: 200px;
  background-color: rgb(255, 255, 255, 1);
}

#play-progress-bar {
  display: flex;
  flex-direction: row;
  flex: 1;
}

.progress {
  background-color: rgb(0, 0, 0, 1);
}
.icon {
  height: 20px;
}

#play-control-button-group{
  width: 200px;
  background-color: rgb(255, 255, 255, 1);
}

#play-list-btn {
  width: 24px;
  background-color: red;
}
</style>
