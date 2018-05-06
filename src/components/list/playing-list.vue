<template lang="html">
<div class="playing-list">
  <div class="tittle border-1px border-1px-after ">
    <div class="playing-list-control-btn" >
      <div @click="changePlayMode()" class="playing-list-mode-btn my-auto"><v-icon :name="playModeIcon"></v-icon>{{playModeName}}</div>
      <div @click="clear()" class="playing-list-clear-btn my-auto"><v-icon name="trash-2"></v-icon></div>
      <div @click="hide()" class="playing-list-close-btn my-auto"><v-icon name="minimize-2"></v-icon></div>
    </div>
  </div>

  <transition-group name="list" tag="div" class="playing-list-song-list">
    <div class="playing-list-song" v-for="(song, index) in playList" v-bind:key="song">
      <div class="playing-list-song-info"  @click="play(index)">{{index + 1}}. {{song.name}} - {{song.singer | singer}}</div>
      <playing-icon v-if="index == curIndex"></playing-icon>
    </div>
  </transition-group>
</div>
</template>

<script>
import {mapState, mapMutations, mapGetters} from 'vuex'
import * as vars from '@/global/vars'
import PlayingIcon from '@/components/utils/playing-icon'
export default {
  data () {
    return {
      menuedIndex: 0,
    }
  },
  components: {
    PlayingIcon
  },
  methods: {
    clear() {
      document.getElementById('audio').pause()
      this.pause()
      this.$store.commit('clearPlayingList')
    },
    hide() {
      this.$store.commit('hidePlayingList')
    },
    getSingerStr(val) {
      if (typeof val === 'string') {
        return val
      } else if (val instanceof Array) {
        let singer = ''
        val.forEach(item => {
          singer = singer + item.name + ' '
        })
        return singer
      }
    },
    play: function(index) {
       this.$store.commit('play', index)
    },
    ...mapMutations(['changePlayMode', 'pause'])
  },
  computed: {
    playModeIcon: function () {
      return vars.PLAY_MODE_ICON[this.playMode]
    },
    playModeName:function(){
      return vars.PLAY_MODE_NAME[this.playMode]
    },
    ...mapState({
      playList: state => state.PlayStore.playList,
      playMode: state => state.PlayStore.playMode,
      curIndex: state => state.PlayStore.index
    }),
    ...mapGetters([
      'progress', 'duration','curcAlbumImg'
    ]),
  },
  filters: {
    singer: val => {
      if (typeof val === 'string') {
        return val
      } else if (val instanceof Array) {
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
.playing-list {
  border-radius: 15px;
  padding: 20px;
  float: right;
  position: absolute;
  background: rgb(35,37,38,0.9);  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, rgb(65,67,69,0.9), rgb(35,37,38,0.9));  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, rgb(65,67,69,0.9), rgb(35,37,38,0.9)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 450px;
  width: 250px;
  bottom: 115px;
  right: 15px;
  z-index: 3;
  overflow: scroll;
  color: white;
}

.playing-list::-webkit-scrollbar {
  display: none;
}

.playing-list-control-btn {
  display: flex;
  flex-direction: row;
}

.playing-list-mode-btn {
  flex: 1;
}

.playing-list-clear-btn {
  margin-left: 15px;
}

.playing-list-close-btn {
  margin-left: 15px;
}

.icon {
  height: 24px;
}

.playing-list-song {
  display: flex;
  flex-direction: row;
  color: black;
  transition: all 0.25s;
  color: white;
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid white;

}

.playing-list-song:hover {
  transform: translateX(10px);
}
.playing-list-song-info{
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-right: 15px;
}

.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}

.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(10px);
}
</style>
