import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Intro'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
  ]
})

export default router
