<template lang="html">
<div id="singer-board">
  <div class="singer-board-info">
    <img class="singer-board-img" height="200px" width="200px" v-lazy="singerImg">
    <div class="singer-board-right">
      <div class="singer-board-name">{{singernName}}
        <div class="singer-board-album">{{albumTotal}}</div>
        <div class="singer-board-songs">{{songTotal}}</div>
        <div class="toplist-board-mvs">{{mvTotal}}</div>
      </div>
      <div class="singer-board-desc" v-html="singerDesc"></div>
    </div>
  </div>

  <div class="container-fluid">
      <divider color="#555555" title="Albums"></divider>
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-xl-2" v-for="album in albumList" v-if="album !== null">
          <album-cover
          :img="album.pic"
          :desc="album.name"
          :id="album.albummid">
        </album-cover>
      </div>
    </div>

    <divider color="#555555" title="Hot Music Video"></divider>
    <div class="row">
      <div class="col-12 col-sm-6" v-for="mv in mvList"  v-if="mv !== null">
        <mv-cover
        :img="mvimg(mv.vid)"
        :title="mv.title"
        :date="mv.pubdate"
        :singer="singernName"
        :views="mv.playcnt">
      </mv-cover>
    </div>
    </div>

    <divider color="#555555" title="HitS"></divider>
    <song-bar v-for="(song, index) in songList" v-if="song !== null"
      :index="index"
      :songname="song.musicData.songname"
      :albumname="song.musicData.albumname"
      :id="song.musicData.songid"
      :mid="song.musicData.songmid"
      :name="song.musicData.songorig"
      :singer="song.musicData.singer"
      :albummid="song.musicData.albummid"
    ></song-bar>

</div>
</div>
</template>

<script>
import divider from '@/components/utils/divider'
import AlbumCover from '@/components/cover/album-cover'
import MvCover from '@/components/cover/mv-cover'
import SongBar from '@/components/bar/song-bar'

export default {
  components: {
    divider,
    AlbumCover,
    MvCover,
    SongBar,
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
  computed: {
    singerImg: function(){
      return this.mid !== null ? 'https://y.gtimg.cn/music/photo_new/T001R150x150M000' + this.$route.params.id + '.jpg?max_age=2592000' : require('@/assets/imgs/singer-cover.png')
    },
  },
  methods: {
    mvimg: function(mvid){
      return mvid !== null ? 'https://y.gtimg.cn/music/photo_new/T015R640x360M10100' + mvid + '.jpg' : require('@/assets/imgs/album-cover.jpg')
    },
  },
  activated: function() {
    this.$store.dispatch('getSinger', this.$route.params.id).then((response) => {
      this.singernName = response.data.data.singer_name
      this.singerDesc = response.data.data.SingerDesc
      this.albumTotal = response.data.data.albumTotal
      this.songTotal = response.data.data.total
      this.mvTotal = response.data.data.mvTotal

      this.albumList = response.data.data.albumlist
      this.songList = response.data.data.list
      this.mvList = response.data.data.mvlist

      this.fans = response.data.fans
      console.log(response.data)
      console.log(typeof(this.albumList))
    }, (response) => {
      console.log(response)
    });
  }
}
</script>

<style lang="css" scoped>
#singer-board {
  margin-top: 50px;
  margin-bottom: 15px;
  margin-left: 50px;
  margin-right: 50px;
  background: rgba(255, 255, 255, 0);
  flex: 1;
}


.singer-board-info {
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
}

.singer-board-img {
  box-shadow:
  0 15px 30px 0 rgba(0,0,0,0.11),
  0 5px 15px 0 rgba(0,0,0,0.08);
}

.singer-board-right {
  margin-left: 15px;
  flex: 1;
}


.singer-board-name {

}

.singer-board-desc {

}

.singer-board-album {

}

.singer-board-songs {

}

.toplist-board-mvs {

}
</style>
