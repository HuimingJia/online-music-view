<template lang="html">
<div id="for-me-board">
  <divider color="#555555" title="For-Me"></divider>
  <billboard-cover title="Billboard" :song_list="song_list"></billboard-cover>
  <singer-bar name="jay chou" alt="jay chou"></singer-bar>
  <song-bar name="Qi Li Xiang" singer="jay chou"></song-bar>
  <!-- <album-cover title="Album"></album-cover> -->
</div>
</template>

<script>
import divider from '@/components/divider'
import BillboardCover from '@/components/billboard-cover'
import AlbumCover from '@/components/album-cover'
import SingerBar from '@/components/singer-bar'
import SongBar from '@/components/song-bar'

export default {
  components: {
    divider,
    BillboardCover,
    AlbumCover,
    SingerBar,
    SongBar,
  },
  data() {
    return {
      song_list: [
        {name: "fantastic baby", singer: "Big bang"},
        {name: "fantastic baby", singer: "Big bang"},
        {name: "fantastic baby", singer: "Big bang"},]
    }
  }
}
</script>

<style lang="css" scoped>
#for-me-board {
  background-color: rgb(255, 255, 255, 0);
  flex: 1;
}
</style>
