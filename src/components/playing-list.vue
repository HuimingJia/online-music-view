<template lang="html">
<div class="playing-list">
  <div class="tittle border-1px border-1px-after ">
    <div class="playing-list-control-btn" >
      <div @click="changePlayMode()"><v-icon :name="playModeIcon" ></v-icon></div>
      <div @click="clear()"><v-icon name="trash-2"></v-icon></div>
      <div @click="hide()"><v-icon name="trash-2"></v-icon></div>
    </div>
  </div>

  <div class="playing-list-song-list">
    <div class="playing-list-song" v-for="(song, index) in playList">
      {{song.name}} - {{song.singer | singer}}
      <v-icon class="facebook" v-if="index == curIndex"></v-icon>
      <hr></hr>
    </div>
  </div>
</div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import * as vars from '@/global/vars'
export default {
  data () {
    return {
      menuedIndex: 0,
    }
  },
  methods: {
    clear() {
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
    ...mapMutations(['changePlayMode'])
  },
  computed: {
    playModeIcon: function () {
      return vars.PLAY_MODE_ICON[this.playMode]
    },
    playModeName:function(){
      return vars.PLAY_MODE_NAME[this.playMode]
    },
    ...mapState({
      playList: state => state.Play.playList,
      playMode: state => state.Play.playMode,
      curIndex: state => state.Play.index
    })
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
  padding: 15px;
  float: right;
  position: absolute;
  background-color: rgb(255, 255, 255, 1);
  height: 500px;
  width: 250px;
  bottom: 115px;
  right: 15px;
  z-index: 3;
  overflow: scroll;
}

.playing-list::-webkit-scrollbar {
  display: none;
}

.playing-list-control-btn {
  display: flex;
  flex-direction: row;
}

.playing-list-song {
}
.icon {
  height: 20px;
}
</style>
