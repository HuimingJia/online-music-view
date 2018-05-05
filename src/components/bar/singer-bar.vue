<template lang="html">
  <div class="singer-bar">
    <img class="singer-bar-img my-auto" height="35px" v-lazy="img" :alt="alt">
    <div class="singer-bar-name my-auto">
      {{name}}
    </div>
    <div class="singer-bar-btn-group my-auto">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: require('@/assets/imgs/singer-cover.png')
    },
    alt: {
      type: String,
      default: 'not defined',
    },
    name: {
      type: String,
      default: null,
    }
  }

}
</script>

<style lang="css" scoped>
.singer-bar {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  background-color: rgb(0, 0, 0, 0.5);
  transition: all 0.5s;
}

.singer-bar:hover {
  background-color: rgb(0, 0, 0, 0.8);
}

.singer-bar-img {
  border-radius: 25px;
  margin-left: 15px;
  margin-right: 15px;
}

.singer-bar-name {
  font-size: 14px;
  color: white;
  flex: 1;
 }

.singer-bar-btn-group{
  min-width: 100px;
  display: flex;
  flex-direction: column;
  background-color: red;
}
</style>
