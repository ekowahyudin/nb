export default {
  namespaced: true,
  state: {
  },
  getters: {
    getMainMenu () {
      return [
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
          busEvent: 'UserSignUp'
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
  mutations: {
  },
  actions: {
  }
}
