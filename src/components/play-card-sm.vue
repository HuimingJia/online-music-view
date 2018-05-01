<template lang="html">
<div class="play-card-sm">
  <img class="play-card-img-sm" src="" alt="">
  <div class="play-card-des-sm">
play-card-des-sm
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.play-card-sm {
  width: 200px;
  height: 75px;
  position:absolute;
  bottom: 100px;
  float: left;
  background: blue;
  display: flex;
  flex-direction: row;
}

.play-card-img-sm {
  background-color: green;
  width: 75px;
}

.play-card-des-sm {
  flex: 1;
}
</style>
