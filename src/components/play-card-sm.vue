<template lang="html">
<div class="play-card-sm" @click="showPlayCard()">
  <img class="play-card-img-sm" height="75px" width="75px" :src="coverImgUrl" :alt="song_name">
  <div class="play-card-sm-right my-auto">
    <div class="play-card-sm-name">{{songname}}</div>
    <div class="play-card-sm-album">{{albumname}}</div>
    <div class="play-card-sm-singernames">{{singernames}}</div>
  </div>
</div>
</template>

<script>
import {mapMutations, mapState, mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'albumname', 'songname','singernames', 'coverImgUrl'
    ]),
    ...mapState({
      dataUrl: state => {
        console.log(state.PlayStore.song.mid)
        return 'https://dl.stream.qqmusic.qq.com/C100' + state.PlayStore.song.mid + '.m4a?fromtag=46'
      }
    })
  },
  methods: {
    showPlayCard: function() {
      this.$store.commit('showPlayCard')
    }
  }
}
</script>

<style lang="css" scoped>
.play-card-sm {
  width: 250px;
  height: 100px;
  bottom: 100px;
  float: left;
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: row;
  background-color: rgb(255, 255, 255, 0.8);
  overflow: hidden;
  transition: all 0.25s;
}

.play-card-sm:hover {
  transform: scale(1.1) translateX(10px)  translateY(-5px);
}

.play-card-img-sm {
  background-color: black;
  margin: 15px;
}

.play-card-sm-name {
  font-size: 18px;
  font-weight: bold;
}

.play-card-sm-album {
  font-size: 14px;
}

.play-card-sm-singernames {
  font-size: 14px;
}
</style>
