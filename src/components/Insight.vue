<template>
  <v-container fluid>
    <div class="insightr">
      <h2>Group Insight</h2>
      <p>
        <group-insight />
      </p>
      <h2>Children Insight</h2>
      <p>
        <children-insight />
      </p>
    </div>
  </v-container>
</template>

<script>
import GroupInsight from '@/components/GroupInsight'
import ChildrenInsight from '@/components/ChildrenInsight'

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
    GroupInsight,
    ChildrenInsight
  }

}
</script>
