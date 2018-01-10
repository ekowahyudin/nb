<template>
  <v-app>
    <navigation-drawer :open="isDrawerOpen" :menu-items="drawerMenuItems" :on-menu-click="drawerMenuClick"/>
    <top-menu-bar :on-drawer-toggle="toggleDrawerMenu" :title="title"/>
    <main-content/>
    <footer-bar :message="footerMsg"/>
    <sign-up-dialog :bus="bus"/>
  </v-app>
</template>

<script>
  import NavigationDrawer from '@/components/common/NavigationDrawer.vue'
  import TopMenuBar from '@/components/common/TopMenuBar.vue'
  import FooterBar from '@/components/common/FooterBar.vue'
  import MainContent from '@/components/common/MainContent.vue'
  import SignUpDialog from '@/components/user/UserSignUp.vue'

  export default {
    data () {
      return {
        bus: this,
        footerMsg: '&copy; 2018 NiagaBaru.com',
        isDrawerOpen: false,
        title: 'Niaga Baru'
      }
    },
    computed: {
      drawerMenuItems () {
        return this.$store.getters['menu/getMainMenu']
      }
    },
    methods: {
      toggleDrawerMenu () {
        this.isDrawerOpen = !this.isDrawerOpen
      },
      drawerMenuClick (menuIndex) {
        let menu = this.drawerMenuItems[menuIndex]
        let page = menu.page
        let bus = menu.busEvent
        if (page) {
          this.toggleDrawerMenu()
          this.$router.push({name: page})
        } else if (bus) {
          this.$emit(bus)
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
