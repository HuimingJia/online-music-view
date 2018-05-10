<template lang="html">
  <div id="sidebar">
    <div class="sidebar-title">EX-PLORE
      <hr></hr>
    </div>

    <sidebar-button text="For Me" icon="target" link="home"></sidebar-button>
    <sidebar-button text="Trending" icon="award" link="toplists"></sidebar-button>
    <sidebar-button text="Singers" icon="users" link="singers"></sidebar-button>
    <transition name="scale">
      <play-card-sm></play-card-sm>
    </transition>
  </div>
</template>

<script>
import SidebarButton from '@/components/button/sidebar-button.vue'
import PlayCardSm from "@/components/play-card-sm"
export default {
  components: {
    SidebarButton,
    PlayCardSm,
  }
}
</script>

<style lang="css" scoped>
@font-face {
  font-family: 'Monoton';
  src: url('~@/assets/fonts/Monoton-Regular.ttf') format('truetype');
}

#sidebar {
  width: 250px;
  background-color: rgb(255,255,255,0.6);
  -moz-box-shadow: 0 0px 8px 0 rgba(0,0,0,0.12), 0 0px 4px 0 rgba(0,0,0,0.08);
  -webkit-box-shadow: 0 0px 8px 0 rgba(0,0,0,0.12), 0 0px 4px 0 rgba(0,0,0,0.08);
  box-shadow: 0 0px 8px 0 rgba(0,0,0,0.12), 0 0px 4px 0 rgba(0,0,0,0.08);
}

.sidebar-title {
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 15px;
  /* font-family: Monoton; */
  font-size: 30px;
}
</style>
