<template>
  <div class="index">
    <v-container fluid>
      <h2>Service Rates</h2>
      <services-rates />

      <h2>Brands Rates</h2>
      <brands-rates />
    </v-container>
  </div>
</template>


<script>
import BrandsRates from '@/components/BrandsRates'
import ServicesRates from '@/components/ServicesRates'

export default {
  data () {
    return {}
  },

  created () {
  },

  methods: {
  },

  computed: {
  },

  components: {
    BrandsRates,
    ServicesRates
  }

}
</script>
