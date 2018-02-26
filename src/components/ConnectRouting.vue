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
      this.$store.dispatch('authenticateWechatUser', { code: 'guide@guide.com' })
    }
  },

  components: {
  }

}
</script>
