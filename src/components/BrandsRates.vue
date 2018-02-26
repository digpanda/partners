<template>
  <div v-if="brandsRates">
    <v-data-table :headers="headers" :items="brandsRates" hide-actions class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.range }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        { text: 'Brand', value: 'name' },
        { text: 'Range', value: 'range' }
      ]
    }
  },

  created () {
    this.$store.dispatch('fetchBrandsRates', {})
  },

  computed: {
    brandsRates () {
      return this.$store.getters.getBrandsRates
    }
  }

}
</script>
