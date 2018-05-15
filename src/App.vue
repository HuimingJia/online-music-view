<template>
  <div id="app" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/app-bg.jpg') + ')'}">
    <Header></Header>
    <div id="cotent">
      <side-bar></side-bar>
      <transition name="scale-in">
        <keep-alive>
          <play-card-lg v-if="isShowPlayCardLg"></play-card-lg>
        </keep-alive>
      </transition>

      <transition name="fade">
        <keep-alive>
          <router-view class="board"></router-view>
        </keep-alive>
      </transition>

      <transition name="scale-in">
        <playing-list v-if="isShowPlayingList"></playing-list>
      </transition>
      <transition name="scale-in">
        <search-list v-if="isShowSearchList"></search-list>
      </transition>
    </div>

    <play-bar></play-bar>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/header"
import Footer from "@/components/footer"
import SideBar from "@/components/bar/side-bar"
import PlayBar from "@/components/bar/play-bar"
import PlayingList from '@/components/list/playing-list'
import SearchList from '@/components/list/search-list'
import PlayCardLg from '@/components/play-card-lg'

import {mapState, mapGetters,mapMutations} from 'vuex'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    SideBar,
    PlayBar,
    PlayingList,
    PlayCardLg,
    SearchList
  },
  data() {
    return {
      playcardsize: true
    }
  },
  computed: {
    ...mapState({
      isShowPlayingList: state => state.ComponentStore.isShowPlayingList,
      isShowPlayCardLg: state => state.ComponentStore.isShowPlayCardLg,
    }),
    ...mapGetters([
      'isShowSearchList'
    ])
  },
  mounted() {
    var vm = this
    $('#app').click(function(){
        vm.unfocusSearchList();
    });

    $('#search-list').click(function(e){
        vm.focusSearchList();
    });
  },
  methods: {
    ...mapMutations([
      'focusSearchList', 'unfocusSearchList'
    ]),
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100vh;
  width: 100vw;
  min-width: 780px;
  min-height: 600px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  background-size: cover;
}

#app::-webkit-scrollbar {
  display: none;
}


#cotent {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  width: 100%;
}

.board {
  overflow: scroll;
  background: rgba(255, 255, 255, 0.5);
}

.board::-webkit-scrollbar {
  display: none;
}

.fade-enter-active {
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}
.fade-leave-active {
  -webkit-transition: all 0s;
  -o-transition: all 0s;
  transition: all 0s;
}
.fade-enter-to, .fade-leave {
  opacity: 1;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.scale-in-enter-active {
  -webkit-animation: scale-in .1s;
          animation: scale-in .1s;

}
.scale-in-leave-active {
  animation: scale-in .1s reverse;
}

@-webkit-keyframes scale-in {
  0% {
    -webkit-transform: scale(0) translateX(200px);
            transform: scale(0) translateX(200px);
  }
  100% {
    -webkit-transform: scale(1) translateX(0px);
            transform: scale(1) translateX(0px);
  }
}

@keyframes scale-in {
  0% {
    -webkit-transform: scale(0) translateX(200px);
            transform: scale(0) translateX(200px);
  }
  100% {
    -webkit-transform: scale(1) translateX(0px);
            transform: scale(1) translateX(0px);
  }
}
</style>
