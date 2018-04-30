<template>
  <div id="app">
    <Header></Header>
    <div id="cotent">
      <transition name="scale">
        <play-card-sm v-if="{playcardsize}"></play-card-sm>
        <play-card-lg v-else></play-card-lg>
      </transition>
      <side-bar></side-bar>
      <router-view class="board"></router-view>

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
  data: {
    playcardsize: true
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100%;
  background: #eee;
}

#cotent {
  position: fixed;
  top: 50px;
  bottom: 100px;
  width: 100%;
  background-color: yellow;
}

.board {
  background-color:#00FF00;
}
</style>
