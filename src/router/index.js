import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home')
const Cate = () => import('../views/Cate')
const Comicend = () => import('../views/Comicend')
const Daypub = () => import('../views/Daypub')
const Mine = () => import('../views/Mine')
const Rank = () => import('../views/Rank')
const SearchResult = () => import('../views/SearchResult')
const Search = () => import('../views/Search')
const Login = () => import('../views/Login')
const Register = () => import('../views/Register')
const fineworks = () => import('../views/Fineworks')
const hotserial = () => import('../views/Hotserial')
const newarrival = () => import('../views/Newarrival')
const popularworks = () => import('../views/Popularworks')
const weekrecommend = () => import('../views/Weekrecommend')
const xiaobianrecommend = () => import('../views/Xiaobianrecommend')
const comicDetails = () => import('../views/Details')

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
