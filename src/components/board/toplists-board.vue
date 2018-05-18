<template lang="html">
  <div id="for-me-board">
    <board-loading-animation v-if="loading"></board-loading-animation>
    <div class="container-fluid" v-if="!loading">
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
import BoardLoadingAnimation from '@/components/utils/board-loading-animation'
export default {
  components: {
    toplistCover,
    divider,
    BoardLoadingAnimation
  },
  data() {
    return {
      loading: true,
      topList: {
        type: Array,
        default: null,
      }
    }
  },
  activated: function () {
    var vm = this
    this.$store.dispatch('getTopLists').then((response) => {
      console.log(response.data.data.topList)
      vm.topList = response.data.data.topList
      vm.loading = false;
    }, (response) => {
      vm.loadingState = 'loading failed'
    })
  },
}
</script>

<style lang="css" scoped>
#for-me-board{
  background: rgba(255, 255, 255, 0);
  flex: 1;
}
</style>
