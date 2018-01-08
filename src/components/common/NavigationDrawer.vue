<template>
  <v-navigation-drawer app fixed clipped right temporary :value="open">
    <v-list>
      <v-list-tile value="true" v-for="(item, i) in menuItems" :key="i" @click="handleMenuClick(i)">
        <v-list-tile-action>
          <v-icon v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"/>
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
    }
  },
  methods: {
    handleMenuClick (index) {
      let dg = this.onMenuClick
      if (dg) {
        dg(index)
      }
    }
  },
  computed: {
  },
  props: ['open', 'menu-items', 'on-menu-click']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
