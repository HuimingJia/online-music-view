<template>
  <div id="app">
    <Header></Header>
    <div id="cotent" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/app-bg.jpg') + ')'}">
      <side-bar></side-bar>
      <transition name="fade">
        <keep-alive>
          <router-view class="board"></router-view>
        </keep-alive>
      </transition>
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

import PlayCardLg from "@/components/play-card-lg"
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    SideBar,
    PlayBar,
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
  height: 100vh;
  width: 100vw;
  min-width: 780px;
  min-height: 600px;
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
  overflow: scroll;
  background-color: rgb(255, 255, 255, 0.5);
}

.board::-webkit-scrollbar {
  display: none;
}

.fade-enter-active {
  transition: all 0.5s;
}
.fade-leave-active {
  transition: all 0s;
}
.fade-enter-to, .fade-leave {
  opacity: 1;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
