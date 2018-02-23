<template>
  <router-view/>
</template>

<script>

export default {
  data () {
    return {}
  },

  created () {
    this.connectWechat()
  },

  methods: {
    connectWechat () {
      this.$store.dispatch('authenticateWechatUser', { code: 'customer1@customer.com' })
    }
  },

  components: {
  }

}
</script>
