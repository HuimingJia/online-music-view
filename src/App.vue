<template>
  <div id="app" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/app-bg.jpg') + ')'}">
    <Header></Header>
    <div id="cotent">
      <side-bar></side-bar>
      <transition name="fade">
        <keep-alive>
          <router-view class="board"></router-view>
        </keep-alive>
      </transition>
    </div>
    <play-bar></play-bar>
    <transition name="scale-in">
      <playing-list v-if="isShowPlayingList"></playing-list>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/header"
import Footer from "@/components/footer"
import SideBar from "@/components/bar/side-bar"
import PlayBar from "@/components/bar/play-bar"
import PlayingList from '@/components/list/playing-list'
import PlayCardLg from '@/components/play-card-lg'

import {mapState} from 'vuex'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    SideBar,
    PlayBar,
    PlayingList
  },
  data() {
    return {
      playcardsize: true
    }
  },
  computed: {
    ...mapState({
      isShowPlayingList: state => state.ComponentStore.isShowPlayingList
    })
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
  background-size: cover;
}

#app::-webkit-scrollbar {
  display: none;
}


#cotent {
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
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

.scale-in-enter-active {
  animation: scale-in .5s;

}
.scale-in-leave-active {
  animation: scale-in .5s reverse;

}

@keyframes scale-in {
  0% {
    transform: scale(0) translateX(200px);
  }
  100% {
    transform: scale(1) translateX(0px);
  }
}
</style>
