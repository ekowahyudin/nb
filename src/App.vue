<template>
  <v-app>
    <navigation-drawer :open="isDrawerOpen" :menu-items="drawerMenuItems" :on-menu-click="drawerMenuClick"/>
    <top-menu-bar :on-drawer-toggle="toggleDrawerMenu" :title="title"/>
    <main-content/>
    <footer-bar :message="footerMsg"/>
  </v-app>
</template>

<script>
  import NavigationDrawer from '@/components/common/NavigationDrawer.vue'
  import TopMenuBar from '@/components/common/TopMenuBar.vue'
  import FooterBar from '@/components/common/FooterBar.vue'
  import MainContent from '@/components/common/MainContent.vue'

  export default {
    data () {
      return {
        isDrawerOpen: false,
        title: 'Niaga Baru',
        footerMsg: '&copy; 2018 NiagaBaru.com',
        drawerMenuItems: [
          {
            icon: 'bubble_chart',
            title: 'Inspire'
          },
          {
            title: 'Daftar',
            page: 'UserSignUp'
          },
          {
            title: 'Masuk',
            page: 'UserSignIn'
          }
        ]
      }
    },
    methods: {
      toggleDrawerMenu () {
        this.isDrawerOpen = !this.isDrawerOpen
      },
      drawerMenuClick (menuIndex) {
        let menu = this.drawerMenuItems[menuIndex]
        let page = menu.page
        if (page) {
          this.toggleDrawerMenu()
          this.$router.push({name: page})
        } else {
          console.log('No action for menu ' + menu.title)
        }
      }
    },
    components: {
      'navigation-drawer': NavigationDrawer,
      'top-menu-bar': TopMenuBar,
      'main-content': MainContent,
      'footer-bar': FooterBar
    }
  }
</script>
