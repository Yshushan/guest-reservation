<template>
  <div id="guestRegister">
    <mt-header fixed :title="title">
      <mt-button icon="back" slot="left" @click.native="goback">返回</mt-button>
    </mt-header>
  </div>
</template>

<script>
import {Header, Button} from 'mint-ui';
  export default {
    name: 'guestRegister',
    components: {
      Header,
      Button
    },
    data(){
      return {
        title: '访客预约登记'
      }
    },
    methods: {
      goback(){
        if(history.length>0){
          this.$router.go(-1)
        }
      }
    }

  };
  
</script>

<style lang="scss" scoped>

</style>
