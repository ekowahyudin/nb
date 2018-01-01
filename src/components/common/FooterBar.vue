<template>
  <v-footer fixed app>
    <span v-html="message"></span>
  </v-footer>
</template>

<script>
export default {
  props: ['message']
}
</script>
