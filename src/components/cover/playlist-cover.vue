<template lang="html">
  <div class="playlist-cover" @click="goTo(id)">
    <div class="playlist-cover-above">
      <img class="playlist-cover-img" width="100%" v-lazy="img" :alt="alt">
    </div>

    <div class="playlist-cover-down text-center">
      <div class="playlist-cover-desc my-auto">{{desc}}</div>
      <div class="playlist-cover-auth my-auto">{{auth}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: require("@/assets/imgs/album-cover.jpg"),
    },
    title: {
      type: String,
      default: null,
    },
    alt: {
      type: String,
      default: 'not defined',
    },
    desc: {
      type: String,
      default: null,
    },
    auth: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null,
    }
  },
  methods: {
    goTo: function(id) {
      this.$router.push({name: 'playlist', params: {id: id}})
    },
  }
}
</script>

<style lang="css" scoped>
.playlist-cover {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.8);
  margin-bottom: 15px;
  transition: all 1s;
  box-shadow:
  0 15px 30px 0 rgba(0,0,0,0.11),
  0 5px 15px 0 rgba(0,0,0,0.08);
}

.playlist-cover-auth {
  font-size: 15px;
  height: 20px;
  overflow: hidden;
  color: grey;
  transition: all 1s;
}

.playlist-cover:hover {
  background: rgba(0, 0, 0, 0.5);
  color: white;
}

.playlist-cover:hover .playlist-cover-auth{
  color: white;
}

.playlist-cover-above {
  width: 100%;
  overflow: hidden;
}

.playlist-cover-mask {
  background: rgba(0, 0, 0, 1);
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 10;
}

.playlist-cover-down {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  font-size: 18px;
  height: 50px;
}

.playlist-cover-desc {
  font-size: 14px;
  height: 20px;
  overflow: hidden;
}
</style>
