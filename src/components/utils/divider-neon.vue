<template lang="html">
  <div class="divider">
    <div class="neon-wrapper">
      <div class="divider-title">{{title}}</div>
    </div>
    <div class="placeholder"></div>
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

@font-face {
  font-family: 'BPneon';
  src: url('~@/assets/fonts/BPneon.otf') format('opentype');
}

@keyframes flick {
0%, 100% {
background-image: radial-gradient(
  rgbaa(255,190,0,0.4) 0%,
  rgbaa(70,140,255,0.2) 52%,
  transparent 70%);
}
40% {
  background-image: radial-gradient(
    rgbaa(255,190,0,0.4) 0%,
    rgbaa(70,140,255,0.2) 50%,
    transparent 68%);
  }
}

.divider {
  margin-top: 15px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
}

.placeholder {
  flex: 1;
}

.neon-wrapper {
  margin-left: 15px;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 20px;
  border-color: white;
  animation: flick 0.1s ease-in-out infinite;
  box-shadow:
  0 0 1px 1px rgbaa(200,230,255,0.5),
  0 0 1px 1px rgbaa(200,230,255,0.5) inset,
  0 0 2px 4px rgbaa(100,150,255,0.9),
  0 0 2px 4px rgbaa(100,150,255,1) inset,
  0 0 2px 3px rgbaa(0,50,255,0.9),
  0 0 2px 3px rgbaa(0,50,255,0.7) inset,
  0 2px 5px 3px rgbaa(0,0,0,0.8),
  0 2px 4px 2px rgbaa(0,0,0,0.7) inset;
}

.divider-title{
  font-size: 30px;
  font-family: BPneon;
  color: rgbaa(255, 232, 50, 0.9);
  text-shadow:
  0 0 5px rgbaa(255,245,0,1),
  0 0 28px rgbaa(255,44,0,0.9),
  0 4px 20px black,
  0 4px 5px black,
  0 1px 6px black,
  0 0 50px rgbaa(255,120,0,0.5),
  0 0 24px rgbaa(255,255,255,0.8);
  -webkit-text-stroke: 1px rgbaa(255, 160, 0, 0.45);
}
</style>
