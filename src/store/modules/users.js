import axios from 'axios'
import _ from 'lodash'
import EventBus from '@/misc/EventBus'

// initial state
const state = {
  // the first state is actually the localStorage
  userToken: null,
  currentUser: {
    email: null
  }
}

// keep a copy to unset
const initialState = _.clone(state)

// getters
const getters = {
  // we don't use the state for this specific entry so we keep the user throughout pages
  getUserToken: (state) => state.userToken,
  getCurrentUser: (state) => state.currentUser
}

// actions
const actions = {
  async authenticateWechatUser (context, authenticateData) {
    try {
      let response = await axios.post(`connect/wechat`, authenticateData)
      context.commit('setUserToken', response.data.token)
      context.commit('setCurrentUser', response.data)
      console.log('current user was set')
      console.log(context.state.currentUser)
      // window.location.href = '/'
    } catch (error) {
      EventBus.$emit('errorEvent', error.response.data.error)
    }
  },

  async fetchCurrentUser (context, params) {
    try {
      let response = await axios.get(`user`, {params: params})
      context.commit('setUserToken', response.data.token)
      context.commit('setCurrentUser', response.data)
      console.log('current user was set.')
    } catch (error) {
      EventBus.$emit('rebootEvent', error.response.data.error)
    }
  }

}

// mutations
const mutations = {
  setCurrentUser (state, user) {
    state.currentUser = user
  },

  unsetCurrentUser (state) {
    localStorage.clear()
    state.currentUser = initialState.currentUser
    state.userToken = null // we have to manually set it to null because we play with localStorage
  },

  setUserToken (state, token) {
    state.userToken = token
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}