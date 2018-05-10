<template lang="html">
  <div id="for-me-board">
    <div class="container-fluid">
      <divider color="#555555" title="Top Charts"></divider>
      <div class="row">
        <div class="col-12 col-lg-6 col-xl-4" v-for="toplist in topList"  v-if="toplist !== null">
          <toplist-cover
          :img="toplist.picUrl"
          :title="toplist.topTitle"
          :song_list="toplist.songList"
          :id = "toplist.id">
          </toplist-cover>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import divider from '@/components/utils/divider'
import toplistCover from '@/components/cover/toplist-cover'
export default {
  components: {
    toplistCover,
    divider
  },
  data() {
    return {
      topList: {
        type: Array,
        default: null,
      }
    }
  },
  activated: function () {
    this.$store.dispatch('getTopLists').then((response) => {
      console.log(response.data.data.topList)
      this.topList = response.data.data.topList
    }, (response) => {
      this.loadingState = 'loading failed'
    })
  },
}
</script>

<style lang="css" scoped>
#for-me-board{
  background-color: rgb(255, 255, 255, 0);
  flex: 1;
}
</style>
