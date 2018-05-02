<template lang="html">
  <div class="song-bar">
    <img class="song-bar-img my-auto" height="35px" :src="img" :alt="alt">
    <div class="song-bar-name my-auto">
      {{name}} - {{singer}}
    </div>
    <div class="song-bar-btn-group my-auto">
      <v-icon name="play"></v-icon>
      <v-icon name="heart"></v-icon>
      <v-icon name="paperclip"></v-icon>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: require('@/assets/imgs/album-cover.jpg')
    },
    alt: {
      type: String,
      default: 'not defined',
    },
    name: {
      type: String,
      default: null,
    },
    singer: {
      type: String,
      default: null,
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

.song-bar-img {
  border-radius: 25px;
  margin-left: 15px;
  margin-right: 15px;
  transition: all 1s;
}

.song-bar-img:hover {
  animation: blinker 1s linear infinite;
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
