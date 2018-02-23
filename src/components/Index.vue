<template>
  <v-container fluid>
    <div v-if="currentUser">
      Welcome {{currentUser.email}}
    </div>
  </v-container>
</template>

<style scoped>
</style>

<script>

export default {
  data () {
    return {}
  },

  created () {
  },

  methods: {
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
