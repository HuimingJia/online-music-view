<template lang="html">
  <div class="header">
    <router-link class="header-brand my-auto" :to="{ name: 'home', params: {} }">
      <img class="header-brand-img" :src="require('@/assets/imgs/album-cover.jpg')" height="38px" alt="music-player"/>
    </router-link>

    <!-- <div class="search-bar"> -->
      <form id="search-form" class="form-inline">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"><v-icon name="search"></v-icon></span>
          </div>
          <input type="text" class="form-control" placeholder="Launch">
        </div>
      </form>
    <!-- </div> -->

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

#search-form {
  margin-left: 150px;
}

.form-control{
  border: 0px;
  border-radius: 19px;
  width: 500px;
}

.input-group-text {
  border: 0px;
  border-radius: 19px;
}
</style>
