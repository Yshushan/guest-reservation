<template>
  <div id='search-employee'>
    <layout title="添加被访人" back="guestRegister">
      <mt-button slot="header-right" @click.native="confirm">确定</mt-button>
      <div class="employee-form">
        <y-input label="被访人姓名" placeholder="请输入姓名" v-model.trim="userName" :required="true"/>
        <y-input label="被访人手机号" placeholder="请输入手机号" v-model.trim="userPhone" :required="true"/>
      </div>
      <added-list :lists="historyData" icon="fa fa-plus" @action="addEmployee">
        <span v-show="historyData.length">历史访问人员记录（可直接添加）</span>
      </added-list>
    </layout>
  </div>
</template>

<script>
import { Toast, MessageBox } from 'mint-ui'
import { historyData } from '@/testData.js'
const qs = require('querystring')
export default {
  name: 'search-employee',
  data () {
    return {
      userName: '',
      userPhone: '',
      historyData: [],
      phoneWarning: false
    }
  },
  created () {
    this.userName = this.$store.state.employee && this.$store.state.employee.userName 
    this.userPhone = this.$store.state.employee && this.$store.state.employee.userPhone
    // fetch history data
    this.historyData = historyData
  },
  methods: {
    confirm () {
      if(!this.userName || !this.userPhone) {
        Toast('请填写完整的信息！')
        return
      }
        
      // fetch data
      // fetch(url, {userName, userPhone})
      //   .then(res => res.json())
      //   .then(data => this.addEmployee(data))
      //   .catch(err => Toast('请检查信息是否填写正确'))

      // 模拟检查员工是否存在
      // const params = {
      //   userName: this.userName,
      //   userPhone: this.userPhone
      // }
      // fetch(`/yss/searchemployee.js?${qs.stringify(params)}`,{
      //   headers:{
      //     'Content-Type': 'application/json; charset=UTF-8'
      //   }
      // })
      //     .then(res => res.json()).then(data => this.addEmployee(data))
      //       .catch(err=>console.error(err))
      const employee = historyData.find(e => {
        return e.userName === this.userName && e.userPhone === this.userPhone
      })
      if (employee) this.addEmployee(employee)
      else Toast('请检查信息是否填写正确！')
    },
    addEmployee (employee) {
      this.$store.commit('addEmployee', employee)
      this.$router.push({ name: 'guestRegister' })
    },
  }
}
</script>
