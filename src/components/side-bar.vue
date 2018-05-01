<template lang="html">
  <div id="sidebar">
    <div class="sidebar-title">Explore
      <hr></hr>
    </div>

    <sidebar-button text="For Me" icon="target" link="home"></sidebar-button>
    <sidebar-button text="Billboard" icon="award" link="billboard"></sidebar-button>
    <sidebar-button text="Singers" icon="users" link="singers"></sidebar-button>
    <!-- <ul>
    <li>For-Me</li>
    <li>Billboard</li>
    <li>Singers</li>
  </ul> -->
</div>
</template>

<script>
import SidebarButton from '@/components/button/sidebar-button.vue'
export default {
  components: {
    SidebarButton
  }
}
</script>

<style lang="css" scoped>
#sidebar {
  width: 250px;
  background-color: rgb(255,255,255,0.5);
}

.sidebar-title {
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 15px;
  font-size: 30px;
}
</style>
