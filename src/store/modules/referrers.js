import axios from 'axios'
// import _ from 'lodash'
import EventBus from '@/misc/EventBus'

// initial state
const state = {
  servicesRates: [],
  brandsRates: [],
  groupInsight: []
}

// keep a copy to unset
// const initialState = _.clone(state)

// getters
const getters = {
  // we don't use the state for this specific entry so we keep the user throughout pages
  getServicesRates: (state) => state.servicesRates,
  getBrandsRates: (state) => state.brandsRates,
  getGroupInsight: (state) => state.groupInsight
}

// actions
const actions = {
  async fetchServicesRates (context, params) {
    try {
      let response = await axios.get(`customer/referrer/services_rates`, {params: params})
      context.commit('setServicesRates', response.data)
      console.log('the services rates were set.')
    } catch (error) {
      EventBus.$emit('errorEvent', error.response.data)
    }
  },

  async fetchBrandsRates (context, params) {
    try {
      let response = await axios.get(`customer/referrer/brands_rates`, {params: params})
      context.commit('setBrandsRates', response.data)
      console.log('the brands rates were set.')
    } catch (error) {
      EventBus.$emit('errorEvent', error.response.data)
    }
  }
}

// mutations
const mutations = {
  setServicesRates (state, servicesRates) {
    state.servicesRates = servicesRates
  },

  setBrandsRates (state, brandsRates) {
    state.brandsRates = brandsRates
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
