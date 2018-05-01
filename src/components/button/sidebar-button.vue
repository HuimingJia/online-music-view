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
  background-color: rgb(255, 255, 255, 0.8);
  transition: all 0.5s;
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 15px;
  border-radius: 5px;
}

.side-bar-btn:hover {
  background-color: rgb(0, 0, 0, 0.8);
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
  overflow: hidden;
}
</style>
