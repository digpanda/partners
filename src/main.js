// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import _ from 'lodash'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMeta from 'vue-meta'
import VueNoty from 'vuejs-noty'

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VAlert,
  VDataTable,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

// Axios configuration
Vue.prototype.$axios = axios
Vue.use(VueAxios, axios)

// NotyJS
Vue.use(VueNoty, {
  theme: 'mint',
  timeout: 1000,
  progressBar: true,
  layout: 'topRight'
})

console.log('Environment : ' + process.env.NODE_ENV)
console.log('Api : ' + process.env.API)

// Api end point
Vue.axios.defaults.baseURL = process.env.API

// VueMeta
Vue.use(VueMeta)

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VAlert,
    VDataTable,
    transitions
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',

  created () {
    axios.interceptors.request.use((config) => {
      /**
       * if the token isn't already present we add it up to the system
       * we also keep the other data by merging the objects
       */
      config.params = _.merge({token: this.$store.getters.getUserToken}, config.params)
      return config
    })

    // axios.interceptors.response.use((response) => {
    //   return response
    // })
  }
})
