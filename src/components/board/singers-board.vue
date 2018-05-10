<template lang="html">
<div id="singers-board">
  <div class="container-fluid">
    <divider color="#555555" title="Singer List"></divider>
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
export default {
  components: {
    SingerBar,
    divider
  },
  data() {
    return {
      singerList: {
        type: Array,
        default: null,
      }
    }
  },
  created: function() {
    this.$store.dispatch('getSingerList', 1).then((response) => {
      console.log("data")
      console.log(response.data)
      // console.log(response.data.data.list)
      this.singerList = response.data.data.list
    }, (response) => {
      console.log("error")
      console.log(response)
    })

  }
}
</script>

<style lang="css" scoped>
#singers-board{
  background-color: rgb(255, 255, 255, 0);
  flex: 1;
}
</style>
