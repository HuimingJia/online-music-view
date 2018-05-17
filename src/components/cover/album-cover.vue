<template lang="html">
  <div class="album-cover" @click="goTo(mid)">
    <div class="album-cover-above">
      <img class="album-cover-img" width="100%" height="100%" v-lazy="img" :alt="alt">
      <div class="album-cover-mask text-center"><v-icon name="disc"></v-icon></div>
    </div>

    <div class="album-cover-down text-center">
      <div class="album-cover-title my-auto">{{title}}</div>
      <div class="album-cover-date my-auto">{{date}}</div>
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
    id: {
      type: Number,
      default: null,
    },
    mid: {
      type: String,
      default: null,
    },
    date: {
      type: String,
      default: null,
    }
  },
  methods: {
    goTo: function(id) {
      this.$router.push({name: 'album', params: {id: id}})
    }
  }
}
</script>

<style lang="css" scoped>
.album-cover {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.8);
  box-shadow:
  0 15px 30px 0 rgba(0,0,0,0.11),
  0 5px 15px 0 rgba(0,0,0,0.08);
  transition: all 1s;
  margin-bottom: 15px;
}

.album-cover:hover {
  background: rgba(0, 0, 0, 0.5);
  color: white;
}

.album-cover-above {
  width: 100%;
  overflow: hidden;
  margin-bottom: 15px;
}

.album-cover-mask {
  position: relative;
  margin-top: -100%;
  top: 0px;
  z-index: 3;
  background: rgba(0, 0, 0, 0.8);
  transition: all 0.5s;
  opacity: 0;
  display: flex;
  flex-direction: column;
}

.album-cover:hover .album-cover-mask{
  opacity: 1;
}

.album-cover-mask .icon {
  color: white;
  flex: 1;
  margin: 25%;
}

.album-cover-down {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  font-size: 18px;
  height: 50px;
}

.album-cover-title {
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 600;
}

.album-cover-date {
  font-size: 14px;
  color: grey;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  transition: all 1s;
}

.album-cover:hover .album-cover-date {
  color: white;
}
</style>
