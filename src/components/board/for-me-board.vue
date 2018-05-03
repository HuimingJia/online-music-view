<template lang="html">
  <div id="for-me-board">
    <slide-show :data="slider"></slide-show>
    <div class="container-fluid hotlist">
      <divider color="#555555" title="Hot PlayList"></divider>
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-xl-2" v-for="playlist in playlists">
          <playlist-cover
          :img="playlist.imgurl"
          :desc="playlist.dissname"
          :auth="playlist.author">
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
import BillboardCover from '@/components/billboard-cover'
import AlbumCover from '@/components/album-cover'
import SingerBar from '@/components/singer-bar'
import SongBar from '@/components/song-bar'
import SlideShow from '@/components/slide-show'
import PlaylistCover from '@/components/playlist-cover'
import MvCover from '@/components/mv-cover'

export default {
  components: {
    SlideShow,
    divider,
    BillboardCover,
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
      slider: {
        type: Array,
        default: [],
      },
      radioList: [],
      playlists: [],
      mvList: [],
    }
  },
  created: function () {
    this.$store.dispatch('getFirstPage').then((response) => {
      this.loading = false
      console.log(response.data)
      this.slider = response.data.data.focus
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
