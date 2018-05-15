<template lang="html">
<div id="play-card-sm" @click="togglePlayCardLg()">
  <img class="play-card-img-sm" height="75px" width="75px" v-lazy="curcAlbumImg" :alt="curSongname">
  <div class="play-card-sm-right my-auto">
    <div class="play-card-sm-name">{{curSongname}}</div>
    <div class="play-card-sm-album">{{curAlbumname}}</div>
    <div class="play-card-sm-singernames">{{curSingernames}}</div>
  </div>
</div>
</template>

<script>
import {mapMutations, mapState, mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'curSongname', 'curAlbumname', 'curSingernames', 'curcAlbumImg'
    ])
  },
  methods: {
    ...mapMutations([
      'togglePlayCardLg'
    ])
  }
}
</script>

<style lang="css" scoped>
#play-card-sm {
  width: 250px;
  height: 100px;
  bottom: 0px;
  float: left;
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: row;
  background: rgba(255, 255, 255, 0.8);
  overflow: hidden;
  transition: all 0.25s;
  -moz-box-shadow: 4px 0px 8px 0 rgbaa(0,0,0,0.12), 2px 0px 4px 0 rgbaa(0,0,0,0.08);
  -webkit-box-shadow: 4px 0px 8px 0 rgbaa(0,0,0,0.12), 2px 0px 4px 0 rgbaa(0,0,0,0.08);
  box-shadow: 4px 0px 8px 0 rgbaa(0,0,0,0.12), 2px 0px 4px 0 rgbaa(0,0,0,0.08);
}

#play-card-sm:hover {
  transform: scale(1.1) translateX(10px)  translateY(-5px);
}

.play-card-img-sm {
  background: black;
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
