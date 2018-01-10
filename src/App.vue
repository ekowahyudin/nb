<template>
  <v-app>
    <navigation-drawer :bus="bus" :menu-items="drawerMenuItems" :on-menu-click="drawerMenuClick"/>
    <top-menu-bar :on-drawer-toggle="openDrawerMenu" :title="title"/>
    <main-content/>
    <footer-bar :message="footerMsg"/>
    <sign-up-dialog :bus="bus"/>
  </v-app>
</template>

<script>
import Vue from 'vue'
import NavigationDrawer from '@/components/common/NavigationDrawer.vue'
import TopMenuBar from '@/components/common/TopMenuBar.vue'
import FooterBar from '@/components/common/FooterBar.vue'
import MainContent from '@/components/common/MainContent.vue'
import SignUpDialog from '@/components/user/UserSignUp.vue'

export default {
  data () {
    return {
      bus: new Vue(),
      footerMsg: '&copy; 2018 NiagaBaru.com',
      title: 'NiagaBaru'
    }
  },
  computed: {
    drawerMenuItems () {
      return this.$store.getters['menu/getMainMenu']
    }
  },
  methods: {
    openDrawerMenu () {
      this.bus.$emit('openDrawerMenu')
    },
    closeDrawerMenu () {
      this.bus.$emit('closeDrawerMenu')
    },
    drawerMenuClick (menuIndex) {
      let menu = this.drawerMenuItems[menuIndex]
      let page = menu.page
      let bus = menu.busEvent
      this.closeDrawerMenu()
      if (page) {
        this.$router.push({ name: page })
      } else if (bus) {
        this.bus.$emit(bus)
      } else {
        console.log('No action for menu ' + menu.title)
      }
    }
  },
  components: {
    'navigation-drawer': NavigationDrawer,
    'top-menu-bar': TopMenuBar,
    'main-content': MainContent,
    'footer-bar': FooterBar,
    'sign-up-dialog': SignUpDialog
  }
}
</script>
