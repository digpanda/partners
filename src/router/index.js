import Vue from 'vue'
import Router from 'vue-router'
import GroupInsight from '@/components/GroupInsight'
import Index from '@/components/Index'
import ProvisionRates from '@/components/ProvisionRates'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/provision-rates',
      name: 'ProvisionRates',
      component: ProvisionRates
    },
    {
      path: '/group-insight',
      name: 'GroupInsight',
      component: GroupInsight
    }
  ]
})
