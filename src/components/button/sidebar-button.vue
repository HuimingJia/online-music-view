<template lang="html">
  <router-link class="side-bar-btn" :to="{ name: link }" tag="li">
    <v-icon class="my-auto" :name="icon"></v-icon>
    <div class="link my-auto">{{text}}</div>
  </router-link>
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
  height: 50px;
  background: rgba(255, 255, 255, 0.8);
  transition: all 0.5s;
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
}

.side-bar-btn:hover {
  background: rgba(0, 0, 0, 0.8);
  color: white;
}

.icon {
  height: 24px;
  margin-left: 15px;
  margin-right: 15px;
}

.link {
  flex: 1;
  height: 24px;
  margin-right: 15px;
  overflow: hidden;
}
</style>
