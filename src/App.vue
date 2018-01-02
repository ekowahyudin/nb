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
  import ProductSearch from '@/components/product/ProductSearch.vue'

  export default {
    data () {
      return {
        isDrawerOpen: false,
        title: 'Niaga Baru',
        footerMsg: '&copy; 2018 NiagaBaru.com',
        drawerMenuItems: [
          {
            icon: 'home',
            title: 'Beranda',
            page: 'Home'
          },
          {
            icon: 'search',
            title: 'Cari Barang',
            page: 'ProductSearch'
          },
          {
            icon: 'card_giftcard',
            title: 'Diskon dan Bonus'
          },
          {
            icon: 'stars',
            title: 'Ditandai'
          },
          {
            icon: 'local_grocery_store',
            title: 'Keranjang Belanja'
          },
          {
            icon: 'payment',
            title: 'Pembayaran'
          },
          {
            icon: 'flight_takeoff',
            title: 'Pengiriman'
          },
          {
            icon: 'store',
            title: 'Toko Saya'
          },
          {
            icon: 'textsms',
            title: 'Pesan'
          },
          {
            icon: 'settings',
            title: 'Pengaturan Situs'
          },
          {
            icon: 'assignment_ind',
            title: 'Daftar',
            page: 'UserSignUp'
          },
          {
            icon: 'vpn_key',
            title: 'Masuk',
            page: 'UserSignIn'
          },
          {
            icon: 'exit_to_app',
            title: 'Keluar'
          },
          {
            icon: 'feedback',
            title: 'Kirim Masukan'
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
