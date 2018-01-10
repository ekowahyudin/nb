<template>
  <v-navigation-drawer app fixed clipped right temporary v-model="open">
    <v-list dense>
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
  created () {
    let bus = this.bus

    bus.$on('openDrawerMenu', () => {
      this.open = !this.open
    })

    bus.$on('closeDrawerMenu', () => {
      this.open = false
    })
  },
  data () {
    return {
      open: false
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
  props: ['bus', 'menu-items', 'on-menu-click']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
