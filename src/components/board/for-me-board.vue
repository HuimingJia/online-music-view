<template lang="html">
  <div id="for-me-board">
    <slide-show :cases="slideShow"></slide-show>
    <div class="container-fluid hotlist">
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
    <divider color="#555555" title="Hot Music Video"></divider>
    <div class="row">
      <div class="col-12 col-sm-6 col-xl-4" v-for="mv in mvList">
        <mv-cover
        :img="mv.picurl"
        :title="mv.mvtitle"
        :desc="mv.mvdesc"
        :date="mv.pub_date"
        :singer="mv.singer_name"
        :views="mv.listennum">
      </mv-cover>
    </div>
  </div>
</div>
</div>
</template>

<script>
import divider from '@/components/divider'
import AlbumCover from '@/components/cover/album-cover'
import SingerBar from '@/components/bar/singer-bar'
import SongBar from '@/components/bar/song-bar'
import SlideShow from '@/components/list/slide-show'
import PlaylistCover from '@/components/cover/playlist-cover'
import MvCover from '@/components/cover/mv-cover'

export default {
  components: {
    SlideShow,
    divider,
    AlbumCover,
    SingerBar,
    SongBar,
    PlaylistCover,
    MvCover
  },
  data() {
    return {
      song_list: [
        {name: "fantastic baby", singer: "Big bang"},
        {name: "fantastic baby", singer: "Big bang"},
        {name: "fantastic baby", singer: "Big bang"},
      ],
      slideShow: null,
      radioList: [],
      playlists: [],
      mvList: [],
    }
  },
  activated: function () {
    this.$store.dispatch('getFirstPage').then((response) => {
      this.loading = false
      console.log(response.data)
      this.slideShow = response.data.data.focus
      this.playlists = response.data.data.hotdiss.list.slice(0,6);
      this.mvList = response.data.data.shoubomv.all.slice(0,6);
    }, (response) => {
      this.loadingState = 'loading failed'
    })
  },
}
</script>

<style lang="css" scoped>
#for-me-board {
  background-color: rgb(255, 255, 255, 0);
  flex: 1;
}
</style>
