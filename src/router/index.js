import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Table from '@/components/Table'
import Main1 from '@/components/main1'
import Main2 from '@/components/main2'
import Mainright from '@/components/MainRight.vue'
import StatisticalAnalysis from '@/components/StatisticalAnalysis.vue'
import Customer from '@/components/Customer.vue'
import UserSetting from '@/components/UserSetting.vue'
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
    },
    {
      path: '/StatisticalAnalysis',
      name: 'StatisticalAnalysis',
      component: StatisticalAnalysis
    },
    {
      path: '/Customer',
      name: 'Customer',
      component: Customer
    },
    {
      path: '/UserSetting',
      name: 'UserSetting',
      component: UserSetting
    }

  ]
})
