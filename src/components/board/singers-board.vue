<template lang="html">
<div id="singers-board">
  <!-- <div class="col-12 col-lg-6 col-xl-4" v-for="toplist in topList">
    <toplist-cover
    :img="toplist.picUrl"
    :title="toplist.topTitle"
    :song_list="toplist.songList"
    :id = "toplist.id">
    </toplist-cover>
  </div> -->
</div>
</template>

<script>
export default {
  data() {
    return {
      singer_list: {
        type: Array,
        default: null,
      }
    }
  },
  created: function() {
    this.$store.dispatch('getSingerList', 2).then((response) => {
      console.log("data")
      console.log(response.data.list)
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
