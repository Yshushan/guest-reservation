<template>
  <div id='search-employee'>
    <layout v-bind="headParams">
      <mt-button slot="header-right" @click.native="confirm">确定</mt-button>
      <div class="employee-form">
        <mt-field label="被访人姓名" placeholder="请输入姓名" v-model="employee.name"></mt-field>
        <mt-field label="被访人手机号" placeholder="请输入手机号" type="tel" v-model="employee.phone"></mt-field>
      </div>
      <added-list :lists="employeeList" @delete="deleteEmployee"></added-list>
    </layout>
  </div>
</template>

<script>
import { Toast, MessageBox } from 'mint-ui'
import { employeesData } from '@/testData.js'
export default {
  name: 'search-employee',
  props: ['headParams'],
  data () {
    return {
      employee: {
        name: '',
        phone: ''
      }
    }
  },
  methods: {
    confirm () {
      // 模拟检查员工是否存在
      const employee = employeesData.find(e => {
        return e.name === this.employee.name && e.phone === this.employee.phone
      })
      if (employee) {
        this.$store.commit('addEmployee', employee)
        this.$router.push({name: 'guestRegister'})
      } else {
        Toast('请检查信息是否填写正确')
      }
    },
    deleteEmployee (employee) {
      MessageBox.confirm(`确定要删除“${employee.name}”?`, '提示').then(action => {
        if (action) {
          this.$store.commit('deleteEmployee', employee.id)
        }
      }).catch(()=>{})
    }
  },
  computed: {
    employeeList () {
      return this.$store.state.employeesInfo
    }
  }
}
</script>


