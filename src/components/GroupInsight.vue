<!-- <td>
  <%= (index+1) %>
</td>
<td>
  <%= referrer.user.nickname %>
</td>
<td>
  <%= referrer.user.decorate.full_name %>
</td>
<td>
  <%= referrer.total_growth.in_euro.display %>
</td>
<td>
  <%= referrer.total_resells.in_euro.display %>
</td>
<td>
  <%= referrer&.referrer_group&.name %>
</td> -->

<template>
  <div class="group-insight">
    <v-container fluid>
      <div v-if="groupInsight">
        <h2>Group Insight</h2>
        <v-data-table :headers="headers" :items="groupInsight" hide-actions class="elevation-1">
          <template slot="items" slot-scope="props">
            <td>{{ props.item.nickname }}</td>
            <td>{{ props.item.fullname }}</td>
            <td>{{ props.item.totalBindedSells }}</td>
            <td>{{ props.item.totalResells }}</td>
            <td>{{ props.item.group }}</td>
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
