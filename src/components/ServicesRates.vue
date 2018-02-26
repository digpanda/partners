<template>
  <div v-if="servicesRates">
    <v-data-table :headers="headers" :items="servicesRates" hide-actions class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.rate }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        { text: 'Service', value: 'name' },
        { text: 'Rate', value: 'rate' }
      ]
    }
  },

  created () {
    this.$store.dispatch('fetchServicesRates', {})
  },

  computed: {
    servicesRates () {
      return this.$store.getters.getServicesRates
    }
  }

}
</script>
