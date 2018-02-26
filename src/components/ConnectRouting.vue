<template>
  <div v-if="currentUser.token">
    <router-view/>
  </div>
</template>

<script>
import EventBus from '@/misc/EventBus'

export default {
  data () {
    return {}
  },

  created () {
    /**
    * We put a listener to the rebootEvent
    * when a crash needs a reboot and clear cache / session
    * we use this command
    */
    EventBus.$on('rebootEvent', error => {
      if (error) {
        console.log(error)
        localStorage.clear()
      }
      window.location.href = '/'
    })

    /**
    * We put a listener to the crashEvent
    * This kind of error is major and lock the application itself
    * until the person refreshes the page entirely
    */
    EventBus.$on('crashEvent', error => {
      if (error.message === 'Network Error') {
        this.error = 'Oh snap ! There is a network error, please refresh the page.'
      }
    })

    /**
    * We put a listener to the errorEvent
    * This kind of errors is minor and dispatch an error message
    */
    EventBus.$on('errorEvent', error => {
      this.$noty.error(error)
    })

    this.connectWechat()
  },

  methods: {
    connectWechat () {
      this.$store.dispatch('authenticateWechatUser', { code: 'guide@guide.com' })
    }
  },

  computed: {
    currentUser () {
      return this.$store.getters.getCurrentUser
    }
  },

  components: {
  }

}
</script>
