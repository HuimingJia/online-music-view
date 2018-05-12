<template lang="html">
  <div class="header">
    <router-link class="header-brand my-auto" :to="{ name: 'home', params: {} }">
      <img class="header-brand-img" v-lazy="require('@/assets/imgs/album-cover.jpg')" height="38px" alt="music-player"/>
    </router-link>

    <div id="search-bar" class="my-auto">
      <div class="search-bar-control">
        <input class="input-group-search" @focus="focus()" @blur="blur()" type="text" placeholder="Launch">
        <div class="input-group-prepend">
          <span class="input-group-text"><v-icon name="search"></v-icon></span>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  methods: {
    focus() {
      $('.input-group-search').addClass("search-bar-lg");
    },
    blur() {
      $('.input-group-search').removeClass("search-bar-lg");
    }
  }
}
</script>

<style lang="css" scoped>
.header {
  display: flex;
  flex-direction: row;
  height: 50px;
  overflow: hidden;
  background-color: black;
  box-shadow:
  0 15px 30px 0 rgba(0,0,0,0.11),
  0 5px 15px 0 rgba(0,0,0,0.08);
}

.header-brand {
  padding-left: 15px;
}

.header-brand-img {
  border-radius: 25px;
}

.icon {
  height: 24px;
}

#search-bar {
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
  margin-left: 15px;
  margin-right: 15px;
  height: 38px;
  border-top-left-radius: 19px;
  border-bottom-left-radius: 19px;
  transition: all 0.5px;
}

.search-bar-control {
  max-width: 500px;
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
}

.input-group-prepend {
  border: 0px;
}

.input-group-text {
  border: 0px;
  border-radius: 0px;
  border-top-left-radius: 19px;
  border-bottom-left-radius: 19px;
}

.input-group-search {
  border: 0px;
  border-radius: 0px;
  border-top-right-radius: 19px;
  border-bottom-right-radius: 19px;
  padding-left: 15px;
  transition: all 0.5s;
}

.input-group-search:focus {
  outline-width: 0px;
}

.search-bar-lg {
  flex: 1;
}
</style>
