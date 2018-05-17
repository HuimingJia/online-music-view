<template lang="html">
  <div id="music-canvas">
    <div class="spectrum">
      <div class="bar" v-for="(i, index) in spectrum" :id="'bar-' + index"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      spectrum: {
        type: Number,
        default: 128,
      }
    }
  },
  activated: function()  {
    // var html = document.getElementById('audio')
    // var context = new AudioContext();
    // var src = context.createMediaElementSource(audio);
  }
}
</script>

<style lang="css" scoped>
#music-canvas {
  left: 0;
  top: 0;
  width: 100%;
  z-index: 5;
  flex: 1;
  border-radius: 15px;
  box-shadow:
  0 15px 30px 0 rgba(0,0,0,0.44),
  0 5px 15px 0 rgba(0,0,0,0.32);
  background: #fc00ff;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #00dbde, #fc00ff);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #00dbde, #fc00ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.spectrum {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  filter: url("#goo");
  box-sizing: border-box;
  transform: translateZ(0);
  position: relative;
  bottom: -200px;
  height: 250px;

  .bar {
    background: $accent;
    flex: 1 1 auto;
    height: 200px;
    transform: translateZ(0);
    will-change: transform;
  }
}
</style>
