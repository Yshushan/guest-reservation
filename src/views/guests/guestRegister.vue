<template>
  <div id="guest-register">
    <mt-header :title="title">
      <mt-button icon="back" slot="left" @click.native="goback">返回</mt-button>
    </mt-header>
    <div class="register-form">
      <mt-cell title="被访员工" :value="employeesInfo" @click.native="addEmployees" is-link></mt-cell>
      <mt-cell title="来访人员" :value="guestsInfo" :to="{name:'home'}" is-link></mt-cell>
      <mt-cell title="携带物品" :value="materialInfo" @click="addEmployees" is-link></mt-cell>
    </div>
  </div>
</template>

<script>
import {Header, Button, Cell} from 'mint-ui';
  export default {
    name: 'guest-register',
    components: {
      Header,
      Button
    },
    data(){
      return {
        title: '访客预约登记',
        employeesInfo: '添加被访人信息',
        guestsInfo: '添加来访人员',
        materialInfo: '添加携带物品'
      }
    },
    methods: {
      goback(){
        if(history.length>0){
          this.$router.go(-1)
        }
      },
      addEmployees(){
        this.$router.push('/')
      }
    }

  };
  
</script>

<style lang="scss" scoped>

</style>
