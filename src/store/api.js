import Vue from 'vue'

import API from '../config/api'

function apiFactory(api) {
  return (id = null) => Vue.http.jsonp(
    api.url,
    {
      params: api.params(id),
      jsonp: api.jsonp
    }
  )
}

export default {
  actions: {
    getFirstPage({}){
      return apiFactory(API.first_page_data)()
    },
    getRankList({}){
      return apiFactory(API.rank_list)()
    },
    getRankSongs({}, id){
      return apiFactory(API.rank_songs)(id)
    },
    getSingerList({}, pagenum){
      return apiFactory(API.singer_list)(pagenum)
    },
    getAlbum({}, id){
      return apiFactory(API.album)(id)
    },
    getSingerInfo({}, id){
      return apiFactory(API.singer_info)(id)
    },
    search({}, key){
      return apiFactory(API.search)(key)
    },
    getHotKey({}){
      return apiFactory(API.hotkey)()
    },
    getCdList({},id){
      return apiFactory(API.cd)(id)
    },
    getLyric({},id){
      return Vue.http.jsonp('https://api.darlin.me/music/lyric/'+id+'/',{
        jsonp:'callback'
      })
    }
  }
}
