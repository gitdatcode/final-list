import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: 'home' */ '../components/Home')
const Movies = () => import(/* webpackChunkName: 'movies' */ '../components/views/movies/Movies')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/movies',
      name: 'movies',
      component: Movies
    }
  ]
})
