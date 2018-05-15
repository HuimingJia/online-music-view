<template lang="html">
  <div id="search-board">
    <div class="container-fluid">

      <divider color="#555555" title="Songs" v-if="songList.length > 0"></divider>
      <song-bar v-for="(song, index) in songList" v-if="song"
        :index="index"
        :songname="song.name"
        :id="song.id"
        :mid="song.mid"
        :name="song.name"
        :singer="song.singer"
        :albummid="song.albummid"
      ></song-bar>

      <divider color="#555555" title="Singers" v-if="singerList.length > 0"></divider>
      <div class="col-12" v-for="singer in singerList"  v-if="singer !== null">
        <singer-bar
        :id = "singer.id"
        :mid = "singer.mid"
        :name="singer.name">
        </singer-bar>
      </div>

      <divider color="#555555" title="Albums" v-if="albumList.length > 0"></divider>
      <div class="row">
        <div class="col-12 col-sm-1" v-for="album in albumList" v-if="albumList">
          <album-cover
          :img="album.pic"
          :desc="album.name"
          :id="album.mid">
        </album-cover>
      </div>
    </div>

    <divider color="#555555" title="Music Video" v-if="mvList.length > 0"></divider>
    <div class="row">
      <div class="col-12 col-sm-6" v-for="mv in mvList"  v-if="mv !== null">
        <mv-cover
        :img="mvimg(mv.vid)"
        :title="mv.name"
        :singer="mv.singer">
      </mv-cover>
    </div>
    </div>
  </div>
</div>
</template>

<script>
import divider from '@/components/utils/divider'
import AlbumCover from '@/components/cover/album-cover'
import MvCover from '@/components/cover/mv-cover'
import SongBar from '@/components/bar/song-bar'
import SingerBar from '@/components/bar/singer-bar'

export default {
  components: {
    AlbumCover,
    MvCover,
    SongBar,
    SingerBar,
    divider
  },
  data() {
    return {
      albumList: [],
      mvList: [],
      singerList: [],
      songList: []
    }
  },
  watch: {
    '$route.params.key': function () {
      this.getRes()
    }
  },
  activated() {
    this.getRes()
  },
  methods: {
    mvimg(mvid) {
      return mvid !== null ? 'https://y.gtimg.cn/music/photo_new/T015R640x360M10100' + mvid + '.jpg' : require('@/assets/imgs/album-cover.jpg')
    },
    getRes() {
      var vm = this
      this.$store.dispatch('search', this.$route.params.key).then((response) => {
        vm.albumList = []
        vm.mvList = []
        vm.singerList = []
        vm.songList = []

        vm.albumList = response.data.data.album.itemlist;
        vm.mvList = response.data.data.mv.itemlist;
        vm.singerList = response.data.data.singer.itemlist;
        vm.songList = response.data.data.song.itemlist;
      }, (response) => {
        console.log(response)
      })
    }
  },
}
</script>

<style lang="css" scoped>
#search-board{
  margin-top: 50px;
  margin-bottom: 15px;
  margin-left: 50px;
  margin-right: 50px;
  background: rgba(255, 255, 255, 0);
  flex: 1;
}
</style>
