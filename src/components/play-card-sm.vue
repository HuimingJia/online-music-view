<template lang="html">
<div class="play-card-sm">
  <!-- <img class="play-card-img-sm" :src="img" :alt="song_name"> -->
  <img class="play-card-img-sm">
  <div class="play-card-des-sm">
    <h5>Song Name</h5>
    <p>Signer Name</p>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.play-card-sm {
  width: 250px;
  height: 100px;
  position:absolute;
  bottom: 100px;
  float: left;
  display: flex;
  flex-direction: row;
  background-color: rgb(255, 255, 255, 0.8);
}

.play-card-img-sm {
  background-color: black;
  width: 75px;
  margin: 15px;
}

.play-card-des-sm {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
