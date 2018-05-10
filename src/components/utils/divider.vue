<template lang="html">
  <div class="divider">
    <h3 class="divider-title">{{title}}</h3>
    <div class="divider-line"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: null,
    }
  }
}
</script>

<style lang="css" scoped>
@font-face {
  font-family: 'Monoton';
  src: url('~@/assets/fonts/Monoton-Regular.ttf') format('truetype');
}

.divider-title{
  color: rgb(0, 0, 0, 0.7)!important;
  font-family: Monoton;
  font-size: 40px;
}

.divider {
  margin-top: 15px;
  margin-bottom: 15px;
}
.divider-decorator {
  height: 5px;
  width: 100px;
}

.divider-line {
  background-color: rgb(0, 0, 0, 0.2)!important;
  width: 100%;
  height: 1px;
}
</style>
