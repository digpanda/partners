<template>
  <div class="group-insight">
    <v-container fluid>
      <div v-if="groupInsight">
        <h2>Group Insight</h2>
        <v-data-table :headers="headers" :items="groupInsight" hide-actions class="elevation-1">
          <template slot="items" slot-scope="props">
            <td>{{ props.item.nickname }}</td>
            <td>{{ props.item.user.full_name }}</td>
            <td>{{ props.item.total_growth }}</td>
            <td>{{ props.item.total_resells }}</td>
            <td>{{ props.item.referrer_group.name }}</td>
          </template>
        </v-data-table>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        { text: 'Nickname', value: 'nickname' },
        { text: 'Fullname', value: 'fullname' },
        { text: 'Total Binded Sells', value: 'totalBindedSells' },
        { text: 'Total Resells', value: 'totalResells' },
        { text: 'Group', value: 'group' }
      ]
    }
  },

  created () {
    this.$store.dispatch('fetchGroupInsight', {})
  },

  computed: {
    groupInsight () {
      return this.$store.getters.getGroupInsight
    }
  }

}
</script>
