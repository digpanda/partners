<template>
  <div class="group-insight">
    <div v-if="groupInsight">
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        { text: 'Nickname', value: 'nickname' },
        { text: 'Fullname', value: 'full_name' },
        { text: 'Total Growth', value: 'total_growth' },
        { text: 'Total Resells', value: 'total_resells' },
        { text: 'Group', value: 'referrer_group.name' }
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
