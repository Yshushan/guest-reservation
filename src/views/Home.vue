<template>
  <v-app>
    <v-toolbar fixed app>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title >Reservation</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat :to="{name: 'signUp'}">sign up</v-btn>
      <v-btn flat :to="{name: 'login'}">log in</v-btn>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
