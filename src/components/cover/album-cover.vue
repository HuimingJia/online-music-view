<template lang="html">
  <div class="album-cover">
    <div class="album-cover-above">
      <img class="album-cover-img" width="100%" v-lazy="img" :alt="alt">
      <div class="album-cover-mask">{{des}}</div>
    </div>

    <div class="album-cover-down text-center">
      <h2 class="my-auto">{{title}}</h2>
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
    des: {
      type: String,
      default: null,
    }
  }
}
</script>

<style lang="css" scoped>
.album-cover {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: rgb(255, 255, 255, 0.5);
}

.album-cover-above {
  width: 100%;
  overflow: hidden;
}

.album-cover-mask {
  background-color: rgb(0, 0, 0, 1);
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 10;
}

.album-cover-down {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  font-size: 18px;
  height: 50px;
}
</style>
