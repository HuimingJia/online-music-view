<template lang="html">
  <div class="toplist-cover" @click="goTo(id)">
    <div class="toplist-cover-left">
      <img class="toplist-cover-img" height="100%" v-lazy="img" :alt="alt">
      <div class="toplist-cover-btn"></div>
    </div>
    <div class="toplist-cover-right my-auto">
      <h5 class="toplist-cover-title">{{title}}</h5>
      <div class="toplist-cover-song-list">
        <div class="toplist-cover-song-info" v-for="song in song_list">
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
      default: require("@/assets/imgs/toplist-cover.jpg"),
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
      this.$router.push({name: 'toplist', params: {id: id}})
    }
  }
}
</script>

<style lang="css" scoped>
.toplist-cover {
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.8);
  margin-bottom: 15px;
  transition: all 1s;
  box-shadow:
  0 15px 30px 0 rgbaa(0,0,0,0.11),
  0 5px 15px 0 rgbaa(0,0,0,0.08);
}

.toplist-cover:hover {
  background: rgba(0, 0, 0, 0.5);
  color: white;
}

.toplist-cover-left {
  width: 150px;
  height: 100%;
  overflow: hidden;
}

.toplist-cover-btn {
  float: right;
}

.toplist-cover-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-right: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  overflow: hidden;
}

.toplist-cover-song-list {
  margin-left: 5px;
}

.toplist-cover-song-info {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.toplist-cover-title {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
