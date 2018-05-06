<template lang="html">
<div id="singer-board">
    <div class="container-fluid">
      <divider color="#555555" title="Albums"></divider>
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-xl-2" v-for="album in albumList">
          <album-cover
          :img="album.pic"
          :desc="album.dissname"
          :auth="album.author"
          :id="album.dissid">
        </album-cover>
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
import MvCover from '@/components/cover/mv-cover'
import SongBar from '@/components/bar/song-bar'

export default {
  components: {
    divider,
    AlbumCover,
    MvCover,
    SongBar,

  },
  data() {
    return {
      singernName: {
        type: String,
        default: null,
      },
      singerDesc: {
        type: String,
        default: null,
      },
      albumTotal: {
        type: Number,
        default: null,
      },
      songTotal: {
        type: Number,
        default: null,
      },
      mvTotal: {
        type: Number,
        default: null,
      },
      albumList: {
        type: Array,
        default: null,
      },
      songList: {
        type: Array,
        default: null,
      },
      mvList: {
        type: Array,
        default: null,
      },
      fans: {
        type: Number,
        default: null,
      },
    }
  },
  activated: function() {
    this.$store.dispatch('getSinger', this.$route.params.id).then((response) => {
      console.log(response.data)
      this.singernName = response.data.singer_name
      this.singerDesc = response.data.SingerDesc
      this.albumTotal = response.data.singer_name
      this.songTotal = response.data.singer_name
      this.mvTotal = response.data.singer_name
      this.albumList = response.data.singer_name
      this.songList = response.data.singer_name
      this.mvList = response.data.singer_name
      this.fans = response.data.fans
    }, (response) => {
      console.log(response)
    });
  }
}
</script>

<style lang="css" scoped>
#singer-board {
  background-color: rgb(255, 255, 255, 0);
  flex: 1;
}
</style>
