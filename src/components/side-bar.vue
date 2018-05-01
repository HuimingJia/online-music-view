<template lang="html">
<div id="sidebar">
<h5>Explore</h5>
<hr></hr>
<sidebar-button text="For Me" icon="" link="for-me"></sidebar-button>
<sidebar-button text="Billboard" icon="" link="billboard"></sidebar-button>
<sidebar-button text="Singers" icon="" link="singers"></sidebar-button>
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
  width: 200px;
  background-color: rgb(0,0,0,0.5);
}
</style>
