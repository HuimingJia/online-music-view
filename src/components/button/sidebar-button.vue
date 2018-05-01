<template lang="html">
<div class="side-bar-btn">
  <v-icon :name="icon"></v-icon>
  <router-link :to="{ name: '', params: {} }">{{text}}</router-link>
</div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    link: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="css" scoped>
.side-bar-btn {
  display: flex;
  flex-direction: row;
}

.v-icon {
  height: 24px;
}
</style>
