<template>
  <div>
    <div>
      <label for="fullName">Name</label>
      <input type="text" v-model="fullName">
    </div>
    <div>
      <label for="email">email</label>
      <input type="email" v-model="email">
    </div>
    <div>
      <label for="email">Password</label>
      <input type="password" v-model="password">
    </div>
    <div class="box">
      <button type="button" @click="submit">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserSignUp',
  data () {
    return {
      fullName: '',
      email: '',
      password: ''
    }
  },
  methods: {
    submit () {
      let self = this
      self.$store.dispatch('user/createUserWithEmailAndPassword', self.email, self.email, self.password)
    }
  }
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
