<template>
  <v-container fluid>
    <div class="share">
      <div v-if="qrcode">
        <h2>QRCode</h2>
        <p>
          <img :src='qrcode' />
        </p>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data () {
    return {}
  },

  created () {
    this.$store.dispatch('fetchQrcode', {})
  },

  computed: {
    qrcode () {
      return this.$store.getters.getQrcode
    }
  },

  methods: {
  },

  components: {
  }

}
</script>
