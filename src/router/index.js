import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Browse from '@/components/Browse'
import Explain from '@/components/Explain'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },

    {
      path: '/explain',
      component: Explain
    },

    {
      path: '/browse',
      component: Browse
    },

    {
      path: '/search/:searchKey',
      component: Search,
      props: true
    }
  ]
})
