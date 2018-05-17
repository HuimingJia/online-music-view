<template lang="html">
  <div class="loading text-center">
    <svg class="equilizer" viewBox="0 0 128 128">
      <g class="frame">
        <!-- <rect class="bar" v-for="bar in bars" y="25"><rect> -->
        <rect class="bar" transform="translate(25,0)" y="25"></rect>
        <rect class="bar" transform="translate(50,0)" y="25"></rect>
        <rect class="bar" transform="translate(75,0)" y="25"></rect>
        <rect class="bar" transform="translate(100,0)" y="25"></rect>
        <rect class="bar" transform="translate(125,0)" y="25"></rect>
        <rect class="bar" transform="translate(150,0)" y="25"></rect>
        <rect class="bar" transform="translate(175,0)" y="25"></rect>
        <rect class="bar" transform="translate(200,0)" y="25"></rect>
        <rect class="bar" transform="translate(225,0)" y="25"></rect>
        <rect class="bar" transform="translate(250,0)" y="25"></rect>
      </g>
    </svg>
    <div class="loading-text">Loading...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bars: 25
    }
  }
}
</script>

<style lang="css">
.loading {
  width: 100%;
  padding-top: 25px;
}

.equilizer {
  height: 50px;
  width: 100%;
  margin-left: 25px;
  transform: rotate(180deg);
}

.bar {
  fill: black;
  width: 15px;
  animation: equalize 1.25s steps(25, end) 0s infinite;
}

.loading-text {
  font-size: 18px;
  font-weight: 700;
}

.bar:nth-child(1) {
  animation-duration: 2.8s;
}

.bar:nth-child(2) {
  animation-duration: 3s;
}

.bar:nth-child(3) {
  animation-duration: 3.6s;
}

.bar:nth-child(4) {
  animation-duration: 3.8s;
}

.bar:nth-child(5) {
  animation-duration: 3.2s;
}

.bar:nth-child(10) {
  animation-duration: 2.8s;
}

.bar:nth-child(9) {
  animation-duration: 3s;
}

.bar:nth-child(8) {
  animation-duration: 3.6s;
}

.bar:nth-child(7) {
  animation-duration: 3.8s;
}

.bar:nth-child(6) {
  animation-duration: 3.2s;
}

@keyframes equalize {
  0% {
    height: 60px;
  }
  4% {
    height: 50px;
  }
  8% {
    height: 40px;
  }
  12% {
    height: 30px;
  }
  16% {
    height: 20px;
  }
  20% {
    height: 30px;
  }
  24% {
    height: 40px;
  }
  28% {
    height: 10px;
  }
  32% {
    height: 40px;
  }
  36% {
    height: 60px;
  }
  40% {
    height: 20px;
  }
  44% {
    height: 40px;
  }
  48% {
    height: 70px;
  }
  52% {
    height: 30px;
  }
  56% {
    height: 10px;
  }
  60% {
    height: 30px;
  }
  64% {
    height: 50px;
  }
  68% {
    height: 60px;
  }
  72% {
    height: 70px;
  }
  76% {
    height: 80px;
  }
  80% {
    height: 70px;
  }
  84% {
    height: 60px;
  }
  88% {
    height: 50px;
  }
  92% {
    height: 60px;
  }
  96% {
    height: 70px;
  }
  100% {
    height: 80px;
  }
}
</style>
