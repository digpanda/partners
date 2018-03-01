<template>
  <!-- <v-container fluid> -->
  <div class="index">
    <v-flex xs12 sm12>
      <v-list three-line>

        <template>

          <v-divider :inset="false" :key="index"></v-divider>

          <v-list-tile :key="`group-insight`" @click="goGroupInsight()">

            <v-list-tile-avatar>
              <span class="index-icon icon-trophy"></span>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="`Group Insight`"></v-list-tile-title>
              <v-list-tile-sub-title v-html="`This is the group insight section`"></v-list-tile-sub-title>
            </v-list-tile-content>

          </v-list-tile>

          <v-divider :inset="false" :key="index"></v-divider>

          <v-list-tile :key="`provision-rates`" @click="goProvisionRates()">

            <v-list-tile-avatar>
              <span class="index-icon icon-trophy"></span>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="`导购奖金率`"></v-list-tile-title>
              <v-list-tile-sub-title v-html="`This is the provision rate section`"></v-list-tile-sub-title>
            </v-list-tile-content>

          </v-list-tile>

        </template>

      </v-list>
    </v-flex>
  </div>
</template>

<script>
import router from '@/router'

export default {
  data () {
    return {
    }
  },

  created () {
  },

  methods: {
    goGroupInsight () {
      router.push('group-insight')
    },
    goProvisionRates () {
      router.push('provision-rates')
    }
  },

  computed: {
  },

  components: {
  }

}
</script>
