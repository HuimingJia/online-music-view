<template lang="html">
<div class="playbar">
  <div id="volume-bar">
volume-bar
  </div>
  <div id="play-progress-bar">
play-progress-bar
  </div>
  <div id="play-control-button-group">
play-control-button-group
  </div>
  <div id="play-list-btn">btn
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.playbar {
  height: 75px;
  width: 100%;
  background-color: green;
  display: flex;
  flex-direction: row;
}

#volume-bar {
  width: 200px;
  background: blue;
}

#play-progress-bar {
  flex: 1;
  background-color: black;
}

#play-control-button-group{
  width: 200px;
  background-color: yellow;
}

#play-list-btn {
  width: 24px;
  background-color: red;
}
</style>
