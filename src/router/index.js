import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Cate from '../views/Cate'
import Comicend from '../views/Comicend'
import Daypub from '../views/Daypub'
import Mine from '../views/Mine'
import Rank from '../views/Rank'
import SearchResult from '../views/SearchResult'
import Search from '../views/Search'
import Login from '../views/Login'
import Register from '../views/Register'
import fineworks from '../views/Fineworks'
import hotserial from '../views/Hotserial'
import newarrival from '../views/Newarrival'
import popularworks from '../views/Popularworks'
import weekrecommend from '../views/Weekrecommend'
import xiaobianrecommend from '../views/Xiaobianrecommend'
import comicDetails from '../views/Details'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/cate', component: Cate },
    { path: '/comicend', component: Comicend },
    { path: '/daypub', component: Daypub },
    { path: '/mine', component: Mine },
    { path: '/rank', component: Rank },
    { path: '/search-result', component: SearchResult },
    { path: '/search', component: Search },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    {
      path: '/fineworks',
      component: fineworks
    },
    {
      path: '/hotserial',
      component: hotserial
    },
    {
      path: '/newarrival',
      component: newarrival
    },
    {
      path: '/popularworks',
      component: popularworks
    },
    {
      path: '/weekrecommend',
      component: weekrecommend
    },
    {
      path: '/xiaobianrecommend',
      component: xiaobianrecommend
    },
    {
      path: '/details',
      component: comicDetails
    },
    { path: '/', redirect: '/home' }
  ]
})

export default router
