<template>
  <v-navigation-drawer
    :fixed="fixed"
    :clipped="clipped"
    v-model="drawer"
    app
  >
    <v-list>
      <v-list-tile 
        value="true"
        v-for="(item, i) in items"
        :key="i"
      >
        <v-list-tile-action>
          <v-icon v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  data () {
    return {
      drawer: false,
      fixed: true,
      clipped: true,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
