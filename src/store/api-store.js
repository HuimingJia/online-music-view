import Vue from 'vue'

import API from '@/global/api'

function apiFactory(api) {
  return (params) => Vue.http.jsonp(
    api.url,
    {
      params: api.params(params),
      jsonp: api.jsonp
    }
  )
}

export default {
  actions: {
    getFirstPage({}){
      return apiFactory(API.first_page_data)({})
    },
    getTopLists({}){
      return apiFactory(API.top_lists)({})
    },
    getTopList({}, id){

      return apiFactory(API.top_list)({'id': id})
    },
    getPlayList({},id){
      return apiFactory(API.play_list)({'id': id})
    },
    getSingerList({}, params){
      return apiFactory(API.singer_list)(params)
    },
    getSinger({}, id){
      return apiFactory(API.singer_info)({'id': id})
    },
    // getLyric({}, id) {
    //   return apiFactory(API.lyric)(id)
    // },
    getLyric({}, id){
      return Vue.http.jsonp('https://api.darlin.me/music/lyric/' + id +'/',{
        jsonp:'callback'
      })
    },
    getAlbum({}, id){
      return apiFactory(API.album)({'id': id})
    },
    search({}, key){
      return apiFactory(API.search)({'key': key})
    },
    getHotKey({}){
      return apiFactory(API.hotkey)({})
    }
  }
}
