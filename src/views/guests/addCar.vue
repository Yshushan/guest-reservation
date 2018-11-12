<template>
    <div id="add-car">
        <layout title="添加车牌号" back="guestRegister">
            <mt-button slot="header-right" @click.native="confirm" >确定</mt-button>
            <mt-field label="车牌号" placeholder="请输入车牌号，如：粤A-66666" v-model="car"></mt-field>
            <added-list :lists="cars" @delete="deleteCar">
                <span>已添加车辆信息</span>
            </added-list>
        </layout>
    </div>
</template>

<script>
import { Toast, MessageBox } from 'mint-ui'
export default {
  name: 'add-car',
  data () {
    return {
      car: ''
    }
  },
  computed: {
    cars () {
      return this.$store.state.cars
    }
  },
  methods: {
    deleteCar (car) {
      MessageBox.confirm(`确定要删除当前车牌？`, '提示')
        .then(action => {
          if (action) this.$store.commit('deleteCar', car)
        })
        .catch(() => {})
    },
    confirm () {
      if (!this.car) Toast('请输入信息！')
      else {
        this.$store.commit('addCar', this.car)
        this.$router.push({ name: 'guestRegister' })
      }
    }
  }
}
</script>
