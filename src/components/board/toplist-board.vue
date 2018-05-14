<template lang="html">
  <div id="toplist-board">
    <div class="toplist-board-info">
      <img class="toplist-board-img" height="200px" width="200px" v-lazy="img">
      <div class="toplist-board-info-right">
        <h3 class="toplist-board-name">{{name}}</h3>
        <div class="toplist-board-info" v-html="info"></div>
        <div class="toplist-board-views">{{views}}</div>
        <div class="toplist-board-date">{{date}}</div>
        <div class="toplist-board-comments">{{comments}}</div>
        <div class="toplist-board-size">{{size}}</div>
      </div>
    </div>
    <div class="toplist-board-top">
      <divider color="#555555" title="HitS"></divider>
      <song-bar v-for="(song, index) in songList"
        :index="index"
        :songname="song.data.songname"
        :albumname="song.data.albumname"
        :id="song.data.songid"
        :mid="song.data.songmid"
        :name="song.data.songorig"
        :singer="song.data.singer"
        :albummid="song.data.albummid"
      ></song-bar>
    </div>
  </div>
</template>

<script>
import divider from '@/components/utils/divider'
import SongBar from '@/components/bar/song-bar'
export default {
  components: {
    divider,
    SongBar
  },
  data() {
    return {
      songList: {
        type: Array,
        default: null,
      },
      img: {
        type: String,
        default: require('@/assets/imgs/album-cover.jpg'),
      },
      name: {
        type: String,
        default: null,
      },
      info: {
        type: String,
        default: null,
      },
      views: {
        type: Number,
        default: null,
      },
      date: {
        type: String,
        default: null,
      },
      comments: {
        type: Number,
        default: null,
      },
      size: {
        type: Number,
        default: null,
      }
    }
  },
  activated: function() {
    this.$store.dispatch('getTopList', this.$route.params.id).then((response) => {
      this.img = response.data.topinfo.MacDetailPicUrl;
      this.name = response.data.topinfo.ListName;
      this.info = response.data.topinfo.info;
      this.views =  response.data.topinfo.listennum;
      this.date = response.data.date,
      this.comments = response.data.comment_num,
      this.size = response.data.cur_song_num,
      this.songList = response.data.songlist;
    }, (response) => {
      console.log(response)
    })
  }
}
</script>

<style lang="css" scoped>
#toplist-board{
  margin-top: 50px;
  margin-bottom: 15px;
  margin-left: 50px;
  margin-right: 50px;
  background-color: rgb(255, 255, 255, 0);
  flex: 1;
}

.toplist-board-info {
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
}

.toplist-board-info-right {
  margin-left: 15px;
  flex: 1;
}

.toplist-board-info {
  font-size: 14px;
}

.toplist-board-img {
  box-shadow:
  0 15px 30px 0 rgba(0,0,0,0.11),
  0 5px 15px 0 rgba(0,0,0,0.08);
}
</style>
