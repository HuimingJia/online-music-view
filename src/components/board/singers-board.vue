<template lang="html">
  <div id="singers-board" @updateKey="updateParams(params)">
    <div class="container-fluid">
      <divider color="#555555" title="Singer List"></divider>
      <div class="row">
        <div class="col-12">
          <singer-selector-bar></singer-selector-bar>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6 col-xl-4" v-for="singer in singerList"  v-if="singer !== null">
          <singer-bar
          :id = "singer.Fsinger_id"
          :mid = "singer.Fsinger_mid"
          :name="singer.Fsinger_name"
          :other_name="singer.Fother_name"
          :genre="singer.Fgenre"
          :area="singer.Farea"
          :sort="singer.Fsort"
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
export default {
  components: {
    SingerBar,
    divider,
    SingerSelectorBar,
  },
  data() {
    return {
      singerList: {
        type: Array,
        default: null,
        type: "all",
        region: "all",
        name: "all",
        pagenum: 1,
      }
    }
  },
  methods: {
    updateParams: function(params) {
      alert("!23")
      this.type = params.type
      this.region = params.region
      this.name = params.name
      alert("type" + this.type + "-region" + this.region + "-name" + this.region)
    },
    getSingerList: function(pagenum, key) {
      var params = {
        pagenum: pagenum,
        channel: singer,
        key: key
      }
      this.$store.dispatch('getSingerList', params).then((response) => {
        console.log("data")
        console.log(response.data)
        // console.log(response.data.data.list)
        this.singerList = response.data.data.list
      }, (response) => {
        console.log("error")
        console.log(response)
      })
    }
  },
  created: function() {
    this.getSingerList(1, "all_all_all")
  }
}
</script>

<style lang="css" scoped>
#singers-board{
  background: rgba(255, 255, 255, 0);
  flex: 1;
}
</style>
