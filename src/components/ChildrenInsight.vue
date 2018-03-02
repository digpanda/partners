<template>
  <div class="children-insight">
    <div v-if="childrenInsight">
      <v-data-table :headers="headers" :items="childrenInsight" hide-actions class="elevation-1">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.nickname }}</td>
          <td>{{ props.item.full_name }}</td>
          <td>{{ props.item.total_bought }}</td>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        { text: 'Nickname', value: 'nickname' },
        { text: 'Fullname', value: 'fullname' },
        { text: 'Total Bought', value: 'total_bought' }
      ]
    }
  },

  created () {
    this.$store.dispatch('fetchChildrenInsight', {})
  },

  computed: {
    childrenInsight () {
      return this.$store.getters.getChildrenInsight
    }
  }

}
</script>
