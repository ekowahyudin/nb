<template>
  <v-navigation-drawer app fixed clipped :value="open">
    <v-list>
      <v-list-tile value="true" v-for="(item, i) in menuItems" :key="i" @click.end="handleMenuClick(i)">
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
      let menu = this.menuItems[index]
      let page = menu.page
      if (page && page.length > 0) {
        this.$router.push({name: page})
        return
      }
      let action = menu.action
      if (action) {
        action(this)
      } else {
        alert('No action for ' + this.menuItems[index].title + ' yet ')
      }
    }
  },
  computed: {
  },
  props: ['open', 'menu-items']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
