<template lang="html">
  <div class="header">
    <router-link class="header-brand my-auto" :to="{ name: 'home', params: {} }">
      <img class="header-brand-img" v-lazy="require('@/assets/imgs/album-cover.jpg')" height="38px" alt="music-player"/>
    </router-link>

    <div id="search-bar" class="my-auto">
      <div class="search-bar-control">
        <form @submit.prevent="search(key)" class="input-group-search" :class="{'search-bar-lg':isShowSearchList}">
          <input class="search-bar-input" v-model="key" @focus="focusSearchInput()" @blur="unfocusSearchInput()" type="text" placeholder="Launch">
        </form>
        <div class="input-group-prepend">
          <span class="input-group-text"><v-icon name="search"></v-icon></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters} from 'vuex'
import * as vars from '@/global/vars'
export default {
  computed: {
    key: {
      get () {
        return this.$store.state.SearchStore.key
      },
      set (k) {
        this.setKey(k)
      }
    },
    ...mapGetters([
      'isShowSearchList'
    ])
  },
  methods: {
    search(key) {
      this.addHistory(key)
      this.$router.push({name: 'search', params: {key: key}})
    },
    ...mapMutations([
      'play', 'pause', 'playLast', 'playNext', 'playContinue', 'setKey', 'hideSearchList', 'showSearchList', 'addHistory',
      'focusSearchInput', 'unfocusSearchInput'
    ]),

  }
}
</script>

<style lang="css" scoped>
.header {
  display: flex;
  flex-direction: row;
  height: 50px;
  overflow: hidden;
  background: black;
  box-shadow:
  0 15px 30px 0 rgbaa(0,0,0,0.11),
  0 5px 15px 0 rgbaa(0,0,0,0.08);
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

.search-bar-input {
  height: 38px;
  width: 100%;
  border: 0px;
  border-radius: 0px;
  border-top-right-radius: 19px;
  border-bottom-right-radius: 19px;
  padding-left: 15px;
}

.search-bar-input:focus {
  outline-width: 0px;
}

.search-bar-lg {
  flex: 1;
}
</style>
