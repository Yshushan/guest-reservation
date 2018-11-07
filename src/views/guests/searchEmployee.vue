<template>
  <div id='search-employee'>
    <mt-field label="被访人姓名" placeholder="请输入姓名" v-model="employeeName"></mt-field>
    <mt-field label="被访人手机号" placeholder="请输入手机号" type="tel" v-model="employeePhone"></mt-field>
  </div>
</template>

<script>
import { Field } from 'mint-ui'
export default {
  name: 'search-employee',
  components: {
    Field,
  },
  data(){
    return {
      employeeName: '',
      employeePhone: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

