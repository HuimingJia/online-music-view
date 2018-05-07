<template lang="html">
  <div class="header">
    <router-link class="header-brand my-auto" :to="{ name: 'home', params: {} }">
      <img class="header-brand-img" v-lazy="require('@/assets/imgs/album-cover.jpg')" height="38px" alt="music-player"/>
    </router-link>

    <div class="search-bar text-right">
      <form id="search-form" class="form-inline my-auto">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"><v-icon name="search"></v-icon></span>
          </div>
          <input type="text" class="form-control" placeholder="Launch">
        </div>
      </form>
    </div>

  </div>
</template>

<script>
export default {
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

.form-control{
  border: 0px;
  border-radius: 19px;
  width: 250px;
}

.input-group-text {
  border: 0px;
  border-radius: 19px;
}

.search-bar {
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
  padding-right: 15px;
  height: 100%;
}
</style>
