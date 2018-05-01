<template>
  <div id="app">
    <Header></Header>
    <div id="cotent" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/app-bg.jpg') + ')'}">
      <transition name="scale">
        <play-card-sm v-if="{playcardsize}"></play-card-sm>
        <play-card-lg v-else></play-card-lg>
      </transition>
      <side-bar></side-bar>
      <router-view></router-view>
      <!-- <transition name="fade">

      </transition> -->
    </div>
    <play-bar></play-bar>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/header"
import Footer from "@/components/footer"
import SideBar from "@/components/side-bar"
import PlayBar from "@/components/play-bar"
import PlayCardSm from "@/components/play-card-sm"
import PlayCardLg from "@/components/play-card-lg"
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    SideBar,
    PlayBar,
    PlayCardSm,
    PlayCardLg
  },
  data() {
    return {
      playcardsize: true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#cotent {
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  background-size: cover;
}

.board {
  background-color: rgb(255, 255, 255, 0.5);
}
</style>
