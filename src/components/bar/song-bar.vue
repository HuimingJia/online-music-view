<template lang="html">
  <div class="song-bar" @click="play()">
    <div class="song-bar-name my-auto">
      {{index + 1}}. {{songname}} - {{singernames}} - {{albumname}}
    </div>
    <div class="song-bar-btn-group my-auto">
      <v-icon name="play"></v-icon>
      <v-icon name="heart"></v-icon>
      <v-icon name="paperclip"></v-icon>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
  props: {
    index: {
      type: Number,
      default: null,
    },
    songname: {
      type: String,
      default: 'M-Music',
    },
    albumname: {
      type: String,
      default: 'M-Album',
    },
    id: {
      type: Number,
      default: null,
    },
    mid: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: 'M-Orig',
    },
    singer: {
      type: Array,
      default: [],
    },
    albummid: {
      type: String,
      default: null,
    }
  },
  computed: {
    singernames: function(){
      if (this.singer instanceof Array) {
        return this.singer.map((singer) => {return singer.name}).join("/")
      } else {
        return String(this.singer)
      }

    }
  },
  methods: {
    goTo: function(id) {
      this.$router.push({name: 'song-list', params: {id: id}})
    },
    play: function() {
      var song = {
        id: this.id,
        mid: this.mid,
        name: this.name,
        singer: this.singer,
        albummid: this.albummid,
        albumname: this.albumname,
      }
      this.insertToPlayList(song)
      this.playSong()
      this.playSong()
    },
    ...mapMutations([
      'insertToPlayList', 'playSong'
    ])
  }
}
</script>

<style lang="css" scoped>
.song-bar {
  width: 100%;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.5s;
  margin-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 5px;
}

.icon {
  height: 20px;
  margin-left: 5px;
  margin-right: 5px;
  transition: all 0.5s;
}

.song-bar:hover {
  background: rgba(0, 0, 0, 0.8);
}

.icon:hover{
  animation: blinker 1s linear infinite;
}

.song-bar {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
}

.song-bar-name {
  font-size: 14px;
  color: white;
  flex: 1;
  transition: all 1s;
 }

 .song-bar-name:hover {
   animation: blinker 1s linear infinite;
 }

.song-bar-btn-group{
  display: flex;
  flex-direction: row;
  color: white;
}

@keyframes blinker {
  50% {
    opacity: 0.5;
  }
}
</style>
