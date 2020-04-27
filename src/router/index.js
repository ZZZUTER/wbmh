import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Cate from '../views/Cate'
import Comicend from '../views/Comicend'
import Daypub from '../views/Daypub'
import Login from '../views/Login'
import My from '../views/My'
import Rank from '../views/Rank'
import Register from '../views/Register'
import Search from '../views/Search'
import SearchResult from '../views/SearchResult'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/cate', component: Cate },
    { path: '/comicend', component: Comicend },
    { path: '/daypub', component: Daypub },
    { path: '/login', component: Login },
    { path: '/my', component: My },
    { path: '/rank', component: Rank },
    { path: '/register', component: Register },
    { path: '/search', component: Search },
    { path: '/search-result', component: SearchResult },
    { path: '/', redirect: '/home' }
  ]
})

export default router
