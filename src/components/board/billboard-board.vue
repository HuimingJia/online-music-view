<template lang="html">
  <div id="for-me-board">
    <div class="container-fluid">
      <divider color="#555555" title="Billboards"></divider>
      <div class="row">
        <div class="col-12 col-lg-6 col-xl-4" v-for="billboard in topList">
          <billboard-cover
          :img="billboard.picUrl"
          :title="billboard.topTitle"
          :song_list="billboard.songList"
          :id = "billboard.id">
          </billboard-cover>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import divider from '@/components/divider'
import BillboardCover from '@/components/billboard-cover'
export default {
  components: {
    BillboardCover,
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
  created: function () {
    this.$store.dispatch('getRankList').then((response) => {
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
