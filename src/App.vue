<template>
  <div id="app">
    <mt-header :title="title" fixed>
      <mt-button icon="back" slot="left" @click.native="goback">返回</mt-button>
    </mt-header>
    <keep-alive>
      <component :is="avtiveComp"></component>
    </keep-alive>
  </div>
</template>

<script>
import {Header, Button} from 'mint-ui';
import guestRegister from './views/guests/guestRegister.vue'
import Reservation from './views/guests/Reservation.vue'
import Reservation from './views/guests/Reservation.vue'
export default {
  name: 'app',
  components: {
    Header,
    Button
  },
  data(){
    return {
      avtiveComp: this.$store.state.avtiveComp,
      title: this.$store.state.title
    }
  },
  methods: {
    goback(){
        if(history.length>0){
          this.$router.go(-1)
        }
      },

  }
}
</script>


<style lang="scss">
@import url('https://cdn.staticfile.org/normalize/8.0.0/normalize.min.css');
@import url('https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
@import url('https://cdn.staticfile.org/simple-line-icons/2.4.1/css/simple-line-icons.min.css');
@import url('https://cdn.staticfile.org/typicons/2.0.9/typicons.min.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
html,body{
  height: 100%;
}
</style>
