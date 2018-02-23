<template>
  <v-app>

    <!-- Navigation drawer -->
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app>
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- Header toolbar -->
    <v-toolbar app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>

    <!-- Content -->
    <v-content>
      <connect-routing />
    </v-content>

    <!-- Footer -->
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import ConnectRouting from '@/components/ConnectRouting'

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [{
        title: 'Menu'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'DigPanda Partners'
    }
  },

  name: 'App',

  metaInfo: {
    title: 'DigPanda Partners',
    link: [
      { rel: 'stylesheet', href: '' },
      { rel: 'icon', href: '/static/images/icons/favicon.png', type: 'image/png' }
    ]
  },

  components: {
    ConnectRouting
  }

}
</script>

<style lang="scss">
   @import 'assets/scss/main.scss'
</style>
