<template>
  <v-content>
    <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
      <router-view/>
      </v-layout>
    </v-slide-y-transition>
    </v-container>
  </v-content>
</template>

<script>
export default {
}
</script>
