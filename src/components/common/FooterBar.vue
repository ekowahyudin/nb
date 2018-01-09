<template>
  <v-footer fixed app class="primary">
    <span v-html="message"></span>
  </v-footer>
</template>

<script>
export default {
  props: ['message']
}
</script>
