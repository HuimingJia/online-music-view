<template lang="html">
<div class="slide-show">
    <img class="slide-show-img" width="20%" v-for="s in cases" v-lazy="s.pic"></img>
</div>
</template>

<script>
export default {
  props: {
    cases: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="css" scoped>
.slide-show{
  height: 100px;
  background: yellow;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.slide-show-img {
  flex: 1;
}
</style>
