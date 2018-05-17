import Vue from 'vue'
import Router from 'vue-router'
import ForMeBoard from '@/components/board/for-me-board'

import SingersBoard from '@/components/board/singers-board'
import SingerBoard from '@/components/board/singer-board'

import AlbumBoard from '@/components/board/album-board'
import SearchBoard from '@/components/board/search-board'
import ToplistsBoard from '@/components/board/toplists-board'
import ToplistBoard from '@/components/board/toplist-board'

import PlaylistBoard from '@/components/board/playlist-board'



import home from '@/components/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home',
    },{
      path: '/home',
      name: 'home',
      component: ForMeBoard
    },{
      path: '/toplists',
      name: 'toplists',
      component: ToplistsBoard
    },
    {
      path: '/toplist/:id',
      name: 'toplist',
      component: ToplistBoard,
    },
    {
      path: '/playlist/:id',
      name: 'playlist',
      component: PlaylistBoard,
    },
    {
      path: '/singers',
      name: 'singers',
      component: SingersBoard
    },
    {
      path: '/singer/:id',
      name: 'singer',
      component: SingerBoard
    },
    {
      path: '/album/:id',
      name: 'album',
      component: AlbumBoard
    },{
      path: '/search/:key',
      name: 'search',
      component: SearchBoard
    }
  ]
})
