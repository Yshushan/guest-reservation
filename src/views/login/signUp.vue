<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-text-field label="username" v-model="user.username"></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-text-field label="password" type="password" v-model="user.password"></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-text-field label="email" type="email" v-model="user.email"></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-btn block @click="signup">sign up</v-btn>
      </v-flex>
    </v-layout>
    <v-card>
      <v-card-text>{{error}}</v-card-text>
    </v-card>
    <v-snackbar top :timeout="3500" color="success" v-model="snackbar" multi-line>{{res}}</v-snackbar>
  </v-container>
</template>

<script>
import service from "@/service";
export default {
  name: "sign-up",
  data() {
    return {
      snackbar: false,
      user: {
        username: "",
        password: "",
        email: ""
      },
      res: null,
      error: null
    };
  },
  methods: {
    signup() {
      service
        .register(this.user)
        .then(res => {
          this.snackbar = true;
          this.res = res;
        })
        .catch(err => (this.error = err.errMsg));
    }
  }
};
</script>
