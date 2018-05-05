<template lang="html">
  <div class="mv-cover" @click="goTo(id)">
    <div class="mv-cover-left">
      <img class="mv-cover-img" height="100%" v-lazy="img">
      <div class="mv-cover-btn"></div>
    </div>
    <div class="mv-cover-right my-auto">
      <div class="mv-cover-title">{{title}}</div>
      <div class="mv-cover-right-items my-auto">
        <div class="mv-cover-singer">Singer: {{singer}}</div>
        <div class="mv-cover-desc">About: {{desc}}</div>
        <div class="mv-cover-date">Release: {{date}}</div>
        <div class="mv-cover-views">Views: {{views}}</div>
      </div>
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
  },
  methods: {
    goTo: function(id) {
      alert("Goto Page " + id)
      this.$router.push({name: 'toplist', params: {id: id}})
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
  transition: all 1s;
}

.mv-cover:hover {
  background-color: rgb(0, 0, 0, 0.5);
  color: white;
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
  padding-top: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-right: 15px;
  height: 100%;
}

.mv-cover-right-items {
  display: flex;
  flex-direction: column;
}

.mv-cover-title{
  font-size: 20px;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.mv-cover-singer {
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.mv-cover-desc {
  font-size: 14px;
}

.mv-cover-date {
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.mv-cover-views {
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
