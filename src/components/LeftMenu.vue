<template>
  <div class="left-menu">
    <v-list>

      <!-- Home -->
      <v-list-tile :to="{ name: 'Index' }">
        <v-list-tile-action>
          <v-icon class="icon-home"></v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>
            Home
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <!-- Insight -->
      <v-list-tile :to="{ name: 'Insight' }">
        <v-list-tile-action>
          <v-icon class="icon-insight"></v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>
            Insight
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <!-- Provision Rates -->
      <v-list-tile :to="{ name: 'ProvisionRates' }">
        <v-list-tile-action>
          <v-icon class="icon-trophy"></v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>
            Provision Rates
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <!-- Share -->
      <v-list-tile :to="{ name: 'Share' }">
        <v-list-tile-action>
          <v-icon class="icon-share"></v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>
            Share
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },

  created () {
  },

  methods: {
  },

  computed: {
  },

  components: {
  }

}
</script>
