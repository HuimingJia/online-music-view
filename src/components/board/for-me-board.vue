<template lang="html">
  <div id="for-me-board">
    <board-loading-animation v-if="loading"></board-loading-animation>
    <div class="swiper-show" v-if="!loading">
      <swiper :options="swiperOption">
        <swiper-slide v-for="slide in slideShow"><img class="swiper-show-img" height="100%" width="100%" v-lazy="slide.pic" @click="jump(slide.jumpurl)"></img></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <div class="container-fluid hotlist" v-if="!loading">
      <divider color="#555555" title="Hot PlayList"></divider>
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-xl-2" v-for="playlist in playlists">
          <playlist-cover
          :img="playlist.imgurl"
          :desc="playlist.dissname"
          :auth="playlist.author"
          :id="playlist.dissid">
        </playlist-cover>
      </div>
    </div>
    <divider color="#555555" title="Hot Music Video" v-if="!loading"></divider>
    <div class="row">
      <div class="col-12 col-xl-6" v-for="mv in mvList">
        <mv-cover
        :img="mv.picurl"
        :title="mv.mvtitle"
        :desc="mv.mvdesc"
        :date="mv.pub_date"
        :singer="mv.singer_name"
        :views="mv.listennum"
        :mv_id="mv.vid">
      </mv-cover>
    </div>
  </div>
</div>
</div>
</template>

<script>
import divider from '@/components/utils/divider'
import AlbumCover from '@/components/cover/album-cover'
import SingerBar from '@/components/bar/singer-bar'
import SongBar from '@/components/bar/song-bar'
import PlaylistCover from '@/components/cover/playlist-cover'
import MvCover from '@/components/cover/mv-cover'
import BoardLoadingAnimation from '@/components/utils/board-loading-animation'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'


export default {
  components: {
    divider,
    AlbumCover,
    SingerBar,
    SongBar,
    PlaylistCover,
    MvCover,
    swiper,
    swiperSlide,
    BoardLoadingAnimation
  },
  data() {
    return {
      loading: true,
      slideShow: null,
      radioList: [],
      playlists: [],
      mvList: [],
      swiperOption: {
        initialSlide: 3,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        initialSlide: 0,
        spaceBetween: 0,
        coverflowEffect: {
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  activated: function () {
    var vm = this
    this.$store.dispatch('getFirstPage').then((response) => {
      vm.loading = false
      console.log(response.data)
      vm.slideShow = response.data.data.focus
      vm.playlists = response.data.data.hotdiss.list.slice(0,6);
      vm.mvList = response.data.data.shoubomv.all.slice(0,6);
      vm.loading = false;
    }, (response) => {
      vm.loadingState = 'loading failed'
    })
  },
  methods: {
    jump: function(url) {
      window.open(url);
    }
  }
}
</script>

<style lang="css" scoped>
#for-me-board {
  background: rgba(255, 255, 255, 0);
  flex: 1;
}
.swiper-show {
  margin: 15px;
  margin-top: 50px;
  margin-bottom: 50px;
}

.swiper-inner {
  width: 100%;
  height: 500px;
  padding-top: 50px;
  padding-bottom: 50px;
  -webkit-box-shadow:
  0 15px 30px 0 rgba(0,0,0,0.44),
  0 5px 15px 0 rgba(0,0,0,0.32);
          box-shadow:
  0 15px 30px 0 rgba(0,0,0,0.44),
  0 5px 15px 0 rgba(0,0,0,0.32);
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 400px;
  height: 200px;
}

.swiper-show-img{
  transition: all 0.5s;
}

.swiper-show-img:hover{
  opacity: 0.5
}
.swiper-button-prev, .swiper-button-next {

}
</style>
