<template lang="html">
  <div id="play-card-sm" @click="togglePlayCardLg()">
    <div class="play-card-sm-left">
      <img class="play-card-img-sm" height="100%" width="100%" v-lazy="curcAlbumImg">
      <div class="play-card-sm-mask text-center"><v-icon name="maximize-2"></v-icon></div>
    </div>
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
  padding: 15px;
  display: flex;
  flex-direction: row;
  background: rgba(255, 255, 255, 0.8);
  overflow: hidden;
  transition: all 0.25s;
  -moz-box-shadow: 4px 0px 8px 0 rgba(0,0,0,0.12), 2px 0px 4px 0 rgba(0,0,0,0.08);
  -webkit-box-shadow: 4px 0px 8px 0 rgba(0,0,0,0.12), 2px 0px 4px 0 rgba(0,0,0,0.08);
  box-shadow: 4px 0px 8px 0 rgba(0,0,0,0.12), 2px 0px 4px 0 rgba(0,0,0,0.08);
  overflow: hidden;
}

#play-card-sm:hover {
  transform: scale(1.1) translateX(10px)  translateY(-5px);
}

.play-card-sm-left {
  width: 70px;
  height: 100%;
  overflow: hidden;
}

.play-card-sm-mask {
  height: 100%;
  width: 100%;
  position: relative;
  margin-top: -100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.8);
  transition: all 0.5s;
  opacity: 0;
  display: flex;
  flex-direction: column;
}

#play-card-sm:hover .play-card-sm-mask{
  opacity: 1;
  /* transform: scale(1.1) translateX(10px)  translateY(-5px); */
}

.play-card-sm-mask .icon {
  color: white;
  flex: 1;
  padding: 25%;
}

.play-card-sm-right {
  margin-left: 15px;
  overflow: hidden;
}

.play-card-sm-name {
  font-size: 18px;
  font-weight: bold;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.play-card-sm-album {
  font-size: 14px;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.play-card-sm-singernames {
  font-size: 14px;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
