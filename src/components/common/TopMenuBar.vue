<template>
  <v-toolbar fixed app :clipped-left="true">
    <v-toolbar-side-icon @click.stop="handleSwitchToggle"/>
    <v-toolbar-title v-text="title"/>
    <v-spacer/>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    handleSwitchToggle () {
      var dg = this.onDrawerToggle
      if (dg) {
        dg()
      }
    }
  },
  props: ['on-drawer-toggle', 'title']
}
</script>
