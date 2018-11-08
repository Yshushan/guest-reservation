<template>
  <div id='search-employee'>
    <mt-header title="添加被访人">
      <mt-button icon="back" slot="left" @click.native="goback">返回</mt-button>
      <mt-button slot="right" @click.native="confirm">添加</mt-button>
    </mt-header>
    <mt-field label="被访人姓名" placeholder="请输入姓名" v-model="employee.name"></mt-field>
    <mt-field label="被访人手机号" placeholder="请输入手机号" type="tel" v-model="employee.phone"></mt-field>
    <p class="list-header">已添加人员名单</p>
    <div class="list" v-if="employeeList.length">
      <mt-cell v-for="e of employeeList" :key="e.id" :title="e.name" :label="`${e.phone} - ${e.gender}`">
        <mt-button size="small" @click.native="deleteEmployee(e.id)"><i slot="icon" class="fa fa-minus-square"></i></mt-button>
      </mt-cell>
    </div>
    <p class="no-item" v-else>还没有添加信息！</p>
  </div>
</template>

<script>
import { Field, Toast, Cell, MessageBox, Picker, Popup } from 'mint-ui'
import { employeesData } from '@/testData.js'
export default {
  name: 'search-employee',
  components: {
    Field,
    Toast,
    Cell
  },
  data () {
    return {
      employee: {
        name: '',
        phone: ''
      }

    }
  },
  methods: {
    goback () {
      this.$router.push({ name: 'guestRegister' })
    },
    confirm () {
      const employee = employeeTest.find(e => {
        return e.name === this.employee.name && e.phone === this.employee.phone
      })
      if (employee) {
        this.$store.commit('addEmployee', employee)
        this.goback()
      } else {
        Toast('员工不存在！')
      }
    },
    deleteEmployee (id) {
      MessageBox.confirm('确定执行此操作?', '删除').then(action => {
        if (action) {
          this.$store.commit('deleteEmployee', id)
        }
      })
    }
  },
  computed: {
    employeeList () {
      return this.$store.state.employeesInfo
    }
  }
}
</script>

<style lang="scss" scoped>
  #search-employee{
    .list-header{
      margin-top: 30px;
      padding: 0 10px;
    }
    .no-item {
      padding: 0 10px;
  }
  }
</style>
