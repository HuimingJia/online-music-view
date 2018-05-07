<template lang="html">
  <canvas id="music-canvas">
  </canvas>
</template>
<script>
export default {
  activated: function()  {
    // var audio = document.getElementById("audio");
    // var context = new AudioContext();
    // var src = context.createMediaElementSource(audio);
    // var analyser = context.createAnalyser();
    // var canvas = document.getElementById("music-canvas");
    // var ctx = canvas.getContext("2d");
    // src.connect(analyser);
    // analyser.connect(context.destination);
    // analyser.fftSize = 256;
    // var bufferLength = analyser.frequencyBinCount;
    // var dataArray = new Uint8Array(bufferLength);
    // var WIDTH = canvas.width;
    // var HEIGHT = canvas.height;
    // var barWidth = (WIDTH / bufferLength) * 2.5;
    // var barHeight;
    // var x = 0;
    //
    // function renderFrame() {
    //   requestAnimationFrame(renderFrame);
    //   x = 0;
    //   analyser.getByteFrequencyData(dataArray);
    //   ctx.fillStyle = "green";
    //   ctx.fillRect(0, 0, WIDTH, HEIGHT);
    //   for (var i = 0; i < bufferLength; i++) {
    //     barHeight = dataArray[i];
    //     var r = barHeight + (25 * (i/bufferLength));
    //     var g = 250 * (i/bufferLength);
    //     var b = 50;
    //     ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
    //     ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
    //     x += barWidth + 1;
    //   }
    // }
    //
    // audio.play();
    // renderFrame();
  }
}
</script>

<style lang="css" scoped>
#music-canvas {
  left: 0;
  top: 0;
  width: 100%;
  height: 200px;
  border-radius: 15px;
  box-shadow:
  0 15px 30px 0 rgba(0,0,0,0.11),
  0 5px 15px 0 rgba(0,0,0,0.08);
  background: #fc00ff;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #00dbde, #fc00ff);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #00dbde, #fc00ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>
