import Vue from 'vue'
import Router from 'vue-router'
import ForMeBoard from '@/components/board/for-me-board'
import BillboardBoard from '@/components/board/billboard-board'
import SingersBoard from '@/components/board/singers-board'
import AlbumBoard from '@/components/board/album-board'
import SearchResBoard from '@/components/board/search-res-board'
import SongListBoard from '@/components/board/song-list-board'
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
      path: '/billboard',
      name: 'billboard',
      component: BillboardBoard
    },{
      path: '/singers',
      name: 'singers',
      component: SingersBoard
    },{
      path: 'album',
      name: 'album',
      component: AlbumBoard
    },{
      path: 'search-res',
      name: 'search-res',
      component: SearchResBoard
    },{
      path: '/song-list/:id',
      name: 'song-list',
      component: SongListBoard,
    }
  ]
})
