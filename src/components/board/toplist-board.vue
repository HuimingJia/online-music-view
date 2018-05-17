<template lang="html">
  <div id="toplist-board">
    <div class="toplist-board-info">
      <img class="toplist-board-img" height="200px" width="200px" v-lazy="img">
      <div class="toplist-board-info-right">
        <h3 class="toplist-board-name">{{name}}</h3>
        <div class="toplist-board-statistic">
          <div class="toplist-board-views align-bottom"><v-icon name="eye"></v-icon>
            <div class="my-auto">{{getViews(views)}}</div>
          </div>
          <div class="toplist-board-date align-bottom"><v-icon name="calendar"></v-icon>
            <div class="my-auto">{{getDate(date)}}</div>
          </div>
          <div class="toplist-board-comments align-bottom"><v-icon name="list"></v-icon>
            <div class="my-auto">{{comments}}</div>
          </div>
          <div class="toplist-board-size align-bottom"><v-icon name="music"></v-icon>
            <div class="my-auto">{{size}}</div>
          </div>
        </div>
        <div class="toplist-board-info" v-html="info"></div>
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
  methods: {
    getDate(key) {
      this.setKey(key)
      this.addHistory(key)
      this.$router.push({name: 'search', params: {key: key}})
    },
    getViews(views) {
      if (views >= 1000000) {
        return (views / 1000000).toFixed(2) + 'M'
      } else if (views >= 1000) {
        return (views / 1000).toFixed(2) + 'K'
      } else {
        return views;
      }
    },
    getDate(date) {
      if (date.includes("_")) {
        var dates = date.split("_")
        return dates.join("-")
      } else if (date.includes("-")) {
        var dates = date.split("-")
        return dates.join("-")
      } else {
        return date
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
  background: rgba(255, 255, 255, 0);
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

.toplist-board-statistic {
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
}

.toplist-board-views, .toplist-board-date, .toplist-board-comments, .toplist-board-size{
  display: flex;
  flex-direction: row;
  height: 30px;
  margin-right: 15px;
}

.toplist-board-views .icon, .toplist-board-date .icon, .toplist-board-comments .icon, .toplist-board-size .icon {
  /* height: 100px; */
  height: 30px;
  margin-right: 5px;
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
