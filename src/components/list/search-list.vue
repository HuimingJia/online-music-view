<template lang="html">
  <div id="search-list" @click="focusSearchList()">
    <div class="wrapper">
      <loading v-if="loading"></loading>
      <div class="history-list" v-if="history.length > 0">
        <div class="historys">
          <div v-for="key in history" class="history" @click="search(key)">
            {{key}}
          </div>
        </div>
        <span class="my-auto" @click="clear()"><v-icon name="trash"></v-icon></span>
        <hr>
      </div>


      <div class="special text-justify" v-if="specialUrl"><span>Special</span>  <a class="special-link" :href="specialUrl" target="_blank">{{specialKey}}</a></div>
      <div class="hotkey-list">
        <div v-for="(key, index) in hotKey" class="hotkey" @click="search(key.k)">
          {{index + 1}}. {{key.k}}  <span class="badge badge-dark text-right">{{convert(key.n)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters} from 'vuex'
import Loading from '@/components/utils/loading-animation'
import * as vars from '@/global/vars'

export default {
  components: {
    Loading
  },
  data () {
    return {
      hotKey: [],
      specialKey: null,
      specialUrl: null,
      loading: true,
    }
  },
  created: function() {
    this.getHotKey();
  },
  methods: {
    clear() {
      this.clearHistory()
    },
    hide() {
      this.hidesearchList()
    },
    getHotKey() {
      var vm = this
      this.$store.dispatch('getHotKey').then((response) => {
        vm.hotKey = response.data.data.hotkey.slice(0, 10)
        vm.specialKey = response.data.data.special_key
        vm.specialUrl = response.data.data.special_url
        vm.loading = false;
      }, (response) => {
        console.log(response)
      })
    },
    search(key) {
      this.setKey(key)
      this.addHistory(key)
      this.$router.push({name: 'search', params: {key: key}})
    },
    convert(number) {
      return String((number / 1000.0).toFixed(1)) + 'k';
    },
    ...mapMutations([
      'setKey', 'clearHistory','hidesearchList','addHistory', 'focusSearchList', 'unfocusSearchList'
    ]),
  },
  computed: {
    ...mapState({
      history: state => state.SearchStore.history,
    }),
    ...mapGetters([
      'progress', 'duration','curcAlbumImg'
    ]),
  },
}
</script>

<style lang="css" scoped>
@font-face {
  font-family: 'Monoton';
  src: url('~@/assets/fonts/Monoton-Regular.ttf') format('truetype');
}

#search-list {
  border-radius: 0px;
  padding: 15px;
  position: absolute;
  background: rgba(255,255,255,0.9);
  width: 450px;
  top: 15px;
  right: 15px;
  z-index: 8;
  color: white;
  box-shadow:
  0 15px 30px 0 rgba(0,0,0,0.44),
  0 5px 15px 0 rgba(0,0,0,0.32);
}

#search-list::-webkit-scrollbar {
  display: none;
}

.special {
  font-family: Monoton;
  font-size: 24px;
}

.special-link {
  color: black;
}

.special:visited {
  color: black;
}

.wrapper {
  color: black;
  /* height: 400px; */
  overflow: scroll;
}

.icon {
  height: 24px;
  margin-left: 15px;
  color: black;
  transition: all 0.5s;
}

.icon:hover {
  color: rgba(0,0,0,0.2)
}

.wrapper::-webkit-scrollbar {
  display: none;
}

.history-list {
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.historys {
  flex:1;
  display: flex;
  flex-direction: row;
  overflow: scroll;
}

.historys::-webkit-scrollbar {
  display: none;
}

.history {
  border: solid 1px black;
  color: black;
  padding: 5px;
  border-radius: 10px;
  margin: 5px;
  transition: all 0.5s;
  white-space: nowrap;
}

.hotkey-list {
  margin-top: 20px;
}

.hotkey {
  border: solid 1px black;
  color: black;
  padding: 5px;
  border-radius: 10px;
  margin: 5px;
  transition: all 0.5s
}

.hotkey:hover {
  background: black;
  color: white;
}

.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}

.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(10px);
}
</style>
