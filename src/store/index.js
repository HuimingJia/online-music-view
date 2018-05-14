import Vue from 'vue'
import Vuex from 'vuex'

import ApiStore from '@/store/api-store'
import PlayStore from '@/store/play-store'
import ComponentStore from '@/store/component-store'
import SearchStore from '@/store/search-store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ApiStore,
    PlayStore,
    ComponentStore,
    SearchStore
  }
})
