<template lang="html">
  <div class="play-card-lg" @keyup.space="hide()">
    <div class="play-card-lg-content">
      <music-animation></music-animation>
      <div class="play-card-lg-info">
        <!-- <img class="play-card-img-sm" height="75px" width="75px" v-lazy="curcAlbumImg" :alt="curSongname"> -->
        <img class="play-card-lg-img" height="250px" width="250px" :src="curcAlbumImg">
        <div class="lyric-board">
           <p v-for="sentence in currentLyric">{{sentence}}</p>
        </div>
      </div>
    </div>
    <div class="play-card-lg-close-btn text-right" @click="hide()"><v-icon name="minimize-2"></v-icon></div>
  </div>
</template>

<script>
import MusicAnimation from '@/components/utils/music-animation'
import {mapState, mapMutations, mapGetters} from 'vuex'
import Decoder from '@/utils/base64_decoder'

export default {
  components: {
    MusicAnimation
  },
  methods: {
    hide() {
      this.$store.commit('hidePlayCardLg')
    },
  },
  activated: function() {
    this.$store.dispatch('getLyric', this.mid).then((response) => {
      this.lyric = Decoder.decode(responce.data.lyric).split('[').slice(5).map(str => {
                let t = str.split(']')
                return {[t[0]]: t[1]}).reduce((a, b) => {return {...a, ...b}})


      console.log(response.data)

    }, (response) => {
      console.log(response)
    });
  },
  computed: {
    currentLyric: function () {
      if (this.lyric !== null) {
        let that = this
        let pastLyric = []
        let i = 0
        Object.keys(this.lyric).forEach(function (key) {
          if (key.split(':')
              .reduce((a, b) =>
              parseInt(a) * 60 * 100 + b
                .split('.')
                .reduce((a, b) =>
                parseInt(a) * 100 + parseInt(b))) - 120 <= that.currentTimeStamp) {
            if (that.lyric[key] !== '\n') pastLyric.push(that.lyric[key])
          } else if (i <= 1 && that.lyric[key] !== '\n') {
            pastLyric.push(that.lyric[key])
            i++
          }
        })
        return pastLyric.slice(pastLyric.length - 4, pastLyric.length - 1)
      }
    },
    currentTimeStamp: function () {
      let t = this.currentTime.split(':')
      return (parseInt(t[0]) * 60 + parseInt(t[1])) * 100
    },
    ...mapState({
      mid: state => state.PlayStore.curSong.mid,
    }),
    ...mapGetters([
      'curSongname', 'curAlbumname', 'curSingernames', 'curcAlbumImg'
    ])
  },
  data() {
    return {
      lyric: {
        type: String,
        default: null,
      }
    }
  }
}
</script>

<style lang="css" scoped>
.play-card-lg {
  display: flex;
  flex-direction: row;
  position: absolute;
  z-index: 3;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  float: right;
  background-color: rgb(0, 0, 0, 0.8);
  overflow: hidden;
}

.play-card-lg-close-btn {
  /* padding: 15px; */
  margin: 15px;
  width: 40px;
}

.play-card-lg-content {
  flex: 1;
  margin-top: 15px;
  margin-left: 15px;
  width: 100%;
  /* background: rgb(0, 0, 0, 0.5); */
}

.play-card-lg-info {
  margin-top: 15px;
}

.icon {
  border-radius: 5px;
  color: white;
  background-color: grey;
  height: 40px;
}

.lyric-board{
  flex: 1;
  height: 500px;
  background-color: rgb(255, 255, 255, 0.5);
}
</style>
