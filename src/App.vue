<template>
  <v-app>
    <navigation-drawer :open="drawer"/>

    <v-toolbar fixed app :clipped-left="true">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
      <v-spacer/>
      <v-toolbar-title v-text="title"/>
      <v-spacer/>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <router-view/>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018 NiagaBaru team</span>
    </v-footer>
  </v-app>
</template>

<script>
  import NavigationDrawer from '@/components/common/NavigationDrawer.vue'
  export default {
    data () {
      return {
        drawer: false,
        fixed: true,
        title: 'Niaga Baru'
      }
    },
    components: {
      'navigation-drawer': NavigationDrawer
    }
  }
</script>
