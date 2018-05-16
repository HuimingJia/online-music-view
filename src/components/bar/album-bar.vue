<template lang="html">
  <div class="album-bar"  @click="goTo(mid)">
    <img class="album-bar-img my-auto" height="35px" v-lazy="img">
    <div class="album-bar-name my-auto">
      {{title}} - {{singer}}
    </div>
    <div class="album-bar-btn-group my-auto">
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
    mid: {
      type: String,
      default: null,
    },
    singer: {
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
.album-bar {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.5s;
  margin-bottom: 2px;
}

.album-bar:hover {
  background: rgba(0, 0, 0, 0.8);
}

.album-bar-img {
  margin-left: 15px;
  margin-right: 15px;
}

.album-bar-name {
  font-size: 14px;
  color: white;
  flex: 1;
 }

.album-bar-btn-group{
  min-width: 100px;
  display: flex;
  flex-direction: column;
  background: red;
}
</style>
