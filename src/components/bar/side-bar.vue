<template lang="html">
  <div id="sidebar">
    <div class="sidebar-title">Explore
      <hr></hr>
    </div>

    <sidebar-button text="For Me" icon="target" link="home"></sidebar-button>
    <sidebar-button text="Trending" icon="award" link="toplists"></sidebar-button>
    <sidebar-button text="Singers" icon="users" link="singers"></sidebar-button>
    <transition name="scale">
      <play-card-sm></play-card-sm>
    </transition>
    <!-- <ul>
    <li>For-Me</li>
    <li>toplist</li>
    <li>Singers</li>
  </ul> -->
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
#sidebar {
  width: 250px;
  background-color: rgb(255,255,255,0.6);
}

.sidebar-title {
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 15px;
  font-size: 30px;
}
</style>
