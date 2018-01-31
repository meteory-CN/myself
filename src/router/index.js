import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Table from '@/components/Table'
import Main1 from '@/components/main1'
import Main2 from '@/components/main2'
import Mainright from '@/components/MainRight.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    },
    {
      path: '/main1/:id',
      name: 'main1',
      component: Main1
    },
    {
      path: '/main2',
      name: 'main2',
      component: Main2
    },
    {
      path: '/mainright',
      name: 'mainright',
      component: Mainright
    }

  ]
})
