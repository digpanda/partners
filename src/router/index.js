import Vue from 'vue'
import Router from 'vue-router'
import Insight from '@/components/Insight'
import Index from '@/components/Index'
import ProvisionRates from '@/components/ProvisionRates'
import Share from '@/components/Share'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'Index'}
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/provision-rates',
      name: 'ProvisionRates',
      component: ProvisionRates
    },
    {
      path: '/insight',
      name: 'Insight',
      component: Insight
    },
    {
      path: '/share',
      name: 'Share',
      component: Share
    }
  ]
})
