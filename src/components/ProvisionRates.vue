<template>
  <v-container fluid>
    <div class="provision-rates">
      <h2>Service Rates</h2>
      <p>
        <services-rates />
      </p>
      <h2>Brands Rates</h2>
      <p>
        <brands-rates />
      </p>
    </div>
  </v-container>
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
