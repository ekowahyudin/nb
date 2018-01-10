<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <!-- v-btn color="primary" dark slot="activator">Open Dialog</v-btn -->
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field 
                  label="Nama Lengkap" 
                  hint="Nama lengkap anda" 
                  v-model="fullName"
                  :rules="[() => fullName.length > 1 || 'Wajib diisi']"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Email"
                  type="email"
                  v-model="email"
                  hint="Alamat surat elektronik anda"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Password"
                  type="password"
                  v-model="password"
                  hint="Kata kunci"
                  :rules="[() => first.length > 8 || 'Minimal karakter, harus terdiri dari huruf dan angka serta karakter khusus']"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field required label="Kata kunci (Konfirmasi)" type="password" hint="Kata kunci (sekali lagi)"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <div>
            <small>*Wajib diisi</small>
          </div>
          <div>
            <small>Jika anda sudah mendaftar sebelumnya klik <a href="#">disini</a> untuk masuk</small>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey darken-1" flat @click.native="dialog = false">Batal</v-btn>
          <v-btn color="green" @click.native="submit">Daftar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'UserSignUp',
  created () {
    this.bus.$on('UserSignUp',
      () => {
        this.dialog = true
      }
    )
  },
  data () {
    return {
      dialog: false,
      fullName: '',
      email: '',
      password: ''
    }
  },
  methods: {
    submit () {
      let self = this
      const payload = {
        email: self.email,
        password: self.password,
        fullName: self.fullName
      }
      self.$store.dispatch('user/createWithEmailAndPassword', payload)

      this.dialog = false
    }
  },
  props: ['bus']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input {
    border: solid red 1px;
  }
  .box{
    background-color: aqua;
  }
</style>
