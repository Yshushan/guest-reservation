<template>
<v-container>
  <v-layout row wrap>
    <v-flex>
      <v-text-field xs12 label="username" v-model="user.username"></v-text-field>
      <v-text-field xs12 label="password" type="password" v-model="user.password"></v-text-field>
      <v-btn block @click="login">login</v-btn>
    </v-flex>
  </v-layout>
  <v-card>
    <v-card-text>
      {{token}}
    </v-card-text>
  </v-card>
</v-container>
</template>

<script>
import service from '@/service'
export default {
  name: 'login',
  data(){
    return {
      token: '',
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login(){
      service.login(this.user)
        .then(res => {
          console.log(res)
          if(res.result === 'success'){
            this.$store.dispatch('updateToken', res.token)
            sessionStorage.setItem('token', res.token)
            this.$router.push({name: 'reservation'})
          }
        })
    }
  }

}
</script>
