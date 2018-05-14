<template lang="html">
  <div class="play-card-lg" @keyup.space="hidePlayCardLg()">
    <div class="play-card-lg-board">
      <music-animation></music-animation>
      <div class="play-card-lg-content">
        <!-- <img class="play-card-img-sm" height="75px" width="75px" v-lazy="curcAlbumImg" :alt="curSongname"> -->
        <div class="play-card-lg-info">

          <img class="play-card-lg-img" height="250px" width="250px" :src="curcAlbumImg">
          <transition name="slide">
            <div v-if="isPlaying" class="record-img">
              <img   class="record-spin" height="250px" width="250px" :src="require('@/assets/imgs/vinly-record-img.png')"/>
            </div>
          </transition>
        </div>
        <div class="lyric-board text-center">
          <p v-for="sentence in lyric">{{sentence}}</p>
        </div>
      </div>
    </div>
    <div class="play-card-lg-close-btn text-right" @click="hidePlayCardLg()"><v-icon name="minimize-2"></v-icon></div>
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
    ...mapMutations([
      'hidePlayCardLg'
    ])
  },
  activated: function() {
    this.$store.dispatch('getLyric', this.mid).then((response) => {
      console.log(response)
      if (response.data.lyric == null) {
        this.lyric = ["can not get lyric"]
      } else {

        this.lyric = Decoder.decode(response.data.lyric)
        .split('[')
        .slice(5)
        .map(str => {
          let t = str.split(']')
          return {[t[0]]: t[1]}
        })
        .reduce((a, b) => {
          return {...a, ...b}
        })
        console.log(this.lyric)
      }
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
      isPlaying: state => state.PlayStore.playing
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
  left: 250px;
  right: 0px;
  float: right;
  /* background-color: rgb(255, 255, 255, 1); */
  overflow-y: scroll;
  overflow-x: hidden;
  margin-bottom: 15px;
}

.play-card-lg::-webkit-scrollbar {
  display: none;
}

.play-card-lg-close-btn {
  /* padding: 15px; */
  margin: 15px;
  width: 40px;
}

.play-card-lg-board {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-left: 15px;
  width: 100%;
  /* background: rgb(0, 0, 0, 0.5); */
}

.play-card-lg-content {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
}

.play-card-lg-info {
  display: flex;
  flex-direction: row;
  flex: 1;
  min-width: 350px;
}

.play-card-lg-img {
  z-index: 6;
  border-radius: 10px;
  box-shadow:
  0 15px 30px 0 rgba(0,0,0,0.44),
  0 5px 15px 0 rgba(0,0,0,0.32);
}

.icon {
  border-radius: 5px;
  color: white;
  background-color: rgb(0, 0, 0, 0.75);
  height: 40px;
  box-shadow:
  0 15px 30px 0 rgba(0,0,0,0.11),
  0 5px 15px 0 rgba(0,0,0,0.08);
}

.lyric-board{
  flex: 1;
  background-color: rgb(0, 0, 0, 0.85);
  height: 250px;
  overflow: hidden;
  transition: all 0.5s;
  margin-left: 15px;
  border-radius: 25px;
  padding: 15px;
  font-size: 18px;
  color: white;
  box-shadow:
  0 15px 30px 0 rgba(0,0,0,0.44),
  0 5px 15px 0 rgba(0,0,0,0.32);
}

.record-img {
  z-index: 5;
  margin-top: 0px;
  margin-left: -125px;
  display: block;
}

.record-spin {
  -webkit-animation: spin 2s infinite linear;
  -moz-animation: spin 2s infinite linear;
  -o-animation: spin 2s infinite linear;
  -ms-animation: spin 2s infinite linear;
  animation: spin 2s infinite linear;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg);}
  100% { -webkit-transform: rotate(360deg);}
}

@-moz-keyframes spin {
  0% { -moz-transform: rotate(0deg);}
  100% { -moz-transform: rotate(360deg);}
}

@-o-keyframes spin {
  0% { -o-transform: rotate(0deg);}
  100% { -o-transform: rotate(360deg);}
}

@-ms-keyframes spin {
  0% { -ms-transform: rotate(0deg);}
  100% { -ms-transform: rotate(360deg);}
}

@-keyframes spin {
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
}

.slide-enter-active {
  transition: all 0.5s;
}
.slide-leave-active {
  transition: all 0.5s;
}
.slide-enter-to, .slide-leave {
  transform: translateX(0);
}

.slide-enter, .slide-leave-to {
  transform: translateX(-125px);
}
</style>
