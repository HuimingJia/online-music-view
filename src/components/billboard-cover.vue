<template lang="html">
  <div class="billboard-cover">
    <div class="billboard-cover-left">
      <img class="billboard-cover-img" height="100%" :src="img" :alt="alt">
      <div class="billboard-cover-btn"></div>
    </div>
    <div class="billboard-cover-right my-auto">
      <h4>{{title}}</h4>
      <div class="billboard-cover-song-list">
        <p v-for="song in song_list">
          {{song.name}} - {{song.singer}}
        </p>
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
    }
  }
}
</script>

<style lang="css" scoped>
.billboard-cover {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  background-color: rgb(255, 255, 255, 0.5);
}

.billboard-cover-left {
  width: 200px;
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
}

.billboard-cover-song-list {
  margin-left: 5px;
}
</style>
