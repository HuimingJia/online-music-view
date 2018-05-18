<template lang="html">
  <div id="singers-board" >
    <board-loading-animation v-if="loading"></board-loading-animation>
    <div class="container-fluid" v-if="!loading">
      <divider color="#555555" title="Singer List"></divider>
      <div class="row">
        <div class="col-12">
          <singer-selector-bar @updateKey="updateParams"></singer-selector-bar>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6 col-xl-4" v-for="(singer, index) in singerList.slice(0, 30)"  v-if="singer !== null">
          <singer-bar
          :id = "singer.Fsinger_id"
          :mid = "singer.Fsinger_mid"
          :name="singer.Fsinger_name"
          :other_name="singer.Fother_name"
          :genre="singer.Fgenre"
          :area="singer.Farea"
          :sort="index + 1"
          :index="singer.Findex">
        </singer-bar>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import divider from '@/components/utils/divider'
import SingerBar from '@/components/bar/singer-bar'
import SingerSelectorBar from '@/components/bar/singer-selector-bar'
import BoardLoadingAnimation from '@/components/utils/board-loading-animation'
export default {
  components: {
    SingerBar,
    divider,
    SingerSelectorBar,
    BoardLoadingAnimation
  },
  data() {
    return {
      loading: true,
      singerList: [],
      key: "all_all_all",
      pagenum: 1,
    }
  },
  methods: {
    updateParams: function(key) {
      this.key = key
      this.getSingerList(this.pagenum, this.key)
    },
    getSingerList: function(pagenum, key) {
      var params = {
        pagenum: pagenum,
        channel: 'singer',
        key: key
      }
      var vm = this
      this.$store.dispatch('getSingerList', params).then((response) => {
        console.log("data")
        console.log(response.data)
        // console.log(response.data.data.list)
        vm.singerList = response.data.data.list
        vm.loading = false;
      }, (response) => {
        console.log("error")
        console.log(response)
      })
    }
  },
  created: function() {
    this.getSingerList(1, this.key)
  }
}
</script>

<style lang="css" scoped>
#singers-board{
  background: rgba(255, 255, 255, 0);
  flex: 1;
}
</style>
