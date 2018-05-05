<template lang="html">
<div class="play-card-sm">
  <!-- <img class="play-card-img-sm" :src="img" :alt="song_name"> -->
  <img class="play-card-img-sm">
  <div class="play-card-des-sm">
    <h5>{{songname}}</h5>
    <p>{{albumname}}</p>
    <p>{{singernames}}</p>
  </div>
</div>
</template>

<script>
import {mapMutations, mapState, mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'albumname', 'songname','singernames'
    ]),
    ...mapState({
      dataUrl: state => {
        console.log(state.PlayStore.song.mid)
        return 'https://dl.stream.qqmusic.qq.com/C100' + state.PlayStore.song.mid + '.m4a?fromtag=46'
      }
    })
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
}

.play-card-img-sm {
  background-color: black;
  width: 75px;
  margin: 15px;
}

.play-card-des-sm {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
