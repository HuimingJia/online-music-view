<template lang="html">
  <div class="billboard-cover" @click="goTo(id)">
    <div class="billboard-cover-left">
      <img class="billboard-cover-img" height="100%" v-lazy="img" :alt="alt">
      <div class="billboard-cover-btn"></div>
    </div>
    <div class="billboard-cover-right my-auto">
      <h5 class="billboard-cover-title">{{title}}</h5>
      <div class="billboard-cover-song-list">
        <div class="billboard-cover-song-info" v-for="song in song_list">
          {{song.songname}} - {{song.singername}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: require("@/assets/imgs/billboard-cover.jpg"),
    },
    song_list: {
      type: Array,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    alt: {
      type: String,
      default: 'not defined'
    },
    id: {
      type: Number,
      default: null,
    }
  },
  methods: {
    goTo: function(id) {
      this.$router.push({name: 'song-list', params: {id: id}})
    }
  }
}
</script>

<style lang="css" scoped>
.billboard-cover {
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  background-color: rgb(255, 255, 255, 0.5);
  margin-bottom: 15px;
  transition: all 1s;
}

.billboard-cover:hover {
  background-color: rgb(0, 0, 0, 0.5);
  color: white;
}

.billboard-cover-left {
  width: 150px;
  height: 100%;
  overflow: hidden;
}

.billboard-cover-btn {
  float: right;
}

.billboard-cover-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-right: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  overflow: hidden;
}

.billboard-cover-song-list {
  margin-left: 5px;
}

.billboard-cover-song-info {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.billboard-cover-title {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
