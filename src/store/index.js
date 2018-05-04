import Vue from 'vue'
import Vuex from 'vuex'

import Api from '@/store/api'
import Play from '@/store/play'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Api,
    Play,
  }
})
