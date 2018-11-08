<template>
  <div id="guest-register">
    <mt-header title="访客预约登记">
      <mt-button icon="back" slot="left" @click.native="goback">返回</mt-button>
    </mt-header>
    <div class="register-form">
      <mt-cell title="被访员工" :value="employees" :to="{name: 'searchEmployee'}" is-link></mt-cell>
      <mt-cell title="来访人员" :value="guests" :to="{name: 'addGuest'}" is-link></mt-cell>
      <mt-cell title="携带物品" :value="materials" :to="{name: 'addMaterial'}" is-link></mt-cell>
      <mt-cell title="到访区域" :value="area" :to="{name: 'addArea'}" is-link></mt-cell>
      <mt-field label="到访时间" placeholder="请选择" :value="visitTime" :readonly="true" @click.native="pickerVisible = true"></mt-field>
      <mt-field label="到访类型" placeholder="请选择" :value="visitType" :readonly="true" @click.native="selectType"></mt-field>
    </div>
    <mt-datetime-picker
        v-model="pickerVisible"
        type="time"
        @confirm="handleConfirm">
      </mt-datetime-picker>

    <mt-popup v-model="popupVisible" position="bottom" class="popup">
      <mt-picker 
        :slots="slots" 
        value-key="label" 
        @change="onValuesChange" 
        :showToolbar="true" 
        class="picker">
				  <span @click="popupVisible = false">取消</span>
				  <span @click="visitType = temp">确定</span>
			</mt-picker>
    </mt-popup>
  </div>
</template>

<script>
 import { Picker, Popup, DatetimePicker } from 'mint-ui'
import {visitTypeSlots} from '@/testData.js'
export default {
  name: "guest-register",
  components: {
    Picker,
    Popup,
    DatetimePicker
  },
  data() {
    return {
      pickerVisible: false,
      popupVisible: false,
      visitTime: "",
      visitType: '',
      slots: [],
      temp: ''
    };
  },
  methods: {
    goback() {
      this.$router.push({ name: "reservation" });
    }
  },
  computed: {
    employees() {
      if (this.$store.state.employeesInfo.length) {
        return this.$store.state.employeesInfo
          .map(employee => employee.name)
          .join(",");
      } else {
        return "添加被访员工";
      }
    },
    guests() {
      if (this.$store.state.guestsInfo.length) {
        return this.$store.state.guestsInfo.map(guest => guest.name).join(",");
      } else {
        return "添加来访人员";
      }
    },
    materials() {
      if (this.$store.state.materialsInfo.length) {
        return this.$store.state.materialsInfo
          .map(material => material.name)
          .join(",");
      } else {
        return "添加携带物品";
      }
    },
    area() {
      if (this.$store.state.subArea) {
        return `${this.$store.state.area.value} - ${this.$store.state.subArea.value}`;
      } else {
        return "选择到访区域";
      }
    },
    selectType(){
      this.popupVisible = true
      this.slots = visitTypeSlots
    },
    onValuesChange (picker, values) {
      this.temp = values ? values[0].value : ''
    },
    saveSeleted () {
      if (['male', 'female'].includes(this.temp)) {
        this.guest.gender = this.temp
      } else {
        this.guest.certificateType = this.temp
      }
      this.popupVisible = false
    },
    handleConfirm(value){
      this.visitTime = value
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
