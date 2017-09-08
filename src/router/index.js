import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import homeview from '../components/homeview'
import detailview from '../components/detailview'
import postview from '../components/postview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homeview',
      component: homeview
    },
    {
      path: '/detailview',
      name: 'detailview',
      component: detailview
    },
    {
      path: '/postview',
      name: 'Postview',
      component: postview
    }
  ]
})
