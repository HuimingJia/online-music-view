<template lang="html">
  <div id="search-list">
    <div class="wrapper">
      <div class="history-list">
        <div class="hotkey-list">
          <div v-for="key in history" class="hotkey" @click="setKey(key)">
            {{key}} - {{key}}
          </div>
        </div>
      </div>
      <hr>
      <div class="hotkey-list">
        <div v-for="key in hotKey" class="hotkey" @click="setKey(key.k)">
          {{key.k}} - {{key.n}}
        </div>
      </div>
      {{specialKey}} - {{specialUrl}}
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters} from 'vuex'
import * as vars from '@/global/vars'
export default {
  data () {
    return {
      hotKey: [],
      specialKey: null,
      specialUrl: null,
    }
  },
  created: function() {
    this.getHotKey();
  },
  methods: {
    clear() {
      document.getElementById('audio').pause()
      this.pause()
      this.clearsearchList()
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
      }, (response) => {
        console.log(response)
      })
    },
    setKey(key) {
      this.setKey(key)
      this.addHistory(key)
      alert("123")

      this.$router.push({name: 'search', params: {key: key}})
    },
    ...mapMutations([
      'setKey', 'clearsearchList','hidesearchList','addHistory'
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
#search-list {
  border-radius: 15px;
  padding: 25px;
  position: absolute;
  background: rgb(35,37,38,1);
  height: 450px;
  width: 450px;
  top: 65px;
  right: 15px;
  z-index: 3;
  color: white;
  box-shadow:
  0 15px 30px 0 rgba(0,0,0,0.44),
  0 5px 15px 0 rgba(0,0,0,0.32);
}

#search-list::-webkit-scrollbar {
  display: none;
}
.wrapper {
  height: 400px;
  overflow: scroll;
}

.wrapper::-webkit-scrollbar {
  display: none;
}

.hotkey-list {
  margin-top: 20px;
}
.hotkey {
  border: solid 1px white;
  padding: 5px;
  border-radius: 10px;
  margin: 5px;
  transition: all 0.5s
}

.hotkey:hover {
  background-color: white;
  color: black;
}

.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}

.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(10px);
}
</style>
