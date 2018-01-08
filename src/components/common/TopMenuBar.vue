<template>
  <v-toolbar dark fixed app :clipped-left="true" class="primary">
    <v-toolbar-title v-text="title"/>
    <v-spacer/>
    <v-toolbar-side-icon @click.stop="handleSwitchToggle"/>
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
