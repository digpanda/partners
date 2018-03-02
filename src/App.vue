<template>
  <v-app>
    <!-- Navigation drawer -->
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app>
      <left-menu />
    </v-navigation-drawer>

    <!-- Header toolbar -->
    <v-toolbar app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Logged-in as {{currentUser.email}}</v-btn>
      </v-toolbar-items>

    </v-toolbar>

    <!-- Content -->
    <v-content>
      <connect-routing />
    </v-content>

    <!-- Footer -->
    <template>
      <v-footer :fixed="fixed" height="auto" class="grey darken-3">
        <v-layout row wrap justify-center>
          <v-flex xs12 py-3 text-xs-center white--text>
            &copy;2018 — <strong>DigPanda GmbH</strong>
          </v-flex>
        </v-layout>
      </v-footer>
    </template>
  </v-app>
</template>

<script>
import ConnectRouting from '@/components/ConnectRouting'
import LeftMenu from '@/components/LeftMenu'

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
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
      { rel: 'stylesheet', href: 'https://file.myfontastic.com/Ub5VubwXxvzzGJsNC3Am6D/icons.css' },
      { rel: 'icon', href: '/static/images/icons/favicon.png', type: 'image/png' }
    ]
  },

  computed: {
    currentUser () {
      return this.$store.getters.getCurrentUser
    }
  },

  components: {
    LeftMenu,
    ConnectRouting
  }

}
</script>

<style lang="scss">
   @import 'assets/scss/main.scss'
</style>
