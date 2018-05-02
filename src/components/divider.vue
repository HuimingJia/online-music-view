<template lang="html">
<div class="divider">
  <h3 class="divider-title" :style="{color: color}">{{title}}</h3>
  <div class="divider-decorator" :style="{backgroundColor: color}"></div>
  <div class="divider-line" :style="{backgroundColor: color}"></div>
</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: null,
    }
  }
}
</script>

<style lang="css" scoped>
.divider-decorator {
  height: 5px;
  width: 100px;
}

.divider-line {
  width: 100%;
  height: 2px;
}
</style>
