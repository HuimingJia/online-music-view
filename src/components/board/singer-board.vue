<template lang="html">
<div id="singer-board">
  <div class="singer-board-info">
    <img class="singer-board-img" height="200px" width="200px" v-lazy="singerImg">
    <div class="singer-board-right">
      <div class="singer-board-name">{{singernName}}</div>
      <div class="singer-board-statistic">
        <div class="singer-board-album"><v-icon name="disc"></v-icon><span>{{albumTotal}}</span></div>
        <div class="singer-board-songs"><v-icon name="headphones"></v-icon><span>{{songTotal}}</span></div>
        <div class="toplist-board-mvs"><v-icon name="video"></v-icon><span>{{mvTotal}}</span></div>
      </div>
      <div class="singer-board-desc-wrapper"><div class="singer-board-desc" v-html="singerDesc"></div></div>
    </div>
  </div>

  <div class="container-fluid">
      <divider color="#555555" title="Albums"></divider>
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-xl-2" v-for="album in albumList" v-if="album !== null">
          <album-cover
          :img="album.pic"
          :title="album.name"
          :mid="album.albummid"
          :id="album.id"
          :date="album.publish_date">
        </album-cover>
      </div>
    </div>

    <divider color="#555555" title="Hot Music Video"></divider>
    <div class="row">
      <div class="col-12 col-xl-6" v-for="mv in mvList"  v-if="mv !== null">
        <mv-cover
        :mv_id="mv.vid"
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
    var vm = this
    this.$store.dispatch('getSinger', this.$route.params.id).then((response) => {

      vm.singernName = response.data.data.singer_name
      vm.singerDesc = response.data.data.SingerDesc
      vm.albumTotal = response.data.data.albumTotal
      vm.songTotal = response.data.data.total
      vm.mvTotal = response.data.data.mvTotal

      vm.albumList = response.data.data.albumlist
      vm.songList = response.data.data.list
      vm.mvList = response.data.data.mvlist

      vm.fans = response.data.fans
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
  font-size: 28px;
  font-weight: 900;
}

.singer-board-statistic {
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
}

.singer-board-album, .singer-board-songs, .toplist-board-mvs{
  display: flex;
  flex-direction: row;
  margin-right: 15px;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.singer-board-album .icon, .singer-board-songs .icon, .toplist-board-mvs .icon {
  height: 24px;
  margin-right: 15px;
}

.singer-board-desc-wrapper {
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.5);
  padding-top: 15px;
  padding-bottom: 15px;
}

.singer-board-desc {
  height: 190px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 15px;
}

.singer-board-desc::-webkit-scrollbar {
    width: 10px;
}

.singer-board-desc::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.5);
}

/* Handle */
.singer-board-desc::-webkit-scrollbar-thumb {
    border: solid 1px grey;
    background: rgba(255,255,255,0.8);
    border-radius: 10px;
}

/* Handle on hover */
.singer-board-desc::-webkit-scrollbar-thumb:hover {
    background: rgba(255,255,255,0.3);
}


</style>
