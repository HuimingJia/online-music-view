<template lang="html">
  <div id="song-list-board">
    <div class="song-list-board-info">
      <img class="song-list-board-img" height="200px" width="200px" :src="img">
      <div class="song-list-board-info-right">
        <h3 class="song-list-board-name">{{name}}</h3>
        <div class="song-list-board-info" v-html="info"></div>
        <div class="song-list-board-views">{{views}}</div>
        <div class="song-list-board-date">{{date}}</div>
        <div class="song-list-board-comments">{{comments}}</div>
        <div class="song-list-board-size">{{size}}</div>
      </div>
    </div>
    <div class="song-list-board-song-list">
      <divider color="#555555" title="HitS"></divider>
      <song-bar v-for="(song, index) in song_list"
      :index="index"
      :name="song.data.songname"
      :singers="song.data.singer"
      :album="song.data.albumname"></song-bar>
    </div>
  </div>
</template>

<script>
import divider from '@/components/divider'
import SongBar from '@/components/song-bar'
export default {
  components: {
    divider,
    SongBar
  },
  data() {
    return {
      song_list: {
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
    this.$store.dispatch('getRankSongs', this.$route.params.id).then((response) => {
      console.log(response.data);
      this.img = response.data.topinfo.MacDetailPicUrl;
      this.name = response.data.topinfo.ListName;
      this.info = response.data.topinfo.info;
      this.views =  response.data.topinfo.listennum;
      this.date = response.data.date,
      this.comments = response.data.comment_num,
      this.size = response.data.cur_song_num,
      this.song_list = response.data.songlist;
    }, (response) => {
      console.log(response)
    })
  }
}
</script>

<style lang="css" scoped>
#song-list-board{
  margin-top: 50px;
  margin-bottom: 15px;
  margin-left: 50px;
  margin-right: 50px;
  background-color: rgb(255, 255, 255, 0);
  flex: 1;
}

.song-list-board-info {
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
}

.song-list-board-info-right {
  margin-left: 15px;
  flex: 1;
}

.song-list-board-info {
  font-size: 10px;
}

.song-list-board-info {
  font-size: 14px;
}

.song-list-board-info {
  font-size: 14px;
}

.song-list-board-info {
  font-size: 14px;
}

.song-list-board-info {
  font-size: 14px;
}

.song-bar {
  width: 100%;
  height: 50px;
  background-color: rgb(0, 0, 0, 0.5);
  transition: all 0.5s;
}

.icon {
  height: 20px;
  margin-left: 5px;
  margin-right: 5px;
  transition: all 0.5s;
}

.song-bar:hover {
  background-color: rgb(0, 0, 0, 0.8);
}

.icon:hover{
  animation: blinker 1s linear infinite;
}

.song-bar {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  background-color: rgb(0, 0, 0, 0.5);
}

.song-bar-img {
  border-radius: 25px;
  margin-left: 15px;
  margin-right: 15px;
  transition: all 1s;
}

.song-bar-img:hover {
  animation: blinker 1s linear infinite;
}

.song-bar-name {
  font-size: 14px;
  color: white;
  flex: 1;
  transition: all 1s;
}

.song-bar-name:hover {
  animation: blinker 1s linear infinite;
}

.song-bar-btn-group{
  display: flex;
  flex-direction: row;
  color: white;
}

@keyframes blinker {
  50% {
    opacity: 0.5;
  }
}
</style>
