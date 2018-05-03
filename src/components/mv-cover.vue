<template lang="html">
  <div class="mv-cover">
    <div class="mv-cover-left">
      <img class="mv-cover-img" height="100%" v-lazy="img">
      <div class="mv-cover-btn"></div>
    </div>
    <div class="mv-cover-right my-auto">
      <div class="mv-cover-title">{{title}}</div>
      <div class="mv-cover-singer">singer - {{singer}}</div>
      <div class="mv-cover-desc">about - {{desc}}</div>
      <div class="mv-cover-date">release date - {{date}}</div>
      <div class="mv-cover-views">views - {{views}}</div>
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
    desc: {
      type: String,
      default: null,
    },
    singer: {
      type: String,
      default: null,
    },
    date: {
      type: String,
      default: null,
    },
    views: {
      type: Number,
      default: null,
    },
    singer_id: {
      type: Number,
      default: null,
    },
    singer_mid: {
      type: String,
      default: null,
    },
    mv_id: {
      type: Number,
      default: null,
    }
  }
}
</script>

<style lang="css" scoped>
.mv-cover {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  background-color: rgb(255, 255, 255, 0.5);
  margin-bottom: 15px;
}

.mv-cover-left {
  width: 200px;
  height: 100%;
  overflow: hidden;
}

.mv-cover-btn {
  float: right;
}

.mv-cover-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
}

.mv-cover-title{
  font-size: 18px;
  font-weight: bold;
}

.mv-cover-singer {
  font-size: 14px;
}

.mv-cover-desc {
  font-size: 14px;
}

.mv-cover-date {
  font-size: 14px;
}

.mv-cover-views {
  font-size: 14px;
}
</style>
