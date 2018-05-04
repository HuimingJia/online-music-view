<template lang="html">
  <div class="song-bar" @click="goTo(id)">
    <div class="song-bar-name my-auto">
      {{name}} - {{singernames}} - {{album}}
    </div>
    <div class="song-bar-btn-group my-auto">
      <v-icon name="play" @click="play(id)"></v-icon>
      <v-icon name="heart"></v-icon>
      <v-icon name="paperclip"></v-icon>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    alt: {
      type: String,
      default: 'not defined',
    },
    name: {
      type: String,
      default: null,
    },
    singers: {
      type: Array,
      default: null,
    },
    album: {
      type: String,
      default: null,
    },
    index: {
      type: Number,
      default: null,
    }
  },
  computed: {
    singernames: function(){
      return this.singers.map((singer) => {return singer.name}).join("/")
    }
  },
  methods: {
    goTo: function(id) {
      this.$router.push({name: 'song-list', params: {id: id}})
    },
    play: function(id) {
      let list = []
      this.topListData.songlist.forEach(item => {
        list.push({
          id: item.data.songid,
          mid: item.data.songmid,
          name: item.data.songorig,
          singer: item.data.singer,
          albummid: item.data.albummid
        })
      })
      this.$store.commit('setPlayList', {
        index: index,
        list: list
      })
      this.$store.commit('play')
    }
  }
}
</script>

<style lang="css" scoped>
.song-bar {
  width: 100%;
  height: 50px;
  background-color: rgb(0, 0, 0, 0.5);
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
  background-color: rgb(0, 0, 0, 0.8);
}

.icon:hover{
  animation: blinker 1s linear infinite;
}

.song-bar {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  background-color: rgb(0, 0, 0, 0.5);
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
