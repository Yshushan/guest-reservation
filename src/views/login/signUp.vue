<template>
  <v-container>
    <v-layout row wrap>
      <v-text-field sing-line label="username" />
      <v-text-field label="email" />
      <v-text-field label="password" />
      <v-btn class="primary" dark>Sign Up</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'sign-up'
}
</script>
